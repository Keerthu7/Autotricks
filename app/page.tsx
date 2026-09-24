"use client";
import React, { useEffect, useRef, useState } from "react";
import { UserCheck, ShieldCheck, MapPin, ArrowRight, Wrench, Activity, Disc, Wind, BatteryCharging, Settings, CalendarDays, CarFront, Home as HomeIcon, Building2, Tag, Clock, Phone, Mail } from "lucide-react";

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

const HeroScrollAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 50;

  const currentFrame = (index: number) =>
    `/1st section/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      const loadedImages = [];
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const render = (img: HTMLImageElement) => {
      if (!canvas || !context) return;
      const { innerWidth: width, innerHeight: height, devicePixelRatio = 1 } = window;

      // Scale canvas internal resolution to physical pixels
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;

      // Keep canvas CSS size identical to logical pixels
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Scale context to use logical CSS pixels
      context.scale(devicePixelRatio, devicePixelRatio);

      // Cover scaling calculation based on logical limits
      const hRatio = width / img.width;
      const vRatio = height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (width - img.width * ratio) / 2;
      const centerShift_y = (height - img.height * ratio) / 2;

      context.clearRect(0, 0, width, height);
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    };

    // Draw first frame immediately
    render(images[0]);

    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollY = -top;
      const maxScroll = height - window.innerHeight;

      let scrollFraction = scrollY / maxScroll;
      if (scrollFraction < 0) scrollFraction = 0;
      if (scrollFraction > 1) scrollFraction = 1;

      if (textRef.current) {
        textRef.current.style.setProperty('--hero-scroll-p', scrollFraction.toString());
      }

      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => render(images[frameIndex]));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => {
      const { top, height } = containerRef.current!.getBoundingClientRect();
      const scrollY = -top;
      const maxScroll = height - window.innerHeight;
      let scrollFraction = scrollY / maxScroll;
      if (scrollFraction < 0) scrollFraction = 0;
      if (scrollFraction > 1) scrollFraction = 1;
      const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
      render(images[frameIndex]);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images]);

  return (
    <section ref={containerRef} id="home" className="h-[250vh] bg-[#111111] text-white relative w-full">
      <div className="sticky top-0 h-[100dvh] overflow-hidden flex flex-col w-full">
        {/* Background Image Setup (Canvas replacing static image) */}
        <div className="absolute inset-0 z-0 bg-[#111111]">
          <canvas ref={canvasRef} className="w-full h-full" />

          {/* Main left-side gradient for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] from-10% via-[#111111]/75 via-45% to-transparent to-60% z-10 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <main className="relative z-20 flex-1 flex flex-col justify-center max-w-[1400px] mx-auto px-10 w-full mb-10 pointer-events-none">
          <div ref={textRef} className="max-w-2xl ml-6 md:ml-10 mt-2 md:mt-4 pointer-events-auto" style={{ opacity: 'calc(var(--hero-scroll-p, 0) * 2)', transform: 'translateY(calc(30px - 30px * var(--hero-scroll-p, 0)))' }}>
            <p className="text-gray-300/80 text-[9px] md:text-[10px] font-semibold tracking-[0.25em] mb-3 uppercase">
              Premium car service at your doorstep
            </p>

            <h1 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-4">
              We Keep Your <br />
              <span className="text-[#FF7A00]">Car Moving</span>
            </h1>

            <p className="text-[#d4d4d8] text-xs md:text-[12px] max-w-[24rem] leading-relaxed mb-6">
              Professional car service, right at your doorstep.<br />
              No workshop visits. No hassle. Just smooth rides.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
              <div className="flex items-center gap-2">
                <UserCheck className="w-3.5 h-3.5 text-[#FF7A00]" />
                <div>
                  <h3 className="font-semibold text-[11px] md:text-[10px]">Expert Technicians</h3>
                  <p className="text-[9px] text-[#A1A1AA]">Certified & Trusted</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:border-l sm:border-white/10 sm:pl-5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A00]" />
                <div>
                  <h3 className="font-semibold text-[11px] md:text-[10px]">Quality Service</h3>
                  <p className="text-[9px] text-[#A1A1AA]">Genuine Parts</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:border-l sm:border-white/10 sm:pl-5">
                <MapPin className="w-3.5 h-3.5 text-[#FF7A00]" />
                <div>
                  <h3 className="font-semibold text-[11px] md:text-[10px]">Doorstep Delivery</h3>
                  <p className="text-[9px] text-[#A1A1AA]">Anywhere in Your City</p>
                </div>
              </div>
            </div>

            <button onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openBookingModal')); }} className="bg-gradient-to-r from-[#FF7A00] to-[#E65C00] hover:from-[#e06b00] hover:to-[#cc5200] text-white px-5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_4px_24px_rgba(255,122,0,0.3)]">
              Book Your Service
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Floating location card */}
          <div className="absolute bottom-6 right-8 hidden md:flex items-center gap-2 scale-90 md:scale-100 origin-bottom-right">
            <div className="relative border border-white/10 bg-black/60 shadow-2xl backdrop-blur-md pl-2.5 pr-4 py-1.5 rounded-[2rem] flex items-center gap-1.5">
              {/* Soft decorative glow behind pin */}
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#FF7A00]/20 blur-md rounded-full pointer-events-none" />

              <div className="text-[#FF7A00] relative z-10">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              </div>
              <div className="pl-0.5">
                <h3 className="font-bold text-[10px] tracking-wide text-white">We come to you</h3>
                <p className="text-[8px] text-gray-400">Doorstep Car Service</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

const Section3ScrollAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 20;

  const currentFrame = (index: number) =>
    `/3rd section/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      const loadedImages = [];
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const render = (img: HTMLImageElement) => {
      if (!canvas || !context) return;
      const { innerWidth: width, innerHeight: height, devicePixelRatio = 1 } = window;

      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.scale(devicePixelRatio, devicePixelRatio);

      const hRatio = width / img.width;
      const vRatio = height / img.height;
      const ratio = Math.max(hRatio, vRatio) * 0.55;

      // We want to shift the image rendering to the right on larger screens,
      // matching the original layout where the car was placed on the right.
      let centerShift_x = (width - img.width * ratio) / 2;
      const centerShift_y = (height - img.height * ratio) / 2;

      if (width >= 1024) { // lg screens
        // Moved a bit more to the right as requested
        centerShift_x += width * 0.35;
      } else if (width >= 768) { // md screens
        centerShift_x += width * 0.25;
      }

      const drawnWidth = img.width * ratio;
      const drawnHeight = img.height * ratio;

      context.clearRect(0, 0, width, height);

      // 1. Draw the image
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        drawnWidth,
        drawnHeight
      );

      // 2. Erase the borders of the video to create a seamless shade effect utilizing exact four-sided overlays matching the background
      // Top fade
      let grad = context.createLinearGradient(0, centerShift_y, 0, centerShift_y + drawnHeight * 0.15);
      grad.addColorStop(0, 'rgba(19, 23, 31, 1)');
      grad.addColorStop(1, 'rgba(19, 23, 31, 0)');
      context.fillStyle = grad;
      context.fillRect(centerShift_x, centerShift_y, drawnWidth, drawnHeight * 0.15);

      // Bottom fade
      grad = context.createLinearGradient(0, centerShift_y + drawnHeight, 0, centerShift_y + drawnHeight - drawnHeight * 0.15);
      grad.addColorStop(0, 'rgba(19, 23, 31, 1)');
      grad.addColorStop(1, 'rgba(19, 23, 31, 0)');
      context.fillStyle = grad;
      context.fillRect(centerShift_x, centerShift_y + drawnHeight - drawnHeight * 0.15, drawnWidth, drawnHeight * 0.15);

      // Left fade
      grad = context.createLinearGradient(centerShift_x, 0, centerShift_x + drawnWidth * 0.15, 0);
      grad.addColorStop(0, 'rgba(19, 23, 31, 1)');
      grad.addColorStop(1, 'rgba(19, 23, 31, 0)');
      context.fillStyle = grad;
      context.fillRect(centerShift_x, centerShift_y, drawnWidth * 0.15, drawnHeight);

      // Right fade
      grad = context.createLinearGradient(centerShift_x + drawnWidth, 0, centerShift_x + drawnWidth - drawnWidth * 0.15, 0);
      grad.addColorStop(0, 'rgba(19, 23, 31, 1)');
      grad.addColorStop(1, 'rgba(19, 23, 31, 0)');
      context.fillStyle = grad;
      context.fillRect(centerShift_x + drawnWidth - drawnWidth * 0.15, centerShift_y, drawnWidth * 0.15, drawnHeight);
    };

    render(images[0]);

    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollY = -top;
      const maxScroll = height - window.innerHeight;

      let scrollFraction = scrollY / maxScroll;
      if (scrollFraction < 0) scrollFraction = 0;
      if (scrollFraction > 1) scrollFraction = 1;

      if (markersRef.current) {
        markersRef.current.style.setProperty('--scroll-p', scrollFraction.toString());
      }

      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => render(images[frameIndex]));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => {
      const { top, height } = containerRef.current!.getBoundingClientRect();
      const scrollY = -top;
      const maxScroll = height - window.innerHeight;
      let scrollFraction = scrollY / maxScroll;
      if (scrollFraction < 0) scrollFraction = 0;
      if (scrollFraction > 1) scrollFraction = 1;
      const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
      render(images[frameIndex]);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images]);

  return (
    <section id="why-us" ref={containerRef} className="relative w-full h-[150vh] bg-[#13171F]">
      <div className="sticky top-0 h-[100dvh] w-full flex items-center bg-[#13171F] overflow-hidden">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0 bg-[#13171F]">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" />

          {/* Edge fading shades to blend the video on all borders */}
          <div className="absolute inset-x-0 top-0 h-[15%] bg-gradient-to-b from-[#13171F] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[15%] bg-gradient-to-t from-[#13171F] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-[#13171F] to-transparent z-10 pointer-events-none" />

          {/* Subtle dark gradient overlay to ensure text is clearly visible */}
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#13171F] via-[#13171F]/80 to-transparent w-full md:w-[65%] z-10 pointer-events-none" />
        </div>

        {/* Overlay Floating Badges & Markers */}
        <div ref={markersRef} className="absolute inset-0 z-30 hidden sm:block max-w-[1200px] mx-auto pointer-events-none transition-opacity duration-700">
          {/* Container tailored for the rightward-shifted car */}
          <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[45%] h-[50vh] scale-[0.8] lg:scale-90 xl:scale-100" style={{ opacity: 'calc(var(--scroll-p, 0) * 1.5)' }}>

            {/* Engine Check Badge */}
            <div className="absolute top-[8%] left-[12%] z-20">
              <div className="relative flex items-center gap-2 border border-blue-100/10 bg-[#13171F]/90 px-3 py-1.5 rounded-full shadow-xl w-max z-20" style={{ transform: 'scale(calc(0.7 + (var(--scroll-p, 0) * 0.3)))' }}>
                <Activity className="w-3 h-3 text-[#FF7A00]" />
                <span className="text-white text-[10px] font-semibold tracking-[0.03em]">Engine Check</span>
              </div>
              <div className="absolute top-1/2 left-[30%] border-l-[1.5px] border-b-[1.5px] border-[#FF7A00]/70 rounded-bl-xl origin-top-right transition-all" style={{ width: 'calc(10px + 50px * var(--scroll-p, 0))', height: 'calc(10px + 50px * var(--scroll-p, 0))' }}>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#13171F] border-[1.5px] border-[#FF7A00] rounded-full shadow-[0_0_8px_#FF7A00]" />
              </div>
            </div>

            {/* AC Service Badge */}
            <div className="absolute top-[3%] right-[22%] z-20">
              <div className="relative flex items-center gap-2 border border-blue-100/10 bg-[#13171F]/90 px-3 py-1.5 rounded-full shadow-xl w-max z-20" style={{ transform: 'scale(calc(0.7 + (var(--scroll-p, 0) * 0.3)))' }}>
                <Wind className="w-3 h-3 text-[#FF7A00]" />
                <span className="text-white text-[10px] font-semibold tracking-[0.03em]">AC Service</span>
              </div>
              <div className="absolute top-1/2 right-[30%] border-r-[1.5px] border-b-[1.5px] border-[#FF7A00]/70 rounded-br-xl origin-top-left transition-all" style={{ width: 'calc(10px + 45px * var(--scroll-p, 0))', height: 'calc(10px + 40px * var(--scroll-p, 0))' }}>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#13171F] border-[1.5px] border-[#FF7A00] rounded-full shadow-[0_0_8px_#FF7A00]" />
              </div>
            </div>

            {/* Brake Service Badge */}
            <div className="absolute bottom-[22%] left-[28%] z-20">
              <div className="absolute bottom-[80%] left-[50%] border-l-[1.5px] border-t-[1.5px] border-[#FF7A00]/70 rounded-tl-xl origin-bottom-right transition-all" style={{ width: 'calc(10px + 35px * var(--scroll-p, 0))', height: 'calc(10px + 55px * var(--scroll-p, 0))' }}>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#13171F] border-[1.5px] border-[#FF7A00] rounded-full shadow-[0_0_8px_#FF7A00]" />
              </div>
              <div className="relative flex items-center gap-2 border border-blue-100/10 bg-[#13171F]/90 px-3 py-1.5 mt-2 rounded-full shadow-xl w-max z-20" style={{ transform: 'scale(calc(0.7 + (var(--scroll-p, 0) * 0.3)))' }}>
                <Disc className="w-3 h-3 text-[#FF7A00]" />
                <span className="text-white text-[10px] font-semibold tracking-[0.03em]">Brake Service</span>
              </div>
            </div>

            {/* Battery Check Badge */}
            <div className="absolute bottom-[10%] right-[20%] z-20">
              <div className="absolute bottom-[80%] right-[30%] border-r-[1.5px] border-t-[1.5px] border-[#FF7A00]/70 rounded-tr-xl origin-bottom-left transition-all" style={{ width: 'calc(10px + 55px * var(--scroll-p, 0))', height: 'calc(10px + 45px * var(--scroll-p, 0))' }}>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#13171F] border-[1.5px] border-[#FF7A00] rounded-full shadow-[0_0_8px_#FF7A00]" />
              </div>
              <div className="relative flex items-center gap-2 border border-blue-100/10 bg-[#13171F]/90 px-3 py-1.5 mt-2 rounded-full shadow-xl w-max z-20" style={{ transform: 'scale(calc(0.7 + (var(--scroll-p, 0) * 0.3)))' }}>
                <BatteryCharging className="w-3 h-3 text-[#FF7A00]" />
                <span className="text-white text-[10px] font-semibold tracking-[0.03em]">Battery Check</span>
              </div>
            </div>

          </div>
        </div>

        {/* Content on Left */}
        <div className="relative z-20 w-full max-w-[1150px] mx-auto px-6 sm:px-10 md:px-16 flex items-center">
          <div className="max-w-sm md:max-w-md lg:max-w-lg md:pt-4">
            <h6 className="text-[#a1a1aa] text-[7.5px] sm:text-[8.5px] font-bold tracking-[0.15em] mb-2.5 uppercase">
              The Auto Tricks Advantage
            </h6>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[1.1] mb-4 text-white tracking-tight">
              Advanced Care. <br />
              <span className="text-[#FF7A00]">Lasting Performance.</span>
            </h2>
            <p className="text-[#d4d4d8] text-[11px] sm:text-[12px] leading-relaxed mb-8 max-w-[90%] font-medium">
              We use advanced tools, genuine parts and expert technicians to give your car the care it deserves.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 sm:space-y-4">
              {[
                "Genuine Spare Parts",
                "Trained & Verified Technicians",
                "Transparent Pricing",
                "Real-time Service Updates"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <div className="text-[#FF7A00]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 12l3 3 5-5" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-[11px] sm:text-[12px] font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#FFFFFF] font-sans w-full min-h-screen flex flex-col">
      {/* Common Header Wrapper */}
      <div className={`w-full flex justify-center fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#111111]/80 backdrop-blur-lg border-b border-white/5 shadow-sm' : 'bg-transparent border-b border-transparent'}`}>
        <header className="relative z-20 flex-shrink-0 flex items-center justify-between px-6 md:px-10 py-3 max-w-[1400px] mx-auto w-full">
          <a href="/" className="flex items-center gap-2 ml-2 md:ml-10 group">
            <div className="bg-[#FF7A00] p-1.5 rounded-md">
              <Wrench className="w-4 h-4 text-white transform group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.5} />
            </div>
            <span className="text-[17px] font-black tracking-wide text-white group-hover:text-gray-200 transition-colors">AutoTricks</span>
          </a>

          <nav className="hidden md:flex gap-10 text-xs font-medium text-gray-300">
            <a href="#home" className="text-[#FF7A00] pb-1 border-b-2 border-[#FF7A00]">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
          </nav>

          <button onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openBookingModal')); }} className="hidden md:inline-block bg-[#FF7A00] hover:bg-[#e06b00] text-white px-4 py-1.5 rounded-full text-[11px] font-bold transition-colors mr-2 md:mr-10">
            Book Service
          </button>
        </header>
      </div>

      <HeroScrollAnimation />

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 px-6 sm:px-10 md:px-16 w-full flex justify-center bg-white flex-1">
        <div className="w-full max-w-[1150px] flex flex-col md:flex-row items-center md:items-start justify-between gap-12 lg:gap-20">

          {/* Left Text Block */}
          <div className="w-full md:w-[35%] lg:w-[33%] shrink-0 md:pt-3">
            <h6 className="text-[#1A1A1A] text-[8.5px] sm:text-[9.5px] font-extrabold tracking-[0.15em] mb-3 uppercase">
              Our Services
            </h6>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[34px] font-extrabold leading-[1.1] mb-4 text-[#1A1A1A] tracking-tight">
              Complete Car Care <br />
              <span className="text-[#FF7A00]">Under One Roof</span>
            </h2>
            <p className="text-gray-500 text-[11.5px] sm:text-[12px] leading-relaxed mb-6 max-w-[95%] font-medium">
              From routine maintenance to advanced repairs, we handle it all — at your doorstep.
            </p>
            <a href="/services" className="inline-flex items-center gap-2 text-[#FF7A00] font-bold text-[11.5px] sm:text-[12px] hover:gap-3 transition-all duration-300">
              Explore All Services <ArrowRight className="w-3.5 h-3.5 text-[#FF7A00]" />
            </a>
          </div>

          {/* Right Cards Grid */}
          <div className="w-full md:w-[70%] lg:w-[67%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5">

            {/* Card 1 */}
            <div className="bg-[#FFF4E5] border border-[#FF7A00]/20 py-3.5 px-5 sm:px-6 rounded-[14px] transition-transform duration-300 hover:scale-[1.02] flex flex-col justify-center min-h-[110px]">
              <div className="mb-2 relative w-fit">
                <Wrench className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] text-[#1A1A1A]" strokeWidth={2} />
                <span className="absolute -top-0.5 -right-0.5 w-[7px] h-[7px] sm:w-2 sm:h-2 bg-[#FF7A00] rounded-full border-[1.5px] border-[#FFF4E5]"></span>
              </div>
              <h3 className="text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] mb-0.5 leading-tight">Periodic Service</h3>
              <p className="text-[8.5px] sm:text-[9.5px] text-gray-500 font-medium leading-tight">Keep your car in top shape</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFF4E5] border border-[#FF7A00]/20 py-3.5 px-5 sm:px-6 rounded-[14px] transition-transform duration-300 hover:scale-[1.02] flex flex-col justify-center min-h-[110px]">
              <div className="mb-2 relative w-fit">
                <Activity className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] text-[#1A1A1A]" strokeWidth={2} />
                <span className="absolute -top-0.5 -right-0.5 w-[7px] h-[7px] sm:w-2 sm:h-2 bg-[#FF7A00] rounded-full border-[1.5px] border-[#FFF4E5]"></span>
              </div>
              <h3 className="text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] mb-0.5 leading-tight">Engine Diagnostics</h3>
              <p className="text-[8.5px] sm:text-[9.5px] text-gray-500 font-medium leading-tight">Find issues early</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFF4E5] border border-[#FF7A00]/20 py-3.5 px-5 sm:px-6 rounded-[14px] transition-transform duration-300 hover:scale-[1.02] flex flex-col justify-center min-h-[110px]">
              <div className="mb-2 relative w-fit">
                <Disc className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] text-[#1A1A1A]" strokeWidth={2} />
                <span className="absolute -top-0.5 -right-0.5 w-[7px] h-[7px] sm:w-2 sm:h-2 bg-[#FF7A00] rounded-full border-[1.5px] border-[#FFF4E5]"></span>
              </div>
              <h3 className="text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] mb-0.5 leading-tight">Brake Service</h3>
              <p className="text-[8.5px] sm:text-[9.5px] text-gray-500 font-medium leading-tight">Safe stops, every time</p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FFF4E5] border border-[#FF7A00]/20 py-3.5 px-5 sm:px-6 rounded-[14px] transition-transform duration-300 hover:scale-[1.02] flex flex-col justify-center min-h-[110px]">
              <div className="mb-2 relative w-fit">
                <Wind className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] text-[#1A1A1A]" strokeWidth={2} />
                <span className="absolute -top-0.5 -right-0.5 w-[7px] h-[7px] sm:w-2 sm:h-2 bg-[#FF7A00] rounded-full border-[1.5px] border-[#FFF4E5]"></span>
              </div>
              <h3 className="text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] mb-0.5 leading-tight">AC Service</h3>
              <p className="text-[8.5px] sm:text-[9.5px] text-gray-500 font-medium leading-tight">Beat the heat</p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#FFF4E5] border border-[#FF7A00]/20 py-3.5 px-5 sm:px-6 rounded-[14px] transition-transform duration-300 hover:scale-[1.02] flex flex-col justify-center min-h-[110px]">
              <div className="mb-2 relative w-fit">
                <BatteryCharging className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] text-[#1A1A1A]" strokeWidth={2} />
                <span className="absolute -top-0.5 -right-0.5 w-[7px] h-[7px] sm:w-2 sm:h-2 bg-[#FF7A00] rounded-full border-[1.5px] border-[#FFF4E5]"></span>
              </div>
              <h3 className="text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] mb-0.5 leading-tight">Battery Check</h3>
              <p className="text-[8.5px] sm:text-[9.5px] text-gray-500 font-medium leading-tight">Reliable power</p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#FFF4E5] border border-[#FF7A00]/20 py-3.5 px-5 sm:px-6 rounded-[14px] transition-transform duration-300 hover:scale-[1.02] flex flex-col justify-center min-h-[110px]">
              <div className="mb-2 relative w-fit">
                <Settings className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] text-[#1A1A1A]" strokeWidth={2} />
                <span className="absolute -top-0.5 -right-0.5 w-[7px] h-[7px] sm:w-2 sm:h-2 bg-[#FF7A00] rounded-full border-[1.5px] border-[#FFF4E5]"></span>
              </div>
              <h3 className="text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] mb-0.5 leading-tight">General Repairs</h3>
              <p className="text-[8.5px] sm:text-[9.5px] text-gray-500 font-medium leading-tight">All major & minor fixes</p>
            </div>

          </div>
        </div>
      </section>

      <Section3ScrollAnimation />

      {/* 4th Section - How It Works */}
      <section id="how-it-works" className="relative w-full py-6 md:py-8 bg-white overflow-hidden flex justify-center px-6 sm:px-10 lg:pl-16 lg:pr-8">

        <div className="w-full max-w-[1300px] flex flex-col z-10 w-full lg:w-auto relative">

          {/* Heading */}
          <div className="mb-8 lg:mb-10 w-full pl-2">
            <h6 className="text-[#64748B] text-[8.5px] sm:text-[9px] font-bold tracking-[0.22em] mb-2 uppercase">
              Simple Steps. Big Convenience.
            </h6>
            <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] font-extrabold leading-[1.1] text-[#1A1A1A] tracking-tight">
              How It Works
            </h2>
          </div>

          {/* Inline Content Row: 4 Grids + Image */}
          <div className="flex flex-row items-center justify-between w-full gap-4 md:gap-6 lg:gap-10">

            {/* The 4 Grids / Steps (Individual Cards) */}
            <div className="flex flex-row items-center justify-between w-[68%] xl:w-[70%] gap-2 sm:gap-3 lg:gap-4 relative z-10">
              {[
                { num: "01", title: "Book Your Service", desc: "Choose your service and preferred time.", icon: CalendarDays, active: true },
                { num: "02", title: "We Come to You", desc: "Our team reaches your location on time.", icon: MapPin },
                { num: "03", title: "Service & Check", desc: "Expert service with genuine parts.", icon: Wrench },
                { num: "04", title: "Back on the Road", desc: "Your car is ready, we deliver it to you.", icon: CarFront },
              ].map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-start w-full flex-1 bg-[#FFF4E5] border border-[#FF7A00]/20 p-2.5 sm:p-3 lg:p-4 rounded-[14px] transition-transform duration-300 hover:-translate-y-1">

                  {/* Icon Node */}
                  <div className={`mb-2 md:mb-3 lg:mb-4 rounded-full flex items-center justify-center ${step.active ? 'p-[2.5px] md:p-[3px] lg:p-[4px] border-[1.5px] border-[#FF7A00]/60 -ml-[2px] md:-ml-[3px] lg:-ml-[4px]' : 'p-[2.5px] md:p-[3px] lg:p-[4px] border-[1.5px] border-transparent'}`}>
                    <div className="w-7 h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 bg-white rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                      <step.icon className={`w-3.5 h-3.5 md:w-3.5 md:h-3.5 lg:w-[18px] lg:h-[18px] ${step.active ? 'text-[#1A1A1A]' : 'text-[#475569]'}`} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Structural Arrow */}
                  {idx !== 3 && (
                    <div className="block absolute top-[40%] -right-1 sm:-right-2 lg:-right-3 translate-x-full -translate-y-1/2 z-20">
                      <ArrowRight className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-[#FF7A00] opacity-80" strokeWidth={3} />
                    </div>
                  )}

                  {/* Text Content */}
                  <div className="text-[7.5px] md:text-[9.5px] lg:text-[10.5px] font-bold text-[#475569] mb-0.5">{step.num}</div>
                  <div className="text-[8.5px] md:text-[10.5px] lg:text-[11.5px] font-bold text-[#1A1A1A] mb-0.5 leading-tight pr-1">{step.title}</div>
                  <p className="text-[7px] md:text-[8.5px] lg:text-[10px] text-[#64748B] leading-[1.3] pr-1">
                    {step.desc}
                  </p>

                </div>
              ))}
            </div>

            {/* Van Image Immediately Next to 4th Grid */}
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

      {/* 5th Section - Doorstep Convenience */}
      <section className="relative w-full min-h-[450px] lg:min-h-[500px] flex items-center bg-[#13171F] overflow-hidden">

        {/* Background Image Setup natively mimicking Section 3 */}
        <div className="absolute inset-0 z-0 flex justify-end">
          {/* Deep dark void base covering native layout */}
          <div className="absolute inset-0 bg-[#13171F]" />

          {/* Half-screen image block explicitly reducing zoom ratio */}
          <img
            src="/5th section.png"
            alt="Mechanic providing doorstep service"
            className="w-full md:w-[60%] lg:w-[50%] h-[100%] lg:h-[110%] object-cover object-[left_center] md:object-center opacity-[0.85] z-0 [mask-image:linear-gradient(to_right,transparent_0%,black_25%,black_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_25%,black_100%)]"
          />

          {/* Mapped geometric overlay gradients precisely targeting the image border seam at 50% */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#13171F] from-[35%] lg:from-[40%] via-[#13171F]/80 via-[48%] lg:via-[50%] to-transparent to-[75%] lg:to-[65%] z-10" />
        </div>

        {/* Core Content constrained in 1300px centered frame over the cinematic background */}
        <div className="w-full max-w-[1300px] flex flex-col md:flex-row items-center justify-start z-10 w-full relative py-12 md:py-20 mx-auto px-6 sm:px-10 lg:px-16">

          {/* Subtle Orange Graphic Aura (kept for thematic flair, positioned behind text) */}
          <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] bg-[#FF7A00]/[0.08] blur-[100px] rounded-full z-0 pointer-events-none" />

          {/* Left Side: Content Box directly overlaying the fade */}
          <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col items-start relative z-10">

            <h2 className="text-[22px] sm:text-[26px] lg:text-[32px] font-extrabold leading-[1.05] tracking-tight mb-5">
              <span className="text-white block">Doorstep Convenience.</span>
              <span className="text-[#FF7A00] block mt-1">Maximum Comfort.</span>
            </h2>

            <p className="text-[11.5px] sm:text-[12px] lg:text-[13px] font-medium text-gray-400 leading-relaxed mb-8 max-w-[90%]">
              No need to visit a workshop. We bring the service to your doorstep — at your home, office or anywhere in your city.
            </p>

            {/* Feature List */}
            <div className="flex flex-col gap-1.5 sm:gap-2.5 w-full ml-1">
              {[
                { title: 'Home Service', icon: HomeIcon },
                { title: 'Office Service', icon: Building2 }, // Used Building2 as approximation for Office
                { title: 'Flexible Scheduling', icon: CalendarDays },
                { title: 'Real-time Tracking', icon: MapPin }, // MapPin fits tracking cleanly
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 group cursor-default">
                  {/* Styled Icon wrapper with distinctive swoosh */}
                  <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-[#1C222E] shadow-[0_4px_15px_rgba(0,0,0,0.3)] border border-white/5 transition-all group-hover:scale-105">
                    {/* Orange half-circle swoosh around left side */}
                    <div className="absolute inset-0 border-[1.5px] border-[#FF7A00] border-r-transparent border-t-transparent -rotate-[45deg] rounded-full opacity-80" />
                    <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-white transition-colors" strokeWidth={2} />
                  </div>
                  <span className="text-[11.5px] sm:text-[13px] font-bold text-gray-200 tracking-wider group-hover:text-[#FF7A00] transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6th Section - Our Promise */}
      <section className="relative w-full bg-[#F9FAFB] flex flex-col justify-center py-2 lg:py-4 px-6 sm:px-10 overflow-hidden items-center">
        <div className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-4 lg:gap-10 relative z-10 mx-auto">

          {/* Column 1: Typography & CTA */}
          <div className="flex flex-col items-start md:col-span-1 z-20 md:translate-x-12 lg:translate-x-[120px] xl:translate-x-[180px]">
            <span className="text-[11px] sm:text-[12px] uppercase font-extrabold tracking-[0.25em] text-gray-400 mb-3 ml-1">
              OUR PROMISE
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold leading-[1.05] tracking-tight mb-4">
              <span className="text-[#1A1A1A] block">Quality Service.</span>
              <span className="text-[#FF7A00] block mt-1">Every Time.</span>
            </h2>
            <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-medium text-[#475569] leading-relaxed mb-8 max-w-[85%]">
              Your car deserves the best. And we&apos;re here to deliver it — at your doorstep.
            </p>
            <button onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openBookingModal')); }} className="relative overflow-hidden bg-gradient-to-r from-[#FF512F] to-[#F09819] px-5 py-2.5 rounded-full shadow-[0_8px_20px_rgba(255,122,0,0.2)] flex items-center justify-center group transition-transform hover:scale-[1.02]">
              <span className="relative z-10 text-white font-bold text-[13px] flex items-center gap-1.5 tracking-wide">
                Book Your Service
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
          </div>

          {/* Column 2: Central Featured Car Graphic */}
          <div className="flex justify-center md:col-span-1 relative z-10 w-full h-[300px] md:h-[380px] lg:h-[400px]">
            {/* The bounding box for the top-down car asset */}
            <img
              src="/6th section.png"
              alt="Premium Assurance AutoTricks Car"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-[120%] md:h-[115%] object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.2)] pointer-events-none"
            />
          </div>

          {/* Column 3: Feature Pills List */}
          <div className="flex flex-col gap-3 md:gap-5 items-start md:items-end md:col-span-1 z-20 md:-translate-x-24 lg:-translate-x-[250px] xl:-translate-x-[350px]">
            {[
              { title: '100% Genuine Parts', icon: ShieldCheck },
              { title: 'Trained Technicians', icon: UserCheck },
              { title: 'On-Time Delivery', icon: Clock },
              { title: 'Affordable Pricing', icon: Tag },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 md:gap-4 bg-white pl-3 pr-4 md:pr-5 py-2.5 md:py-3 rounded-[14px] shadow-[0_10px_25px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_15px_30px_rgba(255,122,0,0.06)] transition-all flex-row md:flex-row-reverse w-[90%] md:w-auto">
                {/* Feature Text */}
                <span className="text-[12px] lg:text-[13px] font-bold text-[#1A1A1A] md:w-[125px] lg:w-[140px] text-left md:text-right leading-tight whitespace-nowrap md:whitespace-normal">
                  {feature.title}
                </span>

                {/* Custom Icon Circle */}
                <div className="relative w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full bg-white shadow-[0_3px_8px_rgba(0,0,0,0.04)] border border-gray-50 flex-shrink-0">
                  <div className="absolute inset-0 border-[1.5px] border-[#FF7A00] border-r-transparent border-t-transparent -rotate-[45deg] rounded-full opacity-70" />
                  <feature.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#475569]" strokeWidth={2.2} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7th Section - Final CTA Cinematic Banner */}
      <section className="relative w-full min-h-[300px] md:min-h-[350px] lg:min-h-[380px] flex items-center bg-[#111111] overflow-hidden mt-4 md:mt-6">

        {/* Full-Bleed Absolute Background Array */}
        <div className="absolute inset-0 z-0">
          <img
            src="/7th section.png"
            alt="Sunset Driving Car"
            className="w-full h-full object-cover object-center md:object-[center_30%]"
          />
          {/* Intense gradient crushing the left side to pure darkness for text accessibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] from-10% md:from-20% via-[#111111]/80 via-40% md:via-[45%] to-transparent w-full md:w-[85%]" />
        </div>

        {/* Unobstructed Content Wrapper */}
        <div className="w-full max-w-[1300px] flex flex-col items-start z-10 mx-auto relative px-6 sm:px-10 lg:px-16 py-8 md:py-10">
          <div className="flex flex-col items-start max-w-[90%] md:max-w-[500px] md:ml-12 lg:ml-24 xl:ml-32">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-extrabold text-white leading-[1.05] tracking-tight mb-3">
              Your Car. Our Priority.
            </h2>
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-gray-300 leading-[1.6] tracking-wide mb-7 max-w-[300px]">
              Book your service today and experience<br className="hidden sm:block" /> the convenience of doorstep car care.
            </p>
            <button onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openBookingModal')); }} className="relative overflow-hidden bg-gradient-to-r from-[#FF512F] to-[#F09819] px-5 py-2.5 rounded-full shadow-[0_8px_20px_rgba(255,122,0,0.25)] flex items-center justify-center group transition-transform hover:scale-[1.02]">
              <span className="relative z-10 text-white font-bold text-[12px] flex items-center gap-1.5 tracking-wide">
                Book Now
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
          </div>
        </div>
      </section>

      {/* 8th Section - Premium Dark Footer */}
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
                  { name: 'Home', href: '#home' },
                  { name: 'Services', href: '#services' },
                  { name: 'Why Us', href: '#why-us' },
                  { name: 'How It Works', href: '#how-it-works' },
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
    </div>
  );
}
