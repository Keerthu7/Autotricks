import re

with open('app/about/page.tsx', 'r') as f:
    orig = f.read()

# Isolate the stats grid block
start = orig.find('<div className="grid grid-cols-2 gap-4">')
end = orig.find('</section>', start)
sec = orig[start:end]

# 1. Increase gap spacing between grids
sec = sec.replace('gap-4', 'gap-6 lg:gap-8')

# 2. Make texts less bold
# They currently have: "font-extrabold uppercase tracking-wide"
sec = sec.replace('font-extrabold uppercase tracking-wide', 'font-medium uppercase tracking-wide')

content = orig[:start] + sec + orig[end:]

with open('app/about/page.tsx', 'w') as f:
    f.write(content)

print("Grid spaces increased and text un-bolded")
