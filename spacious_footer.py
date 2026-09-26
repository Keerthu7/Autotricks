import re

with open('app/page.tsx', 'r') as f:
    orig = f.read()

# Isolate Footer 
d_start = orig.find('{/* 8th Section - Premium Dark Footer */}')
d_end = orig.find('{/* Floating Social Icons */}', d_start)
sec = orig[d_start:d_end]

# 1. Overall Footer Padding
sec = sec.replace('pt-10 lg:pt-12 pb-4 lg:pb-5', 'pt-16 lg:pt-24 pb-8 lg:pb-12')

# 2. Container width for more horizontal breathing room
sec = sec.replace('max-w-[1150px]', 'max-w-[1300px]')

# 3. Gap between columns
sec = sec.replace('gap-10 md:gap-4 lg:gap-8 mx-auto', 'gap-12 md:gap-10 lg:gap-20 mx-auto')

# 4. Vertical spacing inside lists -> quick links and services
sec = sec.replace('flex flex-col gap-3.5', 'flex flex-col gap-3.5 md:gap-5')
sec = sec.replace('flex items-start order-2 sm:order-1', 'flex items-start order-2 sm:order-1 w-full')

# 5. Contact block spacing
sec = sec.replace('flex flex-col gap-4', 'flex flex-col gap-4 md:gap-6')
sec = sec.replace('mb-5 tracking-wide', 'mb-5 md:mb-8 tracking-wide')

# 6. Copyright border padding
sec = sec.replace('mt-8 lg:mt-10 pt-4 md:pt-5', 'mt-12 lg:mt-20 pt-6 md:pt-8')


content = orig[:d_start] + sec + orig[d_end:]
with open('app/page.tsx', 'w') as f:
    f.write(content)

print("Footer made very spacious")
