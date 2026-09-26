import re

with open('app/page.tsx', 'r') as f:
    orig = f.read()

# Isolate 6th Section
d_start = orig.find('{/* 6th Section - Our Promise */}')
d_end = orig.find('{/* Column 2: Central Featured Car Graphic */}', d_start)
sec = orig[d_start:d_end]

# Reduce OUR PROMISE text
sec = sec.replace('md:text-[18px]', 'md:text-[16px]')

# Reduce h2 Main Title
sec = sec.replace('lg:text-[48px] font-extrabold', 'lg:text-[44px] font-extrabold')

# Reduce paragraph text
sec = sec.replace('lg:text-[21px] font-medium text-[#475569]', 'lg:text-[18px] font-medium text-[#475569]')

# Reduce CTA button text
sec = sec.replace('md:text-[19px]', 'md:text-[17px]')

content = orig[:d_start] + sec + orig[d_end:]
with open('app/page.tsx', 'w') as f:
    f.write(content)

print("6th section text scaling reduced")
