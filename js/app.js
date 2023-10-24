const headingElement = document.querySelector('#time-left')
const sliderElement = document.querySelector('#slider')

let timeLeft = 5
const range = 100/15
console.log(range)
headingElement.innerText = timeLeft

const time = setInterval(() => {

    if (timeLeft > 0) {
        timeLeft--
        let remain = 100 - range
        headingElement.textContent = timeLeft
        sliderElement.value = remain
    }

     else if (timeLeft = 0) {
        clearInterval(time)
        headingElement.textContent = 'Congrats!'
    }

}, 1000)
