import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

# Scale paddings for sections
content = content.replace('md:py-8', 'md:py-16')
content = content.replace('md:py-16', 'md:py-24')
content = content.replace('md:py-20', 'md:py-28')

# Scale section heights if they have md:h- or lg:h- or min-h
content = content.replace('md:h-[150vh]', 'md:h-[180vh]')
# 5th section min-h
content = content.replace('lg:min-h-[500px]', 'lg:min-h-[600px]')
# 7th section min-h
content = content.replace('lg:min-h-[380px]', 'lg:min-h-[480px]')

# Now let's just do a blanket regex to add md:text-[+6px] if no desktop size specified
def scale_sizes(content):
    new_content = ""
    last_idx = 0
    for match in re.finditer(r'className="([^"]+)"', content):
        new_content += content[last_idx:match.start(1)]
        cls = match.group(1)
        
        # Manually bump existing md:text-[x px] and lg:text-[x px]
        cls = re.sub(r'md:text-\[([0-9\.]+)px\]', lambda m: f"md:text-[{float(m.group(1)) + 6:g}px]", cls)
        cls = re.sub(r'lg:text-\[([0-9\.]+)px\]', lambda m: f"lg:text-[{float(m.group(1)) + 6:g}px]", cls)
        cls = re.sub(r'xl:text-\[([0-9\.]+)px\]', lambda m: f"xl:text-[{float(m.group(1)) + 6:g}px]", cls)
        
        # if there are classes like text-xs, text-sm, text-3xl, md:text-xs etc...
        cls = cls.replace('md:text-xs', 'md:text-lg')
        cls = cls.replace('md:text-sm', 'md:text-xl')
        cls = cls.replace('lg:text-sm', 'lg:text-xl')
        # hero text-4xl -> text-5xl lg:text-7xl
        # we can't be sure it's hero, but user wants things bigger
        cls = re.sub(r'(?<![a-zA-Z:-])text-xs(?![a-zA-Z0-9_-])', 'text-xs md:text-[16px]', cls)
        cls = re.sub(r'(?<![a-zA-Z:-])text-sm(?![a-zA-Z0-9_-])', 'text-sm md:text-[18px]', cls)
        cls = re.sub(r'(?<![a-zA-Z:-])text-lg(?![a-zA-Z0-9_-])', 'text-lg md:text-[24px]', cls)
        cls = re.sub(r'(?<![a-zA-Z:-])text-xl(?![a-zA-Z0-9_-])', 'text-xl md:text-[28px]', cls)
        cls = re.sub(r'(?<![a-zA-Z:-])text-2xl(?![a-zA-Z0-9_-])', 'text-2xl md:text-[34px]', cls)
        cls = re.sub(r'(?<![a-zA-Z:-])text-3xl(?![a-zA-Z0-9_-])', 'text-3xl md:text-[42px]', cls)
        cls = re.sub(r'(?<![a-zA-Z:-])text-4xl(?![a-zA-Z0-9_-])', 'text-4xl md:text-[54px]', cls)

        # Append md:text-[...] if not exists
        # find sm:text-[x]
        m = re.search(r'sm:text-\[([0-9\.]+)px\]', cls)
        if m and not re.search(r'(md:|lg:|xl:)text-', cls):
            cls += f" md:text-[{float(m.group(1)) + 6:g}px]"
            
        # find text-[x]
        m2 = re.search(r'(?<![a-z:])text-\[([0-9\.]+)px\]', cls)
        if m2 and not m and not re.search(r'(md:|lg:|xl:)text-', cls):
            cls += f" md:text-[{float(m2.group(1)) + 6:g}px]"

        new_content += cls
        last_idx = match.end(1)
        
    new_content += content[last_idx:]
    return new_content

content = scale_sizes(content)

with open('app/page.tsx', 'w') as f:
    f.write(content)
print("Updated successfully")
