const sky = document.querySelector('.sky');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

let isDay = true;

function toggleDayNight() {
  if (isDay) {
    sky.style.background = 'linear-gradient(to bottom, #2c3e50, #000000)';
    sun.style.transform = 'translateY(-200px)';
    sun.style.opacity = '0';
    moon.style.transform = 'translateY(0)';
    moon.style.opacity = '1';
  } else {
    sky.style.background = 'linear-gradient(to bottom, #87ceeb, #ffffff)';
    sun.style.transform = 'translateY(0)';
    sun.style.opacity = '1';
    moon.style.transform = 'translateY(-200px)';
    moon.style.opacity = '0';
  }
  isDay = !isDay;
}

setInterval(toggleDayNight, 5000);
