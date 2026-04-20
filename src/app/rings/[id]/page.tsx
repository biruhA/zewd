/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ImageGallery from "@/components/detail/ImageGallery";
import CustomizationPanel from "@/components/detail/CustomizationPanel";

// Static ring catalog data — in a real app this would come from your Prisma DB
const RING_CATALOG: Record<
  string,
  {
    name: string;
    price: number;
    metal: string;
    shape: string;
    images: string[];
    quote: string;
  }
> = {
  "1": {
    name: "The Celestia Solitaire",
    price: 4500,
    metal: "Platinum",
    shape: "Round Brilliant",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvPDws0PrT5qZgzBM18Y1FoFVOzTbbTpcuYsy5IomdAQVFTYcIFrhawEh7mn3r9OZLY-_vpBpfYfjfm-99moRX_V1mUGNk6Smyi47BlSuRBgdlXN1IGZx6lb4DXPzZjPMpU2ODKwSpB80XCOZTJauVTj-EhMvjFzPXU2jCyPFI4NHwtqp1eoWz4i--Ae88QeuwxA0mWE3Og9n_K1uDvhIt8z8uAwxOKZvH1dWEyX40gKQS-UOGHAkUuyDDM-jJZc6HhlssaD3KbWg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDh2j3MMWXxSj7eEjlMILW-R7Hh6_ZxJ74AFIwCP6yWNq3fgchKNbfEh027IR_y1arobsGK7-YgUSmnYWLVRP8PHfTxJj5W_VJwmow8BoKPFmOv87UzenLm8gfqBjI_uoy1_RtJz5fU_g2X8xsj-4yEOeACi9O-aOS-cuixUTkRtHFi0JqQ8o50rFb1Q-2Ye-JniCZsE59CrWVLrrN5g7oIhTmDVGxZDQjQye9i1bD0U_zYcGTzhtVSheL7NVOd6le1AYA8EmdZVc8",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkgxq-SOkttYbOGatMYyWmTg6WkUYwt2CakrmJ9dpE-2ozoGFQivS6wSWgoKmta3eV3dp7yzujz_vPduQZGKvHX5AlvH0hCqQcqJvJIHPlFz9yqHhaKbK5CG6BaUh6m6C9YnDEL8MwFH0Wt9tFqlQ7bBN7T-mjgvAx2wbs1zWFZsznBQJf6MOD1rWvbA0sIp95OQ1zCwjKsqoZIFb4RGDe2wgJeDeia6OdqnsfwkqB389JAQcgUbWe-dVdWo0qyf9zhK5HvM1eM4s",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoyni-5L2jl20-dSls_Qy6TXZvuhfcmwG-qICfspQf9n8jeqt3pLoZQlInw9PATFYRbFvtizcxfmyuhFgLTVIPeP8QwOXZLj5JSsTsfzeltX6t0yy0llpUV05_eFc3d8H2FwAmudY3pkkvU-TqJZfQj7IXd0HBnuPxTQ0gtDZ2tEHxmdYCo6PzLAu1NCqqggcfRfMKaTzo89bMwT02qBfyh0baSlvVZGnL60bFCzcJ9b3gp-rw-jRFtyeNaOEFx2zTtQyq646iYIg",
    ],
    quote:
      '"A study in singular perfection. The setting disappears, allowing the light to command the narrative."',
  },
  "2": {
    name: "The Ethereal Oval",
    price: 6200,
    metal: "18k Yellow Gold",
    shape: "Oval Cut",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzjFMLk0vv_OtEReZgLazAuH6QLjQ5Zpl5a92SfGZYlzBTIexme6GJ4Ch_MzzmGIzzRKDtLEIeCjtyieqseN-bw9Go-TLWa0hhWrxrRf7Hbj_nplJFqm3ZIgDK1nXpa0GV9KF_qKCxZaII1gOvW-TSKsojXA3e7CqPPIBTwJES9TGUIpmeAuFw4U7EnjnLcwy_umeJQ3RfcaX6LFCeQvEHEzNHflKh6lskeNfm_sR6-SbRZJVl6W9gagG8nuLpk63MOr6kc11aUpg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvPDws0PrT5qZgzBM18Y1FoFVOzTbbTpcuYsy5IomdAQVFTYcIFrhawEh7mn3r9OZLY-_vpBpfYfjfm-99moRX_V1mUGNk6Smyi47BlSuRBgdlXN1IGZx6lb4DXPzZjPMpU2ODKwSpB80XCOZTJauVTj-EhMvjFzPXU2jCyPFI4NHwtqp1eoWz4i--Ae88QeuwxA0mWE3Og9n_K1uDvhIt8z8uAwxOKZvH1dWEyX40gKQS-UOGHAkUuyDDM-jJZc6HhlssaD3KbWg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDh2j3MMWXxSj7eEjlMILW-R7Hh6_ZxJ74AFIwCP6yWNq3fgchKNbfEh027IR_y1arobsGK7-YgUSmnYWLVRP8PHfTxJj5W_VJwmow8BoKPFmOv87UzenLm8gfqBjI_uoy1_RtJz5fU_g2X8xsj-4yEOeACi9O-aOS-cuixUTkRtHFi0JqQ8o50rFb1Q-2Ye-JniCZsE59CrWVLrrN5g7oIhTmDVGxZDQjQye9i1bD0U_zYcGTzhtVSheL7NVOd6le1AYA8EmdZVc8",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkgxq-SOkttYbOGatMYyWmTg6WkUYwt2CakrmJ9dpE-2ozoGFQivS6wSWgoKmta3eV3dp7yzujz_vPduQZGKvHX5AlvH0hCqQcqJvJIHPlFz9yqHhaKbK5CG6BaUh6m6C9YnDEL8MwFH0Wt9tFqlQ7bBN7T-mjgvAx2wbs1zWFZsznBQJf6MOD1rWvbA0sIp95OQ1zCwjKsqoZIFb4RGDe2wgJeDeia6OdqnsfwkqB389JAQcgUbWe-dVdWo0qyf9zhK5HvM1eM4s",
    ],
    quote:
      '"Warmth that whispers. The golden embrace of a stone that speaks of sunlit promises."',
  },
  "3": {
    name: "The Luminary Halo",
    price: 5800,
    metal: "Platinum",
    shape: "Pear Shape",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWdO3-fXW0M5ZMksiZ0yZfLBsetylKXrpTBosY09xTE3jNktP4tCKFMas-22XcLxolfCDh87DnMVZkMQ5kjFGHbTxboV8O4VixcMALnR3BWWLZKiOXrMoJQC6WMpviytDqxzoqC0klQKXg53OJnIG5l3fnEhra3O637rXKkQWJ-DoXy5GbNDR8ZltFAj3rWuBwomJed0mQa0_ml3JUQeGEnuUA-buvtCpgubLe8Kh3itxDhfGs_eZu3egxOxSbUzAEcMc7uwBh_Zg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDh2j3MMWXxSj7eEjlMILW-R7Hh6_ZxJ74AFIwCP6yWNq3fgchKNbfEh027IR_y1arobsGK7-YgUSmnYWLVRP8PHfTxJj5W_VJwmow8BoKPFmOv87UzenLm8gfqBjI_uoy1_RtJz5fU_g2X8xsj-4yEOeACi9O-aOS-cuixUTkRtHFi0JqQ8o50rFb1Q-2Ye-JniCZsE59CrWVLrrN5g7oIhTmDVGxZDQjQye9i1bD0U_zYcGTzhtVSheL7NVOd6le1AYA8EmdZVc8",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvPDws0PrT5qZgzBM18Y1FoFVOzTbbTpcuYsy5IomdAQVFTYcIFrhawEh7mn3r9OZLY-_vpBpfYfjfm-99moRX_V1mUGNk6Smyi47BlSuRBgdlXN1IGZx6lb4DXPzZjPMpU2ODKwSpB80XCOZTJauVTj-EhMvjFzPXU2jCyPFI4NHwtqp1eoWz4i--Ae88QeuwxA0mWE3Og9n_K1uDvhIt8z8uAwxOKZvH1dWEyX40gKQS-UOGHAkUuyDDM-jJZc6HhlssaD3KbWg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoyni-5L2jl20-dSls_Qy6TXZvuhfcmwG-qICfspQf9n8jeqt3pLoZQlInw9PATFYRbFvtizcxfmyuhFgLTVIPeP8QwOXZLj5JSsTsfzeltX6t0yy0llpUV05_eFc3d8H2FwAmudY3pkkvU-TqJZfQj7IXd0HBnuPxTQ0gtDZ2tEHxmdYCo6PzLAu1NCqqggcfRfMKaTzo89bMwT02qBfyh0baSlvVZGnL60bFCzcJ9b3gp-rw-jRFtyeNaOEFx2zTtQyq646iYIg",
    ],
    quote:
      '"A constellation captured in stone. The halo amplifies brilliance into something otherworldly."',
  },
  "4": {
    name: "The Arcane Marquise",
    price: 3900,
    metal: "18k Rose Gold",
    shape: "Marquise Cut",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuah2cWFaADhwm06bDmEAPK9NSxioxn1Oon0FZUQc6waZLl8ez4pFjw7Mzbl1DWIeW3NNng4c31erZ4T_7vYBI6Ur9Vee02PkfqMgOsgncQTQppAXCGQ096UY0i137fEWrFNS8Wpe1b6EIJR_PQq3AWsoaEuUElvabSUb5O9kMRgv8jYE--ZjVhqJkX2WLFBrJcxPN4JgY8bslG3FIfJK06vDIFgQJmBpiP8-USmqyhxHqrBKDBMEKqjpQGQVsv3KwfdcDNjmEvhw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDh2j3MMWXxSj7eEjlMILW-R7Hh6_ZxJ74AFIwCP6yWNq3fgchKNbfEh027IR_y1arobsGK7-YgUSmnYWLVRP8PHfTxJj5W_VJwmow8BoKPFmOv87UzenLm8gfqBjI_uoy1_RtJz5fU_g2X8xsj-4yEOeACi9O-aOS-cuixUTkRtHFi0JqQ8o50rFb1Q-2Ye-JniCZsE59CrWVLrrN5g7oIhTmDVGxZDQjQye9i1bD0U_zYcGTzhtVSheL7NVOd6le1AYA8EmdZVc8",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvPDws0PrT5qZgzBM18Y1FoFVOzTbbTpcuYsy5IomdAQVFTYcIFrhawEh7mn3r9OZLY-_vpBpfYfjfm-99moRX_V1mUGNk6Smyi47BlSuRBgdlXN1IGZx6lb4DXPzZjPMpU2ODKwSpB80XCOZTJauVTj-EhMvjFzPXU2jCyPFI4NHwtqp1eoWz4i--Ae88QeuwxA0mWE3Og9n_K1uDvhIt8z8uAwxOKZvH1dWEyX40gKQS-UOGHAkUuyDDM-jJZc6HhlssaD3KbWg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkgxq-SOkttYbOGatMYyWmTg6WkUYwt2CakrmJ9dpE-2ozoGFQivS6wSWgoKmta3eV3dp7yzujz_vPduQZGKvHX5AlvH0hCqQcqJvJIHPlFz9yqHhaKbK5CG6BaUh6m6C9YnDEL8MwFH0Wt9tFqlQ7bBN7T-mjgvAx2wbs1zWFZsznBQJf6MOD1rWvbA0sIp95OQ1zCwjKsqoZIFb4RGDe2wgJeDeia6OdqnsfwkqB389JAQcgUbWe-dVdWo0qyf9zhK5HvM1eM4s",
    ],
    quote:
      '"The marquise elongates the finger, lending an air of regal sophistication to every gesture."',
  },
  "5": {
    name: "The Nocturne Sapphire",
    price: 7400,
    metal: "Platinum",
    shape: "Blue Sapphire & Diamond",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6XQa5XG1lqAMybf30cNyGJyltpfNShsGbDGWS_NRpEPzu--MqmzZsWrHAPNbJ8HnQETPmMLAf8JJtYq2L38N396ij1uPqBVUNBuBGb2k8A3BUo-u6btaxyI3Cr1mPI2d8gP5L9-WJM0SLd1qGswb0G3XJAkMDvKvPWzunG0457oeY6OnOyBPtchEcZ6Nf-HB01OPCaKxt1sGoKgpZUhssI2DcUJGlCccJ6_82xPgMPus-678X77HLXbfrUNwJVO8j3KIx5SwXDNo",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDh2j3MMWXxSj7eEjlMILW-R7Hh6_ZxJ74AFIwCP6yWNq3fgchKNbfEh027IR_y1arobsGK7-YgUSmnYWLVRP8PHfTxJj5W_VJwmow8BoKPFmOv87UzenLm8gfqBjI_uoy1_RtJz5fU_g2X8xsj-4yEOeACi9O-aOS-cuixUTkRtHFi0JqQ8o50rFb1Q-2Ye-JniCZsE59CrWVLrrN5g7oIhTmDVGxZDQjQye9i1bD0U_zYcGTzhtVSheL7NVOd6le1AYA8EmdZVc8",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvPDws0PrT5qZgzBM18Y1FoFVOzTbbTpcuYsy5IomdAQVFTYcIFrhawEh7mn3r9OZLY-_vpBpfYfjfm-99moRX_V1mUGNk6Smyi47BlSuRBgdlXN1IGZx6lb4DXPzZjPMpU2ODKwSpB80XCOZTJauVTj-EhMvjFzPXU2jCyPFI4NHwtqp1eoWz4i--Ae88QeuwxA0mWE3Og9n_K1uDvhIt8z8uAwxOKZvH1dWEyX40gKQS-UOGHAkUuyDDM-jJZc6HhlssaD3KbWg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoyni-5L2jl20-dSls_Qy6TXZvuhfcmwG-qICfspQf9n8jeqt3pLoZQlInw9PATFYRbFvtizcxfmyuhFgLTVIPeP8QwOXZLj5JSsTsfzeltX6t0yy0llpUV05_eFc3d8H2FwAmudY3pkkvU-TqJZfQj7IXd0HBnuPxTQ0gtDZ2tEHxmdYCo6PzLAu1NCqqggcfRfMKaTzo89bMwT02qBfyh0baSlvVZGnL60bFCzcJ9b3gp-rw-jRFtyeNaOEFx2zTtQyq646iYIg",
    ],
    quote:
      '"Deep royal blue meets timeless sparkle — a ring that carries the depth of midnight."',
  },
  "6": {
    name: "The Meridian Emerald",
    price: 8900,
    metal: "Platinum",
    shape: "Emerald Cut",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVcNLqI-h-UoBLBxBgL-EyHsqsFthyIXBbT6xVFyjcX6i8sS4nnW-2EG_O88j1bpeVM0UK0-feryHpb6CqCWFNSYLWgvE72DmXkLrqBF9ZNE4VceSd0T_viLYsv7GVx_osiX5FYYPoXrTUtXrxzs2RcoSwUZ2ZB5TmilkeLBfl15umcOO9QEjQNTMJrliN5uAjrdYcYgRpNzj91JG4Mj7K3-PvHBo2M0sx6VVAxCf3OIpSYLQ-rDQ1b6J2HqLbKP0XW_uY3L49nS8",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDh2j3MMWXxSj7eEjlMILW-R7Hh6_ZxJ74AFIwCP6yWNq3fgchKNbfEh027IR_y1arobsGK7-YgUSmnYWLVRP8PHfTxJj5W_VJwmow8BoKPFmOv87UzenLm8gfqBjI_uoy1_RtJz5fU_g2X8xsj-4yEOeACi9O-aOS-cuixUTkRtHFi0JqQ8o50rFb1Q-2Ye-JniCZsE59CrWVLrrN5g7oIhTmDVGxZDQjQye9i1bD0U_zYcGTzhtVSheL7NVOd6le1AYA8EmdZVc8",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvPDws0PrT5qZgzBM18Y1FoFVOzTbbTpcuYsy5IomdAQVFTYcIFrhawEh7mn3r9OZLY-_vpBpfYfjfm-99moRX_V1mUGNk6Smyi47BlSuRBgdlXN1IGZx6lb4DXPzZjPMpU2ODKwSpB80XCOZTJauVTj-EhMvjFzPXU2jCyPFI4NHwtqp1eoWz4i--Ae88QeuwxA0mWE3Og9n_K1uDvhIt8z8uAwxOKZvH1dWEyX40gKQS-UOGHAkUuyDDM-jJZc6HhlssaD3KbWg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkgxq-SOkttYbOGatMYyWmTg6WkUYwt2CakrmJ9dpE-2ozoGFQivS6wSWgoKmta3eV3dp7yzujz_vPduQZGKvHX5AlvH0hCqQcqJvJIHPlFz9yqHhaKbK5CG6BaUh6m6C9YnDEL8MwFH0Wt9tFqlQ7bBN7T-mjgvAx2wbs1zWFZsznBQJf6MOD1rWvbA0sIp95OQ1zCwjKsqoZIFb4RGDe2wgJeDeia6OdqnsfwkqB389JAQcgUbWe-dVdWo0qyf9zhK5HvM1eM4s",
    ],
    quote:
      '"Clean lines, architectural precision. The emerald cut is for those who find beauty in geometry."',
  },
};

