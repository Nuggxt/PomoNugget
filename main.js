//  Get the timer working on start click for Pomodoro section.
//  Get the short and long break to swtich times Short(5 min) long (15 min)
//  Get the short and long timers working.



// Timer input elements \\
let startBtn = document.querySelector('#start-btn');
let pauseBtn = document.querySelector('#pause-btn');
let pomodoro = '25:00';
let shortButton = '5:00';
let longButton = '15:00';


// Functions for the 3 different timers.
function pomoBtn() {
  document.getElementById('timer').innerHTML = pomodoro;
};

function shortBtn() {
  document.getElementById('timer').innerHTML = shortButton;
};

function longBtn() {
  document.getElementById('timer').innerHTML = longButton;
};

