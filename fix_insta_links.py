import os

files = [
    r"c:\Users\keert\OneDrive\Desktop\Autotrickss\autotrickss\app\page.tsx",
    r"c:\Users\keert\OneDrive\Desktop\Autotrickss\autotrickss\app\services\page.tsx",
    r"c:\Users\keert\OneDrive\Desktop\Autotrickss\autotrickss\app\about\page.tsx"
]

target_float = '''<a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform group border border-gray-100 relative">
          <InstagramIconExact className="w-4 h-4 text-[#E1306C]" />
        </a>'''

replacement_float = '''<a href="https://www.instagram.com/autotricks08?stkn=c21vaXRpOXh2MWE5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform group border border-gray-100 relative">
          <InstagramIconExact className="w-4 h-4 text-[#E1306C]" />
        </a>'''
        
target_footer = '''{[InstagramIcon, FacebookIcon, YoutubeIcon].map((SocialIcon, idx) => (
                <div key={idx} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-white/20 transition-colors">
                  <SocialIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                </div>
              ))}'''

replacement_footer = '''{[
                { Icon: InstagramIcon, href: 'https://www.instagram.com/autotricks08?stkn=c21vaXRpOXh2MWE5' },
                { Icon: FacebookIcon, href: '#' },
                { Icon: YoutubeIcon, href: '#' }
              ].map((social, idx) => (
                <a key={idx} href={social.href} target={social.href !== '#' ? "_blank" : undefined} rel={social.href !== '#' ? "noopener noreferrer" : undefined} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-white/20 transition-colors">
                  <social.Icon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                </a>
              ))}'''

# Adjust for spacing which might differ between files
target_footer_alt = '''{[InstagramIcon, FacebookIcon, YoutubeIcon].map((SocialIcon, idx) => (
                                <div key={idx} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-white/20 transition-colors">
                                    <SocialIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                                </div>
                            ))}'''

replacement_footer_alt = '''{[
                                { Icon: InstagramIcon, href: 'https://www.instagram.com/autotricks08?stkn=c21vaXRpOXh2MWE5' },
                                { Icon: FacebookIcon, href: '#' },
                                { Icon: YoutubeIcon, href: '#' }
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} target={social.href !== '#' ? "_blank" : undefined} rel={social.href !== '#' ? "noopener noreferrer" : undefined} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-white/20 transition-colors">
                                    <social.Icon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                                </a>
                            ))}'''


for path in files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()
            
        c = c.replace(target_float, replacement_float)
        c = c.replace(target_footer, replacement_footer)
        c = c.replace(target_footer_alt, replacement_footer_alt)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print(f"Updated {path}")
