// Toggle Button
const toggleBtn = document.querySelector('.toggle');
const html = document.querySelector('html');

// Clock Hands
const hourHand = document.querySelector('.hour');
const minHand = document.querySelector('.minute');
const secHand = document.querySelector('.second');

// Date and Time Display
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

// Day and Month Arrays
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Event Listener to toggle view mode
toggleBtn.addEventListener('click', () => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    toggleBtn.innerHTML = ('Dark Mode');
  } else {
    html.classList.add('dark');
    toggleBtn.innerHTML = ('Light Mode');
  }
})

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const mins = time.getMinutes();
  const secs = time.getSeconds();
  const meridian = hours >= 12 ? 'PM' : 'AM';

  // Mapping function
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  // Mapping elements to time data
  hourHand.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`

  minHand.style.transform = `translate(-50%, -100%) rotate(${scale(mins, 0, 59, 0, 360)}deg)`

  secHand.style.transform = `translate(-50%, -100%) rotate(${scale(secs, 0, 59, 0, 360)}deg)`

  timeEl.innerText = `${hoursForClock}:${mins < 10 ? `0${mins}` : mins} ${meridian}`

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

setTime();

setInterval(setTime, 1000);