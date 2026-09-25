import os
import re
files = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']
for path in files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()
            
        c = c.replace('autotricks logo.png', 'autotricks-logo.png')
        c = re.sub(r'ml-8 md:ml-(\d+) group', r'ml-0 md:ml-\1 group', c)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print('Fixed logo src and margin in', path)
