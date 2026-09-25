import os
import glob
import re

def process_dir(base_dir):
    tsx_files = glob.glob(os.path.join(base_dir, "**", "*.tsx"), recursive=True)
    
    for path in tsx_files:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        modified = content
        
        # Phone
        modified = modified.replace("+91 98765 43210", "+91 87543 99388")
        # Email
        modified = modified.replace("care@autotricks.in", "autotricks08@gmail.com")
        # WA Link
        modified = re.sub(
            r'wa\.me\/91\d+\?',
            r'wa.me/918754399388?',
            modified
        )
        
        if modified != content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(modified)
            print(f"Updated in {path}")

def main():
    process_dir(r"c:\Users\keert\OneDrive\Desktop\Autotrickss\autotrickss\app")
    process_dir(r"c:\Users\keert\OneDrive\Desktop\Autotrickss\autotrickss\components")

if __name__ == "__main__":
    main()
