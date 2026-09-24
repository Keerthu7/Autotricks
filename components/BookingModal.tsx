"use client";

import { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";

const WhatsAppIconExact = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

const carBrands = [
    "Maruti Suzuki", "Hyundai", "Tata Motors", "Mahindra", "Kia",
    "Toyota", "Honda", "Renault", "Skoda", "Volkswagen", "MG",
    "Nissan", "Jeep", "Ford", "Other"
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 25 }, (_, i) => currentYear - i);

export default function BookingModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const handleOpenModal = (event: any) => {
            setSelectedService(event.detail?.service || "");
            setIsSubmitted(false);
            setIsModalOpen(true);
        };

        window.addEventListener('openBookingModal', handleOpenModal);
        return () => window.removeEventListener('openBookingModal', handleOpenModal);
    }, []);

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="bg-white w-full max-w-[420px] rounded-[20px] p-5 md:p-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200 my-auto">
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors z-10"
                >
                    <X className="w-3.5 h-3.5" />
                </button>

                {!isSubmitted ? (
                    <>
                        <div className="mb-4 pr-6">
                            <h3 className="text-lg md:text-[20px] font-extrabold text-gray-900 tracking-tight leading-tight mb-1">
                                Book {selectedService ? <span className="text-[#FF7A00]">{selectedService}</span> : <span className="text-[#FF7A00]">a Service</span>}
                            </h3>
                            <p className="text-[11px] text-gray-500 font-medium tracking-tight">
                                Please provide your details below.
                            </p>
                        </div>

                        <form className="flex flex-col gap-2.5 mb-2" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>

                            {/* Section 1 - Basic Info */}
                            <div className="flex gap-2.5">
                                <div className="w-1/2 flex flex-col gap-1">
                                    <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wide ml-0.5">Full Name <span className="text-[#FF7A00]">*</span></label>
                                    <input type="text" placeholder="e.g. John Doe" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-2 focus:ring-[#FF7A00]/10 rounded-lg text-[11px] font-medium text-gray-900 transition-all outline-none placeholder:text-gray-400" required />
                                </div>
                                <div className="w-1/2 flex flex-col gap-1">
                                    <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wide ml-0.5">Phone <span className="text-[#FF7A00]">*</span></label>
                                    <input type="tel" defaultValue="+91 " placeholder="Phone Number" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-2 focus:ring-[#FF7A00]/10 rounded-lg text-[11px] font-medium text-gray-900 transition-all outline-none placeholder:text-gray-400" required />
                                </div>
                            </div>

                            {/* Section 2 - Vehicle Info */}
                            <div className="flex flex-col gap-2.5">
                                <div className="flex gap-2.5">
                                    <div className="w-1/2 flex flex-col gap-1">
                                        <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wide ml-0.5">Car Brand <span className="text-[#FF7A00]">*</span></label>
                                        <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-2 focus:ring-[#FF7A00]/10 rounded-lg text-[11px] font-medium text-gray-900 transition-all outline-none" required defaultValue="">
                                            <option value="" disabled>Select Brand</option>
                                            {carBrands.map((brand, i) => (
                                                <option key={i} value={brand}>{brand}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="w-1/2 flex flex-col gap-1">
                                        <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wide ml-0.5">Model <span className="text-[#FF7A00]">*</span></label>
                                        <input type="text" placeholder="e.g. Swift" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-2 focus:ring-[#FF7A00]/10 rounded-lg text-[11px] font-medium text-gray-900 transition-all outline-none placeholder:text-gray-400" required />
                                    </div>
                                </div>
                                <div className="flex gap-2.5">
                                    <div className="w-1/2 flex flex-col gap-1">
                                        <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wide ml-0.5">Year <span className="text-[#FF7A00]">*</span></label>
                                        <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-2 focus:ring-[#FF7A00]/10 rounded-lg text-[11px] font-medium text-gray-900 transition-all outline-none" required defaultValue="">
                                            <option value="" disabled>Select Year</option>
                                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                                        </select>
                                    </div>
                                    <div className="w-1/2 flex flex-col gap-1">
                                        <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wide ml-0.5">Reg No. <span className="text-[#FF7A00]">*</span></label>
                                        <input type="text" placeholder="TN 38 AA 1234" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-2 focus:ring-[#FF7A00]/10 rounded-lg text-[11px] font-medium text-gray-900 transition-all outline-none uppercase placeholder:text-gray-400 placeholder:normal-case" required />
                                    </div>
                                </div>
                            </div>

                            {/* Section 3 - Service Details */}
                            <div className="flex flex-col gap-2.5">
                                <div className="flex flex-col gap-1">
                                    <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wide ml-0.5">Current Location <span className="text-[#FF7A00]">*</span></label>
                                    <input type="text" placeholder="Where is the vehicle right now?" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-2 focus:ring-[#FF7A00]/10 rounded-lg text-[11px] font-medium text-gray-900 transition-all outline-none placeholder:text-gray-400" required />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wide ml-0.5">Service Required <span className="text-[#FF7A00]">*</span></label>
                                    <textarea placeholder="Describe the issue or service needed..." rows={2} required defaultValue={selectedService || ""} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-2 focus:ring-[#FF7A00]/10 rounded-lg text-[11px] font-medium text-gray-900 transition-all outline-none resize-none placeholder:text-gray-400"></textarea>
                                </div>
                            </div>

                            <button type="submit" className="w-full py-2.5 bg-[#FF7A00] text-white font-bold rounded-lg hover:bg-[#e06b00] transition-transform shadow-[0_4px_10px_rgba(255,122,0,0.2)] hover:-translate-y-0.5 text-[11px] mt-1">
                                Submit Request
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in slide-in-from-bottom-5 duration-300">
                        <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-3">
                            <svg className="w-6 h-6 text-[#4CAF50]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1.5">Request Received!</h3>
                        <p className="text-[11px] text-gray-500 font-medium max-w-[240px]">Thank you for choosing AutoTricks. Our team will contact you shortly.</p>
                        <button onClick={() => setIsModalOpen(false)} className="mt-5 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-full text-[11px] transition-colors">Close form</button>
                    </div>
                )}

                {!isSubmitted && (
                    <>
                        <div className="flex items-center justify-center gap-2.5 mt-4 pt-3 border-t border-gray-100">
                            <a href={`https://wa.me/916383629997?text=${encodeURIComponent(selectedService ? "Hi AutoTricks, I would like to book the " + selectedService + "." : "Hi AutoTricks, I would like to book a service.")}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#F4F6F9] hover:bg-[#E8F0ED] text-[#25D366] transition-colors border border-transparent hover:border-[#25D366]/30 group">
                                <WhatsAppIconExact className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                                <span className="font-bold text-[10px] text-[#1A1A1A]">WhatsApp</span>
                            </a>

                            <a href="tel:+919876543210" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#F4F6F9] hover:bg-[#EAEAF4] text-[#4F46E5] transition-colors border border-transparent hover:border-[#4F46E5]/30 group">
                                <Phone className="w-3 h-3 transition-transform group-hover:scale-110" strokeWidth={2.5} />
                                <span className="font-bold text-[10px] text-[#1A1A1A]">Call Us</span>
                            </a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
