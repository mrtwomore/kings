/**
 * Kings Electrical - Enhanced Mobile Menu
 * This script provides improved mobile navigation functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('[Mobile Menu] Initializing mobile menu...');
    console.time('mobileMenuInit');
    
    // Cache DOM elements
    const body = document.body;
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const dropdownLinks = document.querySelectorAll('.has-dropdown > a');
    const header = document.querySelector('.site-header');
    const logo = document.querySelector('.logo img');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    // Log element availability
    console.log('[Mobile Menu] Elements found:', {
        menuToggle: !!menuToggle,
        mainNav: !!mainNav,
        dropdownLinks: dropdownLinks.length,
        header: !!header,
        logo: !!logo,
        menuOverlay: !!menuOverlay
    });
    
    // Monitor logo image loading
    if (logo) {
        if (logo.complete) {
            console.log('[Mobile Menu] Logo already loaded:', 
                       {width: logo.naturalWidth, height: logo.naturalHeight, 
                        displayWidth: logo.offsetWidth, displayHeight: logo.offsetHeight});
        } else {
            logo.addEventListener('load', function() {
                console.log('[Mobile Menu] Logo loaded:', 
                           {width: logo.naturalWidth, height: logo.naturalHeight, 
                            displayWidth: logo.offsetWidth, displayHeight: logo.offsetHeight});
            });
        }
    }
    
    // Toggle mobile menu
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            if (menuOverlay) {
                menuOverlay.classList.toggle('active');
            }
            
            // Toggle body scroll
            if (mainNav.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });
    }
    
    // Handle dropdown menus on mobile
    if (dropdownLinks.length > 0) {
        dropdownLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Only handle dropdowns on mobile
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    
                    const parent = this.parentElement;
                    
                    // Toggle active class on parent
                    parent.classList.toggle('active');
                    
                    // Close other open dropdowns
                    dropdownLinks.forEach(otherLink => {
                        if (otherLink !== this && otherLink.parentElement.classList.contains('active')) {
                            otherLink.parentElement.classList.remove('active');
                        }
                    });
                }
            });
        });
    }
    
    // Close menu when clicking overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function() {
            if (mainNav && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
                menuOverlay.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mainNav && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
            if (menuOverlay) menuOverlay.classList.remove('active');
            body.style.overflow = '';
        }
    });
    
    // Simplified header behavior
    if (header) {
        let scrollThrottleTimeout;
        const scrollThreshold = 50;
        
        window.addEventListener('scroll', function() {
            if (scrollThrottleTimeout) {
                return;
            }
            
            scrollThrottleTimeout = setTimeout(() => {
                const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
                
                // Simple scroll class toggle
                if (currentScroll > scrollThreshold) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                
                scrollThrottleTimeout = null;
            }, 10);
        }, { passive: true });
    }
    
    // Handle orientation changes
    window.addEventListener('orientationchange', function() {
        console.log('[Mobile Menu] Orientation changed');
        if (mainNav && mainNav.classList.contains('active')) {
            // Adjust menu height for orientation
            setTimeout(() => {
                mainNav.style.height = window.innerHeight + 'px';
                console.log('[Mobile Menu] Adjusted menu height for orientation:', window.innerHeight + 'px');
            }, 200);
        }
    });
    
    // Handle resize events
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mainNav && mainNav.classList.contains('active')) {
            // Reset menu state when resizing to desktop
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
            if (menuOverlay) menuOverlay.classList.remove('active');
            body.style.overflow = '';
        }
    });
    
    console.timeEnd('mobileMenuInit');
}); 