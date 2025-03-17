/**
 * Kings Electrical - Image Lazy Loading
 * Improves page load performance by lazy loading images
 */

document.addEventListener('DOMContentLoaded', function() {
    // Convert regular images to lazy loaded
    const images = document.querySelectorAll('img:not([loading="lazy"])');
    images.forEach(img => {
        // Skip small images and logos
        if (img.classList.contains('logo-img') || 
            img.width < 50 || 
            img.height < 50) {
            return;
        }
        
        // Add loading attribute for native lazy loading
        img.setAttribute('loading', 'lazy');
        
        // For browsers that don't support native lazy loading
        if (!('loading' in HTMLImageElement.prototype)) {
            // Save original src
            const originalSrc = img.src;
            const originalSrcset = img.srcset;
            
            // Replace with data attributes
            img.dataset.src = originalSrc;
            if (originalSrcset) {
                img.dataset.srcset = originalSrcset;
            }
            
            // Clear src/srcset
            img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
            img.srcset = '';
        }
    });
    
    // Set up intersection observer for non-native lazy loading
    if (!('loading' in HTMLImageElement.prototype)) {
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
            function lazyLoad() {
                const scrollTop = window.pageYOffset;
                
                lazyImages.forEach(img => {
                    if (img.offsetTop < window.innerHeight + scrollTop) {
                        img.src = img.dataset.src;
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                        }
                        img.classList.add('loaded');
                    }
                });
                
                // If all images are loaded, stop listening
                if (lazyImages.length === 0) {
                    document.removeEventListener('scroll', lazyLoad);
                    window.removeEventListener('resize', lazyLoad);
                    window.removeEventListener('orientationchange', lazyLoad);
                }
            }
            
            // Add event listeners
            document.addEventListener('scroll', lazyLoad, { passive: true });
            window.addEventListener('resize', lazyLoad, { passive: true });
            window.addEventListener('orientationchange', lazyLoad, { passive: true });
            
            // Initial load
            lazyLoad();
        }
    }
    
    // Add fade-in effect for lazy loaded images
    const style = document.createElement('style');
    style.textContent = `
        img[loading="lazy"],
        img[data-src] {
            opacity: 0;
            transition: opacity 0.3s ease-in;
        }
        
        img.loaded,
        img[loading="lazy"]:not([data-src]) {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
}); 