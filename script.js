// Background color control
const backgroundFade = document.querySelector('.background-fade');
const colorInputs = {
    red: document.getElementById('red'),
    green: document.getElementById('green'),
    blue: document.getElementById('blue'),
    alpha: document.getElementById('alpha')
};

function updateBackgroundColor() {
    const rgba = `rgba(${colorInputs.red.value}, ${colorInputs.green.value}, ${colorInputs.blue.value}, ${colorInputs.alpha.value / 100})`;
    backgroundFade.style.backgroundColor = rgba;
}

// Add event listeners for all color inputs
Object.values(colorInputs).forEach(input => {
    input.addEventListener('input', updateBackgroundColor);
});

// Interactive button click counter
const button = document.querySelector('.interactive-button');
const clickCounter = document.getElementById('clickCounter');
let clicks = 0;

button.addEventListener('click', () => {
    clicks++;
    clickCounter.textContent = `Clicks: ${clicks}`;
    
    // Random RGBA color on click
    const randomRGBA = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`;
    button.style.backgroundColor = randomRGBA;
});

// Rotating icon controls
const icon = document.querySelector('.rotating-icon');
const toggleButton = document.getElementById('toggleRotation');
const speedButton = document.getElementById('changeSpeed');
let isRotating = true;
let currentSpeed = 2; // seconds per rotation

toggleButton.addEventListener('click', () => {
    isRotating = !isRotating;
    icon.classList.toggle('paused');
    toggleButton.textContent = isRotating ? 'Pause Rotation' : 'Resume Rotation';
});

speedButton.addEventListener('click', () => {
    const speeds = [2, 1, 0.5, 0.25]; // rotation speeds in seconds
    currentSpeed = speeds[(speeds.indexOf(currentSpeed) + 1) % speeds.length];
    icon.style.animation = `rotate ${currentSpeed}s linear infinite`;
});

// Navigation link effects
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const randomAlpha = Math.random() * 0.5 + 0.5; // between 0.5 and 1
        link.style.color = `rgba(41, 128, 185, ${randomAlpha})`;
    });

    link.addEventListener('mouseleave', () => {
        link.style.color = ''; // Reset to CSS default
    });
});

// Navigation and content section handling
const sections = document.querySelectorAll('.content-section');

function switchSection(sectionId) {
    // Hide all sections and remove active class from nav links
    sections.forEach(section => section.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));

    // Show selected section and set nav link as active
    const targetSection = document.getElementById(sectionId);
    const targetLink = document.querySelector(`[data-section="${sectionId}"]`);
    
    targetSection.classList.add('active');
    targetLink.classList.add('active');

    // Add random background color to the section
    const randomRGBA = `rgba(${Math.random() * 20 + 235}, ${Math.random() * 20 + 235}, ${Math.random() * 20 + 235}, 0.95)`;
    targetSection.style.background = randomRGBA;
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        switchSection(sectionId);
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        
        setTimeout(() => {
            alert('Message sent successfully! (Demo purposes only)');
            contactForm.reset();
            submitBtn.textContent = originalText;
        }, 1500);
    });
}

// Add hover effects to cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('i');
        const randomRGBA = `rgba(${Math.random() * 155 + 100}, ${Math.random() * 155 + 100}, ${Math.random() * 155 + 100}, 0.8)`;
        icon.style.color = randomRGBA;
    });

    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('i');
        icon.style.color = 'rgba(41, 128, 185, 0.8)';
    });
});

// Initialize button text
toggleButton.textContent = 'Pause Rotation';

// Initialize the home section
switchSection('home');
