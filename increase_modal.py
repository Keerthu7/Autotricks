import re

with open('components/BookingModal.tsx', 'r') as f:
    text = f.read()

# Header block
text = text.replace('text-lg md:text-[20px] font-extrabold text-gray-900', 'text-2xl md:text-[28px] font-extrabold text-gray-900')
text = text.replace('text-[11px] text-gray-500 font-medium tracking-tight', 'text-[13px] md:text-[15px] text-gray-500 font-medium tracking-tight')

# Form labels
text = text.replace('text-[9px] font-bold text-gray-400 uppercase', 'text-[11px] lg:text-[12px] font-bold text-gray-400 uppercase')

# Form inputs
text = text.replace('text-[11px] font-medium text-gray-900', 'text-[13px] lg:text-[15px] font-medium text-gray-900')
text = text.replace('px-3 py-2 bg-gray-50', 'px-3 py-2 md:py-3 bg-gray-50')

# Submit button
text = text.replace('text-[11px] mt-1', 'text-[14px] md:text-[16px] mt-1 md:py-3')

# Success text
text = text.replace('text-lg font-bold text-gray-900 mb-1.5', 'text-2xl max-w-[280px] font-bold text-gray-900 mb-2')
text = text.replace('text-[11px] text-gray-500 font-medium max-w-[240px]', 'text-[13px] md:text-[15px] text-gray-500 font-medium max-w-[280px]')
text = text.replace('rounded-full text-[11px] transition-colors', 'rounded-full text-[13px] md:text-[14px] transition-colors md:py-2.5 md:px-8')

# WhatsApp / Call buttons bottom
text = text.replace('font-bold text-[10px] text-[#1A1A1A]', 'font-bold text-[12px] md:text-[14px] text-[#1A1A1A]')
text = text.replace('w-3.5 h-3.5 transition-transform group-hover:scale-110', 'w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110')
text = text.replace('w-3 h-3 transition-transform group-hover:scale-110', 'w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110')

# Overall max width 
text = text.replace('max-w-[420px] rounded-[20px] p-5 md:p-6', 'max-w-[500px] lg:max-w-[550px] rounded-[24px] p-5 md:p-8')


with open('components/BookingModal.tsx', 'w') as f:
    f.write(text)

print("Booking Modal text sizes increased")
