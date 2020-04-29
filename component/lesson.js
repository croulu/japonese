import {} from '../index.js'

import { Kana } from './kana.js'

import { Guess } from './guess.js'

const colorClear = '#B8B8B8'
const colorTrue = '#16ca52'
const colorFalse = '#ca2716'

class Lesson {
  constructor () {
    this.nbChoice = 0
    this.kanaToStudy = []
    this.play = 0
    this.playAllowed = 10
    this.success = 0
    this.pourcentageReussite = 0
  }

  init () {
    let kanaImg = document.getElementById('kanaImg')
    let info = document.getElementById('info')

    this.kanaToStudy = []
    this.play = 0
    this.success = 0
    this.pourcentageReussite = 0

    kanaImg.setAttribute('src', '')
    info.innerText = ''

    this.initPourcentage()

    this.deleteChoice()
    this.clearChoice()
    this.enableChoice()
    this.displayCorrectNumberOfChoice()
  }

  stop () {
    this.kanaToStudy = []
    this.play = 0
    this.success = 0
    this.pourcentageReussite = 0

    this.disableChoice()
  }

  initPourcentage () {
    this.play = 0
    this.success = 0
    this.pourcentageReussite = 0
  }

  makePourcentage () {
    this.pourcentageReussite = this.success / this.playAllowed * 100
  }

  writeChoice () {
    let myExpression = ''
    for (let i = 0; i < this.nbChoice; i++) {
      myExpression = `choice${i + 1}.innerText = '${this.kanaToStudy[i].letter}'`
      eval(myExpression)
    }
  }

  disableChoice () {
    let myExpression = ''
    for (let i = 0; i < this.nbChoice; i++) {
      myExpression = `choice${i + 1}.style.backgroundColor = colorClear`
      eval(myExpression)
      myExpression = `choice${i + 1}.style.pointerEvents = 'none'`
      eval(myExpression)
    }
  }

  enableChoice () {
    let myExpression = ''
    for (let i = 0; i < this.nbChoice; i++) {
      myExpression = `choice${i + 1}.style.backgroundColor = colorClear`
      eval(myExpression)
      myExpression = `choice${i + 1}.style.pointerEvents = 'auto'`
      eval(myExpression)
    }
  }

  deleteChoice () {
    let myExpression = ''
    for (let i = 0; i < this.nbChoice; i++) {
      myExpression = `choice${i + 1}.style.display = 'none'`
      eval(myExpression)
    }
  }

  displayCorrectNumberOfChoice () {
    let myExpression = ''
    for (let i = 5; i > 0; i--) {
      if (i > this.nbChoice) {
        myExpression = `choice${i}.style.display = 'none'`
      } else {
        myExpression = `choice${i}.style.display = 'block'`
      }
      eval(myExpression)
    }
  }

  clearChoice () {
    let myExpression = ''
    for (let i = 0; i < this.nbChoice; i++) {
      myExpression = `choice${i + 1}.style.backgroundColor = colorClear`
      eval(myExpression)
    }
  }

  hToRA (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('h', 'a'))
    this.kanaToStudy.push(new Kana('h', 'i'))
    this.kanaToStudy.push(new Kana('h', 'u'))
    this.kanaToStudy.push(new Kana('h', 'e'))
    this.kanaToStudy.push(new Kana('h', 'o'))

    this.writeChoice()

    oneGuess.init(this)
    oneGuess.guessKana(this)
  }

  kToRA (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('k', 'a'))
    this.kanaToStudy.push(new Kana('k', 'i'))
    this.kanaToStudy.push(new Kana('k', 'u'))
    this.kanaToStudy.push(new Kana('k', 'e'))
    this.kanaToStudy.push(new Kana('k', 'o'))

    this.writeChoice()

    oneGuess.init(this)
    oneGuess.guessKana(this)
  }

  hToRK (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('h', 'ka'))
    this.kanaToStudy.push(new Kana('h', 'ki'))
    this.kanaToStudy.push(new Kana('h', 'ku'))
    this.kanaToStudy.push(new Kana('h', 'ke'))
    this.kanaToStudy.push(new Kana('h', 'ko'))

    this.writeChoice()

    oneGuess.init(this)
    oneGuess.guessKana(this)
  }

  kToRK (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('k', 'ka'))
    this.kanaToStudy.push(new Kana('k', 'ki'))
    this.kanaToStudy.push(new Kana('k', 'ku'))
    this.kanaToStudy.push(new Kana('k', 'ke'))
    this.kanaToStudy.push(new Kana('k', 'ko'))

    this.writeChoice()

    oneGuess.init(this)
    oneGuess.guessKana(this)
  }

  hToRS (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('h', 'sa'))
    this.kanaToStudy.push(new Kana('h', 'shi'))
    this.kanaToStudy.push(new Kana('h', 'su'))
    this.kanaToStudy.push(new Kana('h', 'se'))
    this.kanaToStudy.push(new Kana('h', 'so'))

    this.writeChoice()

    oneGuess.init(this)
    oneGuess.guessKana(this)
  }

  kToRS (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('k', 'sa'))
    this.kanaToStudy.push(new Kana('k', 'shi'))
    this.kanaToStudy.push(new Kana('k', 'su'))
    this.kanaToStudy.push(new Kana('k', 'se'))
    this.kanaToStudy.push(new Kana('k', 'so'))

    this.writeChoice()

    oneGuess.init(this)
    oneGuess.guessKana(this)
  }

  hToRT (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('h', 'ta'))
    this.kanaToStudy.push(new Kana('h', 'chi'))
    this.kanaToStudy.push(new Kana('h', 'tsu'))
    this.kanaToStudy.push(new Kana('h', 'te'))
    this.kanaToStudy.push(new Kana('h', 'to'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  kToRT (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('k', 'ta'))
    this.kanaToStudy.push(new Kana('k', 'chi'))
    this.kanaToStudy.push(new Kana('k', 'tsu'))
    this.kanaToStudy.push(new Kana('k', 'te'))
    this.kanaToStudy.push(new Kana('k', 'to'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  hToRN (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('h', 'na'))
    this.kanaToStudy.push(new Kana('h', 'ni'))
    this.kanaToStudy.push(new Kana('h', 'nu'))
    this.kanaToStudy.push(new Kana('h', 'ne'))
    this.kanaToStudy.push(new Kana('h', 'no'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  kToRN (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('k', 'na'))
    this.kanaToStudy.push(new Kana('k', 'ni'))
    this.kanaToStudy.push(new Kana('k', 'nu'))
    this.kanaToStudy.push(new Kana('k', 'ne'))
    this.kanaToStudy.push(new Kana('k', 'no'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  hToRH (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('h', 'ha'))
    this.kanaToStudy.push(new Kana('h', 'hi'))
    this.kanaToStudy.push(new Kana('h', 'fu'))
    this.kanaToStudy.push(new Kana('h', 'he'))
    this.kanaToStudy.push(new Kana('h', 'ho'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  kToRH (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('k', 'ha'))
    this.kanaToStudy.push(new Kana('k', 'hi'))
    this.kanaToStudy.push(new Kana('k', 'fu'))
    this.kanaToStudy.push(new Kana('k', 'he'))
    this.kanaToStudy.push(new Kana('k', 'ho'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  hToRM (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('h', 'ma'))
    this.kanaToStudy.push(new Kana('h', 'mi'))
    this.kanaToStudy.push(new Kana('h', 'mu'))
    this.kanaToStudy.push(new Kana('h', 'me'))
    this.kanaToStudy.push(new Kana('h', 'mo'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  kToRM (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('k', 'ma'))
    this.kanaToStudy.push(new Kana('k', 'mi'))
    this.kanaToStudy.push(new Kana('k', 'mu'))
    this.kanaToStudy.push(new Kana('k', 'me'))
    this.kanaToStudy.push(new Kana('k', 'mo'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  hToRY (oneGuess) {
    this.nbChoice = 3
    this.init()

    this.kanaToStudy.push(new Kana('h', 'ya'))
    this.kanaToStudy.push(new Kana('h', 'yu'))
    this.kanaToStudy.push(new Kana('h', 'yo'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  kToRY (oneGuess) {
    this.nbChoice = 3
    this.init()

    this.kanaToStudy.push(new Kana('k', 'ya'))
    this.kanaToStudy.push(new Kana('k', 'yu'))
    this.kanaToStudy.push(new Kana('k', 'yo'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  hToRR (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('h', 'ra'))
    this.kanaToStudy.push(new Kana('h', 'ri'))
    this.kanaToStudy.push(new Kana('h', 'ru'))
    this.kanaToStudy.push(new Kana('h', 're'))
    this.kanaToStudy.push(new Kana('h', 'ro'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  kToRR (oneGuess) {
    this.nbChoice = 5
    this.init()

    this.kanaToStudy.push(new Kana('k', 'ra'))
    this.kanaToStudy.push(new Kana('k', 'ri'))
    this.kanaToStudy.push(new Kana('k', 'ru'))
    this.kanaToStudy.push(new Kana('k', 're'))
    this.kanaToStudy.push(new Kana('k', 'ro'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  hToRW (oneGuess) {
    this.nbChoice = 3
    this.init()

    this.kanaToStudy.push(new Kana('h', 'wa'))
    this.kanaToStudy.push(new Kana('h', 'wo'))
    this.kanaToStudy.push(new Kana('h', 'n'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  kToRW (oneGuess) {
    this.nbChoice = 3
    this.init()

    this.kanaToStudy.push(new Kana('k', 'wa'))
    this.kanaToStudy.push(new Kana('k', 'wo'))
    this.kanaToStudy.push(new Kana('k', 'n'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }
}

export {
  Lesson
}
