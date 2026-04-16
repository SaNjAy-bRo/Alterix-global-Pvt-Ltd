'use client';

import React, { useState } from 'react';
import { Server, Activity, Car, Zap, ChevronRight, Cpu, Microscope, Settings, Box, Layers, Network } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const tabData = [
  {
    value: "why-choose",
    label: "Why Choose Us",
    tabIcon: Layers,
    cards: [
      { id: 1, icon: Network, title: 'Global Expertise', desc: 'Access to top-tier talent and proven methodologies across the globe.' },
      { id: 2, icon: Layers, title: 'Scalable Solutions', desc: 'Flexible engagement models designed to adapt and scale with your business capabilities.' },
      { id: 3, icon: Cpu, title: 'Technology-Driven', desc: 'Embracing advanced tech for optimal efficiency and cutting-edge operational success.' },
      { id: 4, icon: Box, title: 'Long-Term Partnerships', desc: 'Committed to ongoing support, collaboration, and driving continuous business growth.' }
    ]
  },
  {
    value: "industries",
    label: "Industries We Serve",
    tabIcon: Box,
    cards: [
      { id: 1, icon: Server, title: 'Information Technology', desc: 'Software development, cloud systems, and high-tech IT infrastructure.' },
      { id: 2, icon: Activity, title: 'Healthcare', desc: 'Robust solutions for medical technology, compliance, and clinical applications.' },
      { id: 3, icon: Box, title: 'Finance & Banking', desc: 'Secure, high-performance systems supporting modern financial services.' },
      { id: 4, icon: Car, title: 'Retail & Manufacturing', desc: 'Process automation, telecom, and supply chain optimizations.' }
    ]
  },
  {
    value: "approach",
    label: "Our Approach",
    tabIcon: Network,
    cards: [
      { id: 1, icon: Microscope, title: 'Discover & Strategize', desc: 'We deeply understand your business challenges to develop carefully tailored strategies.' },
      { id: 2, icon: Settings, title: 'Deliver & Optimize', desc: 'We execute with precision and continuously monitor to optimize your performance.' }
    ]
  }
];

export default function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState("why-choose");

  return (
    <section id="capabilities" className="relative bg-[#002C49] text-white py-32 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(11, 17, 32, 0.95), rgba(11, 17, 32, 0.95)), url('/assets/cutting_edge_bg.png')" }}>
      {/* Dynamic Background geometric element */}
      <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[2px] bg-gradient-to-r from-transparent via-[#1F80B5] to-transparent rotate-12 opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[0] right-[-10%] w-[40%] h-[40%] bg-[#1F80B5]/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="mb-16">
          <h2 className="font-light text-5xl lg:text-6xl uppercase mb-4 bg-gradient-to-b from-[#7B9E5A] to-[#64B1C3] bg-clip-text text-transparent w-fit pb-1">
            <span className="font-bold">WHY CHOOSE</span> <span className="font-black">ALTERIX GLOBAL</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3] mb-4"></div>
          <div className="text-[#64B1C3] font-bold text-xl tracking-wide">Delivering comprehensive talent and technology solutions across diverse industries</div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full">
          {/* Interactive Sidebar Navigation */}
          <div className="flex-[0_0_100%] lg:flex-[0_0_320px] flex flex-col gap-3">
            {tabData.map((tab) => {
              const TabIcon = tab.tabIcon;
              const isActive = activeTab === tab.value;
              
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`w-full flex items-center justify-between p-5 lg:p-6 transition-all duration-300 text-left border-l-4 rounded-r-md group ${
                    isActive 
                      ? "bg-[#7B9E5A]/10 border-[#7B9E5A] text-white shadow-[inset_4px_0_0_0_#7B9E5A]" 
                      : "bg-white/5 border-transparent text-slate-400 hover:bg-white/10 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                     <div className={`p-2 rounded-sm transition-colors duration-300 ${isActive ? 'bg-[#7B9E5A] text-white' : 'bg-white/10 text-slate-400 group-hover:text-white group-hover:bg-white/20'}`}>
                        <TabIcon size={20} strokeWidth={2} />
                     </div>
                     <span className="font-bold text-lg tracking-wide">{tab.label}</span>
                  </div>
                  <ChevronRight size={20} className={`transition-all duration-300 ${isActive ? 'text-[#7B9E5A] translate-x-1' : 'opacity-50 group-hover:opacity-100 group-hover:translate-x-1'}`} />
                </button>
              );
            })}
          </div>
          
          {/* Active Content Body */}
          <div className="flex-1">
            {tabData.map((tab) => {
              if (activeTab !== tab.value) return null;
              
              return (
                <div key={`content-${tab.value}`} className="animate-in fade-in slide-in-from-right-8 duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tab.cards.map((cap) => {
                      const Icon = cap.icon;
                      return (
                        <Card key={cap.id} className="bg-white/5 backdrop-blur-md border-white/10 p-2 sm:p-4 rounded-lg transition-transform duration-500 hover:bg-white/10 hover:border-[#1F80B5]/50 hover:-translate-y-2 shadow-2xl group cursor-pointer overflow-hidden relative">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1F80B5]/5 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-700"></div>
                          
                          <CardContent className="p-6 relative z-10">
                            <div className="text-[#64B1C3] mb-8 w-16 h-16 rounded-xl bg-[#64B1C3]/10 flex items-center justify-center group-hover:bg-[#64B1C3] group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-sm border border-[#64B1C3]/20 group-hover:border-[#64B1C3]">
                              <Icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-extrabold mb-4 text-white group-hover:text-[#7B9E5A] transition-colors duration-300">{cap.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors duration-300">{cap.desc}</p>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
