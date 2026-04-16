import React from 'react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="flex flex-col lg:flex-row bg-white min-h-[500px] relative">
      <div className="flex-1 py-32 px-[5%] lg:pl-[10%] lg:pr-[5%] flex flex-col justify-center z-10">
        <h2 className="text-[#EA580C] font-black text-5xl uppercase mb-2 leading-none">PEOPLE-<br/>CENTERED</h2>
        <h3 className="text-slate-900 text-2xl font-extrabold mb-6 leading-snug">A culture of integrity, ingenuity, and inspiration</h3>
        <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-[90%]">
          At Alterix Global, our employees are our greatest asset. Our 
          leadership is defined by the diverse talents of our global team. We prioritize safety, 
          empowerment, and collaborative passion to build things that matter.
        </p>
        <div>
          <Button variant="outline" className="border-2 border-[#EA580C] text-[#EA580C] hover:bg-[#EA580C] hover:text-white px-8 py-6 text-base font-bold uppercase tracking-wider">
            Explore Careers
          </Button>
        </div>
      </div>
      <div className="flex-[1.2] bg-cover bg-center [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)] relative min-h-[400px]" style={{ backgroundImage: "url('/assets/cta_img.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/40 to-transparent"></div>
      </div>
    </section>
  );
}
