import re

with open('app/page.tsx', 'r') as f:
    orig = f.read()

# Isolate desktop section of How it Works
d_start = orig.find('{/* ===================== DESKTOP VIEW (Original Layout) ===================== */}')
d_end = orig.find('{/* 5th Section - Doorstep Convenience */}')

desktop_sec = orig[d_start:d_end]

# 1. Restore Grid container widths to keep original shape
desktop_sec = desktop_sec.replace('w-[62%] xl:w-[60%] gap-3 lg:gap-4', 'w-[68%] xl:w-[70%] gap-3 lg:gap-4')
desktop_sec = desktop_sec.replace('w-[37%] xl:w-[40%] flex justify-end flex-shrink-0', 'w-[31%] xl:w-[35%] flex justify-end flex-shrink-0')

# Keeping the text spacing improvements and just bumping up van scale heavily instead so it looks larger but doesn't squish grids
desktop_sec = desktop_sec.replace('scale-[1.06]', 'scale-[1.15]') # make van physically larger without changing grid box width definitions

content = orig[:d_start] + desktop_sec + orig[d_end:]
with open('app/page.tsx', 'w') as f:
    f.write(content)

print("Restored grid shapes")
