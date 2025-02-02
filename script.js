// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

// Toggle mobile menu
mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking nav items
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Close menu on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
  }
});

// Typing text animation script
var typed = new Typed(".typing", {
    strings: [
        "Software Engineer",
        "Web Developer",
        "Quality Assurance Engineer",
        "Frontend Developer",
        "Web3.0 Enthusiast",
        "Tech Educator"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    smartBackspace: true
});
// Typing text animation script
var typed = new Typed(".typing-2", {
    strings: [
        "Software Engineer",
        "Web Developer",
        "Quality Assurance Engineer",
        "Frontend Developer",
        "Web3.0 Enthusiast",
        "Tech Educator"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    smartBackspace: true
});