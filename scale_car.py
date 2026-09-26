with open('app/page.tsx', 'r') as f:
    c = f.read()

# Scale down car images inside the canvas rendering
c = c.replace('const ratio = Math.max(hRatio, vRatio) * 0.55', 'const ratio = Math.max(hRatio, vRatio) * 0.50')

# Since the car is smaller, the floating badges which trace 3D points on the car also need to shrink slightly
# We change the base scales: scale-[0.8] lg:scale-[0.9] (standardized tailwind uses lg:scale-90)
# scale-[0.8] lg:scale-90 xl:scale-100 -> scale-[0.7] lg:scale-75 xl:scale-90
c = c.replace('scale-[0.8] lg:scale-90 xl:scale-100', 'scale-[0.7] lg:scale-75 xl:scale-90')

with open('app/page.tsx', 'w') as f:
    f.write(c)

print("Scaled Down Car")
