import HeroSection from '@/components/home/HeroSection';
import CuratedCollections from '@/components/home/CuratedCollections';
import DiamondExperience from '@/components/home/DiamondExperience';
import BespokeJourney from '@/components/home/BespokeJourney';
import SocialGrid from '@/components/home/SocialGrid';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CuratedCollections />
      <DiamondExperience />
      <BespokeJourney />
      <SocialGrid />
    </main>
  );
}
