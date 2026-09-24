"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, Wrench, Activity, Disc, Wind, BatteryCharging, Settings, Phone, MessageCircle, FileText, X, Mail, MapPin } from "lucide-react";

// Native SVG definitions to replace deprecated Lucide brand icons
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
);

const WhatsAppIconExact = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

const InstagramIconExact = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
);

export default function ServicesPage() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Form options
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 25 }, (_, i) => currentYear - i);
    const carBrands = ["Maruti Suzuki", "Hyundai", "Tata", "Mahindra", "Honda", "Toyota", "Kia", "Renault", "Volkswagen", "Skoda", "Nissan", "MG", "Jeep", "Ford", "Other"];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const services = [
        {
            title: "Periodic Service",
            desc: "Keep your car in top shape with routine maintenance.",
            icon: Wrench,
        },
        {
            title: "Engine Diagnostics",
            desc: "Find and fix issues early before they become major problems.",
            icon: Activity,
        },
        {
            title: "Brake Service",
            desc: "Ensure safe stops every time with our complete brake care.",
            icon: Disc,
        },
        {
            title: "AC Service",
            desc: "Beat the heat with our full AC checkup and gas refill.",
            icon: Wind,
        },
        {
            title: "Battery Check",
            desc: "Reliable power for your vehicle with testing and replacement.",
            icon: BatteryCharging,
        },
        {
            title: "General Repairs",
            desc: "All major and minor fixes handled by our expert technicians.",
            icon: Settings,
        },
    ];

    const handleBookNow = (serviceTitle: string) => {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('openBookingModal', { detail: { service: serviceTitle } }));
        }
    };

    return (
        <div className="bg-[#FFFFFF] font-sans w-full min-h-screen flex flex-col items-center">

            {/* Common Header Wrapper */}
            <div className={`w-full flex justify-center sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#111111]/80 backdrop-blur-lg border-b border-white/5 shadow-sm' : 'bg-[#111111] border-b border-transparent'}`}>
                <header className="relative z-20 flex-shrink-0 flex items-center justify-between px-10 py-3 max-w-[1400px] w-full">
                    <a href="/" className="flex items-center gap-2 ml-2 md:ml-24 group">
                        <div className="bg-[#FF7A00] p-1.5 rounded-md">
                            <Wrench className="w-4 h-4 text-white transform group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.5} />
                        </div>
                        <span className="text-[17px] font-black tracking-wide text-white group-hover:text-gray-200 transition-colors">AutoTricks</span>
                    </a>

                    <nav className="hidden md:flex gap-10 text-xs font-medium text-gray-300">
                        <a href="/#home" className="hover:text-white transition-colors">Home</a>
                        <a href="/#services" className="text-[#FF7A00] pb-1 border-b-2 border-[#FF7A00]">Services</a>
                        <a href="/#why-us" className="hover:text-white transition-colors">Why Us</a>
                        <a href="/#how-it-works" className="hover:text-white transition-colors">How It Works</a>
                        <a href="/about" className="hover:text-white transition-colors">About</a>
                    </nav>

                    <button onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openBookingModal')); }} className="hidden md:inline-block bg-[#FF7A00] hover:bg-[#e06b00] text-white px-4 py-1.5 rounded-full text-[11px] font-bold transition-colors mr-2 md:mr-24">
                        Book Service
                    </button>
                </header>
            </div>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-[1150px] mx-auto px-6 sm:px-10 pt-8 pb-12 md:pt-10 md:pb-20 flex flex-col items-center">
                <h6 className="text-[#64748B] text-[8.5px] sm:text-[9.5px] font-extrabold tracking-[0.2em] mb-2.5 uppercase text-center">
                    What We Offer
                </h6>
                <h1 className="text-[28px] sm:text-[32px] lg:text-[34px] font-extrabold leading-[1.1] mb-4 text-[#1A1A1A] tracking-tight text-center">
                    Our Full Range of <span className="text-[#FF7A00]">Services</span>
                </h1>
                <p className="text-gray-500 text-[11.5px] sm:text-[12px] md:text-[13px] leading-relaxed mb-10 mx-auto max-w-xl text-center font-medium">
                    Whether you need a simple oil change or advanced engine diagnostics, our certified technicians bring the workshop to your doorstep.
                </p>

                {/* Services Grid */}
                <div className="w-full max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-[#FFF4E5] py-5 px-4 rounded-[16px] transition-transform duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center border border-[#FF7A00]/20 shadow-[0_4px_20px_rgba(255,122,0,0.05)]">
                            <div className="mb-2.5 relative">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                    <service.icon className="w-4 h-4 text-[#1A1A1A]" strokeWidth={2} />
                                </div>
                                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#FF7A00] rounded-full border-2 border-[#FFF4E5]"></span>
                            </div>
                            <h3 className="text-[13px] sm:text-[14px] font-extrabold text-[#1A1A1A] mb-1.5">{service.title}</h3>
                            <p className="text-[10px] sm:text-[10.5px] text-gray-500 font-medium leading-relaxed max-w-[95%]">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Common Book Now Button */}
                <div className="mt-12 flex justify-center w-full">
                    <button
                        onClick={() => handleBookNow("")}
                        className="px-6 py-2.5 bg-[#FF7A00] text-white font-bold rounded-full hover:bg-[#e06b00] transition-colors shadow-lg hover:shadow-[#FF7A00]/25 text-xs"
                    >
                        Book a Service Now
                    </button>
                </div>
            </main>

            {/* Premium Dark Footer */}
            <footer className="w-full bg-[#0F141A] pt-10 lg:pt-12 pb-4 lg:pb-5 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
                <div className="w-full max-w-[1150px] flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4 lg:gap-8 mx-auto relative z-10 overflow-hidden">
                    {/* Column 1: Branding & Social (Left Anchor) */}
                    <div className="flex flex-col items-start pr-2 md:pr-4 md:w-[25%] lg:w-[30%] shrink-0">
                        <a href="/" className="flex items-center gap-2 mb-4 group cursor-pointer">
                            <div className="bg-[#FF7A00] p-1.5 rounded-md">
                                <Wrench className="w-4 h-4 text-white transform group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.5} />
                            </div>
                            <span className="text-white text-[18px] font-black tracking-wide group-hover:text-gray-200 transition-colors">AutoTricks</span>
                        </a>
                        <p className="text-[12px] font-medium text-gray-500 mb-6 tracking-wide">
                            Car Service. At Your Doorstep.
                        </p>
                        <div className="flex items-center gap-3">
                            {[InstagramIcon, FacebookIcon, YoutubeIcon].map((SocialIcon, idx) => (
                                <div key={idx} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-white/20 transition-colors">
                                    <SocialIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Group: Links & Contact */}
                    <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 lg:gap-16 xl:gap-20 md:ml-auto">
                        {/* Column 2: Quick Links */}
                        <div className="flex flex-col items-start">
                            <h4 className="text-white font-bold text-[12px] xl:text-[13px] mb-5 tracking-wide whitespace-nowrap">Quick Links</h4>
                            <ul className="flex flex-col gap-3.5">
                                {[
                                    { name: 'Home', href: '/#home' },
                                    { name: 'Services', href: '/#services' },
                                    { name: 'Why Us', href: '/#why-us' },
                                    { name: 'How It Works', href: '/#how-it-works' },
                                    { name: 'About', href: '/about' }
                                ].map((link, idx) => (
                                    <li key={idx}>
                                        <a href={link.href} className="text-[12px] font-medium text-gray-400 hover:text-white transition-colors cursor-pointer block">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Our Services */}
                        <div className="flex flex-col items-start">
                            <h4 className="text-white font-bold text-[12px] xl:text-[13px] mb-5 tracking-wide whitespace-nowrap">Our Services</h4>
                            <ul className="flex flex-col gap-3.5">
                                {['Periodic Service', 'Engine Diagnostics', 'Brake Service', 'AC Service', 'General Repairs'].map((service, idx) => (
                                    <li key={idx}>
                                        <span className="text-[12px] font-medium text-gray-400 hover:text-white transition-colors cursor-pointer">
                                            {service}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Contact Us */}
                        <div className="flex flex-col items-start">
                            <h4 className="text-white font-bold text-[12px] xl:text-[13px] mb-5 tracking-wide whitespace-nowrap">Contact Us</h4>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" strokeWidth={2.2} />
                                    <span className="text-[12px] font-medium text-gray-400">+91 98765 43210</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" strokeWidth={2.2} />
                                    <span className="text-[12px] font-medium text-gray-400">care@autotricks.in</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" strokeWidth={2.2} />
                                    <span className="text-[12px] font-medium text-gray-400">Coimbatore, Tamil Nadu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Divider Area */}
                <div className="w-full max-w-[1150px] mx-auto mt-8 lg:mt-10 pt-4 md:pt-5 border-t border-white/[0.04] flex items-center justify-center">
                    <span className="text-[11px] font-medium text-gray-600">
                        © {new Date().getFullYear()} AutoTricks. All rights reserved.
                    </span>
                </div>
            </footer>

            {/* Floating Social Icons */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform group border border-gray-100 relative">
                    <InstagramIconExact className="w-4 h-4 text-[#E1306C]" />
                </a>
                <a href="https://wa.me/916383629997?text=Hi%20AutoTricks,%20I%20would%20like%20to%20book%20a%20service." target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform group relative">
                    <WhatsAppIconExact className="w-4 h-4 text-white" />
                </a>
            </div>
        </div >
    );
}
