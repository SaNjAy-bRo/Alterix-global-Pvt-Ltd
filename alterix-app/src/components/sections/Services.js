import React from 'react';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const services = [
  {
    id: 'it-software',
    title: 'IT & Software Development',
    desc: 'We design and deliver scalable, high-performance software tailored to your business goals. From custom applications to enterprise systems, we ensure innovation meets execution.',
    img: '/assets/service_eng.png'
  },
  {
    id: 'staffing',
    title: 'Staffing & Recruitment',
    desc: 'We help organizations hire the right talent at the right time through flexible hiring models: Temporary Staffing, Permanent Placement, and Contract-Based Hiring.',
    img: '/assets/service_scm.png'
  },
  {
    id: 'rpo',
    title: 'Recruitment Process Outsourcing',
    desc: 'Our RPO solutions streamline your hiring process end-to-end, acting as an extension of your internal HR team to improve efficiency and hiring quality.',
    img: '/assets/service_mfg.png'
  },
  {
    id: 'msp',
    title: 'Managed Services (MSP)',
    desc: 'We provide proactive, subscription-based managed services to oversee IT infrastructure, end-user systems, and workforce operations including IT infrastructure management.',
    img: '/assets/insight_img.png'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 pb-32">
      <div className="container mx-auto px-8">
        <div className="mb-12">
          <h2 className="font-light text-5xl uppercase mb-4 bg-gradient-to-b from-[#7B9E5A] to-[#64B1C3] bg-clip-text text-transparent w-fit pb-1">
            <span className="font-bold">OUR CORE</span> <span className="font-black">SERVICES</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3] mb-4"></div>
          <div className="text-[#002C49] font-bold text-xl">Empowering organizations with world-class talent and innovative technology</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link href={`#${service.id}`} key={service.id} className="group block focus:outline-none focus:ring-4 focus:ring-[#1F80B5]/50 rounded">
              <Card className="relative h-[550px] bg-cover bg-center overflow-hidden flex flex-col justify-end border-none rounded-none transition-transform duration-500 cursor-pointer shadow-none hover:shadow-2xl hover:-translate-y-2" style={{ backgroundImage: `url(${service.img})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#002C49]/95 via-[#002C49]/50 to-transparent z-10 transition-all duration-500 group-hover:from-[#002C49] group-hover:via-[#002C49]/80"></div>
                
                <div className="relative z-20 text-white p-10 lg:p-12 w-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-3xl font-extrabold mb-4 border-l-4 border-transparent group-hover:border-[#1F80B5] pl-0 group-hover:pl-4 transition-all duration-300">{service.title}</h3>
                  
                  <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-500 overflow-hidden ease-out">
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    <Button className="bg-[#1F80B5] hover:bg-white hover:text-[#1F80B5] text-white font-bold uppercase tracking-widest transition-all duration-300 rounded-sm mt-4 lg:mt-0">
                      Learn More <ChevronRight className="ml-2 w-4 h-4" />
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
