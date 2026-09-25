import os
files = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']
for path in files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()
        
        c = c.replace('h-10 md:h-12 w-auto', 'h-12 md:h-14 w-auto')
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print('Updated size slightly in', path)
