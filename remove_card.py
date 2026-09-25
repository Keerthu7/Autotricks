import os
import re

path = 'app/page.tsx'
if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # The pattern matches the Floating Location Card till just before </main>
    pattern = r'\s*\{\/\* Floating location card \*\/\}[\s\S]*?(?=\s*<\/main>)'
    
    c = re.sub(pattern, '', c)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print("Removed location card successfully")
