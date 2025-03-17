# PHP Version Backup

This directory contains a backup of the PHP-based implementation of the Kings Electrical website. The implementation uses a component-based architecture for better modularity and maintainability.

## Files

- `index.php` - Main entry point for the homepage
- `about.php` - About page implementation
- `404.php` - 404 error page
- `config.php` - Configuration settings and helper functions
- `router.php` - Simple router for handling different routes
- `.htaccess` - Apache configuration for routing
- `convert.php` and `convert-index.sh` - Scripts for converting HTML to PHP

## Components Structure

The components are organized in the following directories:

1. **Layout Components** (`components/layout/`):
   - `base.html` - The main template
   - `header.html` - Site header
   - `footer.html` - Site footer

2. **Section Components** (`components/sections/`):
   - `hero.html` - Hero section
   - `service-finder.html` - Service finder tool
   - `services-grid.html` - Services grid section
   - `features.html` - Features/Why Choose Us section
   - `testimonials.html` - Testimonials section
   - `cta.html` - Call to action section
   - `service-areas.html` - Service areas section

3. **Shared Components** (`components/shared/`):
   - `service-card.html` - Individual service card
   - `feature-item.html` - Individual feature item
   - `testimonial-item.html` - Individual testimonial

## How to Use

To run this PHP version:

1. Start a PHP server: `php -S localhost:8000 router.php`
2. Visit http://localhost:8000 in your browser

## Notes

This implementation was archived in favor of the HTML version due to some rendering issues and missing assets. It may be revisited in the future for further development. 