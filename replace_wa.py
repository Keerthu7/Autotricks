import os
import glob
import re

def main():
    base_dir = r"c:\Users\keert\OneDrive\Desktop\Autotrickss\autotrickss\app"
    tsx_files = glob.glob(os.path.join(base_dir, "**", "*.tsx"), recursive=True)
    
    for path in tsx_files:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        modified = content
        # Change wa.me link
        modified = re.sub(
            r'wa\.me\/91\d+\?',
            r'wa.me/918754399388?',
            modified
        )
        
        if modified != content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(modified)
            print(f"Updated whatsapp link in {path}")

if __name__ == "__main__":
    main()
