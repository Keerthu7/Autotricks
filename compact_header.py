import re

files_to_update = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']

for fpath in files_to_update:
    with open(fpath, 'r') as f:
        content = f.read()

    # 1. Change container width
    content = content.replace('max-w-[1400px] mx-auto w-full', 'max-w-[1150px] mx-auto w-full')
    
    # 2. Change logo margin (was md:ml-24) to a balanced md:ml-4
    content = content.replace('className="flex items-center gap-2 ml-0 md:ml-24 group"', 'className="flex items-center gap-2 ml-0 md:ml-4 group"')
    
    # 3. Change button margin (was mr-2 md:mr-10) to a balanced mr-2 md:mr-4
    content = content.replace('transition-colors mr-2 md:mr-10 md:text-[16px]"', 'transition-colors mr-2 md:mr-4 md:text-[16px]"')

    with open(fpath, 'w') as f:
        f.write(content)

print("Headers compacted")
