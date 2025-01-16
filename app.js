// Add this to your existing script.js

// Theme Switcher
const themeSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeSwitch.checked = true;
    }
}

themeSwitch.addEventListener('change', switchTheme);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Add smooth wave animation
const wave = document.querySelector('.wave-decoration');
if (wave) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        wave.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`;
    });
}

// Enhanced hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        card.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            scale3d(1.02, 1.02, 1.02)
        `;

        card.style.background = `
            linear-gradient(
                ${Math.atan2(y - centerY, x - centerX) * (180 / Math.PI)}deg,
                var(--card-bg) 0%,
                var(--primary-color) 200%
            )
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        card.style.background = 'var(--card-bg)';
    });
});

// Add smooth parallax effect to hero section
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroIllustration = document.querySelector('.hero-illustration');
    const scrolled = window.pageYOffset;

    if (heroContent && heroIllustration) {
        heroContent.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
        heroIllustration.style.transform = `translate3d(0, ${scrolled * 0.2}px, 0)`;
    }
});