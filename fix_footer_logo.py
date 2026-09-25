import os

files = [
    r"c:\Users\keert\OneDrive\Desktop\Autotrickss\autotrickss\app\page.tsx",
    r"c:\Users\keert\OneDrive\Desktop\Autotrickss\autotrickss\app\services\page.tsx",
    r"c:\Users\keert\OneDrive\Desktop\Autotrickss\autotrickss\app\about\page.tsx"
]

target_footer_logo = '''<a href="/" className="flex items-center gap-2 mb-4 group cursor-pointer">
              <img src="/autotricks logo.png" alt="AutoTricks" className="h-12 md:h-[50px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300" />
            </a>'''
            
replacement_footer_logo = '''<a href="/" className="flex items-center gap-2 mb-6 md:mb-5 group cursor-pointer">
              <img src="/autotricks logo.png" alt="AutoTricks" className="h-[75px] md:h-[90px] lg:h-[100px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300" />
            </a>'''

# The indented version in services/about
target_footer_logo_alt = '''<a href="/" className="flex items-center gap-2 mb-4 group cursor-pointer">
                            <img src="/autotricks logo.png" alt="AutoTricks" className="h-12 md:h-[50px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300" />
                        </a>'''
                        
replacement_footer_logo_alt = '''<a href="/" className="flex items-center gap-2 mb-6 md:mb-5 group cursor-pointer">
                            <img src="/autotricks logo.png" alt="AutoTricks" className="h-[75px] md:h-[90px] lg:h-[100px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300" />
                        </a>'''


for path in files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()
            
        c = c.replace(target_footer_logo, replacement_footer_logo)
        c = c.replace(target_footer_logo_alt, replacement_footer_logo_alt)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print(f"Updated footer logo in {path}")
