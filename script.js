document.addEventListener('DOMContentLoaded', () => {
// year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('site-nav');
navToggle.addEventListener('click', () => {
const open = nav.classList.toggle('open');
navToggle.setAttribute('aria-expanded', open);
});

// animate skill bars when visible
const bars = document.querySelectorAll('.skill-bar');
const obs = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (!entry.isIntersecting) return;
const span = entry.target.querySelector('span');
const val = entry.target.getAttribute('data-skill') || 70;
span.style.width = val + '%';
observer.unobserve(entry.target);
});
}, { threshold: 0.35 });
bars.forEach(b => obs.observe(b));

// smooth internal scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
a.addEventListener('click', (e) => {
const href = a.getAttribute('href');
if (href === '#') return;
e.preventDefault();
const el = document.querySelector(href);
if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
});
});
