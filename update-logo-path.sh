#!/bin/bash

# Update SVG logo paths in all HTML files
find . -name "*.html" -exec sed -i '' 's|public/images/kings-electrical-logo.svg|images/kings-electrical-logo.svg|g' {} \;

# Update SVG logo paths in services directory files
find ./services -name "*.html" -exec sed -i '' 's|../public/images/kings-electrical-logo.svg|../images/kings-electrical-logo.svg|g' {} \;

echo "Updated all logo paths to use images/ directory instead of public/images/" 