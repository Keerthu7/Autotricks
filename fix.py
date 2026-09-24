import sys

with open('app/services/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('{/* Booking Modal */}')
if start_idx == -1:
    print('Start not found')
    sys.exit(1)

end_string = '{/* Premium Dark Footer */}'
end_idx = content.find(end_string, start_idx)
if end_idx == -1:
    print('End not found')
    sys.exit(1)

new_modal = """{/* Booking Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
                    <div className="bg-white w-full max-w-[500px] rounded-[24px] p-6 lg:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200 my-auto">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-5 right-5 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors z-10"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {!isSubmitted ? (
                            <>
                                <div className="mb-6 pr-8">
                                    <h3 className="text-2xl md:text-[26px] font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
                                        Book {selectedService ? <span className="text-[#FF7A00]">{selectedService}</span> : <span className="text-[#FF7A00]">a Service</span>}
                                    </h3>
                                    <p className="text-[14px] text-gray-500 font-medium">
                                        Please provide your details below.
                                    </p>
                                </div>
                                
                                <form className="flex flex-col gap-4 mb-2" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                                    
                                    {/* Section 1 - Basic Info */}
                                    <div className="flex gap-4">
                                        <div className="w-1/2 flex flex-col gap-1.5">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide ml-1">Full Name <span className="text-[#FF7A00]">*</span></label>
                                            <input type="text" placeholder="e.g. John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-4 focus:ring-[#FF7A00]/10 rounded-xl text-[13px] font-medium text-gray-900 transition-all outline-none placeholder:text-gray-400" required />
                                        </div>
                                        <div className="w-1/2 flex flex-col gap-1.5">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide ml-1">Phone <span className="text-[#FF7A00]">*</span></label>
                                            <input type="tel" defaultValue="+91 " placeholder="Phone Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-4 focus:ring-[#FF7A00]/10 rounded-xl text-[13px] font-medium text-gray-900 transition-all outline-none placeholder:text-gray-400" required />
                                        </div>
                                    </div>

                                    {/* Section 2 - Vehicle Info */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex gap-4">
                                            <div className="w-1/2 flex flex-col gap-1.5">
                                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide ml-1">Car Brand <span className="text-[#FF7A00]">*</span></label>
                                                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-4 focus:ring-[#FF7A00]/10 rounded-xl text-[13px] font-medium text-gray-900 transition-all outline-none" required defaultValue="">
                                                    <option value="" disabled>Select Brand</option>
                                                    {carBrands.map((brand, i) => (
                                                        <option key={i} value={brand}>{brand}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="w-1/2 flex flex-col gap-1.5">
                                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide ml-1">Model <span className="text-[#FF7A00]">*</span></label>
                                                <input type="text" placeholder="e.g. Swift" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-4 focus:ring-[#FF7A00]/10 rounded-xl text-[13px] font-medium text-gray-900 transition-all outline-none placeholder:text-gray-400" required />
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-1/2 flex flex-col gap-1.5">
                                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide ml-1">Year <span className="text-[#FF7A00]">*</span></label>
                                                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-4 focus:ring-[#FF7A00]/10 rounded-xl text-[13px] font-medium text-gray-900 transition-all outline-none" required defaultValue="">
                                                    <option value="" disabled>Select Year</option>
                                                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                                                </select>
                                            </div>
                                            <div className="w-1/2 flex flex-col gap-1.5">
                                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide ml-1">Reg No. <span className="text-[#FF7A00]">*</span></label>
                                                <input type="text" placeholder="TN 38 AA 1234" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-4 focus:ring-[#FF7A00]/10 rounded-xl text-[13px] font-medium text-gray-900 transition-all outline-none uppercase placeholder:text-gray-400 placeholder:normal-case" required />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 3 - Service Details */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide ml-1">Current Location <span className="text-[#FF7A00]">*</span></label>
                                            <input type="text" placeholder="Where is the vehicle right now?" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-4 focus:ring-[#FF7A00]/10 rounded-xl text-[13px] font-medium text-gray-900 transition-all outline-none placeholder:text-gray-400" required />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide ml-1">Service Required <span className="text-[#FF7A00]">*</span></label>
                                            <textarea placeholder="Describe the issue or service needed..." rows={2} required defaultValue={selectedService || ""} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#FF7A00] focus:bg-white focus:ring-4 focus:ring-[#FF7A00]/10 rounded-xl text-[13px] font-medium text-gray-900 transition-all outline-none resize-none placeholder:text-gray-400"></textarea>
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full py-4 bg-[#FF7A00] text-white font-bold rounded-xl hover:bg-[#e06b00] transition-transform shadow-[0_8px_20px_rgba(255,122,0,0.2)] hover:-translate-y-0.5 text-[14.5px] mt-2">
                                        Submit Request
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in slide-in-from-bottom-5 duration-300">
                                <div className="w-20 h-20 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-5">
                                    <svg className="w-10 h-10 text-[#4CAF50]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                                <p className="text-[14px] text-gray-500 font-medium max-w-[280px]">Thank you for choosing AutoTricks. Our team will contact you shortly.</p>
                                <button onClick={() => setIsModalOpen(false)} className="mt-8 px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-full text-[13px] transition-colors">Close form</button>
                            </div>
                        )}

                        {!isSubmitted && (
                            <>
                                <div className="flex items-center justify-center gap-3 mt-6 pt-6 border-t border-gray-100">
                                    <a href={`https://wa.me/916383629997?text=${encodeURIComponent(selectedService ? "Hi AutoTricks, I would like to book the " + selectedService + "." : "Hi AutoTricks, I would like to book a service.")}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#F4F6F9] hover:bg-[#E8F0ED] text-[#25D366] transition-colors border border-transparent hover:border-[#25D366]/30 group">
                                        <WhatsAppIconExact className="w-4 h-4 transition-transform group-hover:scale-110" />
                                        <span className="font-bold text-[12.5px] text-[#1A1A1A]">WhatsApp</span>
                                    </a>

                                    <a href="tel:+919876543210" className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#F4F6F9] hover:bg-[#EAEAF4] text-[#4F46E5] transition-colors border border-transparent hover:border-[#4F46E5]/30 group">
                                        <Phone className="w-4 h-4 transition-transform group-hover:scale-110" strokeWidth={2.5} />
                                        <span className="font-bold text-[12.5px] text-[#1A1A1A]">Call Us</span>
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
            """
result = content[:start_idx] + new_modal + content[end_idx:]
with open('app/services/page.tsx', 'w', encoding='utf-8') as f:
    f.write(result)
print('Done!')
