'use server'

import { prisma } from '@/lib/prisma'
import { RingStyle, DiamondShape, MetalType, MetalColor } from '@prisma/client'

export async function getFilteredRings(filters: {
  metal: string,
  style: string,
  shape: string
}) {
  const { metal, style, shape } = filters

  const where: any = {}

  if (style !== 'ALL') {
    where.style = style as RingStyle
  }

  if (shape !== 'ALL') {
    where.diamonds = {
      some: {
        shape: shape as DiamondShape
      }
    }
  }

  if (metal !== 'ALL') {
    if (metal === 'PLATINUM') {
      where.metals = {
        some: {
          type: MetalType.PLATINUM
        }
      }
    } else {
      let color: MetalColor | undefined
      if (metal === 'YELLOW_GOLD') color = MetalColor.YELLOW
      if (metal === 'ROSE_GOLD') color = MetalColor.ROSE
      if (metal === 'WHITE_GOLD') color = MetalColor.WHITE

      if (color) {
        where.metals = {
          some: {
            type: MetalType.GOLD,
            color: color
          }
        }
      }
    }
  }

  try {
    const rings = await prisma.catalogRing.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      }
    })
    return rings
  } catch (error) {
    console.error('Error fetching rings:', error)
    return []
  }
}
