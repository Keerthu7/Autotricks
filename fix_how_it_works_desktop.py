import os
import re

path = 'app/page.tsx'

new_4th_section = '''      {/* 4th Section - How It Works */}
      <section id="how-it-works" className="relative w-full py-12 md:py-8 bg-white overflow-hidden flex justify-center px-6 sm:px-10 lg:pl-16 lg:pr-8">
        
        {/* ===================== MOBILE VIEW (New Grid Layout) ===================== */}
        <div className="w-full max-w-[1300px] flex flex-col z-10 relative md:hidden">
          {/* Heading */}
          <div className="mb-10 w-full text-center pl-2">
            <h6 className="text-[#64748B] text-[10px] font-bold tracking-[0.2em] mb-2 uppercase">
              Simple Steps. Big Convenience.
            </h6>
            <h2 className="text-[28px] font-extrabold leading-[1.1] text-[#1A1A1A] tracking-tight">
              How It Works
            </h2>
          </div>

          <div className="flex flex-col items-center justify-between w-full gap-12">
            {/* The 4 Grids / Steps */}
            <div className="grid grid-cols-2 gap-4 w-full relative z-10">
              {[
                { num: "01", title: "Book Your Service", desc: "Choose your service and preferred time.", icon: CalendarDays, active: true },
                { num: "02", title: "We Come to You", desc: "Our team reaches your location on time.", icon: MapPin },
                { num: "03", title: "Service & Check", desc: "Expert service with genuine parts.", icon: Wrench },
                { num: "04", title: "Back on the Road", desc: "Your car is ready, we deliver it to you.", icon: CarFront },
              ].map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-start w-full bg-[#FFF4E5] border border-[#FF7A00]/20 p-4 rounded-[20px]">
                  <div className={`mb-4 rounded-full flex items-center justify-center ${step.active ? 'p-[4px] border-[2px] border-[#FF7A00]/60 -ml-[3px]' : 'p-[4px] border-[2px] border-transparent'}`}>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.04)]">
                      <step.icon className={`w-4 h-4 ${step.active ? 'text-[#1A1A1A]' : 'text-[#475569]'}`} strokeWidth={2.2} />
                    </div>
                  </div>
                  <div className="text-[11px] font-extrabold text-[#94A3B8] mb-1">{step.num}</div>
                  <div className="text-[13px] font-bold text-[#1A1A1A] mb-1.5 leading-snug pr-2">{step.title}</div>
                  <p className="text-[11px] text-[#64748B] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Van Image */}
            <div className="w-full sm:w-[80%] flex justify-center flex-shrink-0 relative mt-4">
              <img
                src="/4th section.png"
                alt="AutoTricks Van"
                className="w-full mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)]"
              />
            </div>
          </div>
        </div>

        {/* ===================== DESKTOP VIEW (Original Layout) ===================== */}
        <div className="w-full max-w-[1300px] hidden md:flex flex-col z-10 w-full lg:w-auto relative">
          {/* Heading */}
          <div className="mb-8 lg:mb-10 w-full pl-2">
            <h6 className="text-[#64748B] text-[9px] font-bold tracking-[0.22em] mb-2 uppercase">
              Simple Steps. Big Convenience.
            </h6>
            <h2 className="text-[30px] lg:text-[34px] font-extrabold leading-[1.1] text-[#1A1A1A] tracking-tight">
              How It Works
            </h2>
          </div>

          <div className="flex flex-row items-center justify-between w-full gap-6 lg:gap-10">
            {/* The 4 Grids / Steps */}
            <div className="flex flex-row items-center justify-between w-[68%] xl:w-[70%] gap-3 lg:gap-4 relative z-10">
              {[
                { num: "01", title: "Book Your Service", desc: "Choose your service and preferred time.", icon: CalendarDays, active: true },
                { num: "02", title: "We Come to You", desc: "Our team reaches your location on time.", icon: MapPin },
                { num: "03", title: "Service & Check", desc: "Expert service with genuine parts.", icon: Wrench },
                { num: "04", title: "Back on the Road", desc: "Your car is ready, we deliver it to you.", icon: CarFront },
              ].map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-start w-full flex-1 bg-[#FFF4E5] border border-[#FF7A00]/20 p-3 lg:p-4 rounded-[14px] transition-transform duration-300 hover:-translate-y-1">
                  <div className={`mb-3 lg:mb-4 rounded-full flex items-center justify-center ${step.active ? 'p-[3px] lg:p-[4px] border-[1.5px] border-[#FF7A00]/60 -ml-[3px] lg:-ml-[4px]' : 'p-[3px] lg:p-[4px] border-[1.5px] border-transparent'}`}>
                    <div className="w-9 h-9 lg:w-11 lg:h-11 bg-white rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                      <step.icon className={`w-3.5 h-3.5 lg:w-[18px] lg:h-[18px] ${step.active ? 'text-[#1A1A1A]' : 'text-[#475569]'}`} strokeWidth={2.2} />
                    </div>
                  </div>
                  {idx !== 3 && (
                    <div className="block absolute top-[40%] -right-2 lg:-right-3 translate-x-full -translate-y-1/2 z-20">
                      <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-[#FF7A00] opacity-80" strokeWidth={3} />
                    </div>
                  )}
                  <div className="text-[9.5px] lg:text-[10.5px] font-bold text-[#475569] mb-0.5">{step.num}</div>
                  <div className="text-[10.5px] lg:text-[11.5px] font-bold text-[#1A1A1A] mb-0.5 leading-tight pr-1">{step.title}</div>
                  <p className="text-[8.5px] lg:text-[10px] text-[#64748B] leading-[1.3] pr-1">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Van Image */}
            <div className="w-[31%] xl:w-[35%] flex justify-end flex-shrink-0 relative">
              <img
                src="/4th section.png"
                alt="AutoTricks Van"
                className="w-[100%] max-w-[400px] object-contain md:-mr-4 xl:translate-x-[5%] mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)] transition-transform duration-1000 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5th Section - Doorstep Convenience */}'''

if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    start_str = r'\{\/\* 4th Section - How It Works \*\/\}'
    end_str = r'\{\/\* 5th Section - Doorstep Convenience \*\/\}'
    
    # Use re.sub to replace the entire 4th section block
    pattern = start_str + r'[\s\S]*?' + end_str
    
    c = re.sub(pattern, new_4th_section, c)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print("Reverted 4th section Desktop to Original, kept Mobile 2-grid")
