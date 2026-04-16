'use client';

import React, { useState } from 'react';
import { Globe2, Users, Cpu, Handshake, ShieldCheck, ChevronRight, Server, Activity, Landmark, ShoppingCart, Factory, Radio, Search, Settings, Rocket, TrendingUp } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const tabData = [
  {
    value: "why-choose",
    label: "Why Choose Us",
    cards: [
      { id: 1, icon: Globe2, title: 'Global Reach, Proven Expertise', desc: 'Access to a worldwide network of professionals and industry-leading methodologies.' },
      { id: 2, icon: Users, title: 'Access to Top-Tier Talent', desc: 'We connect you with highly skilled professionals across IT and Non-IT domains.' },
      { id: 3, icon: Cpu, title: 'Scalable & Flexible Solutions', desc: 'Engagement models designed to adapt and scale seamlessly with your business.' },
      { id: 4, icon: ShieldCheck, title: 'Technology-Driven Approach', desc: 'Embracing advanced technology for optimal efficiency and cutting-edge operations.' },
      { id: 5, icon: Handshake, title: 'Long-Term Partnerships', desc: 'Committed to ongoing support, collaboration, and driving continuous growth.' }
    ]
  },
  {
    value: "industries",
    label: "Industries We Serve",
    cards: [
      { id: 1, icon: Server, title: 'Information Technology', desc: 'Software development, cloud systems, and IT infrastructure solutions.' },
      { id: 2, icon: Activity, title: 'Healthcare', desc: 'Robust solutions for medical technology, compliance, and clinical applications.' },
      { id: 3, icon: Landmark, title: 'Finance & Banking', desc: 'Secure, high-performance systems supporting modern financial services.' },
      { id: 4, icon: ShoppingCart, title: 'Retail & E-commerce', desc: 'Digital transformation solutions for modern retail experiences.' },
      { id: 5, icon: Factory, title: 'Manufacturing', desc: 'Process automation and supply chain optimization solutions.' },
      { id: 6, icon: Radio, title: 'Telecommunications', desc: 'Network infrastructure and communication technology services.' }
    ]
  },
  {
    value: "approach",
    label: "Our Approach",
    cards: [
      { id: 1, icon: Search, title: 'Discover', desc: 'We deeply understand your business challenges and requirements.' },
      { id: 2, icon: Settings, title: 'Strategize', desc: 'Develop carefully tailored strategies aligned with your goals.' },
      { id: 3, icon: Rocket, title: 'Deliver', desc: 'Execute with precision using proven methodologies and top talent.' },
      { id: 4, icon: TrendingUp, title: 'Optimize', desc: 'Continuously monitor and optimize to improve your performance.' }
    ]
  }
];

export default function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState("why-choose");

  return (
    <section id="capabilities" className="bg-[#002C49] text-white py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="mb-14 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3] bg-clip-text text-transparent">Alterix Global</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl lg:mx-0 mx-auto">
            Delivering comprehensive talent and technology solutions across diverse industries
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          {tabData.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-lg ${
                  isActive 
                    ? "bg-[#7B9E5A] text-white shadow-lg" 
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        
        {/* Active Tab Content */}
        {tabData.map((tab) => {
          if (activeTab !== tab.value) return null;
          
          return (
            <div key={`content-${tab.value}`} className="animate-in fade-in duration-500">
              <div className={`grid grid-cols-1 sm:grid-cols-2 ${tab.value === 'industries' ? 'lg:grid-cols-3' : 'lg:grid-cols-' + Math.min(tab.cards.length, 4)} gap-6`}>
                {tab.cards.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <Card key={cap.id} className="bg-white/5 border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 group cursor-default">
                      <CardContent className="p-7">
                        <div className="text-[#7B9E5A] mb-5 w-14 h-14 rounded-xl bg-[#7B9E5A]/10 flex items-center justify-center group-hover:bg-[#7B9E5A] group-hover:text-white transition-all duration-300">
                          <Icon size={28} strokeWidth={1.8} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">{cap.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{cap.desc}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
