import React from 'react';
import { Target, Lightbulb, CheckCircle2, Users, Code, Globe, UserCheck, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Alterix Global Pvt Ltd',
  description: 'Learn about Alterix Global - Empowering businesses with top talent and technology solutions.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_85%,0_100%)] pb-24 pt-28">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="px-4 py-1.5 rounded-full bg-[#64B1C3]/10 text-[#64B1C3] text-xs font-bold tracking-widest uppercase mb-6 inline-block">The Alterix Story</span>
              <h1 className="text-4xl md:text-6xl font-black text-[#002C49] mb-6 tracking-tight leading-tight">
                Empowering Growth <br className="hidden lg:block"/> at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3]">Alterix Global</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
                We are a technology-driven company specializing in IT staffing, resource augmentation, software solutions, and US IT recruiting training for clients and professionals across the US and India.
              </p>
              <div className="px-6 py-4 bg-[#002C49] rounded-2xl inline-flex items-center gap-4 shadow-xl border border-[#002C49]/20 transform transition-transform hover:-translate-y-1">
                <span className="text-2xl pt-1">👉</span> 
                <span className="text-lg font-black text-white tracking-wide">
                  Hire Right. Build Smart. Grow Globally.
                </span>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3] rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg animate-pulse" />
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Business Team working together" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[450px]"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Globe className="text-[#7B9E5A]" size={24}/>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-bold uppercase">Global Reach</p>
                      <p className="text-xl font-black text-[#002C49]">USA & India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#7B9E5A]/5 to-[#64B1C3]/5 blur-3xl" />
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-full md:w-1/3 h-48 md:h-full min-h-[160px] rounded-2xl overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Mission imagery" />
                <div className="absolute inset-0 bg-[#7B9E5A]/20 mix-blend-multiply" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Target size={48} color="white" className="drop-shadow-lg" />
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-3xl font-black text-[#002C49] mb-3">Our Mission</h2>
                <div className="w-12 h-1 bg-[#7B9E5A] rounded-full mb-4" />
                <p className="text-gray-600 font-medium leading-relaxed text-lg">
                  To empower businesses with top talent and enable professionals with industry-ready skills in IT recruiting and technology.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-full md:w-1/3 h-48 md:h-full min-h-[160px] rounded-2xl overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Vision imagery" />
                <div className="absolute inset-0 bg-[#64B1C3]/20 mix-blend-multiply" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Lightbulb size={48} color="white" className="drop-shadow-lg" />
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-3xl font-black text-[#002C49] mb-3">Our Vision</h2>
                <div className="w-12 h-1 bg-[#64B1C3] rounded-full mb-4" />
                <p className="text-gray-600 font-medium leading-relaxed text-lg">
                  To become a trusted global partner in IT staffing, training, and state-of-the-art digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ALTERIX (IMAGE ACCENT INCLUDED) */}
      <section className="py-24 bg-[#002C49] relative overflow-hidden [clip-path:polygon(0_5%,100%_0,100%_95%,0_100%)] text-white mt-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-fixed bg-center mix-blend-luminosity" />
        <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-[#64B1C3] rounded-full mix-blend-screen filter blur-[128px] opacity-10" />
        <div className="absolute top-[40%] right-[-10%] w-96 h-96 bg-[#7B9E5A] rounded-full mix-blend-screen filter blur-[128px] opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10 py-12">
          <div className="grid lg:grid-cols-5 gap-16 items-center max-w-7xl mx-auto">
            <div className="lg:col-span-2">
               <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Why Choose <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3]">Alterix?</span></h2>
               <p className="text-lg text-gray-300 font-medium mb-8 leading-relaxed">
                 We bring an uncompromised commitment to quality, backed by a deep understanding of the global tech landscape. We don't just fill pipelines; we forge long term partnerships.
               </p>
               <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-2xl border-4 border-white/10 hidden lg:block" alt="Why Alterix" />
            </div>

            <div className="lg:col-span-3 flex flex-col gap-6">
              {[
                "Strong expertise in US IT hiring",
                "Real-time industry-focused training programs",
                "End-to-end talent and technology solutions",
                "Fast, transparent, and reliable delivery",
                "Focus on long-term partnerships"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-5 p-6 bg-white/[0.04] hover:bg-white/[0.08] transition-colors rounded-2xl border border-white/10 backdrop-blur-md">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <CheckCircle2 className="text-[#64B1C3]" size={24} />
                  </div>
                  <p className="font-bold text-xl text-gray-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM & EXPERTISE */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center max-w-4xl mx-auto relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] font-black opacity-5 text-gray-200 pointer-events-none select-none z-0">
               TEAM
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#002C49] mb-8 relative z-10">Our Team & Philosophy</h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed relative z-10">
              Our team includes experienced recruiters, trainers, developers, and consultants who bring real-world knowledge from the IT staffing and technology industry. We don’t just train — we build job-ready professionals and deliver real business results.
            </p>
          </div>

          <div className="mb-16 text-center py-4 bg-[#F8F9FA] rounded-2xl max-w-max mx-auto px-10">
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7B9E5A] to-[#002C49]">Our Core Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* IT Hiring Section */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=200')] bg-cover opacity-10 rounded-bl-full mask-image-b" />
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 bg-[#002C49]/5 rounded-2xl text-[#002C49] group-hover:bg-[#002C49] group-hover:text-white transition-colors duration-300">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-2xl font-black text-[#002C49]">IT Hiring & Staffing</h3>
              </div>
              <ul className="space-y-4">
                 {['US IT Recruiting', 'Contract (C2C / W2) hiring', 'Resource Augmentation', 'Bench Sales & Consultant Marketing'].map((i, k) => (
                   <li key={k} className="flex items-start gap-4 text-gray-700 font-semibold">
                     <span className="w-2 h-2 mt-2 rounded-full bg-[#7B9E5A] shrink-0" /> {i}
                   </li>
                 ))}
              </ul>
            </div>

            {/* Training Section */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=200')] bg-cover opacity-10 rounded-bl-full" />
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="p-4 bg-[#7B9E5A]/10 rounded-2xl text-[#7B9E5A] group-hover:bg-[#7B9E5A] group-hover:text-white transition-colors duration-300">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-black text-[#002C49]">US IT Recruiting Training</h3>
              </div>
              <ul className="space-y-4 mb-8 relative z-10">
                 {[
                   'End-to-end US IT Recruitment Training', 
                   'Hands-on training with real-time requirements', 
                   'Resume marketing & job portal training', 
                   'Vendor & client communication',
                   'Interview coordination & placement support'
                 ].map((i, k) => (
                   <li key={k} className="flex items-start gap-4 text-gray-700 font-semibold">
                     <span className="w-2 h-2 mt-2 rounded-full bg-[#7B9E5A] shrink-0" /> {i}
                   </li>
                 ))}
              </ul>
              <div className="bg-[#002C49] p-5 rounded-xl border-l-4 border-[#7B9E5A] relative z-10">
                <p className="text-sm font-bold text-white leading-relaxed">
                  <span className="text-[#64B1C3]">👉 Focus:</span> Practical training + real-time exposure + placement guidance
                </p>
              </div>
            </div>

            {/* Software Dev Section */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=200')] bg-cover opacity-10 rounded-bl-full" />
              <div className="flex items-center gap-5 mb-8 position-relative z-10">
                <div className="p-4 bg-[#64B1C3]/10 rounded-2xl text-[#64B1C3] group-hover:bg-[#64B1C3] group-hover:text-white transition-colors duration-300">
                  <Code size={32} />
                </div>
                <h3 className="text-2xl font-black text-[#002C49]">Software Development</h3>
              </div>
              <ul className="space-y-4 mb-8 relative z-10">
                 {['Custom Software Development', 'Web Application Development', 'API Development & Integration'].map((i, k) => (
                   <li key={k} className="flex items-start gap-4 text-gray-700 font-semibold">
                     <span className="w-2 h-2 mt-2 rounded-full bg-[#64B1C3] shrink-0" /> {i}
                   </li>
                 ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-gray-100 relative z-10">
                <h4 className="font-extrabold text-[#002C49] mb-4 text-xs uppercase tracking-widest">Technologies We Work On</h4>
                <div className="flex flex-wrap gap-2">
                  {['Java / Spring Boot', 'AWS / Azure / GCP', 'DevOps & Kubernetes', 'React / Angular'].map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-[#F8F9FA] border border-gray-100 text-[#002C49] text-sm rounded-lg font-bold shadow-sm">
                       {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Web Dev & Consulting Section */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200')] bg-cover opacity-10 rounded-bl-full" />
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="p-4 bg-[#002C49]/5 rounded-2xl text-[#002C49] group-hover:bg-[#002C49] group-hover:text-white transition-colors duration-300">
                  <Globe size={32} />
                </div>
                <h3 className="text-2xl font-black text-[#002C49]">Website Development</h3>
              </div>
              <ul className="space-y-4 mb-8 relative z-10">
                 {['Corporate Websites', 'Startup Websites', 'Landing Pages', 'Maintenance & Support'].map((i, k) => (
                   <li key={k} className="flex items-start gap-4 text-gray-700 font-semibold">
                     <span className="w-2 h-2 mt-2 rounded-full bg-[#002C49] shrink-0" /> {i}
                   </li>
                 ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-gray-100 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#7B9E5A]/10 p-2 rounded-lg">
                    <UserCheck className="text-[#7B9E5A]" size={20} />
                  </div>
                  <h4 className="font-black text-[#002C49] text-lg">Consulting Services</h4>
                </div>
                <p className="text-gray-600 font-medium pl-14">
                  We help businesses with hiring strategy and technology decisions to drive growth and efficiency.
                </p>
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
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Ready to Build Smart <br/> and Grow Globally?</h2>
          <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-90">
            Let's connect to discuss how we can help with your talent, training, or technology solutions.
          </p>
          <Link href="/contact">
            <Button size="lg" className="border-2 border-transparent bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3] text-white hover:from-[#002C49] hover:to-[#002C49] hover:border-white px-10 py-7 text-sm uppercase tracking-widest font-black transition-all duration-300 rounded shadow-2xl">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
