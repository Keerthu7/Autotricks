import os
path = 'app/page.tsx'
if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # Increase hero section height from 100dvh to 130dvh to hit a sweet spot
    c = c.replace('className="h-[100dvh] bg-[#111111] text-white relative w-full"', 'className="h-[130dvh] bg-[#111111] text-white relative w-full"')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print('Increased hero size')
