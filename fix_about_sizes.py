import re

with open('app/about/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Hero text size reductions
text = text.replace('text-[10px]', 'text-[9px]')
text = text.replace('text-3xl md:text-5xl', 'text-2xl md:text-[34px]')
text = text.replace('text-sm md:text-[15px]', 'text-[12px] md:text-[13.5px]')

# Section 2 reductions
text = text.replace('text-2xl md:text-3xl font-extrabold', 'text-xl md:text-[26px] font-extrabold')
text = text.replace('text-sm leading-relaxed', 'text-[12px] md:text-[13px] leading-relaxed')
text = text.replace('text-sm font-bold text-gray-800', 'text-[12px] font-bold text-gray-800')

# Grid numbers
text = text.replace('text-2xl font-black text-[#1A1A1A]', 'text-lg md:text-xl font-black text-[#1A1A1A]')

# CTA section
text = text.replace('text-2xl md:text-3xl font-extrabold text-white', 'text-[22px] md:text-2xl font-extrabold text-white')
text = text.replace('text-white/80 text-sm font-medium', 'text-white/80 text-[12px] md:text-[13px] font-medium')

with open('app/about/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print('Done!')
