import re

with open('app/about/page.tsx', 'r') as f:
    text = f.read()

# Hero Section
text = text.replace('text-[#FF7A00] text-[9px]', 'text-[#FF7A00] text-[11px] md:text-[14px]')
text = text.replace('md:text-[34px] font-extrabold', 'md:text-[46px] font-extrabold')
text = text.replace('text-[12px] md:text-[13.5px]', 'text-[14px] md:text-[18px]')

# Our Story Section
text = text.replace('text-xl md:text-[26px] font-extrabold', 'text-2xl md:text-[36px] font-extrabold')
text = text.replace('text-[12px] md:text-[13px] leading-relaxed', 'text-[14px] md:text-[18px] leading-relaxed')
text = text.replace('text-[12px] font-bold text-gray-800', 'text-[13px] md:text-[16px] font-bold text-gray-800')

# Grid stats
text = text.replace('text-lg md:text-xl font-black', 'text-2xl md:text-[32px] font-black')
text = text.replace('text-[9.5px] text-gray-500 font-extrabold', 'text-[10px] md:text-[13px] text-gray-500 font-extrabold')

# CTA section
text = text.replace('text-xl md:text-[26px] font-extrabold text-[#1A1A1A] mb-2', 'text-2xl md:text-[32px] font-extrabold text-[#1A1A1A] mb-2')
text = text.replace('text-gray-600 text-[12px] md:text-[13px] font-medium', 'text-gray-600 text-[14px] md:text-[18px] font-medium')
text = text.replace('px-8 py-3.5 rounded-full text-xs font-bold', 'px-8 py-3.5 rounded-full text-[13px] md:text-[16px] font-bold')

with open('app/about/page.tsx', 'w') as f:
    f.write(text)

print("About page text sizes increased")
