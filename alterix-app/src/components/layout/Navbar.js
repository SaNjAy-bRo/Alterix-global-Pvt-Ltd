"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Globe, Hexagon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all duration-500 z-[1000] border-b border-white/10 ${scrolled ? 'bg-[#0B1120]/95 backdrop-blur-md py-4 shadow-2xl border-white/5' : 'bg-transparent text-white py-6'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center text-white">
        <Link href="/" className="text-2xl font-black uppercase tracking-wider flex items-center gap-2">
          <Hexagon className="text-[#EA580C]" size={36} fill="currentColor" strokeWidth={1} />
          <span>Alterix<span className="text-[#EA580C]">Global</span></span>
        </Link>
        <div className="hidden lg:flex gap-8 items-center">
          <Link href="#capabilities" className="text-sm font-bold uppercase tracking-widest hover:text-[#EA580C] transition-colors relative group">
            Capabilities<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EA580C] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#services" className="text-sm font-bold uppercase tracking-widest hover:text-[#EA580C] transition-colors relative group">
            Industries<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EA580C] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#insights" className="text-sm font-bold uppercase tracking-widest hover:text-[#EA580C] transition-colors relative group">
            Insights<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EA580C] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#about" className="text-sm font-bold uppercase tracking-widest hover:text-[#EA580C] transition-colors relative group">
            About Us<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EA580C] transition-all group-hover:w-full"></span>
          </Link>
          
          <div className="flex items-center gap-6 ml-8 pl-8 border-l border-white/20">
            <button className="hover:text-[#EA580C] transition-colors" aria-label="Search"><Search size={20} /></button>
            <button className="hover:text-[#EA580C] transition-colors" aria-label="Region"><Globe size={20} /></button>
            <Button className="bg-[#EA580C] hover:bg-[#C2410C] text-white uppercase tracking-wider font-bold">Contact</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
