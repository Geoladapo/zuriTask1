const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const today = new Date();
const currentDay = daysOfWeek[today.getDay()];
document.getElementById('dayOfWeek').textContent = currentDay;

function updateElapsedTime() {
  const elapsedTimeElement = document.getElementById('utcTime');

  const currentTime = new Date();

  elapsedTimeElement.textContent = currentTime.toLocaleString();
}

updateElapsedTime();
setInterval(updateElapsedTime, 1000);
