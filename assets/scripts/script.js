"use strtict";

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-link");

// add active class on scroll
window.addEventListener("scroll", () => {
  const logoContainer = document.querySelector(".logo-container");
  const bottomNav = document.querySelector(".bottom-nav");
  logoContainer.classList.toggle("scroll-active", window.scrollY > 100);
  bottomNav.classList.toggle("scroll-active", window.scrollY > 100);
});

hamburger.addEventListener("click", () => {
  const overlay = document.querySelector(".overlay");
  const nav = document.querySelector(".nav");
  const closeBtn = document.querySelector(".close-btn");

  // toggle nav and overlay
  overlay.classList.add("active");
  nav.classList.add("active");

  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    nav.classList.remove("active");
  });

  // close nav
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    nav.classList.remove("active");
  });

  // close nav on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      overlay.classList.remove("active");
      nav.classList.remove("active");
    });
  });
});

// add active class to the clicked link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// back to top button
const backToTopBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// CAROUSEL
const carouselImages = document.querySelectorAll(".carousel-images img");
const carouselNextBtn = document.querySelector(".next-button");
const carouselPrevBtn = document.querySelector(".prev-button");

let counter = 0;

// Next button
function nextImageSlide() {
  carouselImages[counter].style.animation = "next1 0.5s forwards";

  counter >= carouselImages.length - 1 ? (counter = 0) : counter++;

  carouselImages[counter].style.animation = "next2 0.5s forwards";
}

carouselNextBtn.addEventListener("click", nextImageSlide);

// Prev Button
function prevImageSlide() {
  carouselImages[counter].style.animation = "prev1 0.5s forwards";

  counter <= 0 ? (counter = carouselImages.length - 1) : counter--;

  carouselImages[counter].style.animation = "prev2 0.5s forwards";
}

carouselPrevBtn.addEventListener("click", prevImageSlide);

// Auto slides
function autoSlides() {
  setSlideTime = setInterval(slide, 2500);
  function slide() {
    nextImageSlide();
  }
}

autoSlides();

// Stop auto slide when mouse is over
const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.addEventListener("mouseover", () => {
  clearInterval(setSlideTime);
});

// Resume auto slide when mouse is out
carouselContainer.addEventListener("mouseout", autoSlides);
