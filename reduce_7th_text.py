import re

with open('app/page.tsx', 'r') as f:
    orig = f.read()

# Isolate 7th Section
d_start = orig.find('{/* 7th Section - Final CTA Cinematic Banner */}')
d_end = orig.find('{/* 8th Section - Premium Dark Footer */}', d_start)
sec = orig[d_start:d_end]

# Reduce h2 Main Title
sec = sec.replace('lg:text-[44px] font-extrabold', 'lg:text-[40px] font-extrabold')

# Reduce paragraph text
sec = sec.replace('lg:text-[20px] font-medium text-gray-300', 'lg:text-[18px] font-medium text-gray-300')

# Reduce CTA button text
sec = sec.replace('md:text-[18px]', 'md:text-[16px]')

content = orig[:d_start] + sec + orig[d_end:]
with open('app/page.tsx', 'w') as f:
    f.write(content)

print("7th section text scaling reduced")
