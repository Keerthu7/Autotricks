import os
import re

path = 'app/about/page.tsx'

grids_content = '''                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#FFF4E5] border border-[#FF7A00]/10 p-6 rounded-[20px] flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(255,122,0,0.06)] transition-all">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <HeartHandshake className="w-6 h-6 text-[#FF7A00]" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h4 className="text-lg md:text-xl font-black text-[#1A1A1A] mb-0.5">10,000+</h4>
                                    <p className="text-[9.5px] text-gray-500 font-extrabold uppercase tracking-wide">Happy Customers</p>
                                </div>
                            </div>
                            <div className="bg-[#FFF4E5] border border-[#FF7A00]/10 p-6 rounded-[20px] flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(255,122,0,0.06)] transition-all">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <BadgeCheck className="w-6 h-6 text-[#FF7A00]" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h4 className="text-lg md:text-xl font-black text-[#1A1A1A] mb-0.5">4.9/5</h4>
                                    <p className="text-[9.5px] text-gray-500 font-extrabold uppercase tracking-wide">Average Rating</p>
                                </div>
                            </div>
                            <div className="bg-[#FFF4E5] border border-[#FF7A00]/10 p-6 rounded-[20px] flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(255,122,0,0.06)] transition-all">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Headset className="w-6 h-6 text-[#FF7A00]" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h4 className="text-lg md:text-xl font-black text-[#1A1A1A] mb-0.5">24/7</h4>
                                    <p className="text-[9.5px] text-gray-500 font-extrabold uppercase tracking-wide">Support Available</p>
                                </div>
                            </div>
                            <div className="bg-[#FFF4E5] border border-[#FF7A00]/10 p-6 rounded-[20px] flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(255,122,0,0.06)] transition-all">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <ShieldCheck className="w-6 h-6 text-[#FF7A00]" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h4 className="text-lg md:text-xl font-black text-[#1A1A1A] mb-0.5">100%</h4>
                                    <p className="text-[9.5px] text-gray-500 font-extrabold uppercase tracking-wide">Genuine Parts</p>
                                </div>
                            </div>
                        </div>'''

if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # Add imports
    c = c.replace('import { ArrowRight', 'import { ArrowRight, HeartHandshake, BadgeCheck, Headset, ShieldCheck')

    # Replace the grid block
    start_str = r'<div className="grid grid-cols-2 gap-4">'
    end_str = r'<\/section>'
    
    # Isolate the exact matching area for replacement safely
    match = re.search(r'<div className="grid grid-cols-2 gap-4">.*?</div>\s*</div>\s*</section>', c, re.DOTALL)
    if match:
        to_replace = match.group(0)
        new_block = grids_content + '\n                    </div>\n                </section>'
        c = c.replace(to_replace, new_block)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print("Updated grids")
    else:
        print("Could not match the grids block")
