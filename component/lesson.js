import {
  showKanaOrRomanji
} from '../index.js'

import {
  nextRandom
} from '../js/helpers.js'

import {
  Kana,
  disableChoice,
  clearChoice,
  enableChoice,
  deleteChoice
} from './kana.js'

class Lesson {
  constructor () {
    this.nbChoice = 0
    this.kanaToStudy = []
    this.previousKanaIndex = undefined
    this.currentKanaIndex = undefined
    this.currentKanaObject = undefined
    this.play = 0
    this.playAllowed = 10
    this.success = 0
    this.pourcentageReussite = 0
  }

  getOneKana (i) {
    this.currentKanaIndex = i
    this.currentKanaObject = this.kanaToStudy[i]
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

    deleteChoice(this.nbChoice)
    clearChoice(this.nbChoice)
    enableChoice(this.nbChoice)
  }

  next () {
    const iNextRandom = nextRandom()
    this.getOneKana(iNextRandom)
  }

  stop () {
    this.kanaToStudy = []
    this.play = 0
    this.success = 0
    this.pourcentageReussite = 0

    disableChoice(this.nbChoice)
  }

  initPourcentage () {
    this.play = 0
    this.success = 0
    this.pourcentageReussite = 0
  }

  makePourcentage () {
    this.pourcentageReussite = this.success / this.playAllowed * 100
  }

  hToRA () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('h', 'a'))
    this.kanaToStudy.push(new Kana('h', 'i'))
    this.kanaToStudy.push(new Kana('h', 'u'))
    this.kanaToStudy.push(new Kana('h', 'e'))
    this.kanaToStudy.push(new Kana('h', 'o'))

    this.next()

    showKanaOrRomanji('kana')
  }

  kToRA () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('k', 'a'))
    this.kanaToStudy.push(new Kana('k', 'i'))
    this.kanaToStudy.push(new Kana('k', 'u'))
    this.kanaToStudy.push(new Kana('k', 'e'))
    this.kanaToStudy.push(new Kana('k', 'o'))

    this.next()

    showKanaOrRomanji('kana')
  }

  hToRK () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('h', 'ka'))
    this.kanaToStudy.push(new Kana('h', 'ki'))
    this.kanaToStudy.push(new Kana('h', 'ku'))
    this.kanaToStudy.push(new Kana('h', 'ke'))
    this.kanaToStudy.push(new Kana('h', 'ko'))

    this.next()

    showKanaOrRomanji('kana')
  }

  kToRK () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('k', 'ka'))
    this.kanaToStudy.push(new Kana('k', 'ki'))
    this.kanaToStudy.push(new Kana('k', 'ku'))
    this.kanaToStudy.push(new Kana('k', 'ke'))
    this.kanaToStudy.push(new Kana('k', 'ko'))

    this.next()

    showKanaOrRomanji('kana')
  }

  hToRS () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('h', 'sa'))
    this.kanaToStudy.push(new Kana('h', 'shi'))
    this.kanaToStudy.push(new Kana('h', 'su'))
    this.kanaToStudy.push(new Kana('h', 'se'))
    this.kanaToStudy.push(new Kana('h', 'so'))

    this.next()

    showKanaOrRomanji('kana')
  }

  kToRS () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('k', 'sa'))
    this.kanaToStudy.push(new Kana('k', 'shi'))
    this.kanaToStudy.push(new Kana('k', 'su'))
    this.kanaToStudy.push(new Kana('k', 'se'))
    this.kanaToStudy.push(new Kana('k', 'so'))

    this.next()

    showKanaOrRomanji('kana')
  }

  hToRT () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('h', 'ta'))
    this.kanaToStudy.push(new Kana('h', 'chi'))
    this.kanaToStudy.push(new Kana('h', 'tsu'))
    this.kanaToStudy.push(new Kana('h', 'te'))
    this.kanaToStudy.push(new Kana('h', 'to'))

    this.next()

    showKanaOrRomanji('kana')
  }

  kToRT () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('k', 'ta'))
    this.kanaToStudy.push(new Kana('k', 'chi'))
    this.kanaToStudy.push(new Kana('k', 'tsu'))
    this.kanaToStudy.push(new Kana('k', 'te'))
    this.kanaToStudy.push(new Kana('k', 'to'))

    this.next()

    showKanaOrRomanji('kana')
  }

  hToRN () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('h', 'na'))
    this.kanaToStudy.push(new Kana('h', 'ni'))
    this.kanaToStudy.push(new Kana('h', 'nu'))
    this.kanaToStudy.push(new Kana('h', 'ne'))
    this.kanaToStudy.push(new Kana('h', 'no'))

    this.next()

    showKanaOrRomanji('kana')
  }

  kToRN () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('k', 'na'))
    this.kanaToStudy.push(new Kana('k', 'ni'))
    this.kanaToStudy.push(new Kana('k', 'nu'))
    this.kanaToStudy.push(new Kana('k', 'ne'))
    this.kanaToStudy.push(new Kana('k', 'no'))

    this.next()

    showKanaOrRomanji('kana')
  }

  hToRH () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('h', 'ha'))
    this.kanaToStudy.push(new Kana('h', 'hi'))
    this.kanaToStudy.push(new Kana('h', 'fu'))
    this.kanaToStudy.push(new Kana('h', 'he'))
    this.kanaToStudy.push(new Kana('h', 'ho'))

    this.next()

    showKanaOrRomanji('kana')
  }

  kToRH () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('k', 'ha'))
    this.kanaToStudy.push(new Kana('k', 'hi'))
    this.kanaToStudy.push(new Kana('k', 'fu'))
    this.kanaToStudy.push(new Kana('k', 'he'))
    this.kanaToStudy.push(new Kana('k', 'ho'))

    this.next()

    showKanaOrRomanji('kana')
  }

  hToRM () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('h', 'ma'))
    this.kanaToStudy.push(new Kana('h', 'mi'))
    this.kanaToStudy.push(new Kana('h', 'mu'))
    this.kanaToStudy.push(new Kana('h', 'me'))
    this.kanaToStudy.push(new Kana('h', 'mo'))

    this.next()

    showKanaOrRomanji('kana')
  }

  kToRM () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('k', 'ma'))
    this.kanaToStudy.push(new Kana('k', 'mi'))
    this.kanaToStudy.push(new Kana('k', 'mu'))
    this.kanaToStudy.push(new Kana('k', 'me'))
    this.kanaToStudy.push(new Kana('k', 'mo'))

    this.next()

    showKanaOrRomanji('kana')
  }

  hToRY () {
    this.init()
    this.nbChoice = 3

    this.kanaToStudy.push(new Kana('h', 'ya'))
    this.kanaToStudy.push(new Kana('h', 'yu'))
    this.kanaToStudy.push(new Kana('h', 'yo'))

    this.next()

    showKanaOrRomanji('kana')
  }

  kToRY () {
    this.init()
    this.nbChoice = 3

    this.kanaToStudy.push(new Kana('k', 'ya'))
    this.kanaToStudy.push(new Kana('k', 'yu'))
    this.kanaToStudy.push(new Kana('k', 'yo'))

    this.next()

    showKanaOrRomanji('kana')
  }

  hToRR () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('h', 'ra'))
    this.kanaToStudy.push(new Kana('h', 'ri'))
    this.kanaToStudy.push(new Kana('h', 'ru'))
    this.kanaToStudy.push(new Kana('h', 're'))
    this.kanaToStudy.push(new Kana('h', 'ro'))

    this.next()

    showKanaOrRomanji('kana')
  }

  kToRR () {
    this.init()
    this.nbChoice = 5

    this.kanaToStudy.push(new Kana('k', 'ra'))
    this.kanaToStudy.push(new Kana('k', 'ri'))
    this.kanaToStudy.push(new Kana('k', 'ru'))
    this.kanaToStudy.push(new Kana('k', 're'))
    this.kanaToStudy.push(new Kana('k', 'ro'))

    this.next()

    showKanaOrRomanji('kana')
  }

  hToRW () {
    this.init()
    this.nbChoice = 3

    this.kanaToStudy.push(new Kana('h', 'wa'))
    this.kanaToStudy.push(new Kana('h', 'wo'))
    this.kanaToStudy.push(new Kana('h', 'n'))

    this.next()

    showKanaOrRomanji('kana')
  }

  kToRW () {
    this.init()
    this.nbChoice = 3

    this.kanaToStudy.push(new Kana('k', 'wa'))
    this.kanaToStudy.push(new Kana('k', 'wo'))
    this.kanaToStudy.push(new Kana('k', 'n'))

    this.next()

    showKanaOrRomanji('kana')
  }
}

export {
  Lesson
}
