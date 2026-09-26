import re

with open('app/page.tsx', 'r') as f:
    orig_content = f.read()

# We operate only inside Section3ScrollAnimation to avoid breaking anything else
start_idx = orig_content.find('const Section3ScrollAnimation = () => {')
end_idx = orig_content.find('const Home = () => {', start_idx)
if end_idx == -1:
    end_idx = orig_content.find('export default function Home(', start_idx)

s3 = orig_content[start_idx:end_idx]

# 1. Canvas Car Shift
s3 = s3.replace('centerShift_x += width * 0.35;', 'centerShift_x -= width * 0.35;')
s3 = s3.replace('centerShift_x += width * 0.25;', 'centerShift_x -= width * 0.25;')

# 2. Gradient overlay on Text 
s3 = s3.replace('absolute inset-y-0 left-0 bg-gradient-to-r', 'absolute inset-y-0 right-0 bg-gradient-to-l')

# 3. Floating Badges container 
s3 = s3.replace(' className="absolute right-[5%] top-1/2', ' className="absolute left-[5%] top-1/2')

# 4. Text container right alignment
s3 = s3.replace(' mx-auto px-6 sm:px-10 md:px-16 flex items-center"', ' mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-end"')

content = orig_content[:start_idx] + s3 + orig_content[end_idx:]

with open('app/page.tsx', 'w') as f:
    f.write(content)

print("Section 3 Swapped")
