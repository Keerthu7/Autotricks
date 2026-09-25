import os
files = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']
for path in files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()
        
        # Inject state
        if 'isMobileMenuOpen' not in c:
            c = c.replace('useState(false);', 'useState(false);\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);', 1)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print('Injected state in', path)
