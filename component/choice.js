import {
  nextKana
} from '../index.js'

import { 
  oneLesson
} from '../js/init.js'

import {
  Kana
} from './kana.js'

const colorClear = '#B8B8B8'
const colorTrue = '#16ca52'
const colorFalse = '#ca2716'

class Choice {
  constructor () {
    this.selected = ''
    this.result = false
  }

  displayColorChoice (i, result) {
    let colorChoice = ''
    let myExpression = ''

    if (result === 'true') {
      colorChoice = 'colorTrue'
    } else {
      colorChoice = 'colorFalse'
    }
    myExpression = `choice${i}.style.backgroundColor = ${colorChoice}`

    eval(myExpression)
  }

  makeAChoice () {
    if (this.result === 'true') {
      oneLesson.success += 1
      this.displayColorChoice(this.selected, this.result)
      setTimeout(nextKana, 400)
    } else {
      this.displayColorChoice(this.selected, this.result)
      setTimeout(nextKana, 400)
    }
  }
}

export {
  Choice
}
