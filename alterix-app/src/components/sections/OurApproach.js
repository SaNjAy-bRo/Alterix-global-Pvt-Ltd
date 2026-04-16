import React from 'react';

const steps = [
  { id: '01', title: 'Discover', desc: 'We deeply understand your business challenges and requirements to identify the core objectives.' },
  { id: '02', title: 'Strategize', desc: 'Develop carefully tailored strategies aligned with your precise goals and industry landscape.' },
  { id: '03', title: 'Deliver', desc: 'Execute with precision using proven methodologies, advanced tools, and highly-skilled top talent.' },
  { id: '04', title: 'Optimize', desc: 'Continuously monitor, refine, and optimize to improve your performance and ensure sustained success.' }
];

export default function OurApproach() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-16">
          <div className="flex-1">
            <h3 className="text-[#7B9E5A] font-bold text-sm uppercase tracking-widest mb-3">Our Approach</h3>
            <h2 className="text-4xl lg:text-5xl font-black text-[#002C49] tracking-tight leading-[1.1]">
              A Proven Methodology<br className="hidden lg:block" /> for Success
            </h2>
          </div>
          <div className="flex-1 max-w-lg lg:ml-auto">
            <p className="text-base font-bold text-[#002C49] leading-relaxed">
              We leverage a structured, iterative approach that guarantees transparency, efficiency, and exceptional end-results for our partners.
            </p>
          </div>
        </div>

        {/* Hero Image for Approach */}
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden mb-20 shadow-2xl relative group cursor-default">
           <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: "url('/images/our-approach.png')" }}
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-[#002C49]/10" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
               {/* Connecting Line (Desktop) */}
               {index !== steps.length - 1 && (
                 <div className="hidden lg:block absolute top-[28px] left-[70px] w-full h-[2px] bg-slate-100 -z-10" />
               )}
               
               <div className="w-14 h-14 rounded-2xl bg-[#002C49] text-white flex items-center justify-center text-xl font-black shadow-lg mb-6 border-4 border-white group-hover:bg-[#7B9E5A] group-hover:-translate-y-1 transition-all duration-300">
                 {step.id}
               </div>
               <h4 className="text-2xl font-bold text-[#002C49] mb-3">{step.title}</h4>
               <p className="text-base font-bold text-[#002C49] leading-relaxed">
                 {step.desc}
               </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
