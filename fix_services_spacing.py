with open('app/page.tsx', 'r') as f:
    orig_content = f.read()

start_idx = orig_content.find('id="services"')
end_idx = orig_content.find('<Section3ScrollAnimation />', start_idx)
if end_idx == -1:
    end_idx = orig_content.find('</section>', start_idx) + 10

s = orig_content[start_idx:end_idx]

# Remove strict tight tracking/leading
s = s.replace('tracking-tight', 'tracking-wide')
s = s.replace('leading-tight', 'leading-normal tracking-wide')
s = s.replace('mb-0.5', 'mb-2') # spacing between heading and para in cards
s = s.replace('max-w-[95%]', 'max-w-full') # avoid congestion

content = orig_content[:start_idx] + s + orig_content[end_idx:]

with open('app/page.tsx', 'w') as f:
    f.write(content)

print("Services Spacing Updated")
