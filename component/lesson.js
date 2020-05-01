import {} from '../index.js'

import { Kana } from './kana.js'

import { Guess } from './guess.js'

import { 
  strUcFirst,
  strReplaceAll
} from '../js/helpers.js'

import  { 
  btnToRHaiueo,
  btnToRKaiueo,
  btnToRHkakikukeko,
  btnToRKkakikukeko,
  btnToRHsashisuseso,
  btnToRKsashisuseso,
  btnToRHtachitsuteto,
  btnToRKtachitsuteto,
  btnToRHnaninuneno,
  btnToRKnaninuneno,
  btnToRHhahifuheho,
  btnToRKhahifuheho,
  btnToRHmamimumemo,
  btnToRKmamimumemo,
  btnToRHyayuyo,
  btnToRKyayuyo,
  btnToRHrarirurero,
  btnToRKrarirurero,
  btnToRHwawon,
  btnToRKwawon
} from '../js/init.js'

const colorClear = '#B8B8B8'
const colorTrue = '#16ca52'
const colorFalse = '#ca2716'

class Lesson {
  constructor () {
    this.title = ''
    this.code = ''
    this.nbChoice = 0
    this.kanaToStudy = []
    this.play = 0
    this.playAllowed = 10
    this.success = 0
    this.pourcentageReussite = 0
    this.done = false
    this.allLesson = []
  }

  init () {
    let kanaImg = document.getElementById('kanaImg')
    let info = document.getElementById('info')

    kanaImg.setAttribute('src', '')
    info.innerText = ''

    this.kanaToStudy = []
    this.play = 0
    this.success = 0
    this.pourcentageReussite = 0

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

  displayButtonLesson () {
    let indexCurrentLesson = this.getIdCurrentLesson()

    this.setActivateCurrentLesson(indexCurrentLesson)
    this.setDesactivateNextLesson(indexCurrentLesson)
console.log(this)
    if (this.done === true) {
console.log(`leçon done ${this.code}`)
      this.setActivateNextLesson(indexCurrentLesson)
    } 
  }

  getIdCurrentLesson () {
    let indexCurrentLesson
    for (let i = 0; i < this.allLesson.length; i++) {
      if (this.allLesson[i] === this.code) {
        indexCurrentLesson = i
      }
    }
console.log(`indexCurrentLesson = ${indexCurrentLesson}`)
    return indexCurrentLesson
  }

  setActivateCurrentLesson (indexCurrentLesson) {
    let myExpression = ''
    let buttonName = 'btnToR'
    let lessonName = strUcFirst(strReplaceAll(this.allLesson[indexCurrentLesson], '-', ''))

    myExpression = `${buttonName}${lessonName}.removeAttribute('disabled')`
    eval(myExpression)
  }

  setDesactivateNextLesson (indexCurrentLesson) {
    let myExpression = ''
    let buttonName = 'btnToR'
    let lessonName = ''

    for (let i = indexCurrentLesson + 1; i < this.allLesson.length; i++) {
      lessonName = strUcFirst(strReplaceAll(this.allLesson[i], '-', ''))
      myExpression = `${buttonName}${lessonName}.setAttribute('disabled', 'disabled')`
      eval(myExpression)
    }
  }

  setActivateNextLesson (indexCurrentLesson) {
    let myExpression = ''
    let buttonName = 'btnToR'
    let lessonName = ''

    if (indexCurrentLesson < this.allLesson.length) {
      lessonName = strUcFirst(strReplaceAll(this.allLesson[indexCurrentLesson + 1], '-', ''))

      myExpression = `${buttonName}${lessonName}.removeAttribute('disabled')`
      eval(myExpression)
    }
  }

  setAllLesson () {
    this.allLesson.push('h-a-i-u-e-o')
    this.allLesson.push('h-ka-ki-ku-ke-ko')
    this.allLesson.push('h-sa-shi-su-se-so')
    this.allLesson.push('h-ta-chi-tsu-te-to')
    this.allLesson.push('h-na-ni-nu-ne-no')
    this.allLesson.push('h-ha-hi-fu-he-ho')
    this.allLesson.push('h-ma-mi-mu-me-mo')
    this.allLesson.push('h-ya-yu-yo')
    this.allLesson.push('h-ra-ri-ru-re-ro')
    this.allLesson.push('h-wa-wo-n')
    this.allLesson.push('k-a-i-u-e-o')
    this.allLesson.push('k-ka-ki-ku-ke-ko')
    this.allLesson.push('k-sa-shi-su-se-so')
    this.allLesson.push('k-ta-chi-tsu-te-to')
    this.allLesson.push('k-na-ni-nu-ne-no')
    this.allLesson.push('k-ha-hi-fu-he-ho')
    this.allLesson.push('k-ma-mi-mu-me-mo')
    this.allLesson.push('k-ya-yu-yo')
    this.allLesson.push('k-ra-ri-ru-re-ro')
    this.allLesson.push('k-wa-wo-n')
  }

  lessonHaiueo (oneGuess) {
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

  lessonKaiueo (oneGuess) {
    this.title = 'katakana : a i u e o (deviner le romanji)'
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

  lessonHkakikukeko (oneGuess) {
    this.title = 'hiragana : ka ki ku ke ko (deviner le romanji)'
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

  lessonKkakikukeko (oneGuess) {
    this.title = 'katakana : kak ki ku ke ko (deviner le romanji)'
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

  lessonHsashisuseso (oneGuess) {
    this.title = 'hiragana : sa shi su se so (deviner le romanji)'
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

  lessonKsashisuseso (oneGuess) {
    this.title = 'katakana : sa shi su se so (deviner le romanji)'
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

  lessonHtachitsuteto (oneGuess) {
    this.title = 'hiragana : ta chi tsu te to (deviner le romanji)'
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

  lessonKtachitsuteto (oneGuess) {
    this.title = 'katakana : ta chi tsu te to (deviner le romanji)'
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

  hTolessonHnaninuneno (oneGuess) {
    this.title = 'hiragana : na ni nu ne no (deviner le romanji)'
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

  hTolessonKnaninuneno (oneGuess) {
    this.title = 'katakana : na ni nu ne no (deviner le romanji)'
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

  hTolessonHhahifuheho (oneGuess) {
    this.title = 'hiragana : ha hi fu he ho (deviner le romanji)'
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

  hTolessonKhahifuheho (oneGuess) {
    this.title = 'katakana : ha hi fu he ho (deviner le romanji)'
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

  hTolessonHmamimumemo (oneGuess) {
    this.title = 'hiragana : ma mi mu me mo (deviner le romanji)'
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

  hTolessonKmamimumemo (oneGuess) {
    this.title = 'katakana : ma mi mu me mo (deviner le romanji)'
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

  hTolessonHyayuyo (oneGuess) {
    this.title = 'hiragana : ya yu yo (deviner le romanji)'
    this.nbChoice = 3
    this.init()

    this.kanaToStudy.push(new Kana('h', 'ya'))
    this.kanaToStudy.push(new Kana('h', 'yu'))
    this.kanaToStudy.push(new Kana('h', 'yo'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  hTolessonKyayuyo (oneGuess) {
    this.title = 'katakana : ya yu yo (deviner le romanji)'
    this.nbChoice = 3
    this.init()

    this.kanaToStudy.push(new Kana('k', 'ya'))
    this.kanaToStudy.push(new Kana('k', 'yu'))
    this.kanaToStudy.push(new Kana('k', 'yo'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  hTolessonHrarirurero (oneGuess) {
    this.title = 'hiragana : ra ri ru re ro (deviner le romanji)'
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

  hTolessonKrarirurero (oneGuess) {
    this.title = 'katakana : ra ri ru re ro (deviner le romanji)'
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

  hTolessonHwawon (oneGuess) {
    this.title = 'hiragana : wa wo n (deviner le romanji)'
    this.nbChoice = 3
    this.init()

    this.kanaToStudy.push(new Kana('h', 'wa'))
    this.kanaToStudy.push(new Kana('h', 'wo'))
    this.kanaToStudy.push(new Kana('h', 'n'))

    this.writeChoice()
    oneGuess.guessKana(this)
  }

  hTolessonKwawon (oneGuess) {
    this.title = 'katakana : wa wo n (deviner le romanji)'
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
