const startClock = document.querySelector('#start-clock');
const pauseClock = document.querySelector('#pause-clock');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

let count = 0;
let interval;

const pomoBtn = () => {
  count = 1500;
  updateTime();
};

const shortBtn = () => {
  count = 300;
  updateTime();
};

const longBtn = () => {
  count = 900;
  updateTime();
};

const updateTime = () => {
  let min = Math.floor(count / 60);
  let sec = count % 60;
  if (sec < 10) {
    seconds.innerHTML = `0${sec}`;
  } else {
    seconds.innerHTML = sec;
  }
  minutes.innerHTML = min;
};

const startTimer = () => {
  interval = setInterval(() => {
    count--;
    updateTime();
    if (count === 0) {
      clearInterval(interval);
    }
  }, 1000);
};

const pauseTimer = () => {
  clearInterval(interval);
};

startClock.addEventListener('click', startTimer);
pauseClock.addEventListener('click', pauseTimer);