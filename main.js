const span = document.querySelector("#time")
const record = document.querySelector("#record")
const circle = document.querySelector(".circle")
const button = document.querySelector("button")

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ms = 0
let sec = 0
let min = 0
function showTime() {
    if (ms >= 100) {
        ms = 0
        sec += 1
    }
    if (sec >= 60) {
        sec = 0
        min += 1
    }
    span.innerHTML = `${min}:${sec}:${ms}`
}

let timer = null
function start() {
    const time = getRandom(4000, 8000)
    setTimeout(() => {
        circle.style.backgroundColor = "green"
        timer = setInterval(() => {
            ms += 1
            showTime()
        }, 10)
    }, time);
}

let recordValue = null
circle.addEventListener("click", () => {
    if (timer) {
        circle.style.backgroundColor = "yellow"
        clearInterval(timer)
        timer = null

        if (!recordValue || recordValue > ms + sec * 1000 + min * 60000) {
            recordValue = ms + sec * 1000 + min * 60000
            record.innerHTML = `${min}:${sec}:${ms}`
        }
    }
})

button.addEventListener("click", () => {
    ms = 0
    sec = 0
    min = 0
    showTime()
    circle.style.backgroundColor = "red"
    start()
})

start()