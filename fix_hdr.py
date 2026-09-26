with open('app/page.tsx', 'r') as f:
    c = f.read()

# Header block adjustments
# logo size
c = c.replace('h-12 md:h-[50px] w-auto object-contain', 'h-14 md:h-[65px] w-auto object-contain')

# header padding
c = c.replace('px-6 md:px-10 py-0 max-w-[1400px]', 'px-6 md:px-10 py-3 md:py-4 max-w-[1400px]')

# nav text size
c = c.replace('text-xs md:text-[16px] font-medium text-gray-300', 'text-xs md:text-[17px] font-medium text-gray-300')
c = c.replace('hidden md:flex gap-10', 'hidden md:flex gap-12') # increase gap slightly

# button (It was: className="hidden md:inline-block bg-[#FF7A00] ... px-4 py-1.5 rounded-full text-[11px] font-bold transition-colors mr-2 md:mr-10 md:text-[17px]")
c = c.replace('px-4 py-1.5 rounded-full text-[11px] font-bold transition-colors mr-2 md:mr-10 md:text-[17px]', 
              'px-4 py-1.5 md:px-7 md:py-2.5 rounded-full text-[11px] font-bold transition-colors mr-2 md:mr-10 md:text-[16px]')

with open('app/page.tsx', 'w') as f:
    f.write(c)

print("Header Adjusted")
