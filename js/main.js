/**
 * Kings Electrical Website JavaScript
 * Handles interactive elements and functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Cache commonly used DOM elements
    const body = document.body;
    const mainNav = document.querySelector('.main-nav');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    // Initialize all features
    const features = {
        mobileMenu: initMobileMenu.bind(null, { body, mainNav, menuOverlay }),
        testimonials: initTestimonialSlider,
        formValidation: initFormValidation,
        smoothScroll: initSmoothScrolling,
        headerScroll: initHeaderScroll,
        photoUpload: initPhotoUpload,
        calculator: initCalculator,
        stickyCta: initStickyCta,
        serviceFinder: initServiceFinder
    };

    // Initialize only features that have required DOM elements
    Object.entries(features).forEach(([key, init]) => {
        try {
            init();
        } catch (error) {
            console.debug(`Feature ${key} not initialized:`, error);
        }
    });

    // Debounced resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 768) {
                mainNav?.classList.remove('active');
                menuOverlay?.classList.remove('active');
                body.classList.remove('menu-open');
            }
        }, 250);
    });
});

function initMobileMenu({ body, mainNav, menuOverlay }) {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const hasDropdowns = document.querySelectorAll('.has-dropdown');
    let isAnimating = false;
    
    if (!mobileMenuToggle || !mainNav) return;

    const toggleMenu = (show = null) => {
        if (isAnimating) return;
        isAnimating = true;
        
        const elements = [mobileMenuToggle, mainNav, menuOverlay];
        const action = show === null ? 'toggle' : show ? 'add' : 'remove';
        
        // Add transition class before changes
        mainNav.style.transition = 'transform 0.3s ease';
        if (menuOverlay) menuOverlay.style.transition = 'opacity 0.3s ease';
        
        // Apply changes
        elements.forEach(el => el?.classList[action]('active'));
        body.classList[action]('menu-open');
        
        // Reset animation flag after transition
        setTimeout(() => {
            isAnimating = false;
            // Remove transition after animation to prevent unwanted transitions
            mainNav.style.transition = '';
            if (menuOverlay) menuOverlay.style.transition = '';
        }, 300);
    };

    // Toggle menu on button click with debounce
    let lastClick = 0;
    mobileMenuToggle.addEventListener('click', () => {
        const now = Date.now();
        if (now - lastClick < 300) return; // Debounce clicks
        lastClick = now;
        toggleMenu();
    });
    
    // Close menu when clicking on overlay
    menuOverlay?.addEventListener('click', () => {
        toggleMenu(false);
        // Close all dropdowns
        document.querySelectorAll('.dropdown.active, .dropdown-toggle.active')
            .forEach(el => el.classList.remove('active'));
    });
    
    // Handle mobile dropdowns with improved performance
    if (window.innerWidth <= 768) {
        hasDropdowns.forEach(item => {
            const link = item.querySelector('a');
            const dropdown = item.querySelector('.dropdown');
            
            if (!link || !dropdown) return;
            
            // Create dropdown toggle button if needed
            if (!item.querySelector('.dropdown-toggle')) {
                const dropdownToggle = document.createElement('button');
                dropdownToggle.className = 'dropdown-toggle';
                dropdownToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>';
                dropdownToggle.setAttribute('aria-label', 'Toggle Dropdown');
                
                // Use event delegation for better performance
                dropdownToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const wasActive = dropdown.classList.contains('active');
                    
                    // Close all other dropdowns first
                    document.querySelectorAll('.dropdown.active').forEach(d => {
                        if (d !== dropdown) {
                            d.classList.remove('active');
                            d.style.maxHeight = '0px';
                        }
                    });
                    
                    // Toggle current dropdown with smooth animation
                    dropdown.classList.toggle('active');
                    dropdown.style.maxHeight = wasActive ? '0px' : `${dropdown.scrollHeight}px`;
                    dropdownToggle.classList.toggle('active');
                });
                
                link.appendChild(dropdownToggle);
            }
        });
    }
}

function initTestimonialSlider() {
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    if (!testimonialSlides.length || !dots.length || !testimonialSlider) return;

    let currentSlide = 0;
    let testimonialInterval;
    let touchStartX = 0;
    
    const updateSlide = (index) => {
        currentSlide = (index + testimonialSlides.length) % testimonialSlides.length;
        
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonialSlides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Reset interval on manual navigation
        clearInterval(testimonialInterval);
        startInterval();
    };

    const startInterval = () => {
        testimonialInterval = setInterval(() => {
            updateSlide(currentSlide + 1);
        }, 8000);
    };

    // Initialize dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => updateSlide(index));
    });

    // Touch support
    testimonialSlider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    testimonialSlider.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        
        if (Math.abs(diff) > 50) {
            updateSlide(currentSlide + (diff < 0 ? 1 : -1));
        }
    }, { passive: true });

    // Pause on hover
    testimonialSlider.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
    testimonialSlider.addEventListener('mouseleave', startInterval);

    // Start the slider
    startInterval();
}

function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const showError = (field, message) => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        field.classList.add('error');
        field.parentNode.appendChild(errorDiv);
    };

    const clearErrors = () => {
        contactForm.querySelectorAll('.error-message').forEach(el => el.remove());
        contactForm.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    };

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors();

        const fields = {
            name: { el: document.getElementById('name'), validate: val => val.trim() !== '' },
            email: { el: document.getElementById('email'), validate: isValidEmail },
            phone: { el: document.getElementById('phone'), validate: isValidPhone },
            message: { el: document.getElementById('message'), validate: val => val.trim() !== '' }
        };

        const errors = Object.entries(fields).filter(([_, field]) => {
            if (!field.el) return false;
            return !field.validate(field.el.value.trim());
        });

        if (errors.length) {
            errors.forEach(([name, field]) => {
                const messages = {
                    name: 'Please enter your name',
                    email: 'Please enter a valid email address',
                    phone: 'Please enter a valid phone number',
                    message: 'Please enter your message'
                };
                showError(field.el, messages[name]);
            });
            return;
        }

        // If validation passes, you can submit the form here
        contactForm.submit();
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href') !== '#') {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
                    const mainNav = document.querySelector('.main-nav');
                    const menuOverlay = document.querySelector('.menu-overlay');
                    const body = document.body;
                    
                    if (mobileMenuToggle.classList.contains('active')) {
                        mobileMenuToggle.classList.remove('active');
                        mainNav.classList.remove('active');
                        menuOverlay.classList.remove('active');
                        body.classList.remove('menu-open');
                    }
                    
                    // Scroll to target
                    const header = document.querySelector('.site-header');
                    const headerHeight = header.offsetHeight;
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
}

function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    const scrollThreshold = 50;
    
    if (header) {
        // Set initial state based on scroll position
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        }
        
        // Update on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

function initPhotoUpload() {
    const photoInput = document.getElementById('photos');
    const photoPreview = document.getElementById('photo-preview');
    const contactForm = document.getElementById('contactForm');
    
    if (!photoInput || !photoPreview) return;
    
    // Handle file selection
    photoInput.addEventListener('change', function(e) {
        // Clear existing error messages
        const existingError = photoPreview.querySelector('.file-upload-error');
        if (existingError) existingError.remove();
        
        const files = Array.from(this.files);
        
        // Validate file count
        if (files.length > 5) {
            photoPreview.innerHTML = '<p class="file-upload-error">You can upload a maximum of 5 photos. Please select fewer files.</p>';
            this.value = '';
            return;
        }
        
        // Validate file size and type
        let hasError = false;
        files.forEach(file => {
            // Check if file is an image
            if (!file.type.startsWith('image/')) {
                photoPreview.innerHTML = '<p class="file-upload-error">Please upload only image files (JPEG, PNG, etc.).</p>';
                hasError = true;
            }
            
            // Check file size (5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                photoPreview.innerHTML = '<p class="file-upload-error">Each image must be smaller than 5MB. Please resize your images.</p>';
                hasError = true;
            }
        });
        
        if (hasError) {
            this.value = '';
            return;
        }
        
        // Display image previews
        photoPreview.innerHTML = '';
        files.forEach(file => {
            const reader = new FileReader();
            
            reader.onload = function(event) {
                const previewItem = document.createElement('div');
                previewItem.className = 'photo-preview-item';
                
                const img = document.createElement('img');
                img.src = event.target.result;
                img.alt = file.name;
                
                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-photo';
                removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                removeBtn.setAttribute('type', 'button');
                removeBtn.setAttribute('aria-label', 'Remove photo');
                
                removeBtn.addEventListener('click', function() {
                    previewItem.remove();
                    
                    // Create a new FileList without the removed file
                    const dataTransfer = new DataTransfer();
                    const currentFiles = Array.from(photoInput.files);
                    
                    currentFiles.forEach(currentFile => {
                        if (currentFile.name !== file.name) {
                            dataTransfer.items.add(currentFile);
                        }
                    });
                    
                    photoInput.files = dataTransfer.files;
                });
                
                previewItem.appendChild(img);
                previewItem.appendChild(removeBtn);
                photoPreview.appendChild(previewItem);
            };
            
            reader.readAsDataURL(file);
        });
    });
    
    // Handle form submission with files
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Create FormData object
            const formData = new FormData(this);
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (in a real implementation, you would send the formData to your server)
            setTimeout(function() {
                // Success message
                const formContainer = contactForm.closest('.contact-form');
                formContainer.innerHTML = `
                    <div class="submission-success">
                        <i class="fas fa-check-circle"></i>
                        <h3>Thank You!</h3>
                        <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                    </div>
                `;
                
                // In a real implementation, you would use fetch or XMLHttpRequest:
                /*
                fetch('/submit-contact-form', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    // Handle success
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    // Reset button state
                    submitButton.innerHTML = originalButtonText;
                    submitButton.disabled = false;
                });
                */
                
            }, 1500);
        });
    }
}

