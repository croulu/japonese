import {
  colorTrueButton,
  colorFalseButton
} from '../index.js'

import { Kana } from './kana.js'

import {
  writeChoice,
  clearChoice,
  writeChoiceMoreThanNbChoicePossible,
  displayColorChoice,
  randomizeChoice
} from '../js/choice.js'

import {
  nextRandom,
  getStatusLessonInStorage
} from '../js/helpers.js'

import {
  displayWhatToGuess
} from '../js/menu.js'

import { kana } from '../js/alphabet.js'

class Guess {
  constructor () {
    this.guessWhat = undefined
    this.kana = new Kana()
    this.choiceTrueIndex = undefined
    this.choiceSelectedIndex = undefined
    this.previousKana = new Kana()
  }

  init (oneLesson) {
    // possible values : 0, 1, 2
    // 0 : kana
    // 1 : romanji
    // 2 : kanji (TODO in future)
    this.guessWhat = nextRandom(2)
    this.firstToGuess(oneLesson)
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

  makeAChoice (choiceSelected, oneLesson) {
    const myMethod = function () {
      this.nextKana(oneLesson)
    }.bind(this)

    const countdown = getStatusLessonInStorage('countdown')

    oneLesson.played++

    this.setResultTrueOrFalse(choiceSelected, oneLesson)

    if (countdown === '0') {
      if (oneLesson.toplay === oneLesson.played) {
        // time is finished and forcast to play is finished : lesson is done
        oneLesson.stop()
      } else {
        // time finished and forecast to play : finish after current guess, do not launch again nextKana
        // wait for choice for the current kana to guess
      }
    } else {
      // time is not finished, launch again nextKana
      setTimeout(myMethod, 400)
    }
  }

  setResultTrueOrFalse (choiceSelected, oneLesson) {
    this.choiceSelectedIndex = choiceSelected

    if (this.choiceSelectedIndex === this.choiceTrueIndex) {
      oneLesson.success += 1
      displayColorChoice(this.choiceSelectedIndex + 1, colorTrueButton)
    } else {
      displayColorChoice(this.choiceSelectedIndex + 1, colorFalseButton)
    }
  }

  guessKana (oneLesson) {
    const info = document.getElementById('info')
    let kanaImg
    let romanji
    let specificImage = ''

    info.innerText = oneLesson.title

    oneLesson.toplay++

    specificImage = `imgKana${this.kana.alphabet.toUpperCase()}${this.kana.letter}`

    if (this.guessWhat === 0) {
      kanaImg = document.getElementById('kanaImg')
      kanaImg.setAttribute('src', kana[specificImage])
    } else {
      romanji = document.getElementById('divGuessRomanji')
      romanji.innerHTML = this.kana.letter
    }
  }

  nextKana (oneLesson) {
    let nextRandomIndex = nextRandom(oneLesson.kanaToStudy.length)
    let arrayToWrite = []

    // todo : faire un new !

    this.guessWhat = nextRandom(2)
    displayWhatToGuess(this.guessWhat)

    arrayToWrite = randomizeChoice(this.guessWhat, oneLesson.kanaToStudy)
    writeChoice(this.guessWhat, oneLesson.nbChoice, arrayToWrite)

    this.previousKana = this.kana
    this.kana = oneLesson.kanaToStudy[nextRandomIndex]

    while (this.previousKana.letter === this.kana.letter) {
      nextRandomIndex = nextRandom(oneLesson.kanaToStudy.length)
      this.kana = oneLesson.kanaToStudy[nextRandomIndex]
    }

    this.writeChoiceTrueFalse(arrayToWrite)
    clearChoice(oneLesson.nbChoice)

    // write choice if number of kana to guess > of nb of choice
    // need  oneGuess.init to display the true choice
    if (oneLesson.kanaToStudy.length > 5) {
      arrayToWrite = writeChoiceMoreThanNbChoicePossible(this.guessWhat, oneLesson.nbChoice, arrayToWrite, this.choiceTrueIndex)
      this.writeChoiceTrueFalse(arrayToWrite)
    }

    this.guessKana(oneLesson)
  }
}

export {
  Guess
}
