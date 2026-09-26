import re

with open('app/page.tsx', 'r') as f:
    orig = f.read()

# Isolate Footer 
d_start = orig.find('{/* 8th Section - Premium Dark Footer */}')
d_end = orig.find('{/* Floating Social Icons */}', d_start)
sec = orig[d_start:d_end]

# Modify texts
# Column headers
sec = sec.replace('text-[12px] xl:text-[19px]', 'text-[12px] md:text-[16px] xl:text-[17px]')

# Link items and contact links and slogan texts (all the md:text-[18px])
sec = sec.replace('md:text-[18px]', 'md:text-[16px]')

# Copyright text
sec = sec.replace('md:text-[17px]', 'md:text-[15px]')

content = orig[:d_start] + sec + orig[d_end:]
with open('app/page.tsx', 'w') as f:
    f.write(content)

print("Footer text sizes reduced")