function initCalculator() {
    const calculateBtn = document.getElementById('calculateSavings');
    if (!calculateBtn) return;

    calculateBtn.addEventListener('click', () => {
        // Get input values
        const homeSize = parseInt(document.getElementById('homeSize').value) || 0;
        const rooms = parseInt(document.getElementById('rooms').value) || 0;
        const current = document.getElementById('current').value;
        const bill = parseInt(document.getElementById('bill').value) || 0;
        
        // Calculate savings
        const savings = calculateSavings(homeSize, rooms, current, bill);
        
        // Update results with animation
        updateSavingsDisplay(savings);
    });

    // Initialize countdown
    initCountdown();
}

function calculateSavings(homeSize, rooms, current, bill) {
    // Base calculations
    const savingsRates = {
        electric: { low: 0.20, high: 0.35 },
        gas: { low: 0.15, high: 0.30 },
        'heatpump-old': { low: 0.10, high: 0.25 },
        other: { low: 0.25, high: 0.40 }
    };

    const rates = savingsRates[current] || savingsRates.other;
    let monthlySavingLow = Math.round(bill * rates.low);
    let monthlySavingHigh = Math.round(bill * rates.high);

    // Size adjustment
    const sizeMultiplier = homeSize > 200 ? 1.2 : homeSize < 80 ? 0.8 : 1;
    monthlySavingLow = Math.round(monthlySavingLow * sizeMultiplier);
    monthlySavingHigh = Math.round(monthlySavingHigh * sizeMultiplier);

    // Room adjustment
    if (rooms > 3) {
        monthlySavingLow = Math.round(monthlySavingLow * 1.1);
        monthlySavingHigh = Math.round(monthlySavingHigh * 1.1);
    }

    // Calculate other metrics
    const annualSavingLow = monthlySavingLow * 12;
    const annualSavingHigh = monthlySavingHigh * 12;
    const tenYearSavingLow = annualSavingLow * 10;
    const tenYearSavingHigh = annualSavingHigh * 10;

    // CO2 reduction calculation
    const co2Rates = {
        electric: 1.2,
        gas: 1.5,
        'heatpump-old': 0.7,
        other: 1.0
    };

    return {
        monthly: { low: monthlySavingLow, high: monthlySavingHigh },
        annual: { low: annualSavingLow, high: annualSavingHigh },
        tenYear: { low: tenYearSavingLow, high: tenYearSavingHigh },
        co2: co2Rates[current] || co2Rates.other
    };
}

