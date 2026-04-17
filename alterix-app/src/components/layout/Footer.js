import React from 'react';
import Link from 'next/link';
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#002C49] text-slate-100 pt-32 lg:pt-40 pb-14 [clip-path:polygon(0_5%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_12%,100%_0,100%_100%,0_100%)] -mt-24 lg:-mt-32 relative z-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
        <div className="lg:col-span-2 pr-0 lg:pr-8">
          <div className="flex items-center gap-2 text-3xl font-black uppercase mb-6">
             <span className="pb-1"><span className="text-white">Alterix</span><span className="text-[#7B9E5A] font-light">Global</span></span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-8">
            Your trusted partner for IT consulting, staffing solutions, and software development. 
            Connecting businesses with world-class talent and innovative technology.
          </p>
        </div>
        
        <div>
          <h3 className="text-[#7B9E5A] text-base font-extrabold uppercase tracking-wide mb-6">Services</h3>
          <div className="flex flex-col gap-4">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">IT &amp; Software Dev</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Staffing &amp; Recruitment</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">RPO Solutions</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Managed Services</Link>
          </div>
        </div>

        <div>
          <h3 className="text-[#7B9E5A] text-base font-extrabold uppercase tracking-wide mb-6">Company</h3>
          <div className="flex flex-col gap-4">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Leadership</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Careers</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-[#7B9E5A] text-base font-extrabold uppercase tracking-wide mb-6">Resources</h3>
          <div className="flex flex-col gap-4">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Blog</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Case Studies</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Support</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Global Locations</Link>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="container mx-auto px-6 md:px-12" style={{ paddingBottom: '40px' }}>
        <div className="flex gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-[#0077B5] hover:text-white hover:-translate-y-1 text-white" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-[#1DA1F2] hover:text-white hover:-translate-y-1 text-white" aria-label="Twitter"><TwitterIcon /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-[#1877F2] hover:text-white hover:-translate-y-1 text-white" aria-label="Facebook"><FacebookIcon /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-[#E4405F] hover:text-white hover:-translate-y-1 text-white" aria-label="Instagram"><InstagramIcon /></a>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="container mx-auto px-6 md:px-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm" style={{ paddingTop: '32px', paddingBottom: '24px', gap: '24px' }}>
        <div className="flex items-center gap-4">
          <span className="text-lg font-black uppercase"><span className="text-white">Alterix</span><span className="text-[#7B9E5A] font-light">Global</span></span>
          <span className="text-slate-600">|</span>
          <p>&copy; {new Date().getFullYear()} Alterix Global Pvt Ltd. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
