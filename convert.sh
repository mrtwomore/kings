#!/bin/bash

# Conversion Script
# This script extracts inline CSS from index.html and creates a backup

echo "Starting conversion process..."

# Create directories if they don't exist
mkdir -p components/layout components/sections components/shared css

# Check if index.html exists
if [ ! -f "index.html" ]; then
    echo "Error: index.html not found."
    exit 1
fi

# Create a backup of the original index.html
cp index.html index.html.bak
echo "Created backup of index.html as index.html.bak"

# Extract inline CSS using sed
echo "Extracting inline CSS..."
sed -n '/<style>/,/<\/style>/p' index.html > css/homepage.css
sed -i '' 's/<style>//g' css/homepage.css
sed -i '' 's/<\/style>//g' css/homepage.css

echo "Extracted inline CSS to css/homepage.css"

echo "Conversion completed successfully!"
echo "Next steps:"
echo "1. Review the extracted CSS in css/homepage.css"
echo "2. Update index.php with your page-specific data"
echo "3. Create or update components as needed" 