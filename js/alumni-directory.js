// ============================================
// Alumni Directory - JavaScript
// ============================================

let allAlumni = [];

document.addEventListener('DOMContentLoaded', function() {
    loadAlumniData();
    setupEventListeners();
});

async function loadAlumniData() {
    const data = await loadJSONFile('data/alumni.json');
    
    if (data && data.alumni) {
        allAlumni = data.alumni;
        displayAlumni(allAlumni);
        updateAlumniCount();
    }
}

function displayAlumni(alumni) {
    const grid = document.getElementById('alumni-grid');
    const noResults = document.getElementById('no-results');
    
    grid.innerHTML = '';
    
    if (alumni.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    
    alumni.forEach(person => {
        const card = createAlumniCard(person);
        grid.appendChild(card);
    });
}

function createAlumniCard(person) {
    const card = document.createElement('div');
    card.className = 'alumni-card';
    
    card.innerHTML = `
        <div class="alumni-image">${person.avatar}</div>
        <div class="alumni-info">
            <div class="alumni-name">${person.name}</div>
            <div class="alumni-profession">${person.profession}</div>
            <div class="alumni-contact">
                <p><strong>📍</strong> ${person.location}</p>
                <p><strong>📧</strong> ${person.email}</p>
                <p><strong>📱</strong> ${person.phone}</p>
            </div>
            <p style="color: #7f8c8d; font-size: 0.85rem; margin-top: 1rem; font-style: italic;">
                ${person.bio}
            </p>
        </div>
    `;
    
    return card;
}

function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    const filterProfession = document.getElementById('filter-profession');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterAlumni);
    }
    
    if (filterProfession) {
        filterProfession.addEventListener('change', filterAlumni);
    }
}

function filterAlumni() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const professionFilter = document.getElementById('filter-profession').value;
    
    const filtered = allAlumni.filter(person => {
        const matchesSearch = person.name.toLowerCase().includes(searchTerm) ||
                            person.location.toLowerCase().includes(searchTerm) ||
                            person.bio.toLowerCase().includes(searchTerm);
        
        const matchesProfession = professionFilter === '' || person.profession === professionFilter;
        
        return matchesSearch && matchesProfession;
    });
    
    displayAlumni(filtered);
}

function updateAlumniCount() {
    const countElement = document.getElementById('alumni-count');
    if (countElement) {
        countElement.textContent = allAlumni.length;
    }
}

console.log('Alumni Directory loaded');