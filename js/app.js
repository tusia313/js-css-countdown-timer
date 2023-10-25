const headingElement = document.querySelector('#time-left')
const sliderElement = document.querySelector('#slider')

let timeLeft = 5
let value = 100

headingElement.innerText = timeLeft

const time = setInterval(() => {

        timeLeft--
        value = value - 20
        headingElement.textContent = timeLeft
        sliderElement.value = value

     if (timeLeft === 0) {
        clearInterval(time)
        headingElement.textContent = 'Congrats!'
    }

}, 1000)
