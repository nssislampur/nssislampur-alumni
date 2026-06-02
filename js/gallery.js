document.addEventListener('DOMContentLoaded', function() {
    setupGalleryFilters();
    setupPhotoUpload();
    setupImageModals();
});

function setupGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterGallery(filter);
        });
    });
}

function filterGallery(filter) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        if (filter === 'all') {
            item.style.display = 'block';
        } else {
            const itemCategory = item.getAttribute('data-category');
            item.style.display = (itemCategory === filter) ? 'block' : 'none';
        }
    });
}

function setupImageModals() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');
    
    if (!modal || !modalImg) return;
    
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
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

function setupPhotoUpload() {
    const uploadInput = document.getElementById('photo-upload');
    const uploadLabel = document.querySelector('.upload-label');
    
    if (!uploadInput || !uploadLabel) return;
    
    uploadLabel.addEventListener('click', function() {
        uploadInput.click();
    });
    
    uploadInput.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        handlePhotoUpload(files);
    });
}

function handlePhotoUpload(files) {
    const validFiles = files.filter(file => {
        const isImage = file.type.startsWith('image/');
        const isUnder5MB = file.size <= 5 * 1024 * 1024;
        return isImage && isUnder5MB;
    });
    
    if (validFiles.length === 0) {
        alert('Please select valid image files (under 5MB)');
        return;
    }
    
    validFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            addPhotoToGallery(e.target.result, file.name);
        };
        reader.readAsDataURL(file);
    });
    
    alert(`Successfully uploaded ${validFiles.length} photo(s)!`);
    document.getElementById('photo-upload').value = '';
}

function addPhotoToGallery(imageData, fileName) {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    
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
}

console.log('Gallery loaded');
