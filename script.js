// ── Navbar shrink on scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.style.padding = '10px 48px';
        navbar.style.background = 'rgba(13,13,13,0.96)';
    } else {
        navbar.style.padding = '16px 48px';
        navbar.style.background = 'rgba(13,13,13,0.72)';
    }
});

// ── Scroll reveal ──
const revealEls = document.querySelectorAll(
    '.project-card, .cert-card, .badge-card, .about-right, .contact-link, .skill-category'
);
revealEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

revealEls.forEach(el => observer.observe(el));

// ── Skill bar animation on scroll ──
const skillBars = document.querySelectorAll('.skill-fill');
const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            barObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });
skillBars.forEach(bar => barObserver.observe(bar));

// ── Active nav link highlight ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
    });
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.style.color = '#fff';
        } else if (!link.classList.contains('nav-cta')) {
            link.style.color = '';
        }
    });
});

// ── Tech tag swag: random float direction on hover ──
document.querySelectorAll('.tech-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        const r = (Math.random() - 0.5) * 8;
        tag.style.setProperty('--rot', `${r}deg`);
    });
});