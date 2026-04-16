import React from 'react';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const services = [
  {
    id: 'engineering',
    title: 'Engineering',
    desc: 'Cutting-edge product design and R&D for next-generation hardware. From ideation to advanced prototyping.',
    img: '/assets/service_eng.png'
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Management',
    desc: 'Intelligent, resilient logistics ensuring materials reach exactly where needed globally.',
    img: '/assets/service_scm.png'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    desc: 'Scale from prototype to high-volume production with incredible quality and precision robotics.',
    img: '/assets/service_mfg.png'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 pb-32">
      <div className="container mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-[#EA580C] font-extrabold text-4xl uppercase mb-2">CUSTOMIZED</h2>
          <div className="text-slate-900 font-bold text-xl">Vertically integrated solutions and services across the product lifecycle</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link href={`#${service.id}`} key={service.id} className="group block focus:outline-none focus:ring-4 focus:ring-[#EA580C]/50 rounded">
              <Card className="relative h-[550px] bg-cover bg-center overflow-hidden flex flex-col justify-end border-none rounded-none transition-transform duration-500 cursor-pointer shadow-none hover:shadow-2xl hover:-translate-y-2" style={{ backgroundImage: `url(${service.img})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/95 via-[#0B1120]/50 to-transparent z-10 transition-all duration-500 group-hover:from-[#0B1120] group-hover:via-[#0B1120]/80"></div>
                
                <div className="relative z-20 text-white p-10 lg:p-12 w-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-3xl font-extrabold mb-4 border-l-4 border-transparent group-hover:border-[#EA580C] pl-0 group-hover:pl-4 transition-all duration-300">{service.title}</h3>
                  
                  <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-500 overflow-hidden ease-out">
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    <Button className="bg-[#EA580C] hover:bg-white hover:text-[#EA580C] text-white font-bold uppercase tracking-widest transition-all duration-300 rounded-sm">
                      Discover Capabilities <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
