/**
 * Kings Electrical - Mobile Form Validation
 * Provides enhanced form validation for mobile devices
 */

document.addEventListener('DOMContentLoaded', function() {
    // Find all forms on the page
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Skip forms with novalidate attribute
        if (form.hasAttribute('novalidate')) {
            return;
        }
        
        // Add custom validation
        form.addEventListener('submit', function(event) {
            let isValid = true;
            
            // Get all form inputs that require validation
            const inputs = form.querySelectorAll('input:not([type="submit"]):not([type="button"]):not([type="hidden"]), select, textarea');
            
            // Remove existing error messages
            const existingErrors = form.querySelectorAll('.error-message');
            existingErrors.forEach(error => error.remove());
            
            // Check each input
            inputs.forEach(input => {
                // Remove existing error styles
                input.classList.remove('input-error');
                
                // Check if the input is required and empty
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    addErrorMessage(input, 'This field is required');
                }
                
                // Email validation
                if (input.type === 'email' && input.value.trim()) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(input.value)) {
                        isValid = false;
                        addErrorMessage(input, 'Please enter a valid email address');
                    }
                }
                
                // Phone validation
                if (input.type === 'tel' && input.value.trim()) {
                    const phonePattern = /^[\d\s\+\-\(\)]{7,20}$/;
                    if (!phonePattern.test(input.value)) {
                        isValid = false;
                        addErrorMessage(input, 'Please enter a valid phone number');
                    }
                }
                
                // URL validation
                if (input.type === 'url' && input.value.trim()) {
                    try {
                        new URL(input.value);
                    } catch (e) {
                        isValid = false;
                        addErrorMessage(input, 'Please enter a valid URL');
                    }
                }
                
                // Number validation
                if (input.type === 'number' && input.value.trim()) {
                    const min = input.hasAttribute('min') ? parseFloat(input.getAttribute('min')) : null;
                    const max = input.hasAttribute('max') ? parseFloat(input.getAttribute('max')) : null;
                    const value = parseFloat(input.value);
                    
                    if (isNaN(value)) {
                        isValid = false;
                        addErrorMessage(input, 'Please enter a valid number');
                    } else if (min !== null && value < min) {
                        isValid = false;
                        addErrorMessage(input, `Value must be at least ${min}`);
                    } else if (max !== null && value > max) {
                        isValid = false;
                        addErrorMessage(input, `Value must be at most ${max}`);
                    }
                }
                
                // Pattern validation
                if (input.hasAttribute('pattern') && input.value.trim()) {
                    const pattern = new RegExp(input.getAttribute('pattern'));
                    if (!pattern.test(input.value)) {
                        isValid = false;
                        addErrorMessage(input, input.getAttribute('data-error') || 'Please match the requested format');
                    }
                }
                
                // Minlength validation
                if (input.hasAttribute('minlength') && input.value.trim()) {
                    const minLength = parseInt(input.getAttribute('minlength'));
                    if (input.value.length < minLength) {
                        isValid = false;
                        addErrorMessage(input, `Please enter at least ${minLength} characters`);
                    }
                }
                
                // Maxlength validation (should be handled by the browser, but just in case)
                if (input.hasAttribute('maxlength') && input.value.trim()) {
                    const maxLength = parseInt(input.getAttribute('maxlength'));
                    if (input.value.length > maxLength) {
                        isValid = false;
                        addErrorMessage(input, `Please enter no more than ${maxLength} characters`);
                    }
                }
                
                // Custom validation for file inputs
                if (input.type === 'file' && input.hasAttribute('required')) {
                    if (!input.files || input.files.length === 0) {
                        isValid = false;
                        addErrorMessage(input, 'Please select a file');
                    } else if (input.hasAttribute('accept')) {
                        const acceptedTypes = input.getAttribute('accept').split(',');
                        const file = input.files[0];
                        const fileType = file.type;
                        const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
                        
                        let isAccepted = false;
                        for (let type of acceptedTypes) {
                            type = type.trim();
                            if (type === fileType || type === fileExtension || type === '.' + fileType.split('/').pop()) {
                                isAccepted = true;
                                break;
                            } else if (type.includes('*')) {
                                const typePrefix = type.split('*')[0];
                                if (fileType.startsWith(typePrefix)) {
                                    isAccepted = true;
                                    break;
                                }
                            }
                        }
                        
                        if (!isAccepted) {
                            isValid = false;
                            addErrorMessage(input, 'Please select a file of the correct type');
                        }
                    }
                }
            });
            
            // If the form is invalid, prevent submission
            if (!isValid) {
                event.preventDefault();
                
                // Scroll to the first error
                const firstError = form.querySelector('.input-error');
                if (firstError) {
                    firstError.focus();
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                
                // Vibrate on mobile devices for error feedback
                if ('vibrate' in navigator) {
                    navigator.vibrate(200);
                }
            }
        });
        
        // Live validation for better UX
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateInput(input);
            });
            
            // For select elements, also validate on change
            if (input.tagName === 'SELECT') {
                input.addEventListener('change', function() {
                    validateInput(input);
                });
            }
        });
    });
    
    // Helper function to add error message
    function addErrorMessage(input, message) {
        input.classList.add('input-error');
        
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        
        // Insert after the input
        if (input.nextElementSibling) {
            input.parentNode.insertBefore(errorMessage, input.nextElementSibling);
        } else {
            input.parentNode.appendChild(errorMessage);
        }
    }
    
    // Helper function to validate a single input
    function validateInput(input) {
        // Remove existing error message
        const existingError = input.nextElementSibling;
        if (existingError && existingError.classList.contains('error-message')) {
            existingError.remove();
        }
        
        input.classList.remove('input-error');
        
        // Required validation
        if (input.hasAttribute('required') && !input.value.trim()) {
            addErrorMessage(input, 'This field is required');
            return false;
        }
        
        // Skip other validations if the field is empty and not required
        if (!input.value.trim()) {
            return true;
        }
        
        // Email validation
        if (input.type === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value)) {
                addErrorMessage(input, 'Please enter a valid email address');
                return false;
            }
        }
        
        // Phone validation
        if (input.type === 'tel') {
            const phonePattern = /^[\d\s\+\-\(\)]{7,20}$/;
            if (!phonePattern.test(input.value)) {
                addErrorMessage(input, 'Please enter a valid phone number');
                return false;
            }
        }
        
        // Other validations can be added as needed
        
        return true;
    }
    
    // Add custom styles for error messages
    const style = document.createElement('style');
    style.textContent = `
        .input-error {
            border-color: #ff3b30 !important;
            background-color: rgba(255, 59, 48, 0.05) !important;
        }
        
        .error-message {
            color: #ff3b30;
            font-size: 0.85rem;
            margin-top: 5px;
            margin-bottom: 10px;
        }
        
        @media (max-width: 768px) {
            .error-message {
                font-size: 0.8rem;
            }
        }
    `;
    document.head.appendChild(style);
}); 