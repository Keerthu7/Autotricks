import os
import re

files_to_update = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx']

for fpath in files_to_update:
    with open(fpath, 'r') as f:
        content = f.read()
        
    start_header = content.find('{/* Common Header Wrapper */}')
    if start_header == -1: continue
        
    # We want to move the closing wrapper `</div>` which is currently after `{/* Mobile Menu Sidebar */}... </div>`
    # Up to directly after `</header>`
    
    end_header_tag = content.find('</header>', start_header)
    if end_header_tag == -1: continue
    
    # We find the place right after `</header>\n`
    insert_idx = content.find('\n', end_header_tag) + 1
    
    # 1. Insert `</div>` here
    new_content = content[:insert_idx] + '      </div>\n' + content[insert_idx:]
    
    # 2. We must delete the original `</div>` which was enclosing the Mobile menu.
    # The original closing div was right before `<HeroScrollAnimation />` or `{/* Main Content */}`
    # Let's find `{/* Mobile Menu Sidebar */}` first.
    sidebar_idx = new_content.find('{/* Mobile Menu Sidebar */}', insert_idx)
    end_sidebar_div = new_content.find('</div>', sidebar_idx)
    end_sidebar_div = new_content.find('</div>', end_sidebar_div + 6) # <button> closure maybe? Wait
    
    # Let's cleanly just find where to delete.
    # The Mobile sidebar contains nested divs and navs. 
    #   <div className={`md:hidden fixed ...
    #     <button ...>
    #       <svg ...
    #     </button>
    #     <div ...> <img ... /> </div>
    #     <nav> ... </nav>
    #     <button> ... </button>
    #   </div>
    # </div>  <-- THIS is the original wrapper closing div we need to delete.
    #
    # Then there is `<HeroScrollAnimation />` or `{/* Main Content */}`
    
    if 'page.tsx' in fpath and 'about' not in fpath and 'services' not in fpath:
        search_target = '<HeroScrollAnimation />'
    else:
        search_target = '{/* Main Content */}'
        
    target_idx = new_content.find(search_target, sidebar_idx)
    
    # We need to find the `</div>` immediately preceding `target_idx`
    wrapper_close_idx = new_content.rfind('</div>', sidebar_idx, target_idx)
    
    if wrapper_close_idx != -1:
        new_content = new_content[:wrapper_close_idx] + new_content[wrapper_close_idx+6:] # delete the '</div>'
    
    with open(fpath, 'w') as f:
        f.write(new_content)
        
print("Mobile Menu extracted from parent blur container to fix clipping!")
