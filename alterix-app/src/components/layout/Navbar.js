"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <svg width="0" height="0" className="absolute">
        <linearGradient id="jabil-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7B9E5A" />
          <stop offset="100%" stopColor="#64B1C3" />
        </linearGradient>
      </svg>
      <nav className={`sticky top-0 left-0 w-full transition-all duration-300 z-[1000] border-b ${scrolled ? 'bg-[#002C49] shadow-lg py-4 border-white/10' : 'bg-[#002C49] py-5 border-white/10'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center text-white">
          <Link href="/" className="text-2xl font-black uppercase tracking-wider flex items-center gap-2">
            <span className="pb-1"><span className="text-white">Alterix</span><span className="text-[#7B9E5A] font-light">Global</span></span>
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileOpen(!mobileOpen)} 
              className="text-white hover:text-[#7B9E5A] transition-colors p-2" 
              aria-label="Menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex gap-8 items-center">
            <Link href="/" className="text-sm font-bold uppercase tracking-widest hover:text-[#7B9E5A] transition-colors relative group">
              Home<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7B9E5A] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#about" className="text-sm font-bold uppercase tracking-widest hover:text-[#7B9E5A] transition-colors relative group">
              About Us<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7B9E5A] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#services" className="text-sm font-bold uppercase tracking-widest hover:text-[#7B9E5A] transition-colors relative group">
              Services<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7B9E5A] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/careers" className="text-sm font-bold uppercase tracking-widest hover:text-[#7B9E5A] transition-colors relative group">
              Careers<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7B9E5A] transition-all group-hover:w-full"></span>
            </Link>
            
            <div className="flex items-center gap-6 ml-8 pl-8 border-l border-white/20">
              <button className="text-slate-300 hover:text-[#7B9E5A] transition-colors" aria-label="Search"><Search size={20} /></button>
              <button className="text-slate-300 hover:text-[#7B9E5A] transition-colors" aria-label="Region"><Globe size={20} /></button>
              <Button className="bg-[#7B9E5A] hover:bg-[#002C49] text-white uppercase tracking-wider font-bold">Contact</Button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="container mx-auto px-6 pt-4 pb-6 flex flex-col gap-1 border-t border-white/10 mt-4">
            <Link href="/" onClick={handleLinkClick} className="py-3 px-4 text-sm font-bold uppercase tracking-widest text-white hover:text-[#7B9E5A] hover:bg-white/5 rounded-lg transition-all">
              Home
            </Link>
            <Link href="#about" onClick={handleLinkClick} className="py-3 px-4 text-sm font-bold uppercase tracking-widest text-white hover:text-[#7B9E5A] hover:bg-white/5 rounded-lg transition-all">
              About Us
            </Link>
            <Link href="#services" onClick={handleLinkClick} className="py-3 px-4 text-sm font-bold uppercase tracking-widest text-white hover:text-[#7B9E5A] hover:bg-white/5 rounded-lg transition-all">
              Services
            </Link>
            <Link href="/careers" onClick={handleLinkClick} className="py-3 px-4 text-sm font-bold uppercase tracking-widest text-white hover:text-[#7B9E5A] hover:bg-white/5 rounded-lg transition-all">
              Careers
            </Link>
            <div className="mt-3 px-4">
              <Button className="bg-[#7B9E5A] hover:bg-[#002C49] text-white uppercase tracking-wider font-bold w-full py-6">Contact</Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
