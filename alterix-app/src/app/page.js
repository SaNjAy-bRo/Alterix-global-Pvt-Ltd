import HeroSection from '@/components/sections/Hero';
import WelcomeSection from '@/components/sections/Welcome';
import StatsSection from '@/components/sections/Stats';
import ServicesSection from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import IndustriesServed from '@/components/sections/IndustriesServed';
import OurApproach from '@/components/sections/OurApproach';
import CTASection from '@/components/sections/CTA';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesServed />
      <OurApproach />
      <CTASection />
      <ContactCTA />
    </>
  );
}
