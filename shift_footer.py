import re

files_to_update = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']

for fpath in files_to_update:
    with open(fpath, 'r') as f:
        content = f.read()

    # We want to replace the class of Column 1
    # `<div className="flex flex-col items-start pr-2 md:pr-4 md:w-[25%] lg:w-[30%] shrink-0">`
    content = content.replace(
        '<div className="flex flex-col items-start pr-2 md:pr-4 md:w-[25%] lg:w-[30%] shrink-0">',
        '<div className="flex flex-col items-start pr-2 md:pr-4 md:w-[25%] lg:w-[30%] shrink-0 md:-translate-y-3 lg:-translate-y-5">'
    )

    with open(fpath, 'w') as f:
        f.write(content)

print("Footer column 1 moved up on desktop")
