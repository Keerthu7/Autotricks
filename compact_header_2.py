import re

files_to_update = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']

for fpath in files_to_update:
    with open(fpath, 'r') as f:
        content = f.read()

    # 1. Change container width
    content = content.replace('max-w-[1150px] mx-auto w-full', 'max-w-[1000px] mx-auto w-full')
    
    with open(fpath, 'w') as f:
        f.write(content)

print("Headers ultra compacted")
