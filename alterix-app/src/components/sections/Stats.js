import React from 'react';
import { Globe2, Factory, Users, TrendingUp, ChevronRight, Activity, Cpu } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const statData = [
  { id: 1, number: '25+', label: 'Countries Operating', subtext: 'Spanning across North America, Europe, and Asia.', icon: Globe2 },
  { id: 2, number: '100+', label: 'Sites Worldwide', subtext: 'Strategically located manufacturing and design centers.', icon: Factory },
  { id: 3, number: '140K+', label: 'Global Employees', subtext: 'A diverse, world-class workforce of leading innovators.', icon: Users },
  { id: 4, number: '$29.8B', label: 'Revenue F/Y26', subtext: 'Record financial growth and continuous stability.', icon: TrendingUp },
];

export default function StatsSection() {
  return (
    <section className="relative bg-[#002C49] py-32 overflow-hidden z-10 [clip-path:polygon(0_0,100%_4vw,100%_100%,0_100%)] mt-[-4vw]">
      {/* Elaborate Dotted Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-1/2 left-0 w-full h-[600px] bg-[#1F80B5] rounded-full blur-[200px] opacity-[0.02] pointer-events-none -translate-y-1/2"></div>
      
      <div className="container mx-auto px-8 relative z-10 pt-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column Structure */}
          <div className="flex-1 text-white">
            <span className="text-[#1F80B5] font-extrabold tracking-[0.2em] uppercase mb-4 block flex items-center gap-2">
              <Globe2 size={18} /> Global Footprint
            </span>
            <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
              Scale without <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F80B5] to-white">Compromise.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 border-l-4 border-[#1F80B5] pl-6 max-w-2xl">
              Alterix Global isn't just a partner; we are your direct extension. Our globally distributed, vertically integrated nodes ensure that no matter where your markets are, our supply chains and engineering hubs are right there to minimize latency and maximize precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 text-sm font-bold tracking-widest uppercase text-slate-300">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-sm border border-white/10 hover:border-[#1F80B5]/50 transition-colors">
                <Cpu className="text-[#1F80B5]" size={20} /> Localized Engineering
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-sm border border-white/10 hover:border-[#1F80B5]/50 transition-colors">
                <Activity className="text-[#1F80B5]" size={20} /> Real-Time Analytics
              </div>
            </div>

            <Button className="bg-[#1F80B5] hover:bg-white hover:text-[#1F80B5] text-white px-8 py-7 md:py-8 text-base uppercase tracking-widest font-black transition-all duration-300 shadow-xl group rounded-sm border-none">
              View Global Map <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
          
          {/* Right Column - Animated Grid */}
          <div className="flex-[1.2] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              
              {/* Central connecting lines simulation */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>
              <div className="hidden md:block absolute top-0 left-1/2 w-[1px] h-full bg-white/10 -translate-x-1/2 z-0"></div>
              
              {statData.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={stat.id} className="relative bg-white/5 backdrop-blur-md border-white/10 shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-lg group overflow-hidden z-10 cursor-default flex flex-col h-full">
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#1F80B5] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl"></div>
                    
                    <CardContent className="p-8 md:p-10 text-left flex flex-col h-full relative z-10">
                      <div className="w-14 h-14 rounded-md flex items-center justify-center text-[#1F80B5] bg-[#1F80B5]/10 group-hover:bg-[#1F80B5] group-hover:text-white transition-all duration-500 mb-6 shadow-inner ring-1 ring-[#1F80B5]/30">
                        <IconComponent size={28} strokeWidth={2} />
                      </div>
                      
                      <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight group-hover:scale-105 origin-left transition-transform duration-300">
                        {stat.number}
                      </div>
                      
                      <div className="text-lg font-bold text-[#1F80B5] uppercase tracking-wider mb-4 border-b border-white/10 pb-4">
                        {stat.label}
                      </div>
                      
                      <p className="text-slate-400 text-sm leading-relaxed mt-auto group-hover:text-slate-200 transition-colors">
                        {stat.subtext}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
