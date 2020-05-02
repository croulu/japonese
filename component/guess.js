import {
  colorTrueButton,
  colorFalseButton
} from '../index.js'

import imgHiragana from '../img/hiragana/*.*'
import imgKatakana from '../img/katakana/*.*'

import { Kana } from './kana.js'

import {
  clearChoice
} from '../js/choice.js'

import {
  strUcFirst,
  nextRandom,
  setStringWithoutCar
} from '../js/helpers.js'

class Guess {
  constructor () {
    this.kana = new Kana()
    this.choiceTrueIndex = undefined
    this.choiceSelectedIndex = undefined
    this.previousKana = new Kana()
  }

  init (oneLesson) {
    this.firstToGuess(oneLesson)
    this.writeChoiceTrueFalse(oneLesson)
  }

  firstToGuess (oneLesson) {
    const nextRandomIndex = nextRandom(oneLesson.kanaToStudy.length)
    this.kana = oneLesson.kanaToStudy[nextRandomIndex]
  }

  writeChoiceTrueFalse (oneLesson) {
    for (let i = 0; i < oneLesson.nbChoice; i++) {
      if (this.kana.letter === oneLesson.kanaToStudy[i].letter) {
        this.choiceTrueIndex = i
      }
    }
  }

  displayColorChoice (result) {
    let myExpression = ''

    if (result === true) {
      myExpression = `choice${this.choiceSelectedIndex + 1}.style.backgroundColor = '${colorTrueButton}'`
    } else {
      myExpression = `choice${this.choiceSelectedIndex + 1}.style.backgroundColor = '${colorFalseButton}'`
    }
    eval(myExpression)
  }

  makeAChoice (choiceSelected, oneLesson) {
    this.choiceSelectedIndex = choiceSelected

    let myMethod = (function (sPropriété) {
      this.nextKana(oneLesson)
    }).bind(this)

    if (this.choiceSelectedIndex === this.choiceTrueIndex) {
      oneLesson.success += 1
      this.displayColorChoice(true)
    } else {
      this.displayColorChoice(false)
    }

    setTimeout(myMethod, 400)
  }

  guessKana (oneLesson) {
    const info = document.getElementById('info')
    let kanaImg
    let specificImage = ''

    info.innerText = oneLesson.title

    oneLesson.play++

    if (this.kana.alphabet === 'h') {
      specificImage = imgHiragana[`${this.kana.letter}`]
    } else if (this.kana.alphabet === 'k') {
      specificImage = imgKatakana[`${this.kana.letter}`]
    }

    kanaImg = document.getElementById('kanaImg')
    kanaImg.setAttribute('src', specificImage.png)
  }

  nextKana (oneLesson) {
    const info = document.getElementById('info')
    let nextRandomIndex = nextRandom(oneLesson.kanaToStudy.length)

    if (oneLesson.play < oneLesson.playAllowed) {
      this.previousKana = this.kana
      this.kana = oneLesson.kanaToStudy[nextRandomIndex]    
      while (this.previousKana.letter === this.kana.letter) {
        nextRandomIndex = nextRandom(oneLesson.kanaToStudy.length)
        this.kana = oneLesson.kanaToStudy[nextRandomIndex]
      }
      this.writeChoiceTrueFalse(oneLesson)        
      clearChoice(oneLesson.nbChoice)
      this.guessKana(oneLesson)

    } else {
      oneLesson.makePourcentage()
      info.innerText += ` - success : ${oneLesson.pourcentageReussite}% - ${oneLesson.success}/${oneLesson.playAllowed}`
      if (oneLesson.pourcentageReussite === 100) {
        oneLesson.done = true

        localStorage.setItem(`oneLesson${strUcFirst(setStringWithoutCar(oneLesson.code, '-'))}Done`, oneLesson.done)
        oneLesson.displayButtonLesson()
      }
      oneLesson.stop()
    }
  }
}

export {
  Guess
}
