'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createCatalogRing(data: any) {
  try {
    const ring = await prisma.catalogRing.create({
      data: {
        name: data.name,
        style: data.style,
        description: data.description,
        basePrice: parseFloat(data.basePrice),
        images: data.images.map((img: any) => ({
          url: img.url,
          metalColor: img.metalColor,
          diamondShape: img.diamondShape,
          isHero: img.isHero,
        })),
        metals: data.metals.map((metal: any) => ({
          type: metal.type,
          color: metal.color,
          purity: metal.purity,
          priceModifier: parseFloat(metal.priceModifier),
        })),
        diamonds: data.diamonds.map((diamond: any) => ({
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
