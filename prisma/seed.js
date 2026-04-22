const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding data...');

  const rings = [
    {
      name: 'The Seraphina Trilogy',
      style: 'TRILOGY',
      description: 'A masterpiece of balance, featuring three exceptional diamonds that represent your past, present, and future. Handcrafted with meticulous attention to detail.',
      basePrice: 8500,
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvPDws0PrT5qZgzBM18Y1FoFVOzTbbTpcuYsy5IomdAQVFTYcIFrhawEh7mn3r9OZLY-_vpBpfYfjfm-99moRX_V1mUGNk6Smyi47BlSuRBgdlXN1IGZx6lb4DXPzZjPMpU2ODKwSpB80XCOZTJauVTj-EhMvjFzPXU2jCyPFI4NHwtqp1eoWz4i--Ae88QeuwxA0mWE3Og9n_K1uDvhIt8z8uAwxOKZvH1dWEyX40gKQS-UOGHAkUuyDDM-jJZc6HhlssaD3KbWg',
          metalColor: 'WHITE',
          diamondShape: 'ROUND',
          isHero: true
        }
      ],
      metals: [
        { type: 'PLATINUM', color: 'WHITE', purity: '950', priceModifier: 0 },
        { type: 'GOLD', color: 'YELLOW', purity: '18k', priceModifier: -200 }
      ],
      diamonds: [
        { shape: 'ROUND', carat: 1.5, color: 'F', clarity: 'VS1', cut: 'Excellent', origin: 'Natural', priceModifier: 0 },
        { shape: 'OVAL', carat: 1.5, color: 'F', clarity: 'VS1', cut: 'Excellent', origin: 'Natural', priceModifier: 150 }
      ]
    },
    {
      name: 'The Amara Halo',
      style: 'HALO',
      description: 'An enchanting pear-shaped diamond surrounded by a shimmering halo of light. A romantic design that captures the essence of eternal love.',
      basePrice: 5200,
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWdO3-fXW0M5ZMksiZ0yZfLBsetylKXrpTBosY09xTE3jNktP4tCKFMas-22XcLxolfCDh87DnMVZkMQ5kjFGHbTxboV8O4VixcMALnR3BWWLZKiOXrMoJQC6WMpviytDqxzoC0klQKXg53OJnIG5l3fnEhra3O637rXKkQWJ-DoXy5GbNDR8ZltFAj3rWuBwomJed0mQa0_ml3JUQeGEnuUA-buvtCpgubLe8Kh3itxDhfGs_eZu3egxOxSbUzAEcMc7uwBh_Zg',
          metalColor: 'ROSE',
          diamondShape: 'PEAR',
          isHero: true
        }
      ],
      metals: [
        { type: 'GOLD', color: 'ROSE', purity: '18k', priceModifier: 0 }
      ],
      diamonds: [
        { shape: 'PEAR', carat: 1.0, color: 'G', clarity: 'VVS2', cut: 'Excellent', origin: 'Lab', priceModifier: 0 }
      ]
    },
    {
      name: 'The Eternal Band',
      style: 'DIAMOND_BAND',
      description: 'A sophisticated emerald-cut diamond set on a band adorned with smaller brilliant diamonds. Modern elegance at its finest.',
      basePrice: 6800,
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVcNLqI-h-UoBLBxBgL-EyHsqsFthyIXBbT6xVFyjcX6i8sS4nnW-2EG_O88j1bpeVM0UK0-feryHpb6CqCWFNSYLWgvE72DmXkLrqBF9ZNE4VceSd0T_viLYsv7GVx_osiX5FYYPoXrTUtXrxzs2RcoSwUZ2ZB5TmilkeLBfl15umcOO9QEjQNTMJrliN5uAjrdYcYgRpNzj91JG4Mj7K3-PvHBo2M0sx6VVAxCf3OIpSYLQ-rDQ1b6J2HqLbKP0XW_uY3L49nS8',
          metalColor: 'WHITE',
          diamondShape: 'EMERALD',
          isHero: true
        }
      ],
      metals: [
        { type: 'PLATINUM', color: 'WHITE', purity: '950', priceModifier: 0 },
        { type: 'GOLD', color: 'WHITE', purity: '18k', priceModifier: -300 }
      ],
      diamonds: [
        { shape: 'EMERALD', carat: 2.0, color: 'E', clarity: 'IF', cut: 'Excellent', origin: 'Natural', priceModifier: 0 },
        { shape: 'ASSCHER', carat: 2.0, color: 'E', clarity: 'IF', cut: 'Excellent', origin: 'Natural', priceModifier: 200 }
      ]
    },
    {
      name: 'The Soulmate Toi et Moi',
      style: 'TOI_ET_MOI',
      description: 'Two distinct stones coming together in harmony. This Toi et Moi design represents the unique bond between two souls.',
      basePrice: 9400,
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzjFMLk0vv_OtEReZgLazAuH6QLjQ5Zpl5a92SfGZYlzBTIexme6GJ4Ch_MzzmGIzzRKDtLEIeCjtyieqseN-bw9Go-TLWa0hhWrxrRf7Hbj_nplJFqm3ZIgDK1nXpa0GV9KF_qKCxZaII1gOvW-TSKsojXA3e7CqPPIBTwJES9TGUIpmeAuFw4U7EnjnLcwy_umeJQ3RfcaX6LFCeQvEHEzNHflKh6lskeNfm_sR6-SbRZJVl6W9gagG8nuLpk63MOr6kc11aUpg',
          metalColor: 'YELLOW',
          diamondShape: 'HEART',
          isHero: true
        }
      ],
      metals: [
        { type: 'GOLD', color: 'YELLOW', purity: '18k', priceModifier: 0 }
      ],
      diamonds: [
        { shape: 'HEART', carat: 1.2, color: 'D', clarity: 'VVS1', cut: 'Excellent', origin: 'Natural', priceModifier: 0 },
        { shape: 'PEAR', carat: 1.2, color: 'D', clarity: 'VVS1', cut: 'Excellent', origin: 'Natural', priceModifier: 0 }
      ]
    },
    {
      name: 'The Minimalist Solitaire',
      style: 'SOLITAIRE',
      description: 'A classic cushion-cut diamond that stands alone in its beauty. Simple, elegant, and timeless.',
      basePrice: 4200,
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6XQa5XG1lqAMybf30cNyGJyltpfNShsGbDGWS_NRpEPzu--MqmzZsWrHAPNbJ8HnQETPmMLAf8JJtYq2L38N396ij1uPqBVUNBuBGb2k8A3BUo-u6btaxyI3Cr1mPI2d8gP5L9-WJM0SLd1qGswb0G3XJAkMDvKvPWzunG0457oeY6OnOyBPtchEcZ6Nf-HB01OPCaKxt1sGoKgpZUhssI2DcUJGlCccJ6_82xPgMPus-678X77HLXbfrUNwJVO8j3KIx5SwXDNo',
          metalColor: 'WHITE',
          diamondShape: 'CUSHION',
          isHero: true
        }
      ],
      metals: [
        { type: 'GOLD', color: 'WHITE', purity: '18k', priceModifier: 0 },
        { type: 'GOLD', color: 'YELLOW', purity: '14k', priceModifier: -150 }
      ],
      diamonds: [
        { shape: 'CUSHION', carat: 0.9, color: 'H', clarity: 'VS2', cut: 'Excellent', origin: 'Lab', priceModifier: 0 }
      ]
    }
  ];

  for (const ring of rings) {
    await prisma.catalogRing.create({
      data: ring
    });
  }

  console.log('Seeding finished!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