function updateSavingsDisplay(savings) {
    const elements = {
        monthly: document.getElementById('monthlySavings'),
        annual: document.getElementById('annualSavings'),
        tenYear: document.getElementById('tenYearSavings'),
        co2: document.getElementById('co2Reduction')
    };

    if (elements.monthly) {
        elements.monthly.textContent = `$${savings.monthly.low} - $${savings.monthly.high}`;
    }
    if (elements.annual) {
        elements.annual.textContent = `$${savings.annual.low} - $${savings.annual.high}`;
    }
    if (elements.tenYear) {
        elements.tenYear.textContent = `$${savings.tenYear.low} - $${savings.tenYear.high}`;
    }
    if (elements.co2) {
        elements.co2.textContent = `Reduce your CO₂ emissions by up to ${savings.co2.toFixed(1)} tonnes per year`;
    }

    // Animate results
    document.querySelectorAll('.savings-metric').forEach(metric => {
        metric.style.transform = 'scale(1.05)';
        setTimeout(() => {
            metric.style.transform = 'translateY(-5px)';
        }, 300);
    });
}

function initCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;

    // Set promotion end date (14 days from now)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 14);
    
    function updateCountdown() {
        const now = new Date();
        const diff = endDate - now;
        
        if (diff <= 0) {
            countdownElement.textContent = 'Last day!';
            return;
        }
        
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        countdownElement.textContent = `${days} days`;
    }

    updateCountdown();
    // Update daily
    setInterval(updateCountdown, 86400000);
}

