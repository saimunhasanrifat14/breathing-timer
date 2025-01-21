const start = document.querySelector('.start-btn')
const reset = document.querySelector('.Reset-btn')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

let hou = 0;
let min = 0;
let sec = 0;
let isrunning = false;
let timerId = null;

start.addEventListener('click', () => {
    if (isrunning) {
        clearInterval(timerId)
        timerId = null
        isrunning = false
        start.textContent = "Start"
        start.style.color = "#007900"
        start.style.background = "#002100"
    } else {
        timerId = setInterval(startTime, 1000)
        isrunning = true;
        start.textContent = "Stop"
        start.style.color = "#790000"
        start.style.background = "#210008"
    }
})
reset.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
    isrunning = false;

    hou = 0;
    min = 0;
    sec = 0;
    updateDisplay()
    start.textContent = "Start"
    start.style.color = "#007900"
    start.style.background = "#002100"
})
function startTime() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
        if (min == 60) {
            min = 0;
            hou++;
        }
    }
    updateDisplay()
}
function updateDisplay() {
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;
    let houString = hou < 10 ? `0${hou}` : hou;

    hour.innerHTML = houString;
    minute.innerHTML = minString;
    second.innerHTML = secString;
}
