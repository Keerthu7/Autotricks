import re

with open('app/about/page.tsx', 'r') as f:
    orig = f.read()

# Isolate the stats grid block
start = orig.find('<div className="grid grid-cols-2 gap-6 lg:gap-8">')
end = orig.find('</section>', start)
sec = orig[start:end]

# Reduce number size
sec = sec.replace('text-2xl md:text-[32px] font-black', 'text-xl md:text-[24px] font-black')

# Reduce parameter text size
sec = sec.replace('text-[10px] md:text-[13px] text-gray-500', 'text-[9.5px] md:text-[11px] text-gray-500')

content = orig[:start] + sec + orig[end:]

with open('app/about/page.tsx', 'w') as f:
    f.write(content)

print("Grid text sizes reduced")
