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
    let localStorageDoneName = `oneLesson${strUcFirst(this.setCodeSimple())}Done`

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

console.log(localStorageDoneName)

    // si localstoragedone est true, le laisser à true
    // if (typeof (eval (localStorageDoneName)) === 'undefined') {
    try {
      if (eval (localStorageDoneName) === true) {
        console.log ('truuuuuuuuue')
      } else {
        console.log ('le passer à false')
      }
    } catch (e) {
      console.log(`la variable n'existe pas !`)
    }

    // sinon le passer à false

  }

  stop () {
    this.kanaToStudy = []
    this.play = 0
    this.success = 0
    this.pourcentageReussite = 0

    this.disableChoice()
  }

  setCodeSimple () {
    const arrayCode = this.code.split('-')
    let codeSimple = ''

    for (let i = 0; i < arrayCode.length; i++) {
      codeSimple += arrayCode[i]
    }
    return codeSimple
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

  makeLesson () {
    const arrayCode = this.code.split('-')

    for (let i = 1; i < arrayCode.length; i++) {
      this.kanaToStudy.push(new Kana(arrayCode[0], arrayCode[i]))
    }
  }

  setLessonTitle () {
    const arrayCode = this.code.split('-')
    let lesson = ''

    if (arrayCode[0] === 'h') {
      lesson = 'hiragana : '
    } else {
      lesson = 'katakana : '
    }

    for (let i = 1; i < arrayCode.length; i++) {
      lesson += arrayCode[i] + ' '
    }

    this.title = `${lesson} (deviner le romanji)`
  }

  launchLesson (lessonText, oneGuess) {
    this.code = lessonText
    this.setLessonTitle()

    this.displayButtonLesson()
    this.nbChoice = 5
    this.init()

    this.makeLesson()
    this.writeChoice()

    oneGuess.init(this)
    oneGuess.guessKana(this)
  }
}

export {
  Lesson
}
