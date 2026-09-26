"use client";

import { useEffect, useState } from "react";
import { ArrowRight, HeartHandshake, BadgeCheck, Headset, ShieldCheck, Settings, Users, Star, Clock, CheckCircle2, Factory, Phone, Mail, MapPin, Wrench } from "lucide-react";

// Social Icons Data Component
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

const WhatsAppIconExact = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const InstagramIconExact = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);


export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#FFFFFF] font-sans w-full min-h-screen flex flex-col items-center">

      {/* Common Header Wrapper */}
      <div className={`w-full flex justify-center fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#111111]/80 backdrop-blur-lg border-b border-white/5 shadow-sm' : 'bg-transparent border-b border-transparent'}`}>
        <header className="relative z-20 flex-shrink-0 flex items-center justify-between px-6 md:px-10 pt-3 pb-1 md:pt-4 md:pb-1 max-w-[1150px] mx-auto w-full">
          <a href="/" className="flex items-center gap-2 ml-0 md:ml-4 group">
            <img src="/autotricks logo.png" alt="AutoTricks" className="h-14 md:h-[65px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300" />
          </a>

          <nav className="hidden md:flex gap-12 text-xs md:text-[17px] font-medium text-gray-300">
            <a href="#home" className="text-[#FF7A00] pb-1 border-b-2 border-[#FF7A00]">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
          </nav>

          <button onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openBookingModal')); }} className="hidden md:inline-block bg-[#FF7A00] hover:bg-[#e06b00] text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full text-[11px] font-bold transition-colors mr-2 md:mr-4 md:text-[14.5px]">
            Book Service
          </button>


          <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden flex items-center justify-center p-2 text-white/80 hover:text-white transition-colors mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          </button>
        </header>
      </div>

        {/* Mobile Menu Overlay */}

        {/* Mobile Menu Backdrop */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`md:hidden fixed inset-0 bg-black/60 z-[55] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        />

        {/* Mobile Menu Sidebar */}
        <div className={`md:hidden fixed inset-y-0 right-0 w-[75vw] sm:w-[300px] bg-[#111111] z-[60] flex flex-col pt-24 px-8 transition-transform duration-300 ease-in-out border-l border-white/10 shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-5 right-6 text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <div className="flex items-center gap-2 mb-10">
            <img src="/autotricks logo.png" alt="AutoTricks" className="h-10 w-auto object-contain" />
          </div>

          <nav className="flex flex-col gap-6 text-lg md:text-[24px] font-semibold text-white/90">
            <a href="/#home" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-white/10 pb-3">Home</a>
            <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-white/10 pb-3">Services</a>
            <a href="/#why-us" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-white/10 pb-3">Why Us</a>
            <a href="/#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-white/10 pb-3">How It Works</a>
            <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-white/10 pb-3">About</a>
          </nav>

          <button onClick={() => { setIsMobileMenuOpen(false); if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openBookingModal')); }} className="mt-8 bg-[#FF7A00] text-white px-8 py-3.5 rounded-full font-bold shadow-[0_4px_20px_rgba(255,122,0,0.3)] w-full text-center">
            Book Service Now
          </button>
        </div>
      

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full bg-[#111111] text-white pt-28 md:pt-36 pb-14 px-6 sm:px-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-3xl">
            <h6 className="text-[#FF7A00] text-[11px] md:text-[14px] font-extrabold tracking-[0.2em] mb-4 uppercase">
              About AutoTricks
            </h6>
            <h1 className="text-2xl md:text-[46px] font-extrabold leading-tight mb-6">
              Changing the Way You <br className="hidden md:block" />Care for Your Car.
            </h1>
            <p className="text-gray-400 text-[14px] md:text-[18px] leading-relaxed max-w-2xl mx-auto">
              AutoTricks brings premium, hassle-free car servicing directly to you. No more workshops, no more hidden costs—just pure convenience, ultimate transparency, and smoother rides.
            </p>
          </div>
        </section>

        {/* Our Story / Values */}
        <section className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.4fr_1fr] gap-12 md:gap-10 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-[36px] font-extrabold text-[#1A1A1A] leading-tight">
                We Believe Car Care Should Be <span className="text-[#FF7A00]">Effortless.</span>
              </h2>
              <p className="text-gray-500 text-[14px] md:text-[18px] leading-relaxed">
                Born out of a simple frustration with traditional garages, AutoTricks was established to give people their weekends back. We realized that dropping cars off, waiting around, and unpredictable bills were the biggest pain points for car owners.
              </p>
              <p className="text-gray-500 text-[14px] md:text-[18px] leading-relaxed">
                Our mission? Bring the repair shop directly to your driveway, office, or anywhere you need us. Armed with state-of-the-art tools and highly certified technicians, we ensure that every repair meets absolute premium standards.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "100% Genuine OES/OEM Spares.",
                  "State-of-the-Art Doorstep Diagnostics.",
                  "Transparent Iterative Pricing."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[13px] md:text-[16px] font-bold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-[#FFF4E5] border border-[#FF7A00]/10 p-6 rounded-[20px] flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(255,122,0,0.06)] transition-all">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <HeartHandshake className="w-6 h-6 text-[#FF7A00]" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="text-xl md:text-[24px] font-black text-[#1A1A1A] mb-0.5">500+</h4>
                  <p className="text-[9.5px] md:text-[11px] text-gray-500 font-medium uppercase tracking-wide">Happy Customers</p>
                </div>
              </div>
              <div className="bg-[#FFF4E5] border border-[#FF7A00]/10 p-6 rounded-[20px] flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(255,122,0,0.06)] transition-all">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <BadgeCheck className="w-6 h-6 text-[#FF7A00]" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="text-xl md:text-[24px] font-black text-[#1A1A1A] mb-0.5">4.9/5</h4>
                  <p className="text-[9.5px] md:text-[11px] text-gray-500 font-medium uppercase tracking-wide">Average Rating</p>
                </div>
              </div>
              <div className="bg-[#FFF4E5] border border-[#FF7A00]/10 p-6 rounded-[20px] flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(255,122,0,0.06)] transition-all">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Headset className="w-6 h-6 text-[#FF7A00]" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="text-xl md:text-[24px] font-black text-[#1A1A1A] mb-0.5">24/7</h4>
                  <p className="text-[9.5px] md:text-[11px] text-gray-500 font-medium uppercase tracking-wide">Support Available</p>
                </div>
              </div>
              <div className="bg-[#FFF4E5] border border-[#FF7A00]/10 p-6 rounded-[20px] flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(255,122,0,0.06)] transition-all">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6 text-[#FF7A00]" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="text-xl md:text-[24px] font-black text-[#1A1A1A] mb-0.5">100%</h4>
                  <p className="text-[9.5px] md:text-[11px] text-gray-500 font-medium uppercase tracking-wide">Genuine Parts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Inside Page */}
        <section className="w-full max-w-[1150px] mx-auto px-6 sm:px-10 pb-14 md:pb-16">
          <div className="bg-[#FFF4E5] rounded-[24px] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between border border-[#FF7A00]/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF7A00]/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="relative z-10 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl md:text-[36px] font-extrabold text-[#1A1A1A] mb-2 tracking-tight">Ready for a Smoother Ride?</h3>
              <p className="text-gray-600 text-[14px] md:text-[18px] font-medium">Book a service with us and let our expert technicians handle the rest.</p>
            </div>
            <button onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openBookingModal')); }} className="relative z-10 bg-[#FF7A00] text-white px-8 py-3.5 rounded-full text-[13px] md:text-[16px] font-bold hover:bg-[#e06b00] hover:scale-105 transition-all shadow-md flex items-center gap-2">
              Book a Service Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      {/* 8th Section - Premium Dark Footer */}
      <footer className="w-full bg-[#0F141A] pt-16 lg:pt-24 pb-8 lg:pb-12 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
        <div className="w-full max-w-[1300px] flex flex-col md:flex-row justify-between items-start gap-12 md:gap-10 lg:gap-20 mx-auto relative z-10 overflow-hidden">

          {/* Column 1: Branding & Social (Left Anchor) */}
          <div className="flex flex-col items-start pr-2 md:pr-4 md:w-[25%] lg:w-[30%] shrink-0 md:-translate-y-3 lg:-translate-y-5">
            <a href="/" className="flex items-center gap-2 mb-4 group cursor-pointer">
              <img src="/autotricks logo.png" alt="AutoTricks" className="h-[75px] md:h-[90px] xl:h-[105px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300" />
            </a>
            <p className="text-[12px] font-medium text-gray-500 mb-6 tracking-wide md:text-[16px]">
              Car Service. At Your Doorstep.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: InstagramIcon, href: 'https://www.instagram.com/autotricks08?stkn=c21vaXRpOXh2MWE5' },
                { Icon: FacebookIcon, href: '#' },
                { Icon: YoutubeIcon, href: '#' }
              ].map((social, idx) => (
                <a key={idx} href={social.href} target={social.href !== '#' ? "_blank" : undefined} rel={social.href !== '#' ? "noopener noreferrer" : undefined} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-white/20 transition-colors">
                  <social.Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Group: Links & Contact */}
          <div className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-6 lg:gap-16 xl:gap-20 md:ml-auto">
            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-start order-2 sm:order-1">
              <h4 className="text-white font-bold text-[12px] md:text-[16px] xl:text-[17px] mb-5 md:mb-8 tracking-wide whitespace-nowrap">Quick Links</h4>
              <ul className="flex flex-col gap-3.5 md:gap-5">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Services', href: '#services' },
                  { name: 'Why Us', href: '#why-us' },
                  { name: 'How It Works', href: '#how-it-works' },
                  { name: 'About', href: '/about' }
                ].map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-[12px] font-medium text-gray-400 hover:text-white transition-colors cursor-pointer block md:text-[16px]">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="flex flex-col items-start order-1 sm:order-2">
              <h4 className="text-white font-bold text-[12px] md:text-[16px] xl:text-[17px] mb-5 md:mb-8 tracking-wide whitespace-nowrap">Our Services</h4>
              <ul className="flex flex-col gap-3.5 md:gap-5">
                {['Periodic Service', 'Engine Diagnostics', 'Brake Service', 'AC Service', 'General Repairs'].map((service, idx) => (
                  <li key={idx}>
                    <span className="text-[12px] font-medium text-gray-400 hover:text-white transition-colors cursor-pointer md:text-[16px]">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="flex flex-col items-start col-span-2 sm:col-span-1 pt-2 sm:pt-0 order-3 md:order-3">
              <h4 className="text-white font-bold text-[12px] md:text-[16px] xl:text-[17px] mb-5 md:mb-8 tracking-wide whitespace-nowrap">Contact Us</h4>
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" strokeWidth={2.2} />
                  <span className="text-[12px] font-medium text-gray-400 md:text-[16px]">+91 87543 99388</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" strokeWidth={2.2} />
                  <span className="text-[12px] font-medium text-gray-400 md:text-[16px]">autotricks08@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" strokeWidth={2.2} />
                  <span className="text-[12px] font-medium text-gray-400 md:text-[16px]">Coimbatore, Tamil Nadu</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Bottom Divider Area */}
        <div className="w-full max-w-[1300px] mx-auto mt-12 lg:mt-20 pt-6 md:pt-8 border-t border-white/[0.04] flex items-center justify-center">
          <span className="text-[11px] font-medium text-gray-600 md:text-[15px]">
            © {new Date().getFullYear()} AutoTricks. All rights reserved.
          </span>
        </div>
      </footer>

      {/* Floating Social Icons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="https://www.instagram.com/autotricks08?stkn=c21vaXRpOXh2MWE5" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform group border border-gray-100 relative">
          <InstagramIconExact className="w-5 h-5 md:w-6 md:h-6 text-[#E1306C]" />
        </a>
        <a href="https://wa.me/918754399388?text=Hi%20AutoTricks,%20I%20would%20like%20to%20book%20a%20service." target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform group relative">
          <WhatsAppIconExact className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </a>
      </div>

    </div>
  );
}
