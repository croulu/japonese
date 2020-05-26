import {
  Lesson
} from '../component/lesson.js'

import {
  setStatusLessonInStorage
} from './helpers.js'

const countdown = document.querySelector('.time')
const maxCountdown = 60
let timePassed = 0
let interval = null
let isPause = false

function displayCountdown () {
  const tempsRestant = maxCountdown - timePassed
  const minutes = formatCountdown(Math.floor(tempsRestant / 60))
  const secondes = formatCountdown(Math.floor(tempsRestant % 60))

  countdown.innerHTML = `${minutes}:${secondes}`
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
  setStatusLessonInStorage('countdown', maxCountdown)
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

    setStatusLessonInStorage('countdown', maxCountdown)

    if (maxCountdown - timePassed === 0) {
      clearInterval(interval)
      isPause = true
      setStatusLessonInStorage('countdown', '0')
    }
  }, 1000)
// console.log(`interval::::::: ${interval}`)
}

function toStartOrNot () {
  isPause === true ? startCountdown() : pauseCountdown()
}

countdown.addEventListener('click', toStartOrNot)

export {
  interval,
  resetCountdown,
  startCountdown
}
