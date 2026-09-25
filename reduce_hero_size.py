import os
path = 'app/page.tsx'
if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # 1. Reduce hero section height. 120vh gives a tiny bit of scroll if needed, but 100vh just keeps it nice and static.
    # The user says "romba lengthy ah poguthu", so h-100dvh makes it a standard normal 1-screen height.
    c = c.replace('className="h-[250vh] bg-[#111111] text-white relative w-full"', 'className="h-[100dvh] bg-[#111111] text-white relative w-full"')
    
    # 2. Fix the opacity so the text is fully visible immediately since we are no longer scrolling multiple VH
    c = c.replace('style={{ opacity: \'calc(var(--hero-scroll-p, 0) * 2)\', transform: \'translateY(calc(30px - 30px * var(--hero-scroll-p, 0)))\' }}', 'className="max-w-2xl ml-6 md:ml-10 mt-2 md:mt-4 pointer-events-auto transition-opacity duration-700 opacity-100"')
    
    # 3. Clean up the now duplicated className
    c = c.replace('className="max-w-2xl ml-6 md:ml-10 mt-2 md:mt-4 pointer-events-auto" className="max-w-2xl ml-6 md:ml-10 mt-2 md:mt-4 pointer-events-auto transition-opacity duration-700 opacity-100"', 'className="max-w-2xl ml-6 md:ml-10 mt-2 md:mt-4 pointer-events-auto transition-opacity duration-700 opacity-100"')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print('Updated hero section height and opacity')
