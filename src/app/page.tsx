import HeroSection from '@/components/home/HeroSection';
import SixPillarsSection from '@/components/home/SixPillarsSection';
import InsideRedGymSection from '@/components/home/InsideRedGymSection';
import ClosingCTASection from '@/components/home/ClosingCTASection';
import JsonLdScript from '@/components/ui/JsonLdScript';
import { buildOrganizationLD, buildLocalBusinessLD } from '@/lib/discipline-schemas';

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={[buildOrganizationLD(), buildLocalBusinessLD()]} />
      <HeroSection />
      <SixPillarsSection />
      <InsideRedGymSection />
      <ClosingCTASection />
    </>
  );
}
