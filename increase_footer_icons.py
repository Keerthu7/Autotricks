import re

files_to_update = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']

for fpath in files_to_update:
    with open(fpath, 'r') as f:
        content = f.read()

    # Isolate Footer 
    # Because we've already done this, we can just strictly target the footer.
    f_start = content.find('<footer')
    if f_start == -1: continue
        
    sec = content[f_start:]
    
    # 1. Social icons sizing
    # Wrapper `w-8 h-8`
    sec = sec.replace('w-8 h-8 rounded-full bg-white/5', 'w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5')
    # Icon `w-3.5 h-3.5 text-gray-400 shrink-0` inside the social map
    # Note: Phone, etc might also be w-3.5 h-3.5
    sec = sec.replace('w-3.5 h-3.5 text-gray-400 shrink-0', 'w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0')
    
    # Since we globally replaced `w-3.5 h-3.5`, it actually covers both the Social mapped icons and the Contact Us icons!
    # Because both use exactly `w-3.5 h-3.5 text-gray-400 shrink-0`.
    
    # 2. Contact us gap adjustments (optional, to make it look nicer with bigger icons)
    # The div holding the contact item currently has `gap-3`
    # `<div className="flex items-center gap-3">`
    # But social icons div also has `gap-3`. 
    sec = sec.replace('flex items-center gap-3', 'flex items-center gap-4')

    new_content = content[:f_start] + sec
    with open(fpath, 'w') as f:
        f.write(new_content)

print("Footer icons enlarged")
