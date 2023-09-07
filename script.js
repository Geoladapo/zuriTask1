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

function updateTime() {
  const utcTimeElement = document.getElementById('utcTime');
  const now = new Date();
  now.setHours(now.getHours() + 1);
  const options = { timeZone: 'UTC', timeStyle: 'medium', hour12: false };
  const utcTimeString = now.toLocaleTimeString('en-US', options);

  utcTimeElement.textContent = utcTimeString;
}
updateTime();
setInterval(updateTime, 1000);
