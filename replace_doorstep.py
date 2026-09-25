import os
import glob

def main():
    base_dir = r"c:\Users\keert\OneDrive\Desktop\Autotrickss\autotrickss\app"
    tsx_files = glob.glob(os.path.join(base_dir, "**", "*.tsx"), recursive=True)
    
    for path in tsx_files:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        modified = content
        # Replace completely case-sensitive exact match
        modified = modified.replace("Doorstep Delivery", "Doorstep Service")
        modified = modified.replace("doorstep delivery", "doorstep service")
        
        if modified != content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(modified)
            print(f"Updated {path}")

if __name__ == "__main__":
    main()
