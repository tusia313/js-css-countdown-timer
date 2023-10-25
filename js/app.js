const headingElement = document.querySelector('#time-left')
const sliderElement = document.querySelector('.fill')

let timeLeft = 5
let startCount = timeLeft


headingElement.innerText = timeLeft

const time = setInterval(() => {

    timeLeft--
    // value = value - step
    headingElement.textContent = timeLeft
    sliderElement.style.width = (timeLeft / startCount) * 100 + '%'

    if (timeLeft === 0) {
        clearInterval(time)
        headingElement.textContent = 'Congrats !'
        headingElement.style.color = 'white'
        surprise()
    }

}, 1000)


function surprise() {
    const colors = [
        'rgba(245,17,148, 0.5)',
        'rgba(245,107,59, 0.5)',
        'rgba(245,219,82, 0.5)',
        'rgba(245, 178, 95, 0.5)',
        'rgba(248, 23, 195, 0.5)',
        'rgba(248, 23, 195, 0.5)',
        'rgba(219, 207, 192, 0.7)',
    ]

    for (let i = 0; i < 500; i++) {
        setTimeout(() => {
            const circleElement = document.createElement('div')
            console.log(circleElement)
            circleElement.classList.add('circle')
            circleElement.style.left = Math.floor(Math.random() * 100) + '%'
            circleElement.style.top = Math.floor(Math.random() * 100) + '%'
            circleElement.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
            headingElement.append(circleElement)
        }, i * 5)
    }
}


