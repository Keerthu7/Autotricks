with open('app/page.tsx', 'r') as f:
    c = f.read()

# Current header class has py-3 md:py-4
# Let's change it to have asymmetrical padding: pt-3 pb-1 md:pt-4 md:pb-1
c = c.replace('px-6 md:px-10 py-3 md:py-4 max-w-[1400px]', 'px-6 md:px-10 pt-3 pb-1 md:pt-4 md:pb-1 max-w-[1400px]')

with open('app/page.tsx', 'w') as f:
    f.write(c)

print("Header Bottom Space Reduced")
