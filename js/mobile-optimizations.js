/**
 * Kings Electrical - Mobile Performance Optimizations
 * This script improves performance on mobile devices
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('[Mobile Opt] Starting mobile optimizations...');
    console.time('mobileOptInit');
    
    // Detect mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    console.log('[Mobile Opt] Device detection:', {
        isMobile: isMobile,
        userAgent: navigator.userAgent,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1
    });
    
    // Add mobile class to body for CSS targeting
    if (isMobile) {
        document.body.classList.add('is-mobile');
        console.log('[Mobile Opt] Added is-mobile class to body');
    }
    
    // Performance monitoring
    let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log('[Mobile Opt] Page load time:', loadTime + 'ms');
    
    // Lazy load images
    console.time('lazyLoadSetup');
    const lazyImages = document.querySelectorAll('img[data-src]');
    console.log('[Mobile Opt] Found ' + lazyImages.length + ' images to lazy load');
    
    if ('IntersectionObserver' in window) {
        console.log('[Mobile Opt] Using IntersectionObserver for lazy loading');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    console.log('[Mobile Opt] Lazy loading image:', img.dataset.src);
                    console.time('imageLoad-' + img.dataset.src);
                    
                    img.onload = function() {
                        console.timeEnd('imageLoad-' + img.dataset.src);
                        console.log('[Mobile Opt] Image loaded:', {
                            src: img.src,
                            naturalWidth: img.naturalWidth,
                            naturalHeight: img.naturalHeight,
                            displayWidth: img.width,
                            displayHeight: img.height
                        });
                        img.classList.add('loaded');
                    };
                    
                    img.src = img.dataset.src;
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '50px 0px' });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        console.log('[Mobile Opt] Using fallback for lazy loading (no IntersectionObserver)');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            if (img.dataset.srcset) {
                img.srcset = img.dataset.srcset;
            }
        });
    }
    console.timeEnd('lazyLoadSetup');
    
    // Check header assets
    const headerLogo = document.querySelector('.site-header .logo img');
    const headerButtons = document.querySelectorAll('.site-header .btn');
    
    if (headerLogo) {
        console.log('[Mobile Opt] Header logo:', {
            src: headerLogo.src,
            complete: headerLogo.complete,
            naturalWidth: headerLogo.complete ? headerLogo.naturalWidth : 'loading',
            naturalHeight: headerLogo.complete ? headerLogo.naturalHeight : 'loading',
            displayWidth: headerLogo.width,
            displayHeight: headerLogo.height
        });
    }
    
    console.log('[Mobile Opt] Header buttons:', headerButtons.length);
    
    // Defer non-critical scripts
    const deferScripts = document.querySelectorAll('script[data-defer]');
    if (deferScripts.length > 0) {
        console.log('[Mobile Opt] Deferring ' + deferScripts.length + ' non-critical scripts');
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
                console.log('[Mobile Opt] Loaded deferred script:', script.src || 'inline script');
            });
        }, 2000); // Load after 2 seconds
    }
    
    // Add touch detection
    window.addEventListener('touchstart', function onFirstTouch() {
        document.body.classList.add('has-touch');
        console.log('[Mobile Opt] Touch detected - added has-touch class');
        window.removeEventListener('touchstart', onFirstTouch);
    }, false);
    
    // Optimize animations for mobile
    if (isMobile) {
        console.time('animationOptimization');
        const animatedElements = document.querySelectorAll('.animated, [data-animation]');
        console.log('[Mobile Opt] Optimizing ' + animatedElements.length + ' animated elements for mobile');
        
        animatedElements.forEach(el => {
            // Simplify animations on mobile
            el.style.animationDuration = '0.3s';
            el.style.transitionDuration = '0.3s';
        });
        console.timeEnd('animationOptimization');
    }
    
    // Optimize form inputs for mobile
    const formInputs = document.querySelectorAll('input, textarea, select');
    console.log('[Mobile Opt] Optimizing ' + formInputs.length + ' form inputs for mobile');
    
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
                    console.log('[Mobile Opt] Fixed input blur scroll position');
                }
            }, 100);
        });
    });
    
    // Handle viewport height issues on mobile
    function setVhProperty() {
        // Set a CSS variable with the actual viewport height
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        console.log('[Mobile Opt] Set --vh property to', vh + 'px');
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
            console.log('[Mobile Opt] Swipe left detected');
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right
            document.dispatchEvent(new CustomEvent('swipeRight'));
            console.log('[Mobile Opt] Swipe right detected');
        }
    }
    
    // Handle mobile-specific navigation
    document.addEventListener('swipeRight', function() {
        // Open menu on swipe right from edge
        if (touchStartX < 30) {
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            const mainNav = document.querySelector('.main-nav');
            if (menuToggle && mainNav && !mainNav.classList.contains('active')) {
                console.log('[Mobile Opt] Opening menu via swipe right');
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
                console.log('[Mobile Opt] Closing menu via swipe left');
                menuToggle.click();
            }
        }
    });
    
    console.timeEnd('mobileOptInit');
    console.log('[Mobile Opt] Mobile optimizations complete');
}); 