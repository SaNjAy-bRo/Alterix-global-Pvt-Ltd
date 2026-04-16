import React from 'react';
import { Globe2, Users, TrendingUp, Briefcase } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const statData = [
  { id: 1, number: '25+', label: 'Countries', icon: Globe2 },
  { id: 2, number: '500+', label: 'Clients Served', icon: Briefcase },
  { id: 3, number: '10K+', label: 'Professionals Placed', icon: Users },
  { id: 4, number: '98%', label: 'Client Retention', icon: TrendingUp },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-[#002C49] mb-4 tracking-tight">
            Our Global Impact
          </h2>
          <p className="text-base font-bold text-[#002C49] max-w-xl mx-auto leading-relaxed">
            Numbers that reflect our commitment to delivering excellence worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statData.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.id} className="bg-slate-50 border-slate-200 rounded-2xl hover:-translate-y-2 transition-all duration-300 group cursor-default">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#7B9E5A] bg-[#7B9E5A]/10 group-hover:bg-[#7B9E5A] group-hover:text-white transition-all duration-300 mb-5">
                    <IconComponent size={28} strokeWidth={2} />
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-[#002C49] mb-2 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
