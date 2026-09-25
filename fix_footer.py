import os
import re

files_to_update = [
    'app/page.tsx',
    'app/services/page.tsx',
    'app/about/page.tsx'
]

for path in files_to_update:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()

        # Update the grid cols for right side group
        # Find: className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-3 ...
        c = re.sub(
            r'className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-3',
            r'className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-3',
            c
        )

        # Update the Contact Us wrapper to span 2 cols on mobile
        # Find: {/* Column 4: Contact Us */}\n            <div className="flex flex-col items-start">
        c = re.sub(
            r'\{\/\* Column 4: Contact Us \*\/总是\}\s*<div className="flex flex-col items-start">',
            r'{/* Column 4: Contact Us */}\n            <div className="flex flex-col items-start col-span-2 sm:col-span-1 pt-2 sm:pt-0">',
            c
        )
        
        # In case the comment is Column 3 instead of Column 4 (since it's the 3rd column in the right group)
        c = re.sub(
            r'\{\/\* Column 4: Contact Us \*\/.*?<div className="flex flex-col items-start">',
            r'{/* Column 4: Contact Us */}\n            <div className="flex flex-col items-start col-span-2 sm:col-span-1 pt-2 sm:pt-0">',
            c, flags=re.DOTALL
        )

        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print(f"Updated footer in {path}")
