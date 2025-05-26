document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Observe elements to be animated
  const animatedElements = document.querySelectorAll(
    ".product-card, .blog-post, .contact-form, .contact-info"
  );
  animatedElements.forEach((el) => observer.observe(el));

  // Add a class to elements for animation that will be triggered by CSS
  animatedElements.forEach((el) => (el.style.opacity = 0));
});

// Add this to your CSS for the observer animation
/*
.visible {
    animation: fadeIn 1s forwards;
}
*/
