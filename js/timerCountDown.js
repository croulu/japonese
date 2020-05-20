const affichage = document.querySelector('.time')
const maxCountdown = 60
let timePassed = 0
let interval = null
let isPause = false

function displayCountdown () {
  const tempsRestant = maxCountdown - timePassed
  const minutes = formatCountdown(Math.floor(tempsRestant / 60))
  const secondes = formatCountdown(Math.floor(tempsRestant % 60))

  affichage.innerHTML = `${minutes}:${secondes}`
}

function formatCountdown (num) {
  return num < 10 ? `0${num}` : num
}

function resetCountdown () {
  clearInterval(interval)
  isPause = false
  timePassed = 0
  displayCountdown()
  startCountdown()
}

function pauseCountdown () {
  isPause = true
  clearInterval(interval)
}

function startCountdown () {
  isPause = false
  interval = setInterval(() => {
    
    timePassed += 1
    displayCountdown()
    
    if (maxCountdown - timePassed === 0) {
      resetCountdown()
    }
  }, 1000)
// console.log(`interval::::::: ${interval}`)
}

function toStartOrNot () {
  isPause === true ? startCountdown() : pauseCountdown()
}

affichage.addEventListener('click', toStartOrNot)

export {
  interval,
  resetCountdown,
  startCountdown
}
