import React from 'react';
import { Button } from '@/components/ui/button';

export default function WelcomeSection() {
  return (
    <section id="about" className="bg-white -mt-16 lg:mt-0 relative z-20 pt-0 pb-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12">

        {/* ===== MOBILE: Heading on top, then images, then text ===== */}
        <div className="lg:hidden">
          <h3 className="text-[#7B9E5A] font-bold text-sm uppercase tracking-widest mb-3">
            Who We Are
          </h3>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002C49] mb-8 leading-[1.12] tracking-tight">
            Empowering Businesses with Talent, Technology & Transformation
          </h2>

          {/* Circular Images */}
          <div className="relative w-full flex justify-center items-center mb-10 min-h-[280px] sm:min-h-[350px]">
            <div className="relative w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80')" }}
              />
            </div>
            <div className="absolute bottom-0 right-[8%] w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] rounded-full overflow-hidden border-[6px] border-white shadow-xl z-20">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80')" }}
              />
            </div>
          </div>

          {/* Text Content */}
          <p className="text-base font-bold text-[#002C49] leading-relaxed mb-4">
            Headquartered in Texas, Alterix Global is a trusted global recruitment and consulting partner specializing in IT solutions, workforce management, and business optimization services.
          </p>
          <p className="text-base font-bold text-[#002C49] leading-relaxed mb-4">
            We connect organizations with highly qualified professionals while providing strategic support through advanced technology and flexible service models. Our mission is simple: enable businesses to operate smarter, faster, and more efficiently.
          </p>
          <p className="text-base font-bold text-[#7B9E5A] mb-8">
            Looking to grow faster? Hire smarter. Build better. Partner with Alterix Global.
          </p>
          <Button size="lg" className="border-2 border-[#7B9E5A] bg-[#7B9E5A] text-white hover:bg-transparent hover:text-[#7B9E5A] px-8 py-6 text-sm uppercase tracking-widest font-bold transition-all duration-300 rounded">
            Learn More
          </Button>
        </div>

        {/* ===== DESKTOP: Side by side ===== */}
        <div className="hidden lg:flex items-center gap-20">

          {/* Left Side: Overlapping Circular Images */}
          <div className="flex-1 w-full relative min-h-[550px] flex justify-center items-center">
            <div className="relative w-[460px] h-[460px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80')" }}
              />
            </div>
            <div className="absolute bottom-0 right-[10%] w-[220px] h-[220px] rounded-full overflow-hidden border-8 border-white shadow-xl z-20">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80')" }}
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="flex-1 w-full">
            <h3 className="text-[#7B9E5A] font-bold text-sm uppercase tracking-widest mb-4">
              Who We Are
            </h3>
            <h2 className="text-[2.75rem] font-black text-[#002C49] mb-6 leading-[1.12] tracking-tight">
              Empowering Businesses with Talent, Technology & Transformation
            </h2>
            <p className="text-base font-bold text-[#002C49] leading-relaxed mb-5">
              Headquartered in Texas, Alterix Global is a trusted global recruitment and consulting partner specializing in IT solutions, workforce management, and business optimization services.
            </p>
            <p className="text-base font-bold text-[#002C49] leading-relaxed mb-5">
              We connect organizations with highly qualified professionals while providing strategic support through advanced technology and flexible service models. Our mission is simple: enable businesses to operate smarter, faster, and more efficiently.
            </p>
            <p className="text-base font-bold text-[#7B9E5A] mb-8">
              Looking to grow faster? Hire smarter. Build better. Partner with Alterix Global.
            </p>
            <Button size="lg" className="border-2 border-[#7B9E5A] bg-[#7B9E5A] text-white hover:bg-transparent hover:text-[#7B9E5A] px-8 py-6 text-sm uppercase tracking-widest font-bold transition-all duration-300 rounded">
              Learn More
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