// Next.js needs this to know which static params to generate
export function generateStaticParams() {
  return Object.keys(RING_CATALOG).map((id) => ({ id }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // We need to handle this synchronously for static generation
  return {
    title: `Ring Details | THE ATELIER`,
    description:
      "Discover and customize your perfect engagement ring at The Atelier.",
  };
}

export default async function RingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ring = RING_CATALOG[id];

  if (!ring) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl text-on-background mb-4">
            Ring Not Found
          </h1>
          <p className="font-body text-on-surface-variant mb-8">
            The ring you are looking for does not exist.
          </p>
          <Link
            href="/rings"
            className="hero-gradient text-on-primary px-8 py-4 font-label text-xs tracking-widest uppercase"
          >
            Back to Collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 md:pt-0 flex flex-col md:flex-row">
      {/* Left Showcase Canvas (65%) */}
      <section className="w-full md:w-[65%] lg:w-[65%] min-h-[614px] md:min-h-screen bg-background-custom relative flex flex-col p-8 md:p-12 md:pt-28">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-on-surface-variant font-label tracking-widest uppercase mb-8">
          <Link
            href="/"
            className="hover:text-on-background transition-colors duration-300"
          >
            Home
          </Link>
          <span className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>
          <Link
            href="/rings"
            className="hover:text-on-background transition-colors duration-300"
          >
            Engagement Rings
          </Link>
          <span className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>
          <span className="text-on-background font-medium">{ring.name}</span>
        </div>

        {/* Image Gallery */}
        <ImageGallery images={ring.images} name={ring.name} />

        {/* Editorial Quote */}
        <div className="mt-12 hidden md:block border-t border-outline-variant/30 pt-8">
          <p className="font-headline italic text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            {ring.quote}
          </p>
        </div>
      </section>

      {/* Right Customization Panel (35%) */}
      <div className="h-full">
        <CustomizationPanel
          ring={{
            name: ring.name,
            price: ring.price,
            metal: ring.metal,
            shape: ring.shape,
          }}
        />
      </div>
    </main>
  );
}
