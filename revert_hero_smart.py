import os
import re
path = 'app/page.tsx'
if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # Re-insert Hero3D import
    if 'import Hero3D from "@/components/hero/Hero3D";' not in c:
        c = c.replace('"use client";\nimport { useHeroScroll }', '"use client";\nimport Hero3D from "@/components/hero/Hero3D";\nimport { useHeroScroll }')
        
    # Revert section height
    c = re.sub(r'className="h-\[.*?\] .*? text-white relative w-full"', 'className="h-[250vh] bg-[#111111] text-white relative w-full"', c)
    c = re.sub(r'<div className="relative h-full overflow-hidden flex flex-col w-full">', '<div className="sticky top-0 h-[100dvh] overflow-hidden flex flex-col w-full">', c)
    
    # Revert Video to Hero3D
    video_block = re.search(r'<video[\s\S]*?</video>', c)
    if video_block:
        c = c.replace(video_block.group(0), '<Hero3D sectionRef={containerRef} />')

    # Revert comment
    c = c.replace('{/* Browser-rendered automotive scene replaced with video */}', '{/* Browser-rendered automotive scene */}')
    
    # Revert opacity and transform style
    c = c.replace('className="max-w-2xl ml-6 md:ml-10 mt-2 md:mt-4 pointer-events-auto transition-opacity duration-700 opacity-100"', 'className="max-w-2xl ml-6 md:ml-10 mt-2 md:mt-4 pointer-events-auto" style={{ opacity: \'calc(var(--hero-scroll-p, 0) * 2)\', transform: \'translateY(calc(30px - 30px * var(--hero-scroll-p, 0)))\' }}')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print('Reverted Hero back to 3D')
