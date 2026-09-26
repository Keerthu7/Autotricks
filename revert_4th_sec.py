import re

with open('app/page.tsx', 'r') as f:
    orig = f.read()

# Isolate desktop section of How it Works
d_start = orig.find('{/* ===================== DESKTOP VIEW (Original Layout) ===================== */}')
d_end = orig.find('{/* 5th Section - Doorstep Convenience */}')

desktop_sec = orig[d_start:d_end]

# Modify Spacing in Grid Titles and Text back to original
desktop_sec = desktop_sec.replace('lg:text-[16.5px] font-bold text-[#475569] mb-2', 
                                  'lg:text-[16.5px] font-bold text-[#475569] mb-0.5')
desktop_sec = desktop_sec.replace('font-bold text-[#1A1A1A] mb-3 leading-normal pr-1 tracking-wider whitespace-nowrap', 
                                  'font-bold text-[#1A1A1A] mb-0.5 leading-tight pr-1 whitespace-nowrap')
desktop_sec = desktop_sec.replace('text-[#64748B] leading-[1.6] pr-1 tracking-widest', 
                                  'text-[#64748B] leading-[1.3] pr-1')

content = orig[:d_start] + desktop_sec + orig[d_end:]
with open('app/page.tsx', 'w') as f:
    f.write(content)

print("4th section text spacings reverted")
