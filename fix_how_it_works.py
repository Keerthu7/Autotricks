import os
import re

path = 'app/page.tsx'

new_section = '''      {/* 4th Section - How It Works */}
      <section id="how-it-works" className="relative w-full py-12 md:py-20 bg-white overflow-hidden flex justify-center px-6 sm:px-10 lg:pl-16 lg:pr-8">
        <div className="w-full max-w-[1300px] flex flex-col z-10 relative">

          {/* Heading */}
          <div className="mb-10 lg:mb-12 w-full text-center xl:text-left pl-2">
            <h6 className="text-[#64748B] text-[10px] md:text-[11px] font-bold tracking-[0.2em] mb-2 uppercase">
              Simple Steps. Big Convenience.
            </h6>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[1.1] text-[#1A1A1A] tracking-tight">
              How It Works
            </h2>
          </div>

          {/* Inline Content Row: 4 Grids + Image */}
          <div className="flex flex-col xl:flex-row items-center justify-between w-full gap-12 lg:gap-16">

            {/* The 4 Grids / Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full xl:w-[68%] relative z-10">
              {[
                { num: "01", title: "Book Your Service", desc: "Choose your service and preferred time.", icon: CalendarDays, active: true },
                { num: "02", title: "We Come to You", desc: "Our team reaches your location on time.", icon: MapPin },
                { num: "03", title: "Service & Check", desc: "Expert service with genuine parts.", icon: Wrench },
                { num: "04", title: "Back on the Road", desc: "Your car is ready, we deliver it to you.", icon: CarFront },
              ].map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-start w-full bg-[#FFF4E5] border border-[#FF7A00]/20 p-6 md:p-8 rounded-[20px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(255,122,0,0.1)]">

                  {/* Icon Node */}
                  <div className={`mb-5 rounded-full flex items-center justify-center ${step.active ? 'p-[5px] border-[2px] border-[#FF7A00]/60 -ml-[4px]' : 'p-[5px] border-[2px] border-transparent'}`}>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.04)]">
                      <step.icon className={`w-5 h-5 ${step.active ? 'text-[#1A1A1A]' : 'text-[#475569]'}`} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Structural Arrow (Hidden on mobile grid) */}
                  {idx !== 3 && (
                    <div className="hidden lg:block absolute top-[25%] -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                      <ArrowRight className="w-5 h-5 text-[#FF7A00] opacity-80" strokeWidth={3} />
                    </div>
                  )}

                  {/* Text Content */}
                  <div className="text-[12px] md:text-[13px] font-extrabold text-[#94A3B8] mb-1">{step.num}</div>
                  <div className="text-[16px] md:text-[18px] font-bold text-[#1A1A1A] mb-2 leading-snug">{step.title}</div>
                  <p className="text-[13px] md:text-[14px] text-[#64748B] leading-relaxed">
                    {step.desc}
                  </p>

                </div>
              ))}
            </div>

            {/* Van Image Immediately Next to 4th Grid */}
            <div className="w-full sm:w-[80%] md:w-[60%] xl:w-[32%] flex justify-center xl:justify-end flex-shrink-0 relative mt-4 xl:mt-0">
              <img
                src="/4th section.png"
                alt="AutoTricks Van"
                className="w-full mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)] transition-transform duration-1000 hover:scale-[1.03]"
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
    
    c = re.sub(pattern, new_section, c)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print("Updated 4th section layout")
