import sys
import re

def update_about_link(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = re.sub(r'href="(#|/#about)"([^>]*>About)', r'href="/about"\2', content, flags=re.IGNORECASE)
    content = re.sub(r"\{\s*name:\s*'About'\s*,\s*href:\s*'[^']*'\s*\}", r"{ name: 'About', href: '/about' }", content, flags=re.IGNORECASE)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
update_about_link('app/page.tsx')
update_about_link('app/services/page.tsx')
print('Updated both!')
