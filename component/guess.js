import {
  colorTrueButton,
  colorFalseButton
} from '../index.js'

import imgHiragana from '../img/hiragana/*.*'
import imgKatakana from '../img/katakana/*.*'

import { Kana } from './kana.js'

import {
  clearChoice,
  writeChoiceMoreThanNbChoicePossible
} from '../js/choice.js'

import {
  nextRandom,
  setStatusLessonInStorage
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
    this.writeChoiceTrueFalse(oneLesson.kanaToStudy)
  }

  firstToGuess (oneLesson) {
    const nextRandomIndex = nextRandom(oneLesson.kanaToStudy.length)
    this.kana = oneLesson.kanaToStudy[nextRandomIndex]
  }

  writeChoiceTrueFalse (arrayKana) {
    for (let i = 0; i < arrayKana.length; i++) {
      if (this.kana.letter === arrayKana[i].letter) {
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
    let arrayToWrite = []
    let indexLesson
    let nextLesson = ''

    if (oneLesson.play < oneLesson.playAllowed) {
      this.previousKana = this.kana
      this.kana = oneLesson.kanaToStudy[nextRandomIndex]
      while (this.previousKana.letter === this.kana.letter) {
        nextRandomIndex = nextRandom(oneLesson.kanaToStudy.length)
        this.kana = oneLesson.kanaToStudy[nextRandomIndex]
      }
      this.writeChoiceTrueFalse(oneLesson.kanaToStudy)
      clearChoice(oneLesson.nbChoice)

      // write choice if number of kana to guess > of nb of choice
      // need  oneGuess.init to display the true choice
      if (oneLesson.kanaToStudy.length > 5) {
        arrayToWrite = writeChoiceMoreThanNbChoicePossible(oneLesson.nbChoice, oneLesson.kanaToStudy, this.choiceTrueIndex)
        this.writeChoiceTrueFalse(arrayToWrite)
      }

      this.guessKana(oneLesson)

    } else {
      oneLesson.makePourcentage()
      info.innerText += ` - success : ${oneLesson.pourcentageReussite}% - ${oneLesson.success}/${oneLesson.playAllowed}`
      if (oneLesson.pourcentageReussite === 100) {
        oneLesson.status = 'done'
        setStatusLessonInStorage(oneLesson.code, oneLesson.status)

        indexLesson = oneLesson.getIndexLesson(oneLesson.code)
        nextLesson = oneLesson.getNextLesson(indexLesson)
        setStatusLessonInStorage(nextLesson, 'inprogress')

        oneLesson.displayButtonLesson()
      }
      oneLesson.stop()
    }
  }
}

export {
  Guess
}
