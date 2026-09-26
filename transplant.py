import re
import os

# Read page.tsx
with open('app/page.tsx', 'r') as f:
    page_content = f.read()

# Extract Header from page.tsx
h_start = page_content.find('{/* Common Header Wrapper */}')
h_end = page_content.find('<HeroScrollAnimation />', h_start)
if h_end == -1:
    h_end = page_content.find('<section id="services"', h_start)

# We need to subtract out any trailing spaces or closing divs that don't belong to the banner, 
# But in page.tsx, the header wrapper closes right before `<HeroScrollAnimation />`.
# Wait, no, the header in page.tsx is wrapped with:
# <div className="bg-[#FFFFFF] font-sans w-full min-h-screen flex flex-col">
#   {/* Common Header Wrapper */}
#   <div className={`w-full ...
#   ...
#   </div>
#   <HeroScrollAnimation />

header_code = page_content[h_start:h_end-1].rstrip()

# Extract Footer & Floating Social Icons
f_start = page_content.find('{/* 8th Section - Premium Dark Footer */}')
f_end = page_content.rfind('</div>')  # up to the wrapper end
# Actually, the footer and floating icons end right before the final `</div>`
# In page.tsx:
#     {/* Floating Social Icons */}
#     <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
#       ...
#     </div>
#   </div>
# );

f_end_calc = page_content.find('  </div>\n  );\n}')
if f_end_calc == -1:
    f_end_calc = page_content.find('</div >\n    );\n}')
    if f_end_calc == -1:
        f_end_calc = page_content.rfind('  </div>\n')

footer_code = page_content[f_start:f_end_calc].rstrip()

def transplant(target_file):
    with open(target_file, 'r') as f:
        tgt = f.read()

    # Find Header in tgt
    tgt_h_start = tgt.find('{/* Common Header Wrapper */}')
    tgt_h_end = tgt.find('{/* Main Content */}', tgt_h_start)
    if tgt_h_end == -1:
        tgt_h_end = tgt.find('<main', tgt_h_start)
    
    if tgt_h_start != -1 and tgt_h_end != -1:
        # Before replacing header, we have to fix navigation link states!
        # In About & Services page, "About" or "Services" will have the active class!
        # For our auto-replacements, let's just dump the Header exact! The user said "Landing page la iruka header footer mariye than exact ah".
        # This will make all headers have the active link on "Home" (or no active link if we strip it), but that's what happens when you copy exact.
        tgt = tgt[:tgt_h_start] + header_code + '\n\n            ' + tgt[tgt_h_end:]
    
    # Find Footer in tgt
    tgt_f_start = tgt.find('{/* Premium Dark Footer */}')
    if tgt_f_start == -1:
        tgt_f_start = tgt.find('{/* 8th Section - Premium Dark Footer */}')
    if tgt_f_start == -1:
        tgt_f_start = tgt.find('<footer')
    
    tgt_f_end = tgt.find('  </div>\n    );\n}')
    if tgt_f_end == -1:
        tgt_f_end = tgt.find('  </div>\n  );\n}')
    if tgt_f_end == -1:
        tgt_f_end = tgt.rfind('</div>\n')
        
    if tgt_f_start != -1 and tgt_f_end != -1:
        tgt = tgt[:tgt_f_start] + footer_code + '\n' + tgt[tgt_f_end:]

    with open(target_file, 'w') as f:
        f.write(tgt)

for fpath in ['app/about/page.tsx', 'app/services/page.tsx']:
    if os.path.exists(fpath):
        transplant(fpath)
        print(f"Updated {fpath}")
