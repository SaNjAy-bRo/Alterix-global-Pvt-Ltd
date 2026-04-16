import React from 'react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="relative bg-white py-24 lg:py-48 overflow-hidden [clip-path:polygon(0_4%,100%_0,100%_96%,0_100%)] lg:[clip-path:polygon(0_8%,100%_0%,100%_92%,0_100%)] z-10">
      {/* Background geometric flare */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50 [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] -z-10" />

      <div className="container relative mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Text */}
        <div className="flex-1">
          <h3 className="text-[#7B9E5A] font-bold text-sm uppercase tracking-widest mb-3">Client-Centric Approach</h3>
          <h2 className="text-4xl lg:text-5xl lg:text-6xl font-black text-[#002C49] mb-6 tracking-tight leading-[1.1] max-w-lg">
            Partners in Your <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3]">Transformation</span>
          </h2>
          <p className="text-base font-bold text-[#002C49] leading-relaxed mb-10 max-w-lg">
            At Alterix Global, we work as an extension of your team — delivering measurable results, improving operational efficiency, and helping you stay competitive.
          </p>
          <Button size="lg" className="border-2 border-transparent bg-[#002C49] text-white hover:bg-[#7B9E5A] hover:border-transparent px-10 py-7 text-sm uppercase tracking-widest font-bold transition-all duration-300 rounded shadow-xl">
            Get Started Today
          </Button>
        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full relative">
          {/* Angled image */}
          <div 
            className="w-full h-[350px] lg:h-[550px] relative z-10 [clip-path:polygon(10%_0,100%_0,100%_100%,0_90%)] shadow-2xl"
          >
             <div 
               className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80')" }}
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#002C49]/40 to-transparent pointer-events-none" />
          </div>
          {/* Decorative outline */}
          <div className="absolute top-0 right-0 w-full h-[350px] lg:h-[550px] border-4 border-[#7B9E5A] [clip-path:polygon(10%_0,100%_0,100%_100%,0_90%)] z-0 translate-x-4 translate-y-4" />
        </div>

      </div>
    </section>
  );
}
