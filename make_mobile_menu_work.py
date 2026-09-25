import os
import re

files = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']

mobile_menu_html = '''
          <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden flex items-center justify-center p-2 text-white/80 hover:text-white transition-colors mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </header>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-[#111111] z-[60] flex flex-col pt-24 px-8 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-5 right-6 text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div className="flex items-center gap-2 mb-10">
            <img src="/autotricks-logo.png" alt="AutoTricks" className="h-10 w-auto object-contain" />
          </div>

          <nav className="flex flex-col gap-6 text-lg font-semibold text-white/90">
            <a href="/#home" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-white/10 pb-3">Home</a>
            <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-white/10 pb-3">Services</a>
            <a href="/#why-us" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-white/10 pb-3">Why Us</a>
            <a href="/#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-white/10 pb-3">How It Works</a>
            <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-white/10 pb-3">About</a>
          </nav>
          
          <button onClick={() => { setIsMobileMenuOpen(false); if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openBookingModal')); }} className="mt-8 bg-[#FF7A00] text-white px-8 py-3.5 rounded-full font-bold shadow-[0_4px_20px_rgba(255,122,0,0.3)] w-full text-center">
            Book Service Now
          </button>
        </div>'''

for path in files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()
            
        # 1. Add state variable
        c = re.sub(r'(const \[isScrolled, setIsScrolled\] = useState\(false\);)', r'\1\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);', c)
        
        # 2. Replace the dummy button with the functioning button and menu HTML
        # The exact dummy button pattern: Match from <button className="md:hidden... to </button>\s*</header>
        pattern = r'<button className="md:hidden flex items-center justify-center p-2 text-white/80 hover:text-white transition-colors mr-2">.*?</button>\s*</header>'
        c = re.sub(pattern, mobile_menu_html, c, flags=re.DOTALL)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print('Implemented functioning mobile menu in', path)
