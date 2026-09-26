with open('app/page.tsx', 'r') as f:
    c = f.read()

# Desktop hero
c = c.replace('<div ref={textRef} className="max-w-2xl ml-10 mt-4 pointer-events-auto"', '<div ref={textRef} className="max-w-2xl ml-10 mt-32 pointer-events-auto"')

# Also let's check if mobile wants to move down too
c = c.replace('<main className="relative z-20 flex-1 flex flex-col justify-center px-6 w-full mt-24 mb-10 pointer-events-none">', 
              '<main className="relative z-20 flex-1 flex flex-col justify-center px-6 w-full mt-36 mb-4 pointer-events-none">')

with open('app/page.tsx', 'w') as f:
    f.write(c)

print("Moved Hero Text")
