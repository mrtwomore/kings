#!/bin/bash

# Update all HTML files to use PNG instead of SVG
find . -name "*.html" -exec sed -i '' 's|images/kings-electrical-logo.svg|images/kings-electrical-logo.png|g' {} \;

# Update all service HTML files (using relative paths)
find ./services -name "*.html" -exec sed -i '' 's|../images/kings-electrical-logo.svg|../images/kings-electrical-logo.png|g' {} \;

echo "Updated all logo references from SVG to PNG" 