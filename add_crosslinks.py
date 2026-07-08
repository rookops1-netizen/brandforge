#!/usr/bin/env python3
import os, re

pages = [
    'beauty-name-generator', 'cleaning-business-name-generator',
    'coaching-name-generator', 'coffee-name-generator',
    'consulting-name-generator', 'craft-name-generator',
    'education-name-generator', 'fashion-name-generator',
    'fitness-brand-name-generator', 'food-truck-name-generator',
    'landscaping-name-generator', 'nonprofit-name-generator',
    'pet-name-generator', 'photography-name-generator',
    'podcast-name-generator', 'real-estate-name-generator',
    'restaurant-name-generator', 'salon-name-generator',
    'startup-name-generator', 'tech-name-generator',
    'yoga-name-generator'
]

for page in pages:
    path = f'src/app/{page}/page.tsx'
    if not os.path.exists(path):
        print(f'SKIP: {path} not found')
        continue
    
    with open(path, 'r') as f:
        content = f.read()
    
    if 'marketing-agency-name-generator' in content:
        print(f'SKIP: {page} already has marketing agency link')
        continue
    
    # Find pattern: <Link href="/construction-name-generator" className="...">
    #               Construction Name Generator
    #             </Link>
    # And add marketing agency link after
    
    # Pattern for inline Link style
    pattern = r'(<Link href="/construction-name-generator"[^>]*>)\s*\n(\s*Construction Name Generator)\s*\n(\s*</Link>)'
    
    match = re.search(pattern, content)
    if match:
        full_link_open = match.group(1)
        # Extract className
        class_match = re.search(r'className="([^"]+)"', full_link_open)
        if class_match:
            classes = class_match.group(1)
            new_link = f'''            <Link href="/marketing-agency-name-generator" className="{classes}">
              📈 Marketing Agency Name Generator
            </Link>'''
            
            replacement = match.group(0) + '\n' + new_link
            content = content[:match.end()] + '\n' + new_link + content[match.end():]
            
            with open(path, 'w') as f:
                f.write(content)
            print(f'OK: {page}')
        else:
            print(f'NO CLASSMATCH: {page}')
    else:
        print(f'NO PATTERN: {page}')