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

        # Update Quick Links column order
        c = re.sub(
            r'\{\/\* Column 2: Quick Links \*\/总是\}\s*<div className="flex flex-col items-start">',
            r'{/* Column 2: Quick Links */}\n            <div className="flex flex-col items-start order-2 sm:order-1">',
            c
        )
        c = re.sub(
            r'\{\/\* Column 2: Quick Links \*\/.*?\n\s*<div className="flex flex-col items-start">',
            r'{/* Column 2: Quick Links */}\n            <div className="flex flex-col items-start order-2 sm:order-1">',
            c, flags=re.DOTALL
        )

        # Update Our Services column order
        c = re.sub(
            r'\{\/\* Column 3: Our Services \*\/.*?\n\s*<div className="flex flex-col items-start">',
            r'{/* Column 3: Our Services */}\n            <div className="flex flex-col items-start order-1 sm:order-2">',
            c, flags=re.DOTALL
        )
        
        # Update Contact Us column order to stay at bottom on mobile
        c = re.sub(
            r'\{\/\* Column 4: Contact Us \*\/.*?\n\s*<div className="flex flex-col items-start col-span-2 sm:col-span-1 pt-2 sm:pt-0">',
            r'{/* Column 4: Contact Us */}\n            <div className="flex flex-col items-start col-span-2 sm:col-span-1 pt-2 sm:pt-0 order-3 md:order-3">',
            c, flags=re.DOTALL
        )

        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print(f"Updated footer order in {path}")
