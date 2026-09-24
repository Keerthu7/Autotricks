import sys
import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

def repl(m):
    t = m.group(0)
    if 'onClick' in t: return t
    if '<button ' in t:
        return t.replace('<button ', '<button onClick={() => { if (typeof window !== \'undefined\') window.dispatchEvent(new CustomEvent(\'openBookingModal\')); }} ')
    else:
        return t.replace('<button', '<button onClick={() => { if (typeof window !== \'undefined\') window.dispatchEvent(new CustomEvent(\'openBookingModal\')); }}')

# Book Service
content = re.sub(r'<button\b[^>]*>(?:(?!</button>).)*Book Service(?:(?!</button>).)*</button>', repl, content, flags=re.IGNORECASE | re.DOTALL)
# Book Your Service
content = re.sub(r'<button\b[^>]*>(?:(?!</button>).)*Book Your Service(?:(?!</button>).)*</button>', repl, content, flags=re.IGNORECASE | re.DOTALL)
# Book Now
content = re.sub(r'<button\b[^>]*>(?:(?!</button>).)*Book Now(?:(?!</button>).)*</button>', repl, content, flags=re.IGNORECASE | re.DOTALL)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done page.tsx!')
