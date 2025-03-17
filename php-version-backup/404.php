<?php
require_once 'config.php';

// Page-specific data
$page_data = [
    'title' => 'Page Not Found',
    'description' => 'The page you are looking for could not be found.',
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

// 404 content
echo '<section class="error-section py-20">
    <div class="container text-center">
        <h1 class="text-5xl font-bold mb-6">404</h1>
        <h2 class="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p class="text-lg mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/" class="btn btn-primary">
            <span>Return to Homepage</span>
        </a>
    </div>
</section>';

$page_content = ob_get_clean();
$content = str_replace('<!-- PAGE_CONTENT -->', $page_content, $content);

// Output the complete page
echo $content;
?> 