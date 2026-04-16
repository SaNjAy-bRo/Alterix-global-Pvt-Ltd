import React from 'react';
import { Globe2, Users, Cpu, ShieldCheck, Handshake } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    { icon: Globe2, title: 'Global Reach, Proven Expertise', desc: 'Access to a worldwide network of professionals and industry-leading methodologies.' },
    { icon: Users, title: 'Access to Top-Tier Talent', desc: 'We connect you with highly skilled professionals across IT and Non-IT domains.' },
    { icon: Cpu, title: 'Scalable & Flexible Solutions', desc: 'Engagement models designed to adapt and scale seamlessly with your business.' },
    { icon: ShieldCheck, title: 'Technology-Driven Approach', desc: 'Embracing advanced technology for optimal efficiency and cutting-edge operations.' },
    { icon: Handshake, title: 'Long-Term Partnerships', desc: 'Committed to ongoing support, collaboration, and driving continuous growth.' }
  ];

  return (
    <section className="bg-[#002C49] py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left: Image Side */}
        <div className="flex-1 w-full lg:w-1/2 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-square lg:aspect-[4/5] z-10 group">
            <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: "url('/images/why-choose-us.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002C49] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="bg-[#7B9E5A] w-12 h-2 mb-4 rounded-full" />
              <h3 className="text-white text-3xl font-bold">Unlocking Potential</h3>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#7B9E5A]/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#64B1C3]/20 rounded-full blur-3xl -z-10" />
        </div>

        {/* Right: Content Side */}
        <div className="flex-1 w-full lg:w-1/2">
          <h3 className="text-[#7B9E5A] font-bold text-sm uppercase tracking-widest mb-3">Why Choose Us</h3>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 leading-[1.15] tracking-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3]">Excellence.</span><br/> Driven by Results.
          </h2>

          <div className="flex flex-col gap-6">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="flex gap-6 items-start group hover:-translate-y-1 transition-transform duration-300">
                  <div className="mt-1 bg-white/5 border border-white/10 rounded-xl p-4 text-[#7B9E5A] group-hover:bg-[#7B9E5A] group-hover:text-white transition-all duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{point.title}</h4>
                    <p className="text-base font-bold text-slate-400 group-hover:text-white transition-colors">{point.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
