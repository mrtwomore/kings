/**
 * Kings Electrical - Mobile Performance Optimizations
 * This script improves performance on mobile devices
 */

document.addEventListener('DOMContentLoaded', function() {
    // Detect mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    // Add mobile class to body for CSS targeting
    if (isMobile) {
        document.body.classList.add('is-mobile');
    }
    
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '50px 0px' });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            if (img.dataset.srcset) {
                img.srcset = img.dataset.srcset;
            }
        });
    }
    
    // Defer non-critical scripts
    const deferScripts = document.querySelectorAll('script[data-defer]');
    if (deferScripts.length > 0) {
        setTimeout(() => {
            deferScripts.forEach(script => {
                const newScript = document.createElement('script');
                if (script.src) {
                    newScript.src = script.src;
                } else {
                    newScript.textContent = script.textContent;
                }
                document.body.appendChild(newScript);
                script.remove();
            });
        }, 2000); // Load after 2 seconds
    }
    
    // Add touch detection
    window.addEventListener('touchstart', function onFirstTouch() {
        document.body.classList.add('has-touch');
        window.removeEventListener('touchstart', onFirstTouch);
    }, false);
    
    // Optimize animations for mobile
    if (isMobile) {
        const animatedElements = document.querySelectorAll('.animated, [data-animation]');
        animatedElements.forEach(el => {
            // Simplify animations on mobile
            el.style.animationDuration = '0.3s';
            el.style.transitionDuration = '0.3s';
        });
    }
    
    // Optimize form inputs for mobile
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        // Add blur event to scroll back to top on iOS
        input.addEventListener('blur', function() {
            // Small timeout to ensure keyboard is closed
            setTimeout(() => {
                // Scroll to where the user was before focusing
                if (document.activeElement.tagName !== 'INPUT' && 
                    document.activeElement.tagName !== 'TEXTAREA' && 
                    document.activeElement.tagName !== 'SELECT') {
                    window.scrollTo(0, window.pageYOffset);
                }
            }, 100);
        });
    });
    
    // Handle viewport height issues on mobile
    function setVhProperty() {
        // Set a CSS variable with the actual viewport height
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    // Set initially and on resize
    setVhProperty();
    window.addEventListener('resize', setVhProperty);
    
    // Add swipe detection for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 100;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left
            document.dispatchEvent(new CustomEvent('swipeLeft'));
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right
            document.dispatchEvent(new CustomEvent('swipeRight'));
        }
    }
    
    // Handle mobile-specific navigation
    document.addEventListener('swipeRight', function() {
        // Open menu on swipe right from edge
        if (touchStartX < 30) {
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            const mainNav = document.querySelector('.main-nav');
            if (menuToggle && mainNav && !mainNav.classList.contains('active')) {
                menuToggle.click();
            }
        }
    });
    
    document.addEventListener('swipeLeft', function() {
        // Close menu on swipe left
        const mainNav = document.querySelector('.main-nav');
        if (mainNav && mainNav.classList.contains('active')) {
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            if (menuToggle) {
                menuToggle.click();
            }
        }
    });
}); 