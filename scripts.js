document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Example: Animate on Scroll when elements become visible
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeIn'); // Add fadeIn animation class when element is in view
    } else {
      entry.target.classList.remove('animate__fadeIn'); // Remove fadeIn animation class when element is out of view
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of element is visible
});

document.querySelectorAll('.animate__animated').forEach(element => {
  observer.observe(element);
});

// Example: Adding more advanced animations on button hover
document.querySelectorAll('.cta-button, .project-link, button').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.classList.add('animate__pulse');
  });
  button.addEventListener('mouseout', () => {
    button.classList.remove('animate__pulse');
  });
});
