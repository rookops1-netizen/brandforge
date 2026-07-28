#!/usr/bin/env python3
"""
Fix duplicate BreadcrumbList JSON-LD in blog posts.
BlogPostSchema component already outputs BreadcrumbList, so inline BreadcrumbList is a duplicate.
This script removes the duplicate BreadcrumbList from each affected file.
"""
import re
import os

BLOG_DIR = os.path.expanduser("~/brandforge/src/app/blog")

# Files with confirmed duplicate BreadcrumbList (both BlogPostSchema + inline)
AFFECTED_FILES = [
    "app-name-generator",
    "blog-name-generator",
    "brand-name-availability-checker",
    "catchy-brand-names",
    "clothing-brand-name-generator",
    "company-name-checker",
    "cool-business-names",
    "how-to-come-up-with-business-name",
    "llc-name-generator",
    "product-name-generator",
    "product-naming-guide",
    "saas-name-generator",
    "startup-name-ideas",
    "store-name-generator",
    "unique-business-names",
    "youtube-channel-name-generator",
]

def fix_file(slug):
    filepath = os.path.join(BLOG_DIR, slug, "page.tsx")
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    
    # Pattern 1: Separate BreadcrumbList script tag (after FAQPage script)
    # This looks like:
    #       {/* BreadcrumbList Schema */}
    #       <script
    #         type="application/ld+json"
    #         dangerouslySetInnerHTML={{
    #           __html: JSON.stringify({
    #             '@context': 'https://schema.org',
    #             '@type': 'BreadcrumbList',
    #             itemListElement: [
    #               { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brandforge-phi-pearl.vercel.app' },
    #               { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://brandforge-phi-pearl.vercel.app/blog' },
    #               { '@type': 'ListItem', position: 3, name: 'Some Title', item: 'https://brandforge-phi-pearl.vercel.app/blog/slug' },
    #             ],
    #           }),
    #         }}
    #       />
    
    # Match the BreadcrumbList comment + script block
    pattern_standalone = r"\n\s*\{/\*.*?BreadcrumbList.*?\*/\}\n\s*<script\s*\n\s*type=\"application/ld\+json\"\s*\n\s*dangerouslySetInnerHTML=\{\{\s*\n\s*__html: JSON\.stringify\(\{\s*\n\s*'@context': 'https://schema\.org',\s*\n\s*'@type': 'BreadcrumbList',\s*\n\s*itemListElement:\s*\[\s*\n\s*\{[^}]+'@type': 'ListItem'[^}]+\},\s*\n\s*\{[^}]+'@type': 'ListItem'[^}]+\},\s*\n\s*\{[^}]+'@type': 'ListItem'[^}]+\},?\s*\n\s*\],\s*\n\s*\}\),\s*\n\s*\}\}\s*\n\s*/>"
    
    content = re.sub(pattern_standalone, '', content, flags=re.DOTALL)
    
    # Pattern 2: @graph containing FAQPage + BreadcrumbList
    # Convert @graph with just FAQPage + BreadcrumbList to a simple FAQPage object
    # This is more complex — we need to remove just the BreadcrumbList entry from @graph
    
    # If we have an @graph that contains both FAQPage and BreadcrumbList
    # We should convert it to just FAQPage (since BlogPostSchema handles BreadcrumbList)
    
    # Pattern: {'@type': 'BreadcrumbList', ... entire BreadcrumbList object ... }
    # Inside an @graph array
    
    # Match the BreadcrumbList object inside @graph (with varying indentation)
    # This pattern matches the BreadcrumbList entry within the @graph array
    pattern_graph_breadcrumb = r",?\s*\{\s*'@type': 'BreadcrumbList',\s*itemListElement:\s*\[\s*\{[^}]+'@type': 'ListItem',\s*position: 1,\s*name: 'Home'[^}]+\},\s*\{[^}]+'@type': 'ListItem',\s*position: 2,\s*name: 'Blog'[^}]+\},\s*\{[^}]+'@type': 'ListItem',\s*position: 3,[^}]+\},?\s*\],?\s*\}"
    
    content = re.sub(pattern_graph_breadcrumb, '', content, flags=re.DOTALL)
    
    # Clean up: if @graph now has only one item, convert it to a regular object
    # Check if we have @graph with a single item
    # Pattern: '@graph': [\n  {\n    '@type': 'FAQPage',\n    ...\n  }\n]
    # Should become: '@type': 'FAQPage',\n  ...
    
    # Actually, having @graph with a single FAQPage is still valid JSON-LD
    # Google accepts it fine, so let's leave it as is
    
    # But let's also handle the case where the comma after the first entry is dangling
    # e.g., '@graph': [\n  { ... FAQPage ... },\n]  (trailing comma after removing BreadcrumbList)
    # This would be invalid JS — need to remove trailing comma
    
    # Pattern: comma before closing bracket of @graph after BreadcrumbList removal
    content = re.sub(r',(\s*\]\s*,?)', r'\1', content)  # trailing comma in array
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        return True
    return False

fixed = 0
for slug in AFFECTED_FILES:
    if fix_file(slug):
        print(f"✅ Fixed: {slug}")
        fixed += 1
    else:
        print(f"⚠️  No changes: {slug}")

print(f"\nFixed {fixed}/{len(AFFECTED_FILES)} files")