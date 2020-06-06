import { Kana } from './kana.js'
import { Menu } from './menu.js'
import { ChoiceGroup } from './choiceGroup.js'

import {
  nextRandom,
  getStatusLessonInStorage,
  getInStorage
} from '../js/helpers.js'

import {
  startCountdown
} from '../js/timerCountDown.js'

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

  makeAChoice (choiceSelected, oneLesson, oneMenu) {
    // TODO objet choiceGroup déjà créé avec launchLesson, voir comment le récupérer
    const oneChoiceGgroup = new ChoiceGroup(oneLesson.nbChoice)

    const myMethod = () => this.nextKana(oneLesson, oneMenu, oneChoiceGgroup)

    if (getInStorage('pause') === 'true') startCountdown()

    oneLesson.played++

    this.setResultTrueOrFalse(choiceSelected, oneLesson, oneChoiceGgroup)

    setTimeout(myMethod, 300)
  }

  setResultTrueOrFalse (choiceSelected, oneLesson, oneChoiceGgroup) {
    this.choiceSelectedIndex = choiceSelected

    if (this.choiceSelectedIndex === this.choiceTrueIndex) {
      oneLesson.success += 1
      oneChoiceGgroup.displayColorChoice(this.choiceSelectedIndex, 'colorTrueButton')
    } else {
      oneChoiceGgroup.displayColorChoice(this.choiceSelectedIndex, 'colorFalseButton')
    }
  }

  guessKana (oneLesson) {
    const info = document.getElementById('info')
    let kanaImg
    let romanji
    let specificImage = ''

    info.innerText = oneLesson.title

    oneLesson.toplay++

    specificImage = `${this.kana.alphabet.toUpperCase()}${this.kana.letter}`

    if (this.guessWhat === 0) {
      kanaImg = document.getElementById('kanaImg')
      kanaImg.className = `kanaAlphabet ${specificImage}`
    } else {
      romanji = document.getElementById('playItemRomanji')
      romanji.innerHTML = this.kana.letter
    }
  }

  nextKana (oneLesson, oneMenu, oneChoiceGroup) {
    let nextRandomIndex = nextRandom(oneLesson.kanaToStudy.length)
    let arrayToWrite = []
    const countdown = getStatusLessonInStorage('countdown')

    if (countdown === '0') {
      oneLesson.stopOrNot(oneChoiceGroup)
    } else {
      this.guessWhat = nextRandom(2)
      oneMenu.displayWhatToGuess(this.guessWhat)

      arrayToWrite = oneChoiceGroup.randomizeChoice(this.guessWhat, oneLesson.kanaToStudy)
      oneChoiceGroup.writeChoice(this.guessWhat, arrayToWrite)

      nextRandomIndex = this.loadNextGuess(nextRandomIndex, oneLesson)

      this.writeChoiceTrueFalse(arrayToWrite)
      oneChoiceGroup.clearChoice()

      // write choice if number of kana to guess > of nb of choice
      // need  oneGuess.init to display the true choice
      if (oneLesson.kanaToStudy.length > 5) {
        arrayToWrite = oneChoiceGroup.writeChoiceMoreThanNbChoicePossible(this.guessWhat, arrayToWrite, this.choiceTrueIndex)
        this.writeChoiceTrueFalse(arrayToWrite)
      }

      this.guessKana(oneLesson)
    }
  }

  loadNextGuess (nextRandomIndex, oneLesson) {
    this.previousKana = this.kana
    this.kana = oneLesson.kanaToStudy[nextRandomIndex]

    while (this.previousKana.letter === this.kana.letter) {
      nextRandomIndex = nextRandom(oneLesson.kanaToStudy.length)
      this.kana = oneLesson.kanaToStudy[nextRandomIndex]
    }
    return nextRandomIndex
  }
}

export {
  Guess
}
