import {
  setStatusLessonInStorage,
  getInStorage,
  setInStorage,
  fnCall
} from './helpers.js'

import {
  stopLesson, 
  Lesson
} from '../component/lesson.js'

import { 
  ChoiceGroup
} from '../component/choiceGroup.js'

const countdown = document.querySelector('.time')
const maxCountdown = 60
let timePassed = 0
let interval = null

function displayCountdown () {
  const tempsRestant = maxCountdown - timePassed
  const minutes = formatCountdown(Math.floor(tempsRestant / 60))
  const secondes = formatCountdown(Math.floor(tempsRestant % 60))

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
  countdown.removeEventListener('click', toStartOrNot)

  fnCall(toCallWhenFinished, ...args)
}

function toStartOrNot () {
  getInStorage('pause') === 'true' ? startCountdown() : pauseCountdown()
}

countdown.addEventListener('click', toStartOrNot)

export {
  interval,
  resetCountdown,
  startCountdown,
  stopCountdown
}
