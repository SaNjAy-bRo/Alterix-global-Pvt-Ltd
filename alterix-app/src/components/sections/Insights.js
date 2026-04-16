import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from 'lucide-react';

const insights = [
  { id: 1, cat: 'Article', title: 'How Automated Manufacturing is Reducing Global Carbon Footprints', date: 'April 12, 2026' },
  { id: 2, cat: 'Case Study', title: 'Scaling Autonomous Vehicle Production Lines in Record Time', date: 'April 8, 2026' },
  { id: 3, cat: 'News', title: 'Alterix Global Announces New 5G Test Facility in Singapore', date: 'March 29, 2026' },
  { id: 4, cat: 'Article', title: 'The Future of Supply Chain Resilience Post-Pandemic', date: 'March 15, 2026' }
];

export default function InsightsSection() {
  return (
    <section id="insights" className="bg-slate-50 py-32">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-[#1F80B5] font-black text-5xl uppercase mb-2">INSIGHTFUL</h2>
            <div className="text-slate-900 font-bold text-xl">The latest findings and news from Alterix Global.</div>
          </div>
          <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:border-[#1F80B5] hover:text-[#1F80B5] font-bold uppercase tracking-wider h-12 px-6">
            View All Updates
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((item) => (
            <div key={item.id} className="group relative focus:outline-none">
              <Card className="h-full flex flex-col overflow-hidden border-none shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] cursor-pointer">
                <div className="h-[220px] bg-cover bg-center overflow-hidden">
                   <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 bg-cover bg-center" style={{ backgroundImage: `url('/assets/insight_img.png')` }}></div>
                </div>
                <CardContent className="p-8 flex-1 flex flex-col bg-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#1F80B5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <div className="text-[#1F80B5] text-xs font-extrabold uppercase mb-3 bg-[#1F80B5]/10 inline-block px-3 py-1 rounded-full w-max">{item.cat}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 leading-snug lg:group-hover:text-[#1F80B5] transition-colors duration-300">{item.title}</h3>
                  <div className="mt-auto flex justify-between items-center text-sm text-slate-500 border-t border-slate-100 pt-4">
                    <span className="font-medium tracking-wide">{item.date}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-[#1F80B5] transition-colors duration-300" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
