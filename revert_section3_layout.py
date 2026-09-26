import re

with open('app/page.tsx', 'r') as f:
    orig_content = f.read()

start_idx = orig_content.find('const Section3ScrollAnimation = () => {')
end_idx = orig_content.find('const Home = () => {', start_idx)
if end_idx == -1:
    end_idx = orig_content.find('export default function Home(', start_idx)

s3 = orig_content[start_idx:end_idx]

# 1. Canvas Car Shift
s3 = s3.replace('centerShift_x -= width * 0.35;', 'centerShift_x += width * 0.35;')
s3 = s3.replace('centerShift_x -= width * 0.25;', 'centerShift_x += width * 0.25;')

# 2. Gradient overlay on Text 
s3 = s3.replace('absolute inset-y-0 right-0 bg-gradient-to-l', 'absolute inset-y-0 left-0 bg-gradient-to-r')

# 3. Floating Badges container 
s3 = s3.replace('<div className="absolute left-[5%]', '<div className="absolute right-[5%]')
s3 = s3.replace(' className="absolute left-[5%]', ' className="absolute right-[5%]') # just in case

# 4. Text container right alignment
s3 = s3.replace(' mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-end"', ' mx-auto px-6 sm:px-10 md:px-16 flex items-center"')

content = orig_content[:start_idx] + s3 + orig_content[end_idx:]

# Also revert the comments
content = content.replace('Content on Right', 'Content on Left')
content = content.replace('leftward-shifted', 'rightward-shifted')

with open('app/page.tsx', 'w') as f:
    f.write(content)

print("Section 3 Reverted")
