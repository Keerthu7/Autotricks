import sys
import re

with open('app/services/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

handle_new = """    const handleBookNow = (serviceTitle: string) => {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('openBookingModal', { detail: { service: serviceTitle } }));
        }
    };"""

content = re.sub(r'    const handleBookNow = \(serviceTitle: string\) => \{.*?    \};', handle_new, content, flags=re.DOTALL)

content = re.sub(r'    const \[isModalOpen, setIsModalOpen\] = useState\(false\);\n', '', content)
content = re.sub(r'    const \[selectedService, setSelectedService\] = useState\(""\);\n', '', content)
content = re.sub(r'    const \[isSubmitted, setIsSubmitted\] = useState\(false\);\n', '', content)

start_idx = content.find('{/* Booking Modal */}')
end_idx = content.find('{/* Premium Dark Footer */}')
if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + content[end_idx:]

with open('app/services/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done stripping!")
