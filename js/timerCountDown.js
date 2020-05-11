class Countdown {
  constructor () {
    this.duration = 0
    this.elapsed = 0
    this.isActive = false
    this.lastFrameTime = Date.now()

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
    console.log('reset')
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

document.querySelector('.pause').addEventListener('click', () => {
  countdown.pause()
})

document.querySelector('.reset').addEventListener('click', () => {
  countdown.reset()
  label.innerHTML = Math.ceil(countdown.getTimeLeft())
})

document.querySelector('.start').addEventListener('click', () => {
  countdown.start()
})

countdown.onTick = (time) => {
  label.innerHTML = Math.round(time)
}

countdown.onCompleted = () => {
  console.log('DONE')
}

export {
  Countdown,
  countdown
}
