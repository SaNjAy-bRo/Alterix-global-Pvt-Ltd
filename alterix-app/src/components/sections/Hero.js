import React from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden [clip-path:polygon(0_0,100%_0,100%_94%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_90%,0_100%)] pb-8 lg:pb-24">

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden lg:flex min-h-[85vh] items-center">
        <div className="w-[50%] pl-[8%] pr-[4%] py-20">
          <h1 className="text-5xl xl:text-6xl font-black leading-[1.12] tracking-tight mb-8 bg-gradient-to-b from-[#7B9E5A] to-[#64B1C3] bg-clip-text text-transparent">
            IT & Non-IT Consulting, Staffing & Software Solutions
          </h1>
          <p className="text-base font-bold text-[#002C49] mb-10 max-w-lg leading-relaxed">
            Innovative tech solutions and world-class staffing to help your business scale.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="border-2 border-transparent bg-[#7B9E5A] text-white hover:bg-[#002C49] hover:border-[#002C49] px-8 py-6 text-sm uppercase tracking-widest font-bold transition-all duration-300 rounded">
              Explore Services
            </Button>
            <Button size="lg" className="border-2 border-[#002C49] !bg-[#002C49] text-white hover:!bg-[#7B9E5A] hover:border-[#7B9E5A] px-8 py-6 text-sm uppercase tracking-widest font-bold transition-all duration-300 rounded">
              Contact Us
            </Button>
          </div>
        </div>
        <div 
          className="absolute top-0 right-0 w-[55%] h-full bg-cover bg-center [clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80')" }}
        />
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="lg:hidden relative min-h-[82vh]">
        <div 
          className="absolute top-0 left-0 w-full h-[92%] bg-cover bg-center [clip-path:polygon(0_0,100%_0,100%_88%,0_100%)]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80')" }}
        />
        <div className="relative z-10 min-h-[82vh] flex items-center justify-center px-5 py-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-7 text-center w-full max-w-sm">
            <h1 className="text-[1.7rem] sm:text-3xl font-black leading-[1.2] tracking-tight mb-3 bg-gradient-to-b from-[#7B9E5A] to-[#64B1C3] bg-clip-text text-transparent">
              IT & Non-IT Consulting, Staffing & Software Solutions
            </h1>
            <p className="text-base font-bold text-[#002C49] mb-6 leading-relaxed">
              Innovative tech solutions and world-class staffing to help your business scale.
            </p>
            <div className="flex flex-col gap-3">
              <Button size="lg" className="border-2 border-transparent bg-[#7B9E5A] text-white hover:bg-[#002C49] hover:border-[#002C49] py-5 text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded w-full">
                Explore Services
              </Button>
              <Button size="lg" className="border-2 border-[#002C49] !bg-[#002C49] text-white hover:!bg-[#7B9E5A] hover:border-[#7B9E5A] py-5 text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
