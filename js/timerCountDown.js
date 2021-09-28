

function initClickOnCountdown() {
  const countdown = document.getElementById('countdownTimer')
  countdown.addEventListener('click', toStartOrNot)
}

const maxCountdown = 60
let timePassed = 0
let interval = null

function displayCountdown () {
  const tempsRestant = maxCountdown - timePassed
  const minutes = formatCountdown(Math.floor(tempsRestant / 60))
  const secondes = formatCountdown(Math.floor(tempsRestant % 60))

  const countdown = document.getElementById('countdownTimer')
  countdown.innerHTML = `${minutes}:${secondes}`
}

function formatCountdown (num) {
  return num < 10 ? `0${num}` : num
}

function resetCountdown (toCallWhenFinished, ...args) {
  clearInterval(interval)
  setInStorage('pause', false)
  timePassed = 0
  displayCountdown()
  startCountdown(toCallWhenFinished, ...args)
  setStatusLessonInStorage('countdown', maxCountdown)
}

function pauseCountdown () {
  setInStorage('pause', true)
  clearInterval(interval)
}

function startCountdown (toCallWhenFinished, ...args) {
  setInStorage('pause', false)
  interval = setInterval(() => {
    timePassed += 1
    displayCountdown()

    setStatusLessonInStorage('countdown', maxCountdown)

    if (isFinished(timePassed)) {
      stopCountdown(interval, toCallWhenFinished, ...args)
    }
  }, 1000)
// console.log(`interval::::::: ${interval}`)
}

function isFinished (timePassed) {
  let result = false

  if (maxCountdown - timePassed === 0) result = true

  return result
}

function stopCountdown (interval, toCallWhenFinished, ...args) {
  clearInterval(interval)
  setInStorage('pause', true)
  setStatusLessonInStorage('countdown', '0')
  const countdown = document.getElementById('countdownTimer')
  countdown.removeEventListener('click', toStartOrNot)

  console.log({toCallWhenFinished})

 // fnCall(toCallWhenFinished, ...args)
}

function toStartOrNot () {
  getInStorage('pause') === 'true' ? startCountdown() : pauseCountdown()
}


export {
  interval,
  resetCountdown,
  startCountdown,
  stopCountdown,
  initClickOnCountdown
}
