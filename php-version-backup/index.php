<?php
require_once 'config.php';

// Page-specific data
$page_data = [
    'title' => 'Home',
    'description' => 'Kings Electrical - Your trusted electrical and heat pump specialists in Christchurch. Quality solutions for residential and commercial clients.',
    'hero' => [
        'title' => 'Expert Electrical & Heat Pump Solutions',
        'description' => 'Professional electrical services and heat pump solutions for homes and businesses in Christchurch.',
        'bg_image' => '/images/Capture-One-Catalog0490-e1722552518279.jpg',
        'buttons' => '
            <a href="/service-finder" class="btn btn-primary">
                <span>Find Your Solution</span>
            </a>
            <a href="/contact" class="btn btn-outline">
                <span>Contact Us</span>
            </a>
        '
    ],
    'services' => [
        // Add services data here
    ],
    'features' => [
        // Add features data here
    ],
    'testimonials' => [
        // Add testimonials data here
    ],
    'cta' => [
        // Add CTA data here
    ],
    'service_areas' => [
        // Add service areas data here
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
$hero_content = file_get_contents(COMPONENTS_PATH . '/sections/hero.html');
$hero_content = str_replace('<!-- HERO_TITLE -->', $page_data['hero']['title'], $hero_content);
$hero_content = str_replace('<!-- HERO_DESCRIPTION -->', $page_data['hero']['description'], $hero_content);
$hero_content = str_replace('<!-- HERO_BG_IMAGE -->', $page_data['hero']['bg_image'], $hero_content);
$hero_content = str_replace('<!-- HERO_BUTTONS -->', $page_data['hero']['buttons'], $hero_content);
echo $hero_content;

// Include other sections
// Uncomment and implement these as needed
// include_component('sections/service-finder', $page_data['service_finder']);
// include_component('sections/services-grid', $page_data['services']);
// include_component('sections/features', $page_data['features']);
// include_component('sections/testimonials', $page_data['testimonials']);
// include_component('sections/cta', $page_data['cta']);
// include_component('sections/service-areas', $page_data['service_areas']);

$page_content = ob_get_clean();
$content = str_replace('<!-- PAGE_CONTENT -->', $page_content, $content);

// Output the complete page
echo $content;
?>
