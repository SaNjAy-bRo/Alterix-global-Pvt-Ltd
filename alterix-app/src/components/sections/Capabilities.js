'use client';

import React, { useState } from 'react';
import { Server, Activity, Car, Zap, ChevronRight, Cpu, Microscope, Settings, Box, Layers, Network } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const tabData = [
  {
    value: "assembly",
    label: "Advanced Assembly",
    tabIcon: Layers,
    cards: [
      { id: 1, icon: Server, title: 'Data Center Infrastructure', desc: 'Advanced cooling, power delivery, and racking solutions to support hyperscale cloud deployments.' },
      { id: 2, icon: Activity, title: 'Healthcare', desc: 'Precision robotics and automation for medical technology manufacturing and compliance.' },
      { id: 3, icon: Car, title: 'Automotive & Transportation', desc: 'Hardware design and scale for autonomous driving capability and EV battery systems.' },
      { id: 4, icon: Zap, title: 'Clean Energy', desc: 'Sustainable energy distribution systems, battery pack scaling, and grid infrastructure.' }
    ]
  },
  {
    value: "testing",
    label: "Testing & Validation",
    tabIcon: Microscope,
    cards: [
      { id: 1, icon: Microscope, title: 'Material Analytics', desc: 'Deep metallurgical and composite material testing under extreme environmental scenarios.' },
      { id: 2, icon: Cpu, title: 'Semiconductor Validation', desc: 'Clean room testing and wafer-level analytics for next generation silicon.' },
      { id: 3, icon: Box, title: 'Stress Lifecycle', desc: 'Hardware degradation prediction using AI-monitored physical stress application.' }
    ]
  },
  {
    value: "automation",
    label: "Automation & Robotics",
    tabIcon: Network,
    cards: [
      { id: 1, icon: Settings, title: 'Robotic Workcells', desc: 'Fully autonomous manufacturing nodes customized for high-volume rapid assembly.' },
      { id: 2, icon: Activity, title: 'AI Quality Assurance', desc: 'Computer vision integration to detect microscopic anomalies in real-time hardware production.' }
    ]
  }
];

export default function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState("assembly");

  return (
    <section id="capabilities" className="relative bg-[#0B1120] text-white py-32 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(11, 17, 32, 0.95), rgba(11, 17, 32, 0.95)), url('/assets/cutting_edge_bg.png')" }}>
      {/* Dynamic Background geometric element */}
      <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[2px] bg-gradient-to-r from-transparent via-[#EA580C] to-transparent rotate-12 opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[0] right-[-10%] w-[40%] h-[40%] bg-[#EA580C]/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-white font-black text-5xl uppercase mb-2">CUTTING EDGE</h2>
          <div className="text-[#EA580C] font-bold text-xl tracking-wide">Supporting leading brands with decades of cross-industry experience</div>
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
                      ? "bg-[#EA580C]/10 border-[#EA580C] text-white shadow-[inset_4px_0_0_0_#EA580C]" 
                      : "bg-white/5 border-transparent text-slate-400 hover:bg-white/10 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                     <div className={`p-2 rounded-sm transition-colors duration-300 ${isActive ? 'bg-[#EA580C] text-white' : 'bg-white/10 text-slate-400 group-hover:text-white group-hover:bg-white/20'}`}>
                        <TabIcon size={20} strokeWidth={2} />
                     </div>
                     <span className="font-bold text-lg tracking-wide">{tab.label}</span>
                  </div>
                  <ChevronRight size={20} className={`transition-all duration-300 ${isActive ? 'text-[#EA580C] translate-x-1' : 'opacity-50 group-hover:opacity-100 group-hover:translate-x-1'}`} />
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
                        <Card key={cap.id} className="bg-white/5 backdrop-blur-md border-white/10 p-2 sm:p-4 rounded-lg transition-transform duration-500 hover:bg-white/10 hover:border-[#EA580C]/50 hover:-translate-y-2 shadow-2xl group cursor-pointer overflow-hidden relative">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[#EA580C]/5 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-700"></div>
                          
                          <CardContent className="p-6 relative z-10">
                            <div className="text-[#EA580C] mb-8 w-16 h-16 rounded-xl bg-[#EA580C]/10 flex items-center justify-center group-hover:bg-[#EA580C] group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-sm border border-[#EA580C]/20 group-hover:border-[#EA580C]">
                              <Icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-extrabold mb-4 text-white group-hover:text-[#EA580C] transition-colors duration-300">{cap.title}</h3>
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
