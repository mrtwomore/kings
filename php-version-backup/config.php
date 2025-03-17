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
            // Convert key to uppercase for placeholder format
            $placeholder = '<!-- ' . strtoupper($key) . ' -->';
            $content = str_replace($placeholder, $value, $content);
        }
        
        echo $content;
    } else {
        echo "<!-- Component not found: $name -->";
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

// Function to create a route handler
function handle_routes() {
    $request_uri = $_SERVER['REQUEST_URI'];
    $path = parse_url($request_uri, PHP_URL_PATH);
    
    // Remove trailing slash if it exists
    $path = rtrim($path, '/');
    
    // Default to index for root path
    if ($path === '') {
        $path = '/';
    }
    
    switch ($path) {
        case '/':
            require_once 'index.php';
            break;
        case '/about':
            require_once 'about.php';
            break;
        case '/services':
            require_once 'services.php';
            break;
        case '/contact':
            require_once 'contact.php';
            break;
        default:
            // Check if it's a service page
            if (strpos($path, '/services/') === 0) {
                $service_slug = substr($path, 10);
                require_once 'service-detail.php';
            } else {
                // 404 page
                header("HTTP/1.0 404 Not Found");
                require_once '404.php';
            }
            break;
    }
}
?> 