import os
import glob

def main():
    base_dir = r"c:\Users\keert\OneDrive\Desktop\Autotrickss\autotrickss\app"
    tsx_files = glob.glob(os.path.join(base_dir, "**", "*.tsx"), recursive=True)
    
    for path in tsx_files:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        modified = content
        modified = modified.replace("+91 98765 43210", "+91 87543 99388")
        modified = modified.replace("care@autotricks.in", "autotricks08@gmail.com")
        
        if modified != content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(modified)
            print(f"Updated contacts in {path}")

if __name__ == "__main__":
    main()
