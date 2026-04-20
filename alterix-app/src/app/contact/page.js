import React from 'react';
import { MapPin, Mail, Phone, Globe, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Contact Us | Alterix Global Pvt Ltd',
  description: 'Get in touch with Alterix Global for IT talent, recruiting training, or technology solutions.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] pt-24 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#002C49] text-white [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_80%,0_100%)] pb-32 pt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3]">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-bold max-w-2xl mx-auto">
              Looking for talent, training, or technology solutions? Alterix Global is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION & FORM */}
      <section className="py-12 -mt-24 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
            
            {/* Contact Details Cards */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              
              {/* Location Card */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow flex leading-relaxed">
                <div className="mr-6 bg-[#7B9E5A]/10 p-4 rounded-full text-[#7B9E5A] h-fit shrink-0">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#002C49] mb-3">Location</h3>
                  <h4 className="font-bold text-gray-900 mb-1">Alterix Global Pvt Ltd</h4>
                  <p className="text-gray-600 font-medium">
                    1- 98/1/JSIC/408, Jain Sadguru Image's Capital Park, 4th floor, Unit No. 408, Image Gardens road, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana, 500081
                  </p>
                </div>
              </div>

              {/* Contact Details Card */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow flex">
                <div className="mr-6 bg-[#64B1C3]/10 p-4 rounded-full text-[#64B1C3] h-fit shrink-0">
                  <Phone size={32} />
                </div>
                <div className="w-full">
                  <h3 className="text-2xl font-black text-[#002C49] mb-5">Contact Details</h3>
                  
                  <div className="flex flex-col gap-4">
                    <a href="mailto:info@alterixglobal.com" className="group flex items-center gap-3 text-gray-700 font-bold hover:text-[#7B9E5A] transition-colors">
                      <Mail size={18} className="text-gray-400 group-hover:text-[#7B9E5A]" /> info@alterixglobal.com
                    </a>
                    <a href="mailto:hr@alterixglobal.com" className="group flex items-center gap-3 text-gray-700 font-bold hover:text-[#7B9E5A] transition-colors">
                      <Mail size={18} className="text-gray-400 group-hover:text-[#7B9E5A]" /> hr@alterixglobal.com
                    </a>
                    <a href="mailto:sales@alterixglobal.com" className="group flex items-center gap-3 text-gray-700 font-bold hover:text-[#7B9E5A] transition-colors">
                      <Mail size={18} className="text-gray-400 group-hover:text-[#7B9E5A]" /> sales@alterixglobal.com
                    </a>
                    <a href="tel:+916301692839" className="group flex items-center gap-3 text-gray-700 font-bold hover:text-[#64B1C3] transition-colors pt-2 border-t border-gray-100">
                      <Phone size={18} className="text-gray-400 group-hover:text-[#64B1C3]" /> +91 6301-692839
                    </a>
                    <a href="https://www.alterixglobal.com" className="group flex items-center gap-3 text-gray-700 font-bold hover:text-[#002C49] transition-colors">
                      <Globe size={18} className="text-gray-400 group-hover:text-[#002C49]" /> www.alterixglobal.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-[#002C49] mb-2">Send us a message</h2>
                <div className="w-16 h-1.5 bg-gradient-to-r from-[#7B9E5A] to-[#64B1C3] rounded-full" />
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-gray-700">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7B9E5A] transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-gray-700">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7B9E5A] transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#64B1C3] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#64B1C3] transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-gray-700">Subject / Inquiry Type</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#002C49] transition-all font-medium text-gray-700"
                  >
                    <option value="">Select an option</option>
                    <option value="staffing">IT Staffing & Recruiting</option>
                    <option value="training">US IT Recruiting Training</option>
                    <option value="software">Software Development</option>
                    <option value="website">Website Development</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#002C49] transition-all resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <Button type="button" size="lg" className="w-full flex items-center justify-center gap-2 bg-[#002C49] hover:bg-[#7B9E5A] text-white px-8 py-7 text-sm uppercase tracking-widest font-black transition-all duration-300 rounded shadow-lg">
                  Send Message <Send size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION OPTIONALLY */}
      <section className="mt-10 py-10 bg-white border-t border-gray-100">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-gray-100 relative">
               {/* Embed Google Map via iframe */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.315664166299!2d78.3845012!3d17.4445831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alterix Global Location"
                ></iframe>
            </div>
         </div>
      </section>
    </main>
  );
}
