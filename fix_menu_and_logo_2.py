import os
files = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']
for path in files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()

        c = c.replace('src="/autotricks-logo.png"', 'src="/autotricks logo.png"')
        
        # We need to change the main div for the mobile menu
        old_div = '        {/* Mobile Menu Overlay */}\n        <div className={`md:hidden fixed inset-0 bg-[#111111] z-[60] flex flex-col pt-24 px-8 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? \'translate-x-0\' : \'translate-x-full\'}`}>'
        new_div = '        {/* Mobile Menu Backdrop */}\n        <div onClick={() => setIsMobileMenuOpen(false)} className={`md:hidden fixed inset-0 bg-black/60 z-[55] transition-opacity duration-300 ${isMobileMenuOpen ? \'opacity-100 pointer-events-auto\' : \'opacity-0 pointer-events-none\'}`} />\n\n        {/* Mobile Menu Sidebar */}\n        <div className={`md:hidden fixed inset-y-0 right-0 w-[75vw] sm:w-[320px] bg-[#111111] z-[60] flex flex-col pt-24 px-8 transition-transform duration-300 ease-in-out border-l border-white/5 shadow-2xl ${isMobileMenuOpen ? \'translate-x-0\' : \'translate-x-full\'}`}>'
        
        c = c.replace(old_div, new_div)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print('Fixed in', path)
