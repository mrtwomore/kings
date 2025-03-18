/**
 * Kings Electrical - Mobile Header Diagnostics
 * This script diagnoses and logs information about mobile header and menu issues
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('[Header Debug] Starting mobile header diagnostics');
    
    // Check if we're on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    if (!isMobile) {
        console.log('[Header Debug] Not a mobile device, monitoring still active but minimal');
    }
    
    // Log header structure and dimensions
    const header = document.querySelector('.site-header');
    if (header) {
        const headerRect = header.getBoundingClientRect();
        const headerHeight = headerRect.height;
        const headerWidth = headerRect.width;
        
        console.log('[Header Debug] Header dimensions:', {
            width: headerWidth + 'px',
            height: headerHeight + 'px',
            children: header.children.length,
            classes: header.className
        });
        
        // Check logo details
        const logo = header.querySelector('.logo img');
        if (logo) {
            const logoNaturalSize = {
                width: logo.naturalWidth,
                height: logo.naturalHeight
            };
            
            const logoDisplaySize = {
                width: logo.offsetWidth,
                height: logo.offsetHeight
            };
            
            console.log('[Header Debug] Logo details:', {
                src: logo.src,
                naturalSize: logoNaturalSize,
                displaySize: logoDisplaySize,
                ratio: Math.round((logoNaturalSize.width / logoDisplaySize.width) * 100) / 100
            });
            
            // Check for oversized logos
            if (logoNaturalSize.width > 2 * logoDisplaySize.width) {
                console.warn('[Header Debug] Logo image is significantly larger than display size, consider resizing');
            }
        }
        
        // Check menu structure
        const nav = header.querySelector('.main-nav');
        if (nav) {
            const menuItems = nav.querySelectorAll('li');
            const dropdowns = nav.querySelectorAll('.dropdown');
            
            console.log('[Header Debug] Menu structure:', {
                menuItems: menuItems.length,
                dropdowns: dropdowns.length,
                height: nav.offsetHeight + 'px',
                width: nav.offsetWidth + 'px'
            });
            
            // Check dropdown structure
            dropdowns.forEach((dropdown, index) => {
                const dropdownItems = dropdown.querySelectorAll('li');
                console.log(`[Header Debug] Dropdown #${index + 1}:`, {
                    items: dropdownItems.length,
                    height: dropdown.offsetHeight + 'px',
                    parent: dropdown.parentElement.querySelector('a').textContent.trim()
                });
            });
        }
        
        // Check header buttons
        const buttons = header.querySelectorAll('.btn');
        console.log('[Header Debug] Header buttons:', {
            count: buttons.length,
            sizes: Array.from(buttons).map(btn => ({
                text: btn.textContent.trim(),
                width: btn.offsetWidth + 'px',
                height: btn.offsetHeight + 'px'
            }))
        });
        
        // Check for phone number
        const phoneEl = header.querySelector('.phone-number');
        if (phoneEl) {
            console.log('[Header Debug] Phone element:', {
                text: phoneEl.textContent.trim(),
                width: phoneEl.offsetWidth + 'px',
                visible: window.getComputedStyle(phoneEl).display !== 'none'
            });
        }
        
        // Check mobile menu toggle
        const menuToggle = header.querySelector('.mobile-menu-toggle');
        if (menuToggle) {
            console.log('[Header Debug] Menu toggle:', {
                width: menuToggle.offsetWidth + 'px',
                height: menuToggle.offsetHeight + 'px',
                position: window.getComputedStyle(menuToggle).position,
                accessibility: {
                    ariaLabel: menuToggle.getAttribute('aria-label') || 'not set',
                    ariaExpanded: menuToggle.getAttribute('aria-expanded') || 'not set'
                }
            });
        }
    }
    
    // Monitor menu toggle to check for performance issues
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            console.time('menuTogglePerformance');
            // Check DOM operation performance on toggle
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    console.timeEnd('menuTogglePerformance');
                    if (performance.now) {
                        const frameTime = performance.now();
                        setTimeout(() => {
                            const delta = performance.now() - frameTime;
                            console.log('[Header Debug] Menu toggle frame time:', Math.round(delta) + 'ms');
                            if (delta > 16.7) {
                                console.warn('[Header Debug] Menu toggle animation may be janky (> 16.7ms)');
                            }
                        }, 0);
                    }
                });
            });
        });
    }
    
    // Check for menu overlay
    const menuOverlay = document.querySelector('.menu-overlay');
    if (menuOverlay) {
        console.log('[Header Debug] Menu overlay present:', {
            position: window.getComputedStyle(menuOverlay).position,
            zIndex: window.getComputedStyle(menuOverlay).zIndex
        });
    } else {
        console.warn('[Header Debug] Menu overlay not found, this may affect mobile menu backdrop');
    }
    
    // Monitor header height changes
    let lastHeaderHeight = header ? header.offsetHeight : 0;
    let headerResizeCount = 0;
    
    const checkHeaderResize = () => {
        if (header) {
            const currentHeight = header.offsetHeight;
            if (currentHeight !== lastHeaderHeight) {
                headerResizeCount++;
                console.log('[Header Debug] Header height changed:', {
                    from: lastHeaderHeight + 'px',
                    to: currentHeight + 'px',
                    resizeCount: headerResizeCount
                });
                lastHeaderHeight = currentHeight;
            }
        }
    };
    
    // Check every 500ms
    const headerCheckInterval = setInterval(checkHeaderResize, 500);
    
    // Clean up after 30 seconds (60 checks)
    setTimeout(() => {
        clearInterval(headerCheckInterval);
        console.log('[Header Debug] Stopped monitoring header height changes');
    }, 30000);
    
    // Add resize observer for the header if supported
    if (window.ResizeObserver) {
        const headerObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                console.log('[Header Debug] Header resized:', {
                    width: Math.round(width) + 'px',
                    height: Math.round(height) + 'px'
                });
            }
        });
        
        if (header) {
            headerObserver.observe(header);
        }
    }
    
    // Check if header is properly fixed/sticky
    window.addEventListener('scroll', () => {
        if (header && window.scrollY > 100) {
            const headerPos = header.getBoundingClientRect().top;
            if (headerPos !== 0) {
                console.warn('[Header Debug] Header is not properly fixed to top:', {
                    position: window.getComputedStyle(header).position,
                    top: headerPos + 'px'
                });
            }
        }
    }, { passive: true });
    
    console.log('[Header Debug] Mobile header diagnostics initialized');
}); 