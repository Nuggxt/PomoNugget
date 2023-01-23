//  Get the timer working on start click for Pomodoro section.
//  Get the short and long break to swtich times Short(5 min) long (10 min)
//  Get the short and long timers working.



// Timer input elements \\
let startBtn = document.querySelector('#start-btn');
let pauseBtn = document.querySelector('#pause-btn');

const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
};

