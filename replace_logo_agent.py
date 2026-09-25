import os, re
files = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']
pattern = r'<div className="bg-\[#FF7A00\] p-1\.5 rounded-md">\s*<Wrench[^>]+/>\s*</div>\s*<span[^>]+>AutoTricks</span>'
replacement = r'<img src="/autotricks logo.png" alt="AutoTricks" className="h-7 md:h-8 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300" />'
for path in files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()
        c = re.sub(pattern, replacement, c)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print('Updated', path)
