with open('app/page.tsx', 'r') as f:
    c = f.read()

# Revert max-w constraint to shift the text rightwards back to normal
c = c.replace('relative z-20 w-full max-w-[1400px] mx-auto', 'relative z-20 w-full max-w-[1250px] mx-auto')
c = c.replace('lg:max-w-lg md:pt-4 xl:-ml-6', 'lg:max-w-lg md:pt-4')

with open('app/page.tsx', 'w') as f:
    f.write(c)

print("Text pushed lightly to the right")
