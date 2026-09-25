import os
import re

files = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']

for path in files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()

        # Fix the logo back to the actual filename (which has a space)
        c = c.replace('src="/autotricks-logo.png"', 'src="/autotricks logo.png"')

        # Change the mobile menu from full-screen to a sidebar
        old_menu = r'<div className={`md:hidden fixed inset-0 bg-\[#111111\] z-\[60\] flex flex-col pt-24 px-8 transition-transform duration-300 ease-in-out \$\{isMobileMenuOpen \? \'translate-x-0\' : \'translate-x-full\'\}`\}>'
        
        new_menu = '''
        {/* Mobile Menu Backdrop */}
        <div 
          onClick={() => setIsMobileMenuOpen(false)} 
          className={`md:hidden fixed inset-0 bg-black/60 z-[55] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        />

        {/* Mobile Menu Sidebar */}
        <div className={`md:hidden fixed inset-y-0 right-0 w-[75vw] sm:w-[300px] bg-[#111111] z-[60] flex flex-col pt-24 px-8 transition-transform duration-300 ease-in-out border-l border-white/10 shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>'''
        
        c = re.sub(old_menu, new_menu, c)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print('Updated', path)
