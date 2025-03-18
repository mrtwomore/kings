#!/bin/bash

# Update all header logos in root HTML files
find . -maxdepth 1 -name "*.html" -not -name "index.html" -exec sed -i '' 's|<img src="images/Capture-One-Catalog0815.jpg" alt="Kings Electrical Logo">|<img src="public/images/kings-electrical-logo.svg" alt="Kings Electrical Logo">|g' {} \;

# Update all header logos in service HTML files (they use relative paths)
find ./services -name "*.html" -exec sed -i '' 's|<img src="../images/Capture-One-Catalog0815.jpg" alt="Kings Electrical Logo">|<img src="../public/images/kings-electrical-logo.svg" alt="Kings Electrical Logo">|g' {} \;

# Update all footer logos in root HTML files
find . -maxdepth 1 -name "*.html" -not -name "index.html" -exec sed -i '' 's|<div class="footer-logo">\s*<img src="images/Capture-One-Catalog0815.jpg" alt="Kings Electrical Logo">|<div class="footer-logo">\n                    <img src="public/images/kings-electrical-logo.svg" alt="Kings Electrical Logo">|g' {} \;

# Update all footer logos in service HTML files
find ./services -name "*.html" -exec sed -i '' 's|<div class="footer-logo">\s*<img src="../images/Capture-One-Catalog0815.jpg" alt="Kings Electrical Logo">|<div class="footer-logo">\n                    <img src="../public/images/kings-electrical-logo.svg" alt="Kings Electrical Logo">|g' {} \;

# Add logo to footers without one (look for footer-column without a footer-logo)
find . -name "*.html" -not -name "index.html" -exec sed -i '' 's|<div class="footer-column">\s*<h3>Company</h3>|<div class="footer-column">\n                    <div class="footer-logo">\n                        <img src="public/images/kings-electrical-logo.svg" alt="Kings Electrical Logo">\n                    </div>\n                    <h3>Company</h3>|g' {} \;

# Same for services directory with adjusted path
find ./services -name "*.html" -exec sed -i '' 's|<div class="footer-column">\s*<h3>Company</h3>|<div class="footer-column">\n                    <div class="footer-logo">\n                        <img src="../public/images/kings-electrical-logo.svg" alt="Kings Electrical Logo">\n                    </div>\n                    <h3>Company</h3>|g' {} \;

echo "Logo updated in all HTML files." 