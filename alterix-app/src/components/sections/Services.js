import React from 'react';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const services = [
  {
    id: 'it-software',
    title: 'IT & Software Development',
    desc: 'Scalable, high-performance software tailored to your business goals — from custom apps to enterprise systems.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'staffing',
    title: 'Staffing & Recruitment',
    desc: 'Hire the right talent at the right time through flexible models: Temporary, Permanent, and Contract-Based.',
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'rpo',
    title: 'Recruitment Process Outsourcing',
    desc: 'End-to-end RPO solutions that streamline hiring and improve quality as an extension of your HR team.',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'msp',
    title: 'Managed Services (MSP)',
    desc: 'Proactive managed services to oversee IT infrastructure, end-user systems, and workforce operations.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-[#002C49] mb-4 tracking-tight">
            Our Core Services
          </h2>
          <p className="text-base font-bold text-[#002C49] max-w-2xl mx-auto leading-relaxed">
            Empowering organizations with world-class talent and innovative technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link href={`#${service.id}`} key={service.id} className="group block">
              <Card className="relative h-[480px] bg-cover bg-center overflow-hidden flex flex-col justify-end border-none rounded-2xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2" style={{ backgroundImage: `url(${service.img})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#002C49] via-[#002C49]/80 lg:via-[#002C49]/40 to-transparent z-10 transition-all duration-500 lg:group-hover:from-[#002C49] lg:group-hover:via-[#002C49]/80"></div>
                
                <div className="relative z-20 text-white p-8 transform translate-y-0 lg:translate-y-8 lg:group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  
                  <div className="max-h-[200px] opacity-100 lg:opacity-0 lg:max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-[200px] transition-all duration-500 overflow-hidden">
                    <p className="text-base font-bold text-white leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <Button size="sm" className="bg-[#7B9E5A] hover:bg-white hover:text-[#7B9E5A] text-white font-bold uppercase tracking-wider text-xs rounded">
                      Learn More <ChevronRight className="ml-1 w-4 h-4" />
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
