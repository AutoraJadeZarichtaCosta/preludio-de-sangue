// ============================================
// PRELÚDIO DE SANGUE - JAVASCRIPT
// Interactive functionality for the website
// ============================================

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile menu toggle
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.querySelector('.navbar-menu');

if (navbarToggle) {
    navbarToggle.addEventListener('click', function() {
        navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close mobile menu when link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (navbarMenu.style.display === 'flex') {
            navbarMenu.style.display = 'none';
        }
    });
});

// Map point click handlers
const mapPoints = document.querySelectorAll('.map-point');
mapPoints.forEach(point => {
    point.addEventListener('click', function(e) {
        e.preventDefault();
        const location = this.getAttribute('data-location');
        showLocation(location);
    });
});

function showLocation(location) {
    // Hide all location cards
    const locationCards = document.querySelectorAll('.location-card');
    locationCards.forEach(card => {
        card.style.display = 'none';
    });

    // Show selected location
    const selectedLocation = document.getElementById(`location-${location}`);
    if (selectedLocation) {
        selectedLocation.style.display = 'block';
        
        // Scroll to map info
        const mapInfo = document.querySelector('.map-info');
        if (mapInfo) {
            mapInfo.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

// Secret phrase validation
function checkSecretPhrase() {
    const input = document.getElementById('secret-phrase');
    const message = document.getElementById('secret-message');
    const phrase = input.value.toLowerCase().trim();

    // The secret phrase (you can customize this)
    const correctPhrase = 'dois mundos uma herança esquecida';

    if (phrase === correctPhrase) {
        message.textContent = '✨ Parabéns! Você desbloqueou o segredo final. O verdadeiro poder de Aethelgard está em suas mãos. Que sua jornada seja tão épica quanto a de Kate, Nico e Gabriel.';
        message.style.display = 'block';
        message.style.borderColor = '#d4af37';
        message.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
    } else {
        message.textContent = '❌ Frase secreta incorreta. Releia a história com atenção...';
        message.style.display = 'block';
        message.style.borderColor = '#d4af37';
        message.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
    }
}

// Allow Enter key to submit secret phrase
document.getElementById('secret-phrase').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkSecretPhrase();
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe character cards and review cards
document.querySelectorAll('.character-card, .review-card, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Handle map point hover effects
mapPoints.forEach(point => {
    point.addEventListener('mouseenter', function() {
        const title = this.getAttribute('title');
        // You can add a tooltip here if desired
    });
});

// Initialize map with first location on page load
window.addEventListener('load', function() {
    // Show first location by default
    showLocation('evora');
});

// Responsive navbar adjustments
function handleResize() {
    if (window.innerWidth > 768) {
        navbarMenu.style.display = 'flex';
    } else {
        navbarMenu.style.display = 'none';
    }
}

window.addEventListener('resize', handleResize);

// Initialize on page load
window.addEventListener('load', function() {
    handleResize();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

console.log('Prelúdio de Sangue - Website loaded successfully');
