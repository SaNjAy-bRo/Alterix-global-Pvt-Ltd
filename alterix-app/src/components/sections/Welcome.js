import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <section className="flex flex-col lg:flex-row relative min-h-[70vh] bg-white pt-[5vh]">
      <div className="flex-1 px-8 lg:pl-[10%] lg:pr-[5%] py-20 flex flex-col justify-center relative z-10">
        <h2 className="text-[#EA580C] text-5xl md:text-6xl font-black uppercase mb-2 leading-none">HELLO</h2>
        <h3 className="text-slate-900 text-4xl md:text-5xl font-extrabold mb-8">Welcome to Alterix!</h3>
        <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 max-w-full lg:max-w-[90%]">
          The trusted partner for the world's leading brands, offering advanced engineering, 
          supply chain, and manufacturing solutions. Since our inception, we have been dedicated 
          to building the technologies that shape tomorrow—leveraging deep industry expertise, 
          scale, and customized precision.
        </p>
        <div className="flex items-center gap-6">
          <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:border-[#EA580C] hover:bg-[#EA580C] hover:text-white px-8 py-6 text-base font-bold uppercase tracking-wider transition-all duration-300 group">
            Our History <ArrowRight className="ml-2 w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </Button>
        </div>
      </div>
      <div className="flex-1 bg-cover bg-center min-h-[40vh] lg:min-h-full [clip-path:polygon(0_10%,100%_0,100%_100%,0%_100%)] lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)] relative opacity-95 group" style={{ backgroundImage: "url('/assets/welcome_img.png')" }}>
        {/* Floating Geometric Badge */}
        <div className="absolute top-[20%] left-[30%] lg:left-[5%] bg-white p-6 shadow-2xl z-20 flex flex-col items-center justify-center [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)] hover:scale-105 transition-transform duration-500 min-w-[200px]">
           <div className="text-[#EA580C] font-black text-5xl mb-1">1998</div>
           <div className="text-slate-500 text-sm font-bold tracking-widest uppercase border-t-2 border-slate-100 pt-2 w-full text-center">Established</div>
        </div>
      </div>
    </section>
  );
}
