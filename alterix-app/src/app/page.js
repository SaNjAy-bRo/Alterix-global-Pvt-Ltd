import HeroSection from '@/components/sections/Hero';
import WelcomeSection from '@/components/sections/Welcome';
import StatsSection from '@/components/sections/Stats';
import ServicesSection from '@/components/sections/Services';
import CapabilitiesSection from '@/components/sections/Capabilities';
import InsightsSection from '@/components/sections/Insights';
import CTASection from '@/components/sections/CTA';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <StatsSection />
      <ServicesSection />
      <CapabilitiesSection />
      <InsightsSection />
      <CTASection />
      <ContactCTA />
    </>
  );
}
