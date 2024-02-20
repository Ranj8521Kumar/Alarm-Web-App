const userInput = document.getElementById("input-value");

let newYear;
let interval;

function getValue() {
  newYear = new Date(userInput.value);
  document.getElementsByClassName(
    "container"
  )[0].innerHTML = `<div class="countdown-el days-container">
    <p class="big-text" id="days">0</p>
    <span>days</span>
  </div>

  <div class="countdown-el hours-container">
    <p class="big-text" id="hours">0</p>
    <span>Hours</span>
  </div>

  <div class="countdown-el minutes-container">
    <p class="big-text" id="minutes">0</p>
    <span>Minutes</span>
  </div>

  <div class="countdown-el seconds-container">
    <p class="big-text" id="seconds">0</p>
    <span>Seconds</span>
  </div>`;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function countDown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);


  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    
    var audio = document.getElementsByClassName('alarm')[0];
    audio.src="twirling-intime-lenovo-k8-note-alarm-tone-41440.mp3";
    audio.setAttribute('autoplay',"");
    audio.setAttribute('loop',"");
    setTimeout(function(){
      audio.pause();
      audio.removeAttribute('autoplay');
      audio.removeAttribute('loop');
    },60000);
    document.getElementsByClassName('stop-container')[0].innerHTML=`<button class="stop-alarm" onClick="stop()">Stop</button>`
    clearInterval(interval);
  }
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  countDown();
  interval =setInterval(countDown, 1000);
}

function stop(){
  var audio = document.getElementsByClassName('alarm')[0];
    audio.pause();
    audio.removeAttribute('autoplay');
}


