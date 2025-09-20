// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
}

// Enhanced smooth scrolling - only for valid in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    // Ignore if not a real anchor or target doesn't exist
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// If you have slider/carousel code, make sure it's not being interfered with by unnecessary global event listeners above.
// Place your slider code below or in a separate file for better maintainability.
