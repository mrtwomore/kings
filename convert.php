<?php
/**
 * Conversion Script
 * 
 * This script converts the original index.html to the new component-based structure.
 * It extracts inline CSS and moves it to a separate file, and creates a new index.php
 * that uses the component system.
 */

// Make sure components directory exists
if (!file_exists('components')) {
    mkdir('components', 0755, true);
    mkdir('components/layout', 0755, true);
    mkdir('components/sections', 0755, true);
    mkdir('components/shared', 0755, true);
}

// Check if index.html exists
if (!file_exists('index.html')) {
    die("Error: index.html not found.\n");
}

// Read the original index.html
$html = file_get_contents('index.html');

// Extract inline CSS
preg_match('/<style>(.*?)<\/style>/s', $html, $matches);
if (isset($matches[1])) {
    $inlineCSS = $matches[1];
    
    // Create a new CSS file for the homepage-specific styles
    if (!file_exists('css')) {
        mkdir('css', 0755, true);
    }
    
    // Append to styles.css or create a new file
    if (file_exists('css/styles.css')) {
        file_put_contents('css/homepage.css', $inlineCSS);
        echo "Extracted inline CSS to css/homepage.css\n";
    } else {
        file_put_contents('css/styles.css', $inlineCSS);
        echo "Extracted inline CSS to css/styles.css\n";
    }
}

// Check if config.php exists, if not create it
if (!file_exists('config.php')) {
    $configContent = <<<'EOT'
<?php
// Site Configuration
define('SITE_NAME', 'Kings Electrical');
define('SITE_URL', 'https://kingselectrical.co.nz');
define('COMPONENTS_PATH', __DIR__ . '/components');

// Template Functions
function include_component($name, $data = []) {
    $file = COMPONENTS_PATH . '/' . $name . '.html';
    if (file_exists($file)) {
        $content = file_get_contents($file);
        
        // Replace placeholders with data
        foreach ($data as $key => $value) {
            $content = str_replace('<!-- ' . strtoupper($key) . ' -->', $value, $content);
        }
        
        echo $content;
    }
}

function get_page_title($title) {
    return $title . ' | ' . SITE_NAME;
}

// Helper function to load specific CSS files
function include_css($files = []) {
    $css = '';
    foreach ($files as $file) {
        $css .= '<link rel="stylesheet" href="/css/' . $file . '.css">' . PHP_EOL;
    }
    return $css;
}

// Helper function to load specific JS files
function include_js($files = []) {
    $js = '';
    foreach ($files as $file) {
        $js .= '<script src="/js/' . $file . '.js"></script>' . PHP_EOL;
    }
    return $js;
}
?>
EOT;
    file_put_contents('config.php', $configContent);
    echo "Created config.php\n";
}

// Create a backup of the original index.html
copy('index.html', 'index.html.bak');
echo "Created backup of index.html as index.html.bak\n";

// Check if index.php already exists
if (file_exists('index.php')) {
    echo "index.php already exists. Not overwriting.\n";
} else {
    // Create a basic index.php that includes the components
    $indexContent = <<<'EOT'
<?php
require_once 'config.php';

// Page-specific data
$page_data = [
    'title' => 'Home',
    'description' => 'Kings Electrical - Your trusted electrical and heat pump specialists in Christchurch. Quality solutions for residential and commercial clients.',
    // Add more data as needed
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

// Include components here
// Example: include_component('sections/hero', $page_data['hero']);

$page_content = ob_get_clean();
$content = str_replace('<!-- PAGE_CONTENT -->', $page_content, $content);

// Output the complete page
echo $content;
?>
EOT;
    file_put_contents('index.php', $indexContent);
    echo "Created basic index.php\n";
}

echo "\nConversion completed successfully!\n";
echo "Next steps:\n";
echo "1. Review the extracted CSS in css/homepage.css\n";
echo "2. Update index.php with your page-specific data\n";
echo "3. Create or update components as needed\n";
?> 