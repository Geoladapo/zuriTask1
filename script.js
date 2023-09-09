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

  const currentTime = new Date().getTime();

  const jsCreationTime = new Date('1995-05-23T00:00:00.000Z').getTime();

  const elapsedMilliseconds = currentTime - jsCreationTime;

  elapsedTimeElement.textContent = elapsedMilliseconds.toString();
}
updateElapsedTime();
setInterval(updateElapsedTime, 1000);
