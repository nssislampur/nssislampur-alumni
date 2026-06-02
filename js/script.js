document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
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
    highlightActiveNavLink();
}

function highlightActiveNavLink() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(link => {
        const href = link.getAttribute('href');
        if (currentLocation.includes(href) || (currentLocation === '/' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

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

console.log('NSS Alumni Website initialized');
