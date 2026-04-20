/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const RING_DATA = [
  {
    id: '1',
    name: 'The Celestia Solitaire',
    metal: 'Platinum',
    shape: 'Round Brilliant',
    price: '£4,500',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvPDws0PrT5qZgzBM18Y1FoFVOzTbbTpcuYsy5IomdAQVFTYcIFrhawEh7mn3r9OZLY-_vpBpfYfjfm-99moRX_V1mUGNk6Smyi47BlSuRBgdlXN1IGZx6lb4DXPzZjPMpU2ODKwSpB80XCOZTJauVTj-EhMvjFzPXU2jCyPFI4NHwtqp1eoWz4i--Ae88QeuwxA0mWE3Og9n_K1uDvhIt8z8uAwxOKZvH1dWEyX40gKQS-UOGHAkUuyDDM-jJZc6HhlssaD3KbWg',
    alt: 'Brilliant round-cut diamond engagement ring on a platinum band',
  },
  {
    id: '2',
    name: 'The Ethereal Oval',
    metal: '18k Yellow Gold',
    shape: 'Oval Cut',
    price: '£6,200',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzjFMLk0vv_OtEReZgLazAuH6QLjQ5Zpl5a92SfGZYlzBTIexme6GJ4Ch_MzzmGIzzRKDtLEIeCjtyieqseN-bw9Go-TLWa0hhWrxrRf7Hbj_nplJFqm3ZIgDK1nXpa0GV9KF_qKCxZaII1gOvW-TSKsojXA3e7CqPPIBTwJES9TGUIpmeAuFw4U7EnjnLcwy_umeJQ3RfcaX6LFCeQvEHEzNHflKh6lskeNfm_sR6-SbRZJVl6W9gagG8nuLpk63MOr6kc11aUpg',
    alt: 'Oval cut diamond ring in 18k yellow gold',
  },
  {
    id: '3',
    name: 'The Luminary Halo',
    metal: 'Platinum',
    shape: 'Pear Shape',
    price: '£5,800',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWdO3-fXW0M5ZMksiZ0yZfLBsetylKXrpTBosY09xTE3jNktP4tCKFMas-22XcLxolfCDh87DnMVZkMQ5kjFGHbTxboV8O4VixcMALnR3BWWLZKiOXrMoJQC6WMpviytDqxzoqC0klQKXg53OJnIG5l3fnEhra3O637rXKkQWJ-DoXy5GbNDR8ZltFAj3rWuBwomJed0mQa0_ml3JUQeGEnuUA-buvtCpgubLe8Kh3itxDhfGs_eZu3egxOxSbUzAEcMc7uwBh_Zg',
    alt: 'Pear-shaped diamond ring with a halo setting',
  },
  {
    id: '4',
    name: 'The Arcane Marquise',
    metal: '18k Rose Gold',
    shape: 'Marquise Cut',
    price: '£3,900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuah2cWFaADhwm06bDmEAPK9NSxioxn1Oon0FZUQc6waZLl8ez4pFjw7Mzbl1DWIeW3NNng4c31erZ4T_7vYBI6Ur9Vee02PkfqMgOsgncQTQppAXCGQ096UY0i137fEWrFNS8Wpe1b6EIJR_PQq3AWsoaEuUElvabSUb5O9kMRgv8jYE--ZjVhqJkX2WLFBrJcxPN4JgY8bslG3FIfJK06vDIFgQJmBpiP8-USmqyhxHqrBKDBMEKqjpQGQVsv3KwfdcDNjmEvhw',
    alt: 'Rose gold engagement ring with marquise-cut diamond',
  },
  {
    id: '5',
    name: 'The Nocturne Sapphire',
    metal: 'Platinum',
    shape: 'Blue Sapphire & Diamond',
    price: '£7,400',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6XQa5XG1lqAMybf30cNyGJyltpfNShsGbDGWS_NRpEPzu--MqmzZsWrHAPNbJ8HnQETPmMLAf8JJtYq2L38N396ij1uPqBVUNBuBGb2k8A3BUo-u6btaxyI3Cr1mPI2d8gP5L9-WJM0SLd1qGswb0G3XJAkMDvKvPWzunG0457oeY6OnOyBPtchEcZ6Nf-HB01OPCaKxt1sGoKgpZUhssI2DcUJGlCccJ6_82xPgMPus-678X77HLXbfrUNwJVO8j3KIx5SwXDNo',
    alt: 'Blue sapphire ring with diamond halo on platinum',
  },
  {
    id: '6',
    name: 'The Meridian Emerald',
    metal: 'Platinum',
    shape: 'Emerald Cut',
    price: '£8,900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVcNLqI-h-UoBLBxBgL-EyHsqsFthyIXBbT6xVFyjcX6i8sS4nnW-2EG_O88j1bpeVM0UK0-feryHpb6CqCWFNSYLWgvE72DmXkLrqBF9ZNE4VceSd0T_viLYsv7GVx_osiX5FYYPoXrTUtXrxzs2RcoSwUZ2ZB5TmilkeLBfl15umcOO9QEjQNTMJrliN5uAjrdYcYgRpNzj91JG4Mj7K3-PvHBo2M0sx6VVAxCf3OIpSYLQ-rDQ1b6J2HqLbKP0XW_uY3L49nS8',
    alt: 'Emerald-cut diamond ring on a split shank platinum band',
  },
];

function ProductCard({ ring }: { ring: (typeof RING_DATA)[0] }) {
  return (
    <Link href={`/rings/${ring.id}`} className="group cursor-pointer flex flex-col h-full bg-white/40 hover:bg-white p-5 transition-colors duration-500 rounded-sm border border-outline-variant/5 hover:border-outline-variant/20 hover:editorial-shadow">
      <div className="relative aspect-[4/5] bg-surface-container-lowest overflow-hidden transition-all duration-700 ease-in-out">
        <img
          src={ring.image}
          alt={ring.alt}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>

      <div className="mt-6 flex flex-col flex-grow">
        <h3 className="font-headline text-2xl text-on-background mb-1">{ring.name}</h3>
        <p className="font-body text-sm text-on-surface-variant/70 mb-5 flex-grow">
          {ring.metal} · {ring.shape}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
          <span className="font-body text-lg text-primary-custom">From {ring.price}</span>
          <div className="flex items-center gap-2 text-on-surface-variant group-hover:text-primary-custom transition-colors">
            <span className="font-label text-[10px] tracking-[0.2em] uppercase">View Details</span>
            <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProductGrid() {
  return (
    <section className="px-12 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RING_DATA.map((ring) => (
          <ProductCard key={ring.id} ring={ring} />
        ))}
      </div>

      {/* Load More / Pagination */}
      <div className="mt-32 flex flex-col items-center">
        <div className="w-64 h-px bg-outline-variant/30 mb-8"></div>
        <button className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant hover:text-primary-custom transition-colors flex items-center gap-4 group">
          Discover More Designs
          <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-y-1">expand_more</span>
        </button>
      </div>
    </section>
  );
}
