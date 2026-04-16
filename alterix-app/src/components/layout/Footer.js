import React from 'react';
import Link from 'next/link';
import { Hexagon, Mail, MessageCircle, Share2, Link2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#002C49] text-slate-100 pt-40 pb-12 relative [clip-path:polygon(0_8vw,100%_0,100%_100%,0%_100%)] mt-[-8vw] z-20">
      <div className="absolute bottom-0 right-0 w-1/2 h-full pointer-events-none [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]" style={{ background: 'repeating-linear-gradient(-45deg, rgba(234, 88, 12, 0.05) 0px, rgba(234, 88, 12, 0.05) 2px, transparent 2px, transparent 20px)' }}></div>
      <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
        <div className="lg:col-span-2 pr-0 lg:pr-8">
          <div className="flex items-center gap-2 text-3xl font-black uppercase mb-6">
             <Hexagon stroke="url(#jabil-gradient)" size={36} fill="none" strokeWidth={2} />
             <span className="bg-gradient-to-b from-[#7B9E5A] to-[#64B1C3] bg-clip-text text-transparent pb-1">Alterix<span className="font-light">Global</span></span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-8">
            The trusted partner for the world's leading brands, offering advanced engineering, 
            supply chain, and manufacturing solutions. Since our inception, we have been dedicated 
            to building the technologies that shape tomorrow.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-[#64B1C3] hover:text-[#002C49] hover:-translate-y-1 text-white" aria-label="Mail"><Mail size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-[#64B1C3] hover:text-[#002C49] hover:-translate-y-1 text-white" aria-label="Chat"><MessageCircle size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-[#64B1C3] hover:text-[#002C49] hover:-translate-y-1 text-white" aria-label="Share"><Share2 size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-[#64B1C3] hover:text-[#002C49] hover:-translate-y-1 text-white" aria-label="Links"><Link2 size={18} /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-[#7B9E5A] text-base font-extrabold uppercase tracking-wide mb-6">Solutions</h3>
          <div className="flex flex-col gap-4">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Advanced Engineering</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Supply Chain Management</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Precision Manufacturing</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Capabilities</Link>
          </div>
        </div>

        <div>
          <h3 className="text-[#7B9E5A] text-base font-extrabold uppercase tracking-wide mb-6">Company</h3>
          <div className="flex flex-col gap-4">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Leadership</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Careers</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Investor Relations</Link>
          </div>
        </div>

        <div>
          <h3 className="text-[#7B9E5A] text-base font-extrabold uppercase tracking-wide mb-6">Insights & Help</h3>
          <div className="flex flex-col gap-4">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Blog</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Case Studies</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Contact Support</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Global Locations</Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm gap-4">
        <p>&copy; {new Date().getFullYear()} Alterix Global Pvt Ltd. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
