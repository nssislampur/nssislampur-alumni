// ============================================
// Photo Gallery - JavaScript
// ============================================

let galleryPhotos = [];

document.addEventListener('DOMContentLoaded', function() {
    setupGalleryFilters();
    setupPhotoUpload();
    setupImageModals();
});

function setupGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterGallery(filter);
        });
    });
}

function filterGallery(filter) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let visibleCount = 0;
    
    galleryItems.forEach(item => {
        if (filter === 'all') {
            item.style.display = 'block';
            visibleCount++;
        } else {
            const itemCategory = item.getAttribute('data-category');
            if (itemCategory === filter) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        }
    });
}

function setupImageModals() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');
    
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        if (img && !item.querySelector('.gallery-placeholder')) {
            item.addEventListener('click', function() {
                modal.style.display = 'flex';
                modalImg.src = img.src;
                document.body.style.overflow = 'hidden';
            });
        }
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

function setupPhotoUpload() {
    const uploadInput = document.getElementById('photo-upload');
    const uploadLabel = document.querySelector('.upload-label');
    const uploadMessage = document.getElementById('upload-message');
    
    if (uploadInput) {
        // Click to upload
        uploadLabel.addEventListener('click', function() {
            uploadInput.click();
        });
        
        // Handle file selection
        uploadInput.addEventListener('change', function(e) {
            const files = Array.from(e.target.files);
            handlePhotoUpload(files, uploadMessage);
        });
        
        // Drag and drop
        uploadLabel.addEventListener('dragover', function(e) {
            e.preventDefault();
            uploadLabel.style.backgroundColor = '#f0f7ff';
            uploadLabel.style.borderColor = '#3498db';
        });
        
        uploadLabel.addEventListener('dragleave', function(e) {
            e.preventDefault();
            uploadLabel.style.backgroundColor = '';
            uploadLabel.style.borderColor = '';
        });
        
        uploadLabel.addEventListener('drop', function(e) {
            e.preventDefault();
            uploadLabel.style.backgroundColor = '';
            uploadLabel.style.borderColor = '';
            
            const files = Array.from(e.dataTransfer.files);
            handlePhotoUpload(files, uploadMessage);
        });
    }
}

function handlePhotoUpload(files, messageElement) {
    const validFiles = files.filter(file => {
        const isImage = file.type.startsWith('image/');
        const isUnder5MB = file.size <= 5 * 1024 * 1024;
        return isImage && isUnder5MB;
    });
    
    const invalidFiles = files.filter(file => {
        const isImage = file.type.startsWith('image/');
        const isUnder5MB = file.size <= 5 * 1024 * 1024;
        return !isImage || !isUnder5MB;
    });
    
    if (invalidFiles.length > 0) {
        showMessage(messageElement, 
            `⚠️ ${invalidFiles.length} file(s) were invalid (only images under 5MB allowed)`, 
            'error');
    }
    
    if (validFiles.length === 0) {
        return;
    }
    
    validFiles.forEach(file => {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            addPhotoToGallery(e.target.result, file.name);
        };
        
        reader.readAsDataURL(file);
    });
    
    showMessage(messageElement, 
        `✅ Successfully uploaded ${validFiles.length} photo(s)! They appear at the top of the gallery.`, 
        'success');
    
    // Clear input
    document.getElementById('photo-upload').value = '';
}

function addPhotoToGallery(imageData, fileName) {
    const galleryGrid = document.getElementById('gallery-grid');
    
    // Create a new gallery item
    const newItem = document.createElement('div');
    newItem.className = 'gallery-item';
    newItem.setAttribute('data-category', 'uploads');
    
    const wrapper = document.createElement('div');
    wrapper.className = 'gallery-image-wrapper';
    
    const img = document.createElement('img');
    img.src = imageData;
    img.alt = fileName;
    img.className = 'gallery-img';
    
    const overlay = document.createElement('div');
    overlay.className = 'gallery-overlay';
    overlay.innerHTML = `<p>${fileName}</p>`;
    
    wrapper.appendChild(img);
    wrapper.appendChild(overlay);
    newItem.appendChild(wrapper);
    galleryGrid.insertBefore(newItem, galleryGrid.firstChild);
    
    // Add modal functionality to new image
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');
    
    newItem.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImg.src = imageData;
        document.body.style.overflow = 'hidden';
    });
}

function showMessage(element, text, type) {
    if (!element) return;
    
    element.textContent = text;
    element.className = `upload-message ${type}`;
    element.style.display = 'block';
    
    // Auto-hide success message after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
}

console.log('Gallery loaded');