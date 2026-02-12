// nav-bar toggle

document.querySelector(".menu-toggle").onclick = () => {
    document.querySelector(".navbar").classList.toggle("open");
};



// Select the Home section wrapper home section
const homeSection = document.querySelector('.reveal-section');

// Intersection Observer for scroll
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      // Add class to trigger animations
      entry.target.classList.add('active');

      // Optional: stop observing after animation triggers once
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 }); // trigger when 30% visible

observer.observe(homeSection);


// ----------- Simple Scroll Animation about page-----------
const scrollElements = document.querySelectorAll('.abt-h2, .abt-p, .edu, .edu-80, .edu-btn-modern');

function elementInView(el, offset = 0) {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
}

function displayScrollElement(el) {
  el.classList.add('animate');
}

function handleScrollAnimation() {
  scrollElements.forEach(el => {
    if(elementInView(el, 100)) {
      displayScrollElement(el);
    }
  })
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation); // trigger for visible content on load


// internships sections

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-animation");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".animation").forEach(el => observer1.observe(el));

// projects

 function revealProjects() {
    const cards = document.querySelectorAll('.pro-1');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < windowHeight - 100) {
        card.classList.add("show");
      }
    });
  }

  // trigger on scroll
  window.addEventListener("scroll", revealProjects);

  // trigger once when page loads
  revealProjects();
