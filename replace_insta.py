import os
import glob
import re

def process_dir(base_dir):
    tsx_files = glob.glob(os.path.join(base_dir, "**", "*.tsx"), recursive=True)
    
    for path in tsx_files:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        modified = content
        
        # 1. Update Floating Instagram
        # We look for <a href="#" ... ><InstagramIconExact
        modified = re.sub(
            r'<a href="[^"]*"\s*(className="[^"]*InstagramIconExact[^>]*>)(\s*)<InstagramIconExact',
            r'<a href="https://www.instagram.com/autotricks08?stkn=c21vaXRpOXh2MWE5" target="_blank" rel="noopener noreferrer" \1\2<InstagramIconExact',
            modified
        )
        # Or more simply, since we know it's near <InstagramIconExact
        modified = re.sub(
            r'<a href="[^"]*"\s+(className="w-10 h-10[^"]*InstagramIconExact[^"]*text-\[#E1306C\]"[^>]*>)',
            r'<a href="https://www.instagram.com/autotricks08?stkn=c21vaXRpOXh2MWE5" target="_blank" rel="noopener noreferrer" \1',
            modified
        )
        modified = re.sub(
            r'<a href="([^"]*)"([^>]*)>\s*<InstagramIconExact',
            r'<a href="https://www.instagram.com/autotricks08?stkn=c21vaXRpOXh2MWE5" target="_blank" rel="noopener noreferrer"\2>\n          <InstagramIconExact',
            modified
        )

        
        # 2. Update Footer Link Array
        # From: {[InstagramIcon, FacebookIcon, YoutubeIcon].map((SocialIcon, idx) => (
        #           <div key={idx} ...
        # To: ...
        
        old_footer_social = r"""{[InstagramIcon, FacebookIcon, YoutubeIcon].map((SocialIcon, idx) => (
                <div key={idx} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-white/20 transition-colors">
                  <SocialIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                </div>
              ))}"""
              
        new_footer_social = """{[
                { Icon: InstagramIcon, link: 'https://www.instagram.com/autotricks08?stkn=c21vaXRpOXh2MWE5' },
                { Icon: FacebookIcon, link: '#' },
                { Icon: YoutubeIcon, link: '#' }
              ].map((social, idx) => (
                <a key={idx} href={social.link} target={social.link !== '#' ? "_blank" : "_self"} rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-white/20 transition-colors">
                  <social.Icon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                </a>
              ))}"""
              
        # we have slightly different indentations possibly. So we match with regex.
        footer_pattern = re.compile(r'\{\[InstagramIcon, FacebookIcon, YoutubeIcon\]\.map\(\(SocialIcon, idx\) => \(\s*<div key=\{idx\}[^>]*>\s*<SocialIcon[^>]*/>\s*</div>\s*\)\)\}', re.DOTALL)
        
        def rep_footer(m):
            # Extract just the classNames to keep it identical
            div_tag = m.group(0)
            kelas = re.search(r'className="[^"]+"', div_tag).group(0)
            icon_kelas = re.search(r'<SocialIcon (className="[^"]+")', div_tag).group(1)
            return f"""{{[
                                {{ Icon: InstagramIcon, href: 'https://www.instagram.com/autotricks08?stkn=c21vaXRpOXh2MWE5' }},
                                {{ Icon: FacebookIcon, href: '#' }},
                                {{ Icon: YoutubeIcon, href: '#' }}
                            ].map((social, idx) => (
                                <a key={{idx}} href={{social.href}} target={{social.href !== '#' ? "_blank" : undefined}} rel={{social.href !== '#' ? "noopener noreferrer" : undefined}} {kelas}>
                                    <social.Icon {icon_kelas} />
                                </a>
                            ))}}"""
                            
        modified = footer_pattern.sub(rep_footer, modified)

        if modified != content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(modified)
            print(f"Updated Insta in {path}")

def main():
    process_dir(r"c:\Users\keert\OneDrive\Desktop\Autotrickss\autotrickss\app")

if __name__ == "__main__":
    main()
