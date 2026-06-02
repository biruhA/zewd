'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createCatalogRing(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const style = formData.get('style') as string;
    const description = formData.get('description') as string;
    const basePrice = parseFloat(formData.get('basePrice') as string);
    
    const metalsData = JSON.parse(formData.get('metals') as string);
    const diamondsData = JSON.parse(formData.get('diamonds') as string);
    const imagesData = JSON.parse(formData.get('imagesData') as string);

    const imageFiles = formData.getAll('images') as File[];

    const uploadedImages = [];

    const cloudinary = (await import('@/lib/cloudinary')).default;

    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const result: any = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: 'jewel_catalog' },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        ).end(buffer);
      });

      uploadedImages.push({
        url: result.secure_url,
        metalColor: imagesData[i].metalColor,
        diamondShape: imagesData[i].diamondShape,
        isHero: imagesData[i].isHero,
      });
    }

    const ring = await prisma.catalogRing.create({
      data: {
        name,
        style,
        description,
        basePrice,
        images: uploadedImages,
        metals: metalsData.map((metal: any) => ({
          type: metal.type,
          color: metal.color,
          purity: metal.purity,
          priceModifier: parseFloat(metal.priceModifier),
        })),
        diamonds: diamondsData.map((diamond: any) => ({
          shape: diamond.shape,
          carat: parseFloat(diamond.carat),
          color: diamond.color,
          clarity: diamond.clarity,
          cut: diamond.cut,
          origin: diamond.origin,
          priceModifier: parseFloat(diamond.priceModifier),
        })),
      },
    });

    revalidatePath('/admin');
    revalidatePath('/rings');
    return { success: true, ring };
  } catch (error) {
    console.error('Error creating catalog ring:', error);
    return { success: false, error: 'Failed to create ring' };
  }
}

export async function getCatalogRings() {
  try {
    const rings = await prisma.catalogRing.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return rings;
  } catch (error) {
    console.error('Error fetching catalog rings:', error);
    return [];
  }
}

export async function deleteCatalogRing(id: string) {
  try {
    await prisma.catalogRing.delete({
      where: { id },
    });
    revalidatePath('/admin/diamonds');
    revalidatePath('/rings');
    return { success: true };
  } catch (error) {
    console.error('Error deleting catalog ring:', error);
    return { success: false, error: 'Failed to delete ring' };
  }
}
