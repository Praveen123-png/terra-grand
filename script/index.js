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
