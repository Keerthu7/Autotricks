import re

with open('app/page.tsx', 'r') as f:
    orig = f.read()

# Isolate desktop section of How it Works
d_start = orig.find('{/* ===================== DESKTOP VIEW (Original Layout) ===================== */}')
d_end = orig.find('{/* 5th Section - Doorstep Convenience */}')

desktop_sec = orig[d_start:d_end]

# Add word-spacing classes instead of tracking (letter spacing)
desktop_sec = desktop_sec.replace('font-bold text-[#1A1A1A] mb-0.5 leading-tight pr-1 whitespace-nowrap', 
                                  'font-bold text-[#1A1A1A] mb-0.5 leading-tight pr-1 whitespace-nowrap [word-spacing:1.5px] lg:[word-spacing:2.5px]')
desktop_sec = desktop_sec.replace('text-[#64748B] leading-[1.3] pr-1', 
                                  'text-[#64748B] leading-[1.4] pr-1 [word-spacing:1.5px] lg:[word-spacing:2.5px]')

content = orig[:d_start] + desktop_sec + orig[d_end:]
with open('app/page.tsx', 'w') as f:
    f.write(content)

print("4th section word spacing added")
