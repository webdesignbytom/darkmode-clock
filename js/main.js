let state = false;

function toggle() {
  console.log('toggle');

  let body = document.getElementById('body');
  let clock = document.getElementById('clock');
  let modeBtn = document.getElementById('btn');
  let center = document.getElementById('center');
  let second = document.getElementById('second');

  if (state) {
    body.style.backgroundColor = '#c1c1c4';
    clock.className = 'clock__container-light';
    modeBtn.innerText = 'Dark mode';
    modeBtn.style.backgroundColor = '#111';
    modeBtn.style.color = '#eee';
    center.style.background = '#363436';
    second.style.background = '#1f221e'

    state = !state;
  } else {
    body.style.backgroundColor = '#1c1f1c';
    clock.className = 'clock__container-dark';
    modeBtn.innerText = 'Light mode';
    modeBtn.style.backgroundColor = '#eee';
    modeBtn.style.color = '#111';
    center.style.background = '#cbc';
    second.style.background = '#e2e1f6'


    state = !state;
  }
}

setInterval(() => {
  date = new Date();
  console.log('date', date);

  hourTime = date.getHours();
  minuteTime = date.getMinutes();
  secondTime = date.getSeconds();
  console.log('hours', hourTime, minuteTime, secondTime);

  hoursRotation = 30 * hourTime + minuteTime / 2;
  minutesRotation = 6 * minuteTime;
  secondsRotation = 6 * secondTime;

    hour.style.transform = `rotate(${hoursRotation}deg)`
    minute.style.transform = `rotate(${minutesRotation}deg)`
    second.style.transform = `rotate(${secondsRotation}deg)`

}, 1000);
