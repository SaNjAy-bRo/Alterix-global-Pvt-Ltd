import React from 'react';

const industries = [
  { id: 1, title: 'Information Technology', desc: 'Software development, cloud systems, and IT infrastructure solutions.', bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: 'Healthcare', desc: 'Robust solutions for medical technology, compliance, and clinical applications.', bg: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: 'Finance & Banking', desc: 'Secure, high-performance systems supporting modern financial services.', bg: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: 'Retail & E-commerce', desc: 'Digital transformation solutions for modern retail experiences.', bg: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: 'Manufacturing', desc: 'Process automation and supply chain optimization solutions.', bg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
  { id: 6, title: 'Telecommunications', desc: 'Network infrastructure and communication technology services.', bg: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" }
];

export default function IndustriesServed() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-[#7B9E5A] font-bold text-sm uppercase tracking-widest mb-3">Industries We Serve</h3>
          <h2 className="text-4xl lg:text-5xl font-black text-[#002C49] mb-6 tracking-tight">
            Expertise Across Every Sector
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((ind) => (
            <div key={ind.id} className="group relative h-[320px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('${ind.bg}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C49] via-[#002C49]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <div className="w-10 h-1 bg-[#7B9E5A] mb-4 transform group-hover:scale-x-150 transition-transform duration-300 origin-left rounded-full" />
                <h3 className="text-2xl font-bold text-white mb-3">{ind.title}</h3>
                <p className="text-base font-bold text-white leading-relaxed transition-all duration-300 transform translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
