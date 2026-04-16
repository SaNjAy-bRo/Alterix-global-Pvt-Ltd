import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="relative text-white pt-32 pb-48 overflow-hidden z-10 bg-cover bg-center [clip-path:polygon(0_8vw,100%_0,100%_100%,0%_100%)] mt-[-8vw]" style={{ backgroundImage: "url('/assets/service_eng.png')" }}>
      {/* Heavy Image Overlay for Readability */}
      <div className="absolute inset-0 z-0 bg-[#0B1120]/85 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-90"></div>
      
      {/* Decorative background geometry */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ background: 'repeating-linear-gradient(45deg, #162032 0px, #162032 2px, transparent 2px, transparent 20px)' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EA580C] [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)] z-0 opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-16 relative overflow-hidden group hover:border-[#EA580C]/50 transition-colors duration-500 shadow-2xl">
          
          <div className="absolute top-0 left-0 w-2 h-full bg-[#EA580C]"></div>

          <div className="flex-[1.5]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">
              Ready to <span className="text-[#EA580C]">Innovate?</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-medium">
              Contact our global team of engineers and supply chain experts to start scaling your next-generation hardware today.
            </p>
          </div>
          
          <div className="flex-[1] flex flex-col sm:flex-row gap-4 w-full lg:w-auto lg:justify-end">
            <Button size="lg" className="bg-[#EA580C] hover:bg-white hover:text-[#EA580C] text-white px-8 py-7 md:py-8 text-base uppercase tracking-widest font-black transition-all duration-300 shadow-xl w-full sm:w-auto items-center justify-center rounded-sm">
              Contact <ArrowRight className="ml-3" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-slate-400 text-white hover:bg-slate-800 px-8 py-7 md:py-8 text-base uppercase tracking-widest font-black transition-all duration-300 w-full sm:w-auto items-center justify-center rounded-sm hover:-translate-y-1">
              Locations <Globe className="ml-3" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
