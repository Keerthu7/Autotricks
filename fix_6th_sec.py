import re

with open('app/page.tsx', 'r') as f:
    orig = f.read()

# Isolate 6th Section
d_start = orig.find('{/* 6th Section - Our Promise */}')
d_end = orig.find('{/* FOOTER */}', d_start)

sec = orig[d_start:d_end]

# Modify Left Column Translation
sec = sec.replace('md:translate-x-12 lg:translate-x-[120px] xl:translate-x-[180px]', 'md:translate-x-0 lg:translate-x-[20px] xl:translate-x-[40px]')

# Modify Right Column Translation
sec = sec.replace('md:-translate-x-24 lg:-translate-x-[250px] xl:-translate-x-[350px]', 'md:-translate-x-0 lg:-translate-x-[60px] xl:-translate-x-[120px]')

content = orig[:d_start] + sec + orig[d_end:]
with open('app/page.tsx', 'w') as f:
    f.write(content)

print("6th section content translation adjusted")
