import re

with open('app/page.tsx', 'r') as f:
    orig = f.read()

# Isolate desktop section of How it Works
d_start = orig.find('{/* ===================== DESKTOP VIEW (Original Layout) ===================== */}')
d_end = orig.find('id="5th section"', d_start) # There is no id="5th section", let's find 5th Section comment
if d_end == -1:
    d_end = orig.find('{/* 5th Section - Doorstep Convenience */}')

desktop_sec = orig[d_start:d_end]

# 1. Modify Spacing in Grid Titles and Text
desktop_sec = desktop_sec.replace('lg:text-[17.5px] font-bold text-[#1A1A1A] mb-0.5 leading-tight pr-1', 
                                  'lg:text-[17.5px] font-bold text-[#1A1A1A] mb-1.5 leading-normal pr-1 tracking-wide')
desktop_sec = desktop_sec.replace('text-[8.5px] lg:text-[16px] text-[#64748B] leading-[1.3] pr-1', 
                                  'text-[8.5px] lg:text-[16px] text-[#64748B] leading-relaxed pr-1 tracking-wide')

# 2. Modify Image scale (by adjusting Flex Basis % and Max-Widths)
desktop_sec = desktop_sec.replace('w-[68%] xl:w-[70%] gap-3 lg:gap-4', 'w-[62%] xl:w-[60%] gap-3 lg:gap-4')
desktop_sec = desktop_sec.replace('w-[31%] xl:w-[35%] flex justify-end flex-shrink-0', 'w-[37%] xl:w-[40%] flex justify-end flex-shrink-0')
desktop_sec = desktop_sec.replace('max-w-[400px]', 'max-w-[500px]')
desktop_sec = desktop_sec.replace('scale-[1.03]', 'scale-[1.06]')

content = orig[:d_start] + desktop_sec + orig[d_end:]
with open('app/page.tsx', 'w') as f:
    f.write(content)

print("4th section desktop modified")
