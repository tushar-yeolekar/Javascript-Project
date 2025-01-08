const daysEl  = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl   = document.getElementById('min');
const secEl   = document.getElementById('sec');


const newYears = '1 Feb 2025';

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const totalsec = (newYearDate - currentDate) / 1000 ;
    const days = Math.floor(totalsec / 3600 / 24) ;
    const hours = Math.floor(totalsec / 3600 ) % 24;
    const min = Math.floor(totalsec / 60 ) % 60 ;
    const sec = Math.floor(totalsec % 60);
    console.log(days, hours, min, sec);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minEl.innerHTML = min;
  secEl.innerHTML = sec;
    
}

// initial call

countdown()

setInterval(countdown, 1000)