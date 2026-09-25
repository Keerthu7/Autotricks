import os
path = 'app/page.tsx'
if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # Re-insert Hero3D import
    if 'import Hero3D from "@/components/hero/Hero3D";' not in c:
        c = c.replace('"use client";\nimport { useHeroScroll }', '"use client";\nimport Hero3D from "@/components/hero/Hero3D";\nimport { useHeroScroll }')
        
    # Revert section height
    c = c.replace('className="h-[130dvh] bg-[#111111] text-white relative w-full"', 'className="h-[250vh] bg-[#111111] text-white relative w-full"')
    
    # Revert Video to Hero3D
    video_block = '''<video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            src="/Autotricks hero video.mp4"
          ></video>'''
    c = c.replace(video_block, '<Hero3D sectionRef={containerRef} />')

    # Revert comment
    c = c.replace('{/* Browser-rendered automotive scene replaced with video */}', '{/* Browser-rendered automotive scene */}')
    
    # Revert opacity and transform style
    c = c.replace('className="max-w-2xl ml-6 md:ml-10 mt-2 md:mt-4 pointer-events-auto transition-opacity duration-700 opacity-100"', 'className="max-w-2xl ml-6 md:ml-10 mt-2 md:mt-4 pointer-events-auto" style={{ opacity: \'calc(var(--hero-scroll-p, 0) * 2)\', transform: \'translateY(calc(30px - 30px * var(--hero-scroll-p, 0)))\' }}')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print('Reverted Hero back to 3D')
