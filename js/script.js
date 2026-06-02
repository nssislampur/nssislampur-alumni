// ============================================
// NSS Alumni Website - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips or other global functionality
    initializeApp();
});

function initializeApp() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation link highlighting
    highlightActiveNavLink();
}

function highlightActiveNavLink() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(link => {
        const href = link.getAttribute('href');
        if (currentLocation.includes(href) || 
            (currentLocation === '/' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Utility function to format phone numbers
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{2})(\d{5})(\d{5})/, '$1 $2 $3');
}

// Utility function to validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Utility function to load JSON data
async function loadJSONFile(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error loading ${path}:`, error);
        return null;
    }
}

// Add animation to elements when they come into view
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.feature-card, .stat-card, .alumni-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize element observation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
} else {
    observeElements();
}

// Log initialization
console.log('NSS Alumni Website initialized successfully');