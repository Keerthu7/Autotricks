import os

def fix_file(fpath):
    with open(fpath, 'r') as f:
        data = f.read()
  
    with open('app/page.tsx', 'r') as pg:
        page_html = pg.read()
        
    footer_idx = page_html.find('{/* 8th Section - Premium Dark Footer */}')
    foot_end = page_html.rfind('  </div>\n  );\n}')
    if foot_end == -1:
        foot_end = page_html.rfind('  </div>\n    );\n}')
    clean_footer = page_html[footer_idx:foot_end]
    
    tgt_foot_idx = data.find('{/* Premium Dark Footer */}')
    if tgt_foot_idx == -1:
        tgt_foot_idx = data.find('{/* 8th Section - Premium Dark Footer */}')
        
    new_data = data[:tgt_foot_idx] + clean_footer + '\n  </div>\n  );\n}\n'
    
    with open(fpath, 'w') as f:
        f.write(new_data)
        
    print(f"Fixed {fpath}")

fix_file('app/about/page.tsx')
fix_file('app/services/page.tsx')
