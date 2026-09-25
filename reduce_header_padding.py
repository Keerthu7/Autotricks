import os
files = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']
for path in files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()
            
        # In page.tsx:
        c = c.replace('px-6 md:px-10 py-3 max-w-[1400px]', 'px-6 md:px-10 py-1.5 max-w-[1400px]')
        # In about / services:
        c = c.replace('px-10 py-3 max-w-[1400px]', 'px-10 py-1.5 max-w-[1400px]')
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print('Updated padding in', path)
