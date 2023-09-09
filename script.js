const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const today = document.querySelector('.day');
const timeh = document.querySelector('.hour');

const update = () => {
  const date = new Date();
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
    fractionalSecondDigits: 3,
  };
  today.textContent = days[date.getDay()];
  timeh.textContent = date.toLocaleString('en-US', options);
};

update();

setInterval(update, 100);
