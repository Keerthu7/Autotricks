import os
files = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']
for path in files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()
            
        # In page.tsx:
        c = c.replace('ml-2 md:ml-10 group', 'ml-6 md:ml-16 group')
        # In about / services:
        c = c.replace('ml-2 md:ml-24 group', 'ml-6 md:ml-32 group')
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print('Updated', path)
