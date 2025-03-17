#!/bin/bash

# This script helps convert the original index.html to our new component-based structure

echo "Starting index.html conversion..."

# Check if index.php exists
if [ -f "index.php" ]; then
    echo "index.php already exists. Backing it up as index.php.bak"
    cp index.php index.php.bak
fi

# Create a basic index.php file
cat > index.php << 'EOL'
<?php
require_once 'config.php';

// Page-specific data
$page_data = [
    'title' => 'Home',
    'description' => 'Kings Electrical - Your trusted electrical and heat pump specialists in Christchurch. Quality solutions for residential and commercial clients.',
    'hero' => [
        'title' => 'Expert Electrical & Heat Pump Solutions',
        'description' => 'Professional electrical services and heat pump solutions for homes and businesses in Christchurch.',
        'bg_image' => '/images/hero-bg.jpg',
        'buttons' => '
            <a href="/service-finder" class="btn btn-primary">
                <span>Find Your Solution</span>
            </a>
            <a href="/contact" class="btn btn-outline">
                <span>Contact Us</span>
            </a>
        '
    ]
];

// Start output buffering
ob_start();

// Include base template
$content = file_get_contents(COMPONENTS_PATH . '/layout/base.html');

// Replace placeholders
$content = str_replace('<!-- PAGE_TITLE -->', $page_data['title'], $content);
$content = str_replace('<!-- META_DESCRIPTION -->', $page_data['description'], $content);
$content = str_replace('<!-- INCLUDE_HEADER -->', file_get_contents(COMPONENTS_PATH . '/layout/header.html'), $content);
$content = str_replace('<!-- INCLUDE_FOOTER -->', file_get_contents(COMPONENTS_PATH . '/layout/footer.html'), $content);

// Generate main content
ob_start();

// Include Hero Section
include_component('sections/hero', $page_data['hero']);

// Add more components as needed

$page_content = ob_get_clean();
$content = str_replace('<!-- PAGE_CONTENT -->', $page_content, $content);

// Output the complete page
echo $content;
?>
EOL

echo "Created basic index.php"

echo "Conversion completed!"
echo "Next steps:"
echo "1. Add more components to index.php as needed"
echo "2. Update the page data with your content"
echo "3. Test the site to ensure everything works correctly" 