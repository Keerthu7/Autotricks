import os
files = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']
for path in files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()
            
        c = c.replace('px-6 md:px-10 py-1.5', 'px-6 md:px-10 py-0')
        c = c.replace('px-10 py-1.5', 'px-10 py-0')
        
        # Also let's slightly adjust the logo's object fit or margins just in case
        c = c.replace('h-12 md:h-14 w-auto object-contain', 'h-12 md:h-[50px] w-auto object-contain')
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print('Updated padding in', path)
