import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Factory } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function HeroSection() {
  return (
    <section className="relative flex items-center min-h-[90vh] lg:min-h-screen overflow-hidden bg-cover bg-center [clip-path:polygon(0_0,100%_0,100%_90%,0%_100%)] mb-[-10vh] pb-[10vh]" style={{ backgroundImage: "url('/assets/hero-bg.png')" }}>
      {/* Overlay gradient to ensure the right side isn't completely raw if needed */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/40 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10 pt-20 pb-8 flex w-full h-full items-center">
        
        {/* Massive geometric dark card for text holding */}
        <div className="relative bg-[#0B1120]/95 backdrop-blur-xl p-8 md:p-12 lg:p-16 w-full md:w-[85%] lg:w-[60%] [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)] border-l-4 border-[#EA580C] shadow-2xl">
          
          {/* Accent slash inside the card for extra geometric feel */}
          <div className="absolute top-0 right-[15%] w-1 h-full bg-white/5 transform skew-x-[-15deg] pointer-events-none"></div>
          
          <div className="relative z-20">
            <span className="inline-flex items-center gap-2 text-[#EA580C] font-extrabold tracking-widest uppercase mb-4 text-xs md:text-sm border border-[#EA580C]/30 bg-[#EA580C]/10 py-1.5 px-3 rounded shadow-sm">
              <Factory size={16} strokeWidth={2.5} /> Precision At Scale
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight uppercase tracking-tighter mb-6 text-white drop-shadow-xl">
              MADE <span className="text-[#EA580C]">POSSIBLE.</span><br />
              MADE <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-100 to-slate-500">BETTER.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-300 mb-8 max-w-[85%] md:max-w-xl leading-relaxed font-medium pl-4 border-l-2 border-slate-700/80 shadow-sm">
              Empowering global supply chains, product design, and precision manufacturing with unparalleled
              innovation, scalability, and technical excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#EA580C] hover:bg-white hover:text-[#EA580C] text-white px-6 md:px-8 py-6 text-sm md:text-base uppercase tracking-widest font-black transition-all duration-300 shadow-xl group border-none">
                Our Story <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-slate-600/60 text-white hover:bg-slate-800 hover:border-slate-400 px-6 py-6 text-sm md:text-base uppercase tracking-widest font-black shadow-lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>

        {/* Floating secondary card overlapping the edge - properly pushed out so it doesn't block text */}
        <Card className="hidden lg:flex absolute right-0 lg:right-[10%] bottom-[15%] bg-gradient-to-br from-[#EA580C] to-[#C2410C] border-none text-white p-1 rounded-none [clip-path:polygon(12%_0,100%_0,88%_100%,0_100%)] shadow-2xl z-30 transform hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
          <CardContent className="p-6 lg:p-8 flex items-center gap-4 lg:gap-6">
            <div className="bg-white/20 p-3 lg:p-4 rounded-full backdrop-blur-md shadow-inner">
              <ShieldCheck size={32} strokeWidth={2} />
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-black uppercase tracking-widest drop-shadow-md">ISO 9001</div>
              <div className="text-white/90 font-bold tracking-wider uppercase text-[0.65rem] lg:text-xs mt-1">Certified Global Facilities</div>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
