AOS.init();

// for mobile screen navbar
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// for the counting animation
document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  const counter2 = document.getElementById("counter2");
  const counter3 = document.getElementById("counter3");
  const counter4 = document.getElementById("counter4");

  let started = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          animateCounter();
          animateCounter2();
          animateCounter3();
          animateCounter4();
        }
      });
    },
    { threshold: 0.5 }
  );

  function animateCounter() {
    let startValue = 0;
    let endValue = 500;
    let duration = 2000;
    let stepTime = Math.floor(duration / endValue);

    let count = setInterval(() => {
      startValue++;
      counter.textContent = startValue;
      if (startValue === endValue) {
        clearInterval(count);
      }
    }, stepTime);
  }

  function animateCounter2() {
    let startValue = 0;
    let endValue = 20;
    let duration = 2000;
    let stepTime = Math.floor(duration / endValue);

    let count = setInterval(() => {
      startValue++;
      counter2.textContent = startValue;
      if (startValue === endValue) {
        clearInterval(count);
      }
    }, stepTime);
  }

  function animateCounter3() {
    let startValue = 0;
    let endValue = 100;
    let duration = 2000;
    let stepTime = Math.floor(duration / endValue);

    let count = setInterval(() => {
      startValue++;
      counter3.textContent = startValue;
      if (startValue === endValue) {
        clearInterval(count);
      }
    }, stepTime);
  }

  function animateCounter4() {
    let startValue = 0;
    let endValue = 50;
    let duration = 2000;
    let stepTime = Math.floor(duration / endValue);

    let count = setInterval(() => {
      startValue++;
      counter4.textContent = startValue;
      if (startValue === endValue) {
        clearInterval(count);
      }
    }, stepTime);
  }

  observer.observe(counter);
  observer.observe(counter2);
  observer.observe(counter3);
  observer.observe(counter4);
});

// slider controls
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#cards"); // change selector if needed
  const prev = document.querySelector(".slider-prev");
  const next = document.querySelector(".slider-next");

  if (!container || !prev || !next) return;

  const scrollAmount = container.clientWidth * 0.6;

  prev.addEventListener("click", () => {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  // Optional: disable arrows at ends
  const updateButtons = () => {
    prev.disabled = container.scrollLeft <= 0;
    next.disabled =
      Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth;
  };
  container.addEventListener("scroll", updateButtons);
  window.addEventListener("resize", updateButtons);
  updateButtons();
});

// hero slider
let slideIndex = 1;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach((slide) => (slide.style.opacity = "0"));
  dots.forEach((dot) => (dot.style.opacity = "0.5"));

  slides[slideIndex - 1].style.opacity = "1";
  dots[slideIndex - 1].style.opacity = "1";
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function currentSlideIndex(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

let startX = 0;
let endX = 0;
let startY = 0;
let endY = 0;
const sliderContainer = document.querySelector(".relative.h-screen");

sliderContainer.addEventListener("touchstart", function (e) {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

sliderContainer.addEventListener(
  "touchmove",
  function (e) {
    // Prevent default scrolling while swiping
    e.preventDefault();
  },
  { passive: false }
);

sliderContainer.addEventListener("touchend", function (e) {
  endX = e.changedTouches[0].clientX;
  endY = e.changedTouches[0].clientY;

  // Calculate the difference
  const diffX = startX - endX;
  const diffY = startY - endY;

  // Only trigger if horizontal swipe is greater than vertical (prevent interfering with scroll)
  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
    if (diffX > 0) {
      // Swipe left - next slide
      nextSlide();
    } else {
      // Swipe right - previous slide
      prevSlide();
    }
  }
});

setInterval(nextSlide, 5000);
