import React from 'react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="flex flex-col lg:flex-row bg-white min-h-[500px] relative">
      <div className="flex-1 py-32 px-[5%] lg:pl-[10%] lg:pr-[5%] flex flex-col justify-center z-10">
        <h2 className="font-light text-5xl lg:text-6xl uppercase mb-4 leading-none bg-gradient-to-b from-[#7B9E5A] to-[#64B1C3] bg-clip-text text-transparent w-fit pb-1">
          <span className="font-bold">CLIENT</span>-<span className="font-black">CENTRIC</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3] mb-4"></div>
        <h3 className="text-[#002C49] text-3xl font-extrabold mb-6 leading-snug">Your success is our priority</h3>
        <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-[90%]">
          At Alterix Global, we work as an extension of your team—delivering measurable results, improving operational efficiency, and helping you stay competitive. Partner with us to unlock top talent, streamline operations, and accelerate growth.
        </p>
        <div>
          <Button variant="outline" className="border-2 border-[#1F80B5] text-[#1F80B5] hover:bg-[#1F80B5] hover:text-white px-8 py-6 text-base font-bold uppercase tracking-wider">
            Get Started Today
          </Button>
        </div>
      </div>
      <div className="flex-[1.2] bg-cover bg-center [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)] relative min-h-[400px]" style={{ backgroundImage: "url('/assets/cta_img.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#002C49]/40 to-transparent"></div>
      </div>
    </section>
  );
}
