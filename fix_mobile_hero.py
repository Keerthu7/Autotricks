import os

path = 'app/page.tsx'

component = '''const HeroScrollAnimation = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const mobileContainerRef = useRef<HTMLElement>(null);
  const mobileTextRef = useRef<HTMLDivElement>(null);
  
  useHeroScroll(containerRef, textRef);
  useHeroScroll(mobileContainerRef, mobileTextRef);

  useEffect(() => {
    // Explicitly play video to bypass mobile autoplay restrictions
    if (videoRef.current) {
      videoRef.current.play().catch(() => console.log('Autoplay handled by browser'));
    }
  }, []);

  return (
    <>
      {/* MOBILE HERO (Video, 200vh, scroll-driven text) */}
      <section ref={mobileContainerRef} id="home-mobile" className="md:hidden h-[200vh] bg-[#111111] text-white relative w-full">
        <div className="sticky top-0 h-[100dvh] overflow-hidden flex flex-col w-full">
          <div className="absolute inset-0 z-0 bg-[#111111]">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/Autotricks hero video.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] from-10% via-[#111111]/75 via-45% to-transparent to-60% z-10 pointer-events-none" />
          </div>
          <main className="relative z-20 flex-1 flex flex-col justify-center px-6 w-full mt-24 mb-10 pointer-events-none">
            <div ref={mobileTextRef} className="w-full pointer-events-auto" style={{ opacity: 'calc(var(--hero-scroll-p, 0) * 2.5)', transform: 'translateY(calc(40px - 40px * var(--hero-scroll-p, 0)))' }}>
              <p className="text-gray-300/80 text-[9px] font-semibold tracking-[0.25em] mb-3 uppercase">
                Premium car service at your doorstep
              </p>
              <h1 className="text-3xl font-bold leading-[1.1] mb-4">
                We Keep Your <br />
                <span className="text-[#FF7A00]">Car Moving</span>
              </h1>
              <p className="text-[#d4d4d8] text-xs max-w-[24rem] leading-relaxed mb-6">
                Professional car service, right at your doorstep.<br />
                No workshop visits. No hassle. Just smooth rides.
              </p>
              
              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <div>
                    <h3 className="font-semibold text-[11px]">Expert Technicians</h3>
                    <p className="text-[9px] text-[#A1A1AA]">Certified & Trusted</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <div>
                    <h3 className="font-semibold text-[11px]">Quality Service</h3>
                    <p className="text-[9px] text-[#A1A1AA]">Genuine Parts</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <div>
                    <h3 className="font-semibold text-[11px]">Doorstep Delivery</h3>
                    <p className="text-[9px] text-[#A1A1AA]">Anywhere in Your City</p>
                  </div>
                </div>
              </div>

              <button onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openBookingModal')); }} className="bg-gradient-to-r from-[#FF7A00] to-[#E65C00] hover:from-[#e06b00] hover:to-[#cc5200] text-white px-5 py-3 rounded-full text-xs font-bold flex items-center justify-center w-full gap-1.5 transition-all shadow-[0_4px_24px_rgba(255,122,0,0.3)]">
                Book Your Service
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </main>
        </div>
      </section>

      {/* DESKTOP HERO (3D, 250vh, scroll-driven) */}
      <section ref={containerRef} id="home-desktop" className="hidden md:block h-[250vh] bg-[#111111] text-white relative w-full">
        <div className="sticky top-0 h-[100dvh] overflow-hidden flex flex-col w-full">
          <div className="absolute inset-0 z-0 bg-[#111111]">
            <Hero3D sectionRef={containerRef} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] from-10% via-[#111111]/75 via-45% to-transparent to-60% z-10 pointer-events-none" />
          </div>

          <main className="relative z-20 flex-1 flex flex-col justify-center max-w-[1400px] mx-auto px-10 w-full mb-10 pointer-events-none">
            <div ref={textRef} className="max-w-2xl ml-10 mt-4 pointer-events-auto" style={{ opacity: 'calc(var(--hero-scroll-p, 0) * 2)', transform: 'translateY(calc(30px - 30px * var(--hero-scroll-p, 0)))' }}>
              <p className="text-gray-300/80 text-[10px] font-semibold tracking-[0.25em] mb-3 uppercase">
                Premium car service at your doorstep
              </p>
              <h1 className="text-4xl font-bold leading-[1.1] mb-4">
                We Keep Your <br />
                <span className="text-[#FF7A00]">Car Moving</span>
              </h1>
              <p className="text-[#d4d4d8] text-[12px] max-w-[24rem] leading-relaxed mb-6">
                Professional car service, right at your doorstep.<br />
                No workshop visits. No hassle. Just smooth rides.
              </p>
              <div className="flex flex-row items-center gap-5 mb-8">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <div>
                    <h3 className="font-semibold text-[10px]">Expert Technicians</h3>
                    <p className="text-[9px] text-[#A1A1AA]">Certified & Trusted</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-l border-white/10 pl-5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <div>
                    <h3 className="font-semibold text-[10px]">Quality Service</h3>
                    <p className="text-[9px] text-[#A1A1AA]">Genuine Parts</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-l border-white/10 pl-5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <div>
                    <h3 className="font-semibold text-[10px]">Doorstep Delivery</h3>
                    <p className="text-[9px] text-[#A1A1AA]">Anywhere in Your City</p>
                  </div>
                </div>
              </div>
              <button onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openBookingModal')); }} className="bg-gradient-to-r from-[#FF7A00] to-[#E65C00] hover:from-[#e06b00] hover:to-[#cc5200] text-white px-5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_4px_24px_rgba(255,122,0,0.3)]">
                Book Your Service
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};'''

if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    start_str = "const HeroScrollAnimation = () => {"
    end_str = "};\n\nconst Section3ScrollAnimation = () => {"
    
    start_idx = c.find(start_str)
    end_idx = c.find(end_str)
    
    if start_idx != -1 and end_idx != -1:
        c = c[:start_idx] + component + c[end_idx:]
    else:
        print("Failed to replace bounds")

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print("Mobile Hero is now perfectly scroll driven without UI boxes")
