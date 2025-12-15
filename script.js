const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
// Simple fade-in animation on load
window.addEventListener("load", () => {
  document.querySelector(".hero-content").style.opacity = "1";
  document.querySelector(".hero-content").style.transform = "translateY(0)";
});

// About section animation on scroll
const aboutCards = document.querySelectorAll(".about-card");

window.addEventListener("scroll", () => {
  const triggerPoint = window.innerHeight - 100;

  aboutCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerPoint) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Skill progress animation on scroll
const progressBars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight - 100;

  progressBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;

    if (barTop < triggerBottom) {
      const skillValue = bar.getAttribute("data-skill");
      bar.style.width = skillValue + "%";
    }
  });
});

// Project cards animation on scroll
const projectCards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight - 100;

  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < trigger) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Contact form validation
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMsg.style.color = "red";
    formMsg.textContent = "Please fill all fields";
    return;
  }

  formMsg.style.color = "#d2a679";
  formMsg.textContent = "Message sent successfully!";

  form.reset();
});

// Dynamic year update (optional)
const footerText = document.querySelector(".footer p");
const currentYear = new Date().getFullYear();
footerText.innerHTML = `© ${currentYear} Divyansh Singh | Java & Spring Boot Developer`;
