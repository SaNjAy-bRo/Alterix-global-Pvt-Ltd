import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="relative bg-[#002C49] pt-32 lg:pt-48 pb-40 lg:pb-56 overflow-hidden [clip-path:polygon(0_4%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_8%,100%_0%,100%_100%,0_100%)] z-10 -mt-16">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-screen"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80')" }}
      />
      
      {/* Gradients Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002C49]/95 via-[#002C49]/80 to-[#002C49]/40" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#002C49] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-30">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-[1.5] relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Ready to <span className="bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3] bg-clip-text text-transparent">Accelerate</span><br className="hidden md:block" /> Your Business?
            </h2>
            <p className="text-base font-bold text-white max-w-xl leading-relaxed">
              Partner with Alterix Global to unlock top talent, streamline operations, and drive impactful growth across your enterprise.
            </p>
            {/* Decorative line */}
            <div className="absolute -left-6 top-2 w-1.5 h-[80%] bg-gradient-to-b from-[#7B9E5A] to-[#64B1C3] rounded-full hidden md:block" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-auto">
            <Button size="lg" className="bg-[#7B9E5A] hover:bg-white hover:text-[#002C49] text-white px-10 py-8 text-sm uppercase tracking-widest font-bold transition-all duration-300 rounded shadow-xl hover:shadow-2xl w-full sm:w-auto">
              Contact Us <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-[#64B1C3] text-[#64B1C3] hover:bg-[#64B1C3] hover:text-[#002C49] px-10 py-8 text-sm uppercase tracking-widest font-bold transition-all duration-300 rounded w-full sm:w-auto">
              Locations <Globe className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
