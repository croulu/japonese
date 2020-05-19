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
console.log('reset')
console.log(`reset interval: ${interval}`)
  clearInterval(interval)
  isPause = false
  timePassed = 0
console.log(`reset time passed: ${timePassed}`)
  startCountdown()
}

// todo 
// clic sur le timer : pause est appelé 2 fois

function pauseCountdown () {
console.log('pause')
console.log(interval)
  isPause = true
console.log(`pause interval: ${interval}`)
  clearInterval(interval)
}

function startCountdown () {
  console.log('start')
  isPause = false
  interval = setInterval(() => {
console.log(`setInterval: ${timePassed}`)
    
    timePassed += 1
    displayCountdown()
    
    if (maxCountdown - timePassed === 0) {
      resetCountdown()
    }
  }, 1000)
console.log(`interval::::::: ${interval}`)
}

function toStartOrNot () {
console.log(`toStartOrNot isPause: ${isPause}`)
  isPause === true ? startCountdown() : pauseCountdown()
}

affichage.addEventListener('click', toStartOrNot)

export {
  interval,
  resetCountdown,
  startCountdown
}
