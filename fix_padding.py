import os

def fix_padding(fpath):
    with open(fpath, 'r') as f:
        data = f.read()

    if 'about' in fpath:
        data = data.replace('pt-10 pb-14 px-6 sm:px-10 flex flex-col items-center', 'pt-28 md:pt-36 pb-14 px-6 sm:px-10 flex flex-col items-center')
    elif 'services' in fpath:
        data = data.replace('pt-8 pb-12 md:pt-10 md:pb-20', 'pt-28 pb-12 md:pt-36 md:pb-20')

    with open(fpath, 'w') as f:
        f.write(data)

fix_padding('app/about/page.tsx')
fix_padding('app/services/page.tsx')
print("Padding adjusted")
