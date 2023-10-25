const headingElement = document.querySelector('#time-left')
const sliderElement = document.querySelector('.fill')

let timeLeft = 5
let startCount = timeLeft


headingElement.innerText = timeLeft

const time = setInterval(() => {

        timeLeft--
        // value = value - step
        headingElement.textContent = timeLeft
        sliderElement.style.width = (timeLeft/startCount) * 100 + '%'

     if (timeLeft === 0) {
        clearInterval(time)
        headingElement.textContent = 'Congrats !'
        headingElement.style.color = 'white'
    }

}, 1000)
