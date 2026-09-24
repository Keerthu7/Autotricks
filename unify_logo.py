import re
import os

files = ['app/page.tsx', 'app/services/page.tsx', 'app/about/page.tsx']

header_replacement_1 = '''<a href="/" className="flex items-center gap-2 ml-20 md:ml-24 group">
            <div className="bg-[#FF7A00] p-1.5 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white transform group-hover:rotate-12 transition-transform duration-300"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <span className="text-[17px] font-black tracking-wide text-white group-hover:text-gray-200 transition-colors">AutoTricks</span>
          </a>'''
header_replacement_2 = '''<a href="/" className="flex items-center gap-2 ml-2 md:ml-24 group">
                        <div className="bg-[#FF7A00] p-1.5 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white transform group-hover:rotate-12 transition-transform duration-300"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                        </div>
                        <span className="text-[17px] font-black tracking-wide text-white group-hover:text-gray-200 transition-colors">AutoTricks</span>
                    </a>'''
                    
footer_replacement = '''<a href="/" className="flex items-center gap-2 mb-4 group">
                            <div className="bg-[#FF7A00] p-1.5 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white transform group-hover:rotate-12 transition-transform duration-300"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                            </div>
                            <span className="text-white text-[18px] font-black tracking-wide group-hover:text-gray-200 transition-colors">AutoTricks</span>
                        </a>'''

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Header
    content = re.sub(r'<div className="flex items-center gap-3 ml-20 md:ml-24">.*?<span className="text-\[17px\] font-bold tracking-wide text-white">AutoTricks</span>\s*</div>', header_replacement_1, content, flags=re.DOTALL)
    content = re.sub(r'<div className="flex items-center gap-3 ml-2 md:ml-24">.*?<span className="text-\[17px\] font-bold tracking-wide text-white">AutoTricks</span>\s*</div>', header_replacement_2, content, flags=re.DOTALL)
    
    # Header again in case it uses Wrench from lucide (already modified versions)
    content = re.sub(r'<div className="flex items-center gap-2 mb-4 group cursor-pointer">.*?<span className="text-white text-\[18px\] font-black tracking-wide">AutoTricks</span>\s*</div>', footer_replacement, content, flags=re.DOTALL)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
print("Done logo unification!")
