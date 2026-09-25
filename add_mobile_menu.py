import os
import re

files = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']

hamburger = '''
          <button className="md:hidden flex items-center justify-center p-2 text-white/80 hover:text-white transition-colors mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </header>'''

for path in files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()
            
        c = re.sub(r'</header>', hamburger, c, count=1)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print('Added mobile hamburger menu to', path)
