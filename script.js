// Smooth scroll for navigation links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Welcome message
console.log("Welcome to Divyansh's Portfolio!");

// Optional: Scroll-to-top button (can be added in HTML if needed)
