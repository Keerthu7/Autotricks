with open('app/page.tsx', 'r') as f:
    c = f.read()

# 1. Car Canvas Position
# Shift left very slightly
c = c.replace('centerShift_x += width * 0.28;', 'centerShift_x += width * 0.26;')

# 2. Markers container position
# Shift left very slightly
c = c.replace(' className="absolute right-[2%]', ' className="absolute right-[4%]')

with open('app/page.tsx', 'w') as f:
    f.write(c)

print("Car pushed very lightly to the left")