function initStickyCta() {
    const stickyCta = document.querySelector('.sticky-cta');
    if (!stickyCta) return;

    // Throttle scroll handler
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                stickyCta.classList.toggle('visible', window.scrollY > 500);
                ticking = false;
            });
            ticking = true;
        }
    });
}

function initServiceFinder() {
    // Initialize variables
    let currentStep = 1;
    const maxSteps = 4;
    let userSelections = {
        property: '',
        service: '',
        timing: '',
        heatpumpType: ''
    };

    // Get DOM elements
    const nextBtn = document.getElementById('nextStep');
    const prevBtn = document.getElementById('prevStep');
    const stepIndicators = document.querySelectorAll('.step-indicator');
    const optionCards = document.querySelectorAll('.option-card');
    
    if (!nextBtn || !prevBtn || !stepIndicators.length || !optionCards.length) {
        console.debug('Service finder elements not found');
        return;
    }

    // Handle option card selection
    optionCards.forEach(card => {
        card.addEventListener('click', () => handleOptionSelection(card));
    });

    // Navigation handlers
    nextBtn.addEventListener('click', () => handleNavigation('next'));
    prevBtn.addEventListener('click', () => handleNavigation('prev'));
    
    // Step indicator navigation
    stepIndicators.forEach(indicator => {
        indicator.addEventListener('click', () => handleStepIndicatorClick(indicator));
    });

    // Restart handler
    const restartButton = document.getElementById('restartFinder');
    if (restartButton) {
        restartButton.addEventListener('click', resetServiceFinder);
    }

    function handleOptionSelection(card) {
        if (!card || !card.parentElement) return;

        // Remove selected class from siblings
        Array.from(card.parentElement.children).forEach(sibling => {
            sibling.classList.remove('selected');
        });
        
        // Add selected class to clicked card
        card.classList.add('selected');
        
        // Store the selection
        const stepId = card.closest('.finder-step')?.id;
        const value = card.getAttribute('data-value');
        
        if (stepId && value) {
            updateUserSelections(stepId, value);
            nextBtn.removeAttribute('disabled');
        }
    }

    function updateUserSelections(stepId, value) {
        switch(stepId) {
            case 'step1':
                userSelections.property = value;
                break;
            case 'step2':
                userSelections.service = value;
                if (value !== 'heatpump') {
                    userSelections.heatpumpType = '';
                }
                break;
            case 'step3':
                userSelections.timing = value;
                break;
            case 'step-heatpump-type':
                userSelections.heatpumpType = value;
                break;
        }
        
        // Log selection for debugging
        console.debug('Updated selections:', { ...userSelections });
    }

    function handleNavigation(direction) {
        if (direction === 'next') {
            if (currentStep < maxSteps) {
                // Handle emergency service
                if (currentStep === 2 && userSelections.service === 'emergency') {
                    showEmergencyResult();
                    return;
                }

                // Handle heat pump type question
                if (currentStep === 2 && userSelections.service === 'heatpump') {
                    handleHeatPumpTypeStep();
                    return;
                }

                // Handle navigation from heat pump type step
                if (currentStep === 'step-heatpump-type') {
                    handleHeatPumpTypeNavigation();
                    return;
                }

                // If we're on step 3 and going to step 4, show results instead
                if (currentStep === 3) {
                    showResults();
                    return;
                }

                // Normal flow
                navigateToStep(currentStep + 1);
            } else {
                // Show results when on last step
                showResults();
            }
        } else if (direction === 'prev' && currentStep > 1) {
            handlePreviousNavigation();
        }
    }

    function handleHeatPumpTypeStep() {
        const step2 = document.getElementById('step2');
        const heatPumpStep = document.getElementById('step-heatpump-type');
        
        if (!step2 || !heatPumpStep) {
            console.error('Heat pump step elements not found');
            return;
        }

        step2.classList.remove('active');
        heatPumpStep.classList.add('active');
        currentStep = 'step-heatpump-type'; // Changed to match actual ID
        
        updateStepIndicators();
        prevBtn.removeAttribute('disabled');
        
        // Disable next button if no option selected
        const selectedOption = heatPumpStep.querySelector('.option-card.selected');
        nextBtn.disabled = !selectedOption;
    }

    function handleHeatPumpTypeNavigation() {
        // Set default heat pump type if none selected
        if (!userSelections.heatpumpType) {
            userSelections.heatpumpType = 'new-install';
            console.debug('Set default heat pump type:', userSelections.heatpumpType);
        }
        
        const heatPumpStep = document.getElementById('step-heatpump-type');
        if (heatPumpStep) {
            heatPumpStep.classList.remove('active');
        }
        navigateToStep(3);
    }

    function handlePreviousNavigation() {
        if (currentStep === 'step-heatpump-type') {
            const heatPumpStep = document.getElementById('step-heatpump-type');
            if (heatPumpStep) {
                heatPumpStep.classList.remove('active');
            }
            navigateToStep(2);
        } else if (currentStep === 3 && userSelections.service === 'heatpump') {
            const step3 = document.getElementById('step3');
            const heatPumpStep = document.getElementById('step-heatpump-type');
            
            if (step3 && heatPumpStep) {
                step3.classList.remove('active');
                heatPumpStep.classList.add('active');
                currentStep = 'step-heatpump-type';
                updateStepIndicators();
            }
        } else {
            navigateToStep(currentStep - 1);
        }
    }

    function navigateToStep(step) {
        // Special handling for result step
        if (step === maxSteps) {
            showResults();
            return;
        }

        // Handle special case for heat pump type step
        const currentStepEl = typeof currentStep === 'string' ? 
            document.getElementById(currentStep) : 
            document.getElementById(`step${currentStep}`);
            
        const nextStepEl = typeof step === 'string' ? 
            document.getElementById(step) : 
            document.getElementById(`step${step}`);
        
        if (!currentStepEl || !nextStepEl) {
            console.error('Step elements not found', { current: currentStep, next: step });
            return;
        }

        currentStepEl.classList.remove('active');
        currentStep = step;
        nextStepEl.classList.add('active');
        
        updateStepIndicators();
        updateNavigationButtons();
        
        // Only update button text for numeric steps
        if (typeof step === 'number') {
            nextBtn.innerHTML = step === maxSteps - 1 ? 
                'Show Results <i class="fas fa-check"></i>' : 
                'Next <i class="fas fa-arrow-right"></i>';
        }
    }

    function updateNavigationButtons() {
        if (!prevBtn || !nextBtn) return;

        prevBtn.disabled = currentStep === 1;
        
        const currentStepEl = typeof currentStep === 'string' ? 
            document.getElementById(currentStep) : 
            document.getElementById(`step${currentStep}`);
            
        if (currentStepEl) {
            const selectedCard = currentStepEl.querySelector('.option-card.selected');
            nextBtn.disabled = !selectedCard;
        }
    }

    function updateStepIndicators() {
        stepIndicators.forEach(indicator => {
            const step = parseInt(indicator.getAttribute('data-step'));
            let isActive = false;

            if (currentStep === 'step-result') {
                isActive = step === maxSteps;
            } else if (currentStep === 'step-heatpump-type') {
                isActive = step === 3;
            } else {
                isActive = step === currentStep;
            }

            indicator.classList.toggle('active', isActive);
        });
    }

    function handleStepIndicatorClick(indicator) {
        const stepNumber = parseInt(indicator.getAttribute('data-step'));
        if (stepNumber <= currentStep) {
            navigateToStep(stepNumber);
        }
    }

    function showEmergencyResult() {
        hideAllSteps();
        
        const resultStep = document.getElementById('step-result');
        const finderNav = document.querySelector('.finder-nav');
        
        if (resultStep) {
            resultStep.classList.add('active');
        }
        
        if (finderNav) {
            finderNav.style.display = 'none';
        }
        
        // Hide all result boxes
        document.querySelectorAll('.result-box').forEach(box => {
            box.style.display = 'none';
        });
        
        // Show emergency result box
        const emergencyBox = document.querySelector('.result-box.emergency-result');
        if (emergencyBox) {
            emergencyBox.style.display = 'block';
        }
    }

    function showResults() {
        hideAllSteps();
        
        const resultStep = document.getElementById('step-result');
        const finderNav = document.querySelector('.finder-nav');
        
        if (!resultStep) {
            console.error('Result step element not found');
            return;
        }
        
        resultStep.classList.add('active');
        currentStep = 'step-result';
        
        if (finderNav) {
            finderNav.style.display = 'none';
        }
        
        // Hide all result boxes
        document.querySelectorAll('.result-box').forEach(box => {
            box.style.display = 'none';
        });

        // Find and show appropriate result box
        const resultBox = findAppropriateResultBox();
        if (resultBox) {
            resultBox.style.display = 'block';
            console.debug('Showing result box:', resultBox.className);
        } else {
            console.error('No matching result box found');
            // Show error message to user
            const resultContainer = document.querySelector('.result-content');
            if (resultContainer) {
                const errorMessage = document.createElement('div');
                errorMessage.className = 'result-error';
                errorMessage.innerHTML = `
                    <div class="result-icon"><i class="fas fa-exclamation-circle"></i></div>
                    <h4>Service Information Unavailable</h4>
                    <p>We're sorry, but we couldn't find the specific information for your selection. Please contact us directly for a personalized quote.</p>
                    <div class="result-actions">
                        <a href="tel:033771546" class="btn btn-primary"><i class="fas fa-phone"></i> Call Us: 03 377 1546</a>
                        <a href="contact.html" class="btn btn-secondary"><i class="fas fa-envelope"></i> Send Enquiry</a>
                    </div>
                `;
                resultContainer.appendChild(errorMessage);
            }
        }

        // Update step indicators to show completion
        stepIndicators.forEach(indicator => {
            indicator.classList.remove('active');
            if (parseInt(indicator.getAttribute('data-step')) === maxSteps) {
                indicator.classList.add('active');
            }
        });
    }

    function findAppropriateResultBox() {
        console.debug('Finding result box for selections:', userSelections);

        // Helper function to build valid selector parts
        function buildValidSelector(...parts) {
            return parts
                .filter(part => part && part.trim() !== '') // Remove empty or undefined parts
                .join('.');
        }

        // Build selector based on selections
        let selector;
        if (userSelections.service === 'heatpump') {
            // Only include parts that have values
            const selectorParts = [
                'result-box',
                userSelections.property,
                userSelections.service,
                userSelections.timing,
                userSelections.heatpumpType
            ];
            selector = '.' + buildValidSelector(...selectorParts);
            console.debug('Heat pump selector:', selector);
        } else {
            const selectorParts = [
                'result-box',
                userSelections.property,
                userSelections.service,
                userSelections.timing
            ];
            selector = '.' + buildValidSelector(...selectorParts);
            console.debug('Standard selector:', selector);
        }

        // Try exact match first
        let resultBox = document.querySelector(selector);
        console.debug('Exact match found:', !!resultBox);
        
        if (!resultBox) {
            console.debug('No exact match found, trying fallbacks');
            // Try fallback options in order of specificity
            const fallbackSelectors = [];

            if (userSelections.service === 'heatpump' && userSelections.heatpumpType) {
                // Heat pump specific fallbacks
                fallbackSelectors.push(
                    // Try without timing
                    '.' + buildValidSelector('result-box', userSelections.property, userSelections.service, userSelections.heatpumpType),
                    // Try with planned timing
                    '.' + buildValidSelector('result-box', userSelections.property, userSelections.service, 'planned', userSelections.heatpumpType),
                    // Try residential with same specifics
                    '.' + buildValidSelector('result-box', 'residential', userSelections.service, userSelections.timing, userSelections.heatpumpType),
                    // Try residential with planned timing
                    '.' + buildValidSelector('result-box', 'residential', userSelections.service, 'planned', userSelections.heatpumpType),
                    // Try just the service type and heat pump type
                    '.' + buildValidSelector('result-box', 'residential', userSelections.service, userSelections.heatpumpType),
                    // Most generic heat pump fallback
                    '.result-box.residential.heatpump.planned.' + userSelections.heatpumpType,
                    '.result-box.residential.heatpump.planned.new-install'
                );
            } else {
                // Standard service fallbacks
                if (userSelections.service) {
                    fallbackSelectors.push(
                        // Try without timing
                        '.' + buildValidSelector('result-box', userSelections.property, userSelections.service),
                        // Try residential with same specifics
                        '.' + buildValidSelector('result-box', 'residential', userSelections.service, userSelections.timing),
                        // Try residential with service only
                        '.' + buildValidSelector('result-box', 'residential', userSelections.service),
                        // Final fallback
                        '.result-box.residential.electrical.planned'
                    );
                }
            }

            // Filter out any invalid or duplicate selectors
            const validSelectors = [...new Set(fallbackSelectors.filter(selector => {
                try {
                    document.querySelector(selector);
                    return true;
                } catch (e) {
                    console.debug('Invalid selector:', selector);
                    return false;
                }
            }))];

            console.debug('Trying fallback selectors:', validSelectors);

            // Try each fallback selector in order
            for (const fallbackSelector of validSelectors) {
                try {
                    resultBox = document.querySelector(fallbackSelector);
                    if (resultBox) {
                        console.debug('Found fallback result using selector:', fallbackSelector);
                        break;
                    }
                } catch (e) {
                    console.debug('Error with selector:', fallbackSelector, e);
                }
            }
        }

        // If still no result box found, try to find any result box
        if (!resultBox) {
            console.debug('No specific result box found, trying to find any result box');
            resultBox = document.querySelector('.result-box');
        }

        if (!resultBox) {
            console.error('No result box found at all');
        }

        return resultBox;
    }

    function hideAllSteps() {
        document.querySelectorAll('.finder-step').forEach(step => {
            step.classList.remove('active');
        });
    }

    function resetServiceFinder() {
        userSelections = {
            property: '',
            service: '',
            timing: '',
            heatpumpType: ''
        };
        
        currentStep = 1;
        
        document.querySelectorAll('.result-box').forEach(box => {
            box.style.display = 'none';
        });
        
        hideAllSteps();
        
        const step1 = document.getElementById('step1');
        if (step1) {
            step1.classList.add('active');
        }
        
        document.querySelectorAll('.option-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        const finderNav = document.querySelector('.finder-nav');
        if (finderNav) {
            finderNav.style.display = 'flex';
        }
        
        if (prevBtn && nextBtn) {
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
        }
        
        updateStepIndicators();
        console.debug('Service finder reset');
    }
}