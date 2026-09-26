import re

# ---------------------------------------------
# 1. Update Services page header to ALWAYS be glassy
# ---------------------------------------------
with open('app/services/page.tsx', 'r') as f:
    srv_content = f.read()

# Replace the dynamic header class with a constant glassy class
# Original: className={`w-full flex justify-center fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#111111]/80 backdrop-blur-lg border-b border-white/5 shadow-sm' : 'bg-transparent border-b border-transparent'}`}
srv_content = re.sub(
    r'className=\{\`w-full flex justify-center fixed top-0 z-50 transition-all duration-300 \$\{isScrolled \? .*? : .*?\}\`\}',
    'className="w-full flex justify-center fixed top-0 z-50 transition-all duration-300 bg-[#111111]/90 backdrop-blur-lg border-b border-white/10 shadow-sm"',
    srv_content
)

with open('app/services/page.tsx', 'w') as f:
    f.write(srv_content)
    
# ---------------------------------------------
# 2. Increase floating WhatsApp and Instagram icon sizes across ALL pages
# ---------------------------------------------
files_to_update = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']

for fpath in files_to_update:
    with open(fpath, 'r') as f:
        content = f.read()
        
    start_idx = content.find('{/* Floating Social Icons */}')
    if start_idx != -1:
        end_idx = content.find('</div>', start_idx)
        # Next div closing tag for the wrapper
        end_idx = content.find('</div>', end_idx + 6)
        
        section = content[start_idx:end_idx]
        
        # Increase circle size
        # "w-10 h-10 bg-white" -> "w-12 h-12 md:w-14 md:h-14 bg-white"
        section = section.replace('w-10 h-10 bg-white', 'w-12 h-12 md:w-14 md:h-14 bg-white')
        section = section.replace('w-10 h-10 bg-[#25D366]', 'w-12 h-12 md:w-14 md:h-14 bg-[#25D366]')
        
        # Increase internal icon size
        # "w-4 h-4 text-[#E1306C]"
        section = section.replace('w-4 h-4 text-[#E1306C]', 'w-5 h-5 md:w-6 md:h-6 text-[#E1306C]')
        section = section.replace('w-4 h-4 text-white', 'w-5 h-5 md:w-6 md:h-6 text-white')
        
        content = content[:start_idx] + section + content[end_idx:]
        
        with open(fpath, 'w') as f:
            f.write(content)

print("Services header fixed, Floating social icons enlarged")
