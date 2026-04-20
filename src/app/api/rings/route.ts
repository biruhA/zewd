import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const rings = await prisma.catalogRing.findMany({
      orderBy: { createdAt: 'desc' },
    });
    
    return NextResponse.json(rings, { status: 200 });
  } catch (error) {
    console.error('[RINGS_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, style, basePrice, description, metals, diamonds, images } = body;

    if (!name || !style || basePrice === undefined) {
      return new NextResponse('Missing necessary fields', { status: 400 });
    }

    const ring = await prisma.catalogRing.create({
      data: {
        name,
        style,
        basePrice,
        description,
        metals: { set: metals || [] },
        diamonds: { set: diamonds || [] },
        images: { set: images || [] },
      },
    });

    return NextResponse.json(ring, { status: 201 });
  } catch (error) {
    console.error('[RINGS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
