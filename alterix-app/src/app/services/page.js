import React from 'react';
import { Briefcase, Users, Code, Globe, UserCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services | Alterix Global Pvt Ltd',
  description: 'Explore the expert services provided by Alterix Global, including IT staffing, software development, and recruiting training.',
};

const services = [
  {
    title: 'IT Staffing & Recruiting',
    description: 'We provide highly skilled IT professionals for contract and full-time roles across global clients. Connecting top talent with visionary companies to accelerate business outcomes.',
    icon: <Briefcase size={28} />,
    color: '#002C49',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'US IT Recruiting Training',
    description: 'We train individuals to become industry-ready US IT recruiters with real-time exposure, hands-on practical knowledge, and premium placement support.',
    icon: <Users size={28} />,
    color: '#7B9E5A',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Software Development',
    description: 'We build scalable, secure, and high-performance applications tailored to solve complex business needs and drive technological evolution.',
    icon: <Code size={28} />,
    color: '#64B1C3',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Website Development',
    description: 'We create modern, ultra-responsive, and high-converting websites optimized for user experience to elevate businesses and startups alike.',
    icon: <Globe size={28} />,
    color: '#002C49',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Consulting Services',
    description: 'We provide strategic consulting to help businesses streamline hiring strategies, plan digital transformations, and make sound technology decisions.',
    icon: <UserCheck size={28} />,
    color: '#7B9E5A',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_80%,0_100%)] pb-32 pt-28">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80')] bg-cover mask-image-gradient-left hidden lg:block" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="px-4 py-1.5 rounded-full bg-[#7B9E5A]/10 text-[#7B9E5A] text-sm font-bold tracking-widest uppercase mb-6 inline-block">Our Solutions</span>
            <h1 className="text-4xl md:text-6xl font-black text-[#002C49] mb-6 tracking-tight">
              Transforming Business <br /> Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3]">Expert Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto mb-8">
              End-to-end talent acquisition, world-class training, and cutting-edge technology solutions designed to help your business scale smarter.
            </p>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#7B9E5A]/10 to-[#64B1C3]/10 blur-3xl z-0" />
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 -mt-24 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto auto-rows-fr">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl shadow-xl border border-gray-100 relative group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-60 w-full rounded-t-3xl overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-[#002C49]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                </div>

                {/* Floating Icon positioned relative to the card, so it overlaps the rounded image without being hidden */}
                <div 
                  className="absolute top-52 left-8 z-30 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500"
                  style={{ backgroundColor: service.color }}
                >
                  {service.icon}
                </div>

                {/* Content Section */}
                <div className="p-8 pt-12 flex flex-col flex-grow relative bg-white rounded-b-3xl mt-2">
                  <h2 className="text-2xl font-black text-[#002C49] mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-600 font-medium leading-relaxed text-base flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL BENEFITS SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[#002C49]/20 mix-blend-multiply z-10"></div>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" alt="Team Collaboration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                       <Globe className="text-white" size={40} />
                    </div>
                </div>
             </div>
             
             <div>
               <h2 className="text-4xl font-black text-[#002C49] mb-6">Why Partner With Us?</h2>
               <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                 Alterix Global isn't just a service provider; we are your strategic partner in growth. We seamlessly integrate with your existing workflows to deliver unparalleled quality across staffing and development.
               </p>
               
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="w-12 h-12 rounded-full bg-[#7B9E5A]/10 text-[#7B9E5A] flex items-center justify-center shrink-0">
                       <UserCheck size={24} />
                     </div>
                     <div>
                       <h4 className="text-xl font-bold text-[#002C49] mb-2">Dedicated Experts</h4>
                       <p className="text-gray-600 font-medium">Domain-specific professionals ensuring the highest quality of service delivery.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 h-12 rounded-full bg-[#64B1C3]/10 text-[#64B1C3] flex items-center justify-center shrink-0">
                       <ArrowRight size={24} />
                     </div>
                     <div>
                       <h4 className="text-xl font-bold text-[#002C49] mb-2">Result-Oriented Action</h4>
                       <p className="text-gray-600 font-medium">We measure our success solely by the tangible growth and performance of our clients.</p>
                     </div>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-[#002C49] text-white text-center relative overflow-hidden [clip-path:polygon(0_5%,100%_0,100%_100%,0_100%)]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-[0.08] bg-cover bg-fixed bg-center" />
        <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-[#64B1C3] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" />
        <div className="absolute top-[40%] right-[-10%] w-96 h-96 bg-[#7B9E5A] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />
        
        <div className="container mx-auto px-6 relative z-10 pt-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Need a Customized Solution?</h2>
          <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-90">
            Whether it's bringing top IT talent to your team or building scalable software, let's talk about your requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" className="border-2 border-transparent bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3] text-white hover:from-[#002C49] hover:to-[#002C49] hover:border-white px-10 py-7 text-sm uppercase tracking-widest font-black transition-all duration-300 rounded shadow-2xl">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
