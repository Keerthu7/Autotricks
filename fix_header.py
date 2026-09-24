import sys
import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Remove the header from HeroScrollAnimation
header_pattern = r'        \{/\* Header \*/\}.*?</header>'
header_match = re.search(header_pattern, text, flags=re.DOTALL)
if header_match:
    header_block = header_match.group(0)
    text = text.replace(header_block + '\n\n', '')
else:
    pass

# 2. Add isScrolled state to Home
if 'const [isScrolled, setIsScrolled]' not in text:
    home_replacement = '''export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
'''
    text = text.replace('export default function Home() {', home_replacement)

# 3. Add header inside Home
insertion_point = text.find('<div className="bg-[#FFFFFF] font-sans w-full min-h-screen flex flex-col">')
if insertion_point != -1 and 'Common Header Wrapper' not in text:
    after_point = insertion_point + len('<div className="bg-[#FFFFFF] font-sans w-full min-h-screen flex flex-col">')
    
    header_wrapper = '''
      {/* Common Header Wrapper */}
      <div className={`w-full flex justify-center fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#111111]/80 backdrop-blur-lg border-b border-white/5 shadow-sm' : 'bg-transparent border-b border-transparent'}`}>
        <header className="relative z-20 flex-shrink-0 flex items-center justify-between px-6 md:px-10 py-3 max-w-[1400px] mx-auto w-full">
          <a href="/" className="flex items-center gap-2 ml-2 md:ml-10 group">
            <div className="bg-[#FF7A00] p-1.5 rounded-md">
              <Wrench className="w-4 h-4 text-white transform group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.5} />
            </div>
            <span className="text-[17px] font-black tracking-wide text-white group-hover:text-gray-200 transition-colors">AutoTricks</span>
          </a>

          <nav className="hidden md:flex gap-10 text-xs font-medium text-gray-300">
            <a href="#home" className="text-[#FF7A00] pb-1 border-b-2 border-[#FF7A00]">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
          </nav>

          <button onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openBookingModal')); }} className="hidden md:inline-block bg-[#FF7A00] hover:bg-[#e06b00] text-white px-4 py-1.5 rounded-full text-[11px] font-bold transition-colors mr-2 md:mr-10">
            Book Service
          </button>
        </header>
      </div>
'''
    text = text[:after_point] + header_wrapper + text[after_point:]

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print('Done moving header in page.tsx!')
