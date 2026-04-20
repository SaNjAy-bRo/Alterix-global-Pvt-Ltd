import React from 'react';
import { Briefcase, Users, HeartHandshake, Send, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Careers | Alterix Global Pvt Ltd',
  description: 'Join the team at Alterix Global Pvt Ltd. Discover our open positions and career opportunities.',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_80%,0_100%)] pb-32 pt-28">
        <div className="absolute inset-0 bg-[#002C49]">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 py-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="px-5 py-2 rounded-full bg-white/10 text-white border border-white/20 text-sm font-bold tracking-widest uppercase mb-6 inline-block backdrop-blur-sm">
              We Are Hiring
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3]">Future</span><br /> With Alterix Global
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-bold max-w-2xl mx-auto mb-8">
              Join a dynamic team that values innovation, rewards hard work, and gives you the tools to accelerate your career in the global tech landscape.
            </p>
            <Link href="#submit-resume">
              <Button size="lg" className="bg-[#7B9E5A] hover:bg-white text-white hover:text-[#002C49] px-8 py-6 text-sm uppercase tracking-widest font-black transition-all duration-300 rounded shadow-xl">
                Submit Your Resume
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#002C49] mb-4">Why Work With Us?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-[#64B1C3]/10 text-[#64B1C3] rounded-full flex items-center justify-center mb-6">
                 <Briefcase size={32} />
               </div>
               <h3 className="text-xl font-black text-[#002C49] mb-3">Accelerated Growth</h3>
               <p className="text-gray-600 font-medium">Clear pathways for promotion, merit-based rewards, and opportunities to lead teams.</p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-[#7B9E5A]/10 text-[#7B9E5A] rounded-full flex items-center justify-center mb-6">
                 <HeartHandshake size={32} />
               </div>
               <h3 className="text-xl font-black text-[#002C49] mb-3">Supportive Culture</h3>
               <p className="text-gray-600 font-medium">A collaborative environment where your ideas matter and management fully supports your execution.</p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-[#002C49]/10 text-[#002C49] rounded-full flex items-center justify-center mb-6">
                 <Users size={32} />
               </div>
               <h3 className="text-xl font-black text-[#002C49] mb-3">Global Exposure</h3>
               <p className="text-gray-600 font-medium">Work directly with high-profile international clients, Fortune 500 vendors, and top tech talent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUBMIT RESUME SECTION */}
      <section id="submit-resume" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
            {/* Top decorative bar */}
            <div className="h-3 w-full bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3]"></div>
            
            <div className="p-10 md:p-16 text-center focus-within:ring-0">
               <div className="w-20 h-20 bg-blue-50 text-[#002C49] rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                 <Mail size={40} />
               </div>
               
               <h2 className="text-3xl md:text-4xl font-black text-[#002C49] mb-6">Send Us Your Resume</h2>
               <p className="text-gray-600 font-medium text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                 We are always on the lookout for talented recruiters, developers, and sales professionals to join our growing team. If you are passionate about technology and staffing, we want to hear from you.
               </p>

               <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10 max-w-md mx-auto">
                 <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Send an email to</p>
                 <a href="mailto:hr@alterixglobal.com" className="text-2xl font-black text-[#7B9E5A] hover:text-[#002C49] transition-colors break-all">
                   hr@alterixglobal.com
                 </a>
               </div>
               
               <div className="flex justify-center w-full">
                 <Link href="mailto:hr@alterixglobal.com?subject=Job Application: Alterix Global&body=Hi HR Team,%0D%0A%0D%0AI am writing to express my interest in joining Alterix Global. Please find my resume attached for your review.%0D%0A%0D%0A[Please attach your resume here]%0D%0A%0D%0AThank you,%0D%0A[Your Name]">
                   <Button className="bg-[#002C49] hover:bg-[#7B9E5A] text-white px-10 py-8 text-lg font-black tracking-wide uppercase rounded-xl transition-all shadow-xl hover:shadow-[#7B9E5A]/40 hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-3">
                     <Send size={20} /> Email Your Resume
                   </Button>
                 </Link>
               </div>

               <p className="text-sm text-gray-400 font-medium mt-6">
                 Please remember to attach your most recently updated CV/Resume.
               </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
