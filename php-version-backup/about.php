<?php
require_once 'config.php';

// Page-specific data
$page_data = [
    'title' => 'About Us',
    'description' => 'Learn about Kings Electrical - Your trusted electrical and heat pump specialists in Christchurch.',
    'hero' => [
        'title' => 'About Kings Electrical',
        'description' => 'We are a team of certified electricians dedicated to providing quality electrical services in Christchurch.',
        'bg_image' => '/images/Drone image.webp',
        'buttons' => '
            <a href="/contact" class="btn btn-primary">
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
$hero_content = file_get_contents(COMPONENTS_PATH . '/sections/hero.html');
$hero_content = str_replace('<!-- HERO_TITLE -->', $page_data['hero']['title'], $hero_content);
$hero_content = str_replace('<!-- HERO_DESCRIPTION -->', $page_data['hero']['description'], $hero_content);
$hero_content = str_replace('<!-- HERO_BG_IMAGE -->', $page_data['hero']['bg_image'], $hero_content);
$hero_content = str_replace('<!-- HERO_BUTTONS -->', $page_data['hero']['buttons'], $hero_content);
echo $hero_content;

// Add About content
echo '<section class="about-section py-16">
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h2 class="text-3xl font-bold mb-4">Our Story</h2>
                <p class="mb-4">Kings Electrical was founded with a simple mission: to provide reliable, high-quality electrical services to the Christchurch community.</p>
                <p class="mb-4">With over 15 years of experience in the industry, our team of certified electricians is committed to excellence in every project we undertake.</p>
                <p>We specialize in both residential and commercial electrical services, as well as heat pump solutions, ensuring that your home or business is comfortable, safe, and energy-efficient.</p>
            </div>
            <div>
                <img src="/images/Capture-One-Catalog0815.jpg" alt="Kings Electrical Team" class="rounded-lg shadow-lg">
            </div>
        </div>
    </div>
</section>';

$page_content = ob_get_clean();
$content = str_replace('<!-- PAGE_CONTENT -->', $page_content, $content);

// Output the complete page
echo $content;
?> 