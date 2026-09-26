import re

with open('app/services/page.tsx', 'r') as f:
    text = f.read()

# Headers
text = text.replace('text-[8.5px] sm:text-[9.5px]', 'text-[11px] sm:text-[14px]')
text = text.replace('lg:text-[34px]', 'lg:text-[46px]')
text = text.replace('md:text-[13px]', 'md:text-[18px]')

# Grid Container
# Make the grid container wider and gaps larger for the bigger texts
text = text.replace('max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4', 'max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-8')

# Grid Text
text = text.replace('text-[13px] sm:text-[14px]', 'text-[16px] sm:text-[20px]')
text = text.replace('text-[10px] sm:text-[10.5px]', 'text-[13px] sm:text-[15px]')

# CTA button
text = text.replace('px-6 py-2.5 bg-[#FF7A00] text-white font-bold rounded-full hover:bg-[#e06b00] transition-colors shadow-lg hover:shadow-[#FF7A00]/25 text-xs', 'px-8 py-3.5 bg-[#FF7A00] text-white font-bold rounded-full hover:bg-[#e06b00] transition-colors shadow-lg hover:shadow-[#FF7A00]/25 text-[14px] md:text-[17px]')

with open('app/services/page.tsx', 'w') as f:
    f.write(text)

print("Services text sizes increased")
