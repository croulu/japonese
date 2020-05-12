import { oneLesson } from '../index.js'

// https://www.artmann.co/articles/building-a-javascript-countdown-timer
class Countdown {
  constructor () {
    this.duration = 0
    this.elapsed = 0
    this.isActive = false
    this.lastFrameTime = Date.now()
    this.done = 0

    this.onTick = () => {}
    this.onCompleted = () => {}

    this.tick()
  }

  getTimeLeft () {
    const t = this.duration - this.elapsed

    return Math.max(0, t)
  }

  pause () {
    this.isActive = false

    return this
  }

  reset () {
    this.elapsed = 0
  }

  setDuration (seconds) {
    this.lastFrameTime = Date.now()
    this.duration = seconds

    return this
  }

  start () {
    this.isActive = true

    return this
  }

  tick () {
    const currentFrameTime = Date.now()
    const deltaTime = currentFrameTime - this.lastFrameTime
    this.lastFrameTime = currentFrameTime

    if (this.isActive) {
      this.elapsed += deltaTime / 1000
      this.onTick(this.getTimeLeft())

      if (this.getTimeLeft() <= 0) {
        this.pause()
        this.onCompleted()
      }
    }

    window.requestAnimationFrame(this.tick.bind(this))
  }
}

const countdown = new Countdown().setDuration(60)
const label = document.querySelector('.time')
let pause = 0

document.querySelector('.pause').addEventListener('click', () => {
  countdown.pause()
  pause = 1
})

document.querySelector('.reset').addEventListener('click', () => {
  countdown.reset()
  pause = 0
  label.innerHTML = Math.ceil(countdown.getTimeLeft())
})
// document.querySelector('.reset').style.display = 'none'

document.querySelector('.start').addEventListener('click', () => {
  countdown.start()
  pause = 0
})

countdown.onTick = (time) => {
  label.innerHTML = Math.round(time)
}

countdown.onCompleted = () => {
  console.log('DONE')
  countdown.done = 1
console.log(oneLesson)  
  oneLesson.complete()
}

label.addEventListener('click', () => {
  console.log('click')
  // todo : pourquoi appelé 2 fois ?
  // todo 
  // if pause launch start
  // if not pause launch pause
})

export {
  Countdown,
  countdown
}
