/**
 * Kings Electrical - Enhanced Mobile Menu
 * This script provides improved mobile navigation functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const body = document.body;
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const dropdownLinks = document.querySelectorAll('.has-dropdown > a');
    const header = document.querySelector('.site-header');
    
    // Mobile menu toggle
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            // Accessibility
            const expanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', expanded);
            
            // Prevent body scrolling when menu is open
            if (expanded) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });
    }
    
    // Dropdown handling for touch devices
    if (dropdownLinks.length > 0) {
        dropdownLinks.forEach(link => {
            // First click opens dropdown, second click follows link
            let clickCount = 0;
            
            link.addEventListener('click', function(e) {
                // Only intercept on mobile
                if (window.innerWidth <= 768) {
                    const dropdown = this.nextElementSibling;
                    
                    if (clickCount === 0) {
                        e.preventDefault();
                        
                        // Close other open dropdowns
                        dropdownLinks.forEach(otherLink => {
                            if (otherLink !== link && otherLink.nextElementSibling.classList.contains('active')) {
                                otherLink.nextElementSibling.classList.remove('active');
                                otherLink.classList.remove('active');
                            }
                        });
                        
                        // Toggle current dropdown
                        dropdown.classList.toggle('active');
                        this.classList.toggle('active');
                        clickCount = 1;
                        
                        // Reset click count after delay
                        setTimeout(() => {
                            clickCount = 0;
                        }, 3000);
                    } else {
                        // Second click, follow the link
                        clickCount = 0;
                    }
                }
            });
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mainNav && mainNav.classList.contains('active')) {
            if (!mainNav.contains(e.target) && e.target !== menuToggle && !menuToggle.contains(e.target)) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
                body.classList.remove('menu-open');
                body.style.overflow = '';
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mainNav && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('menu-open');
            body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Sticky header behavior
    if (header) {
        let lastScrollTop = 0;
        const scrollThreshold = 50;
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add sticky class when scrolling down
            if (currentScroll > scrollThreshold) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
            
            // Hide header when scrolling down, show when scrolling up
            if (currentScroll > lastScrollTop && currentScroll > 200) {
                // Scrolling down
                header.classList.add('header-hidden');
            } else {
                // Scrolling up
                header.classList.remove('header-hidden');
            }
            
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }, { passive: true });
    }
    
    // Handle orientation changes
    window.addEventListener('orientationchange', function() {
        if (mainNav && mainNav.classList.contains('active')) {
            // Adjust menu height for orientation
            setTimeout(() => {
                mainNav.style.height = window.innerHeight + 'px';
            }, 200);
        }
    });
    
    // Resize handler
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 768) {
                // Reset mobile menu state on desktop
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                    body.classList.remove('menu-open');
                    body.style.overflow = '';
                }
                
                // Reset dropdown states
                dropdownLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.nextElementSibling) {
                        link.nextElementSibling.classList.remove('active');
                    }
                });
            }
        }, 250);
    }, { passive: true });
}); 