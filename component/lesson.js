import {
  colorClearButton,
  colorTrueButton,
  colorFalseButton,
  colorActivatedMenu,
  colorTextMenuOn,
  colorTextMenuOff
} from '../index.js'

import { Kana } from './kana.js'
import { Guess } from './guess.js'

import {
  strUcFirst,
  strReplaceAll,
  setStringWithoutCar
} from '../js/helpers.js'

import {
  writeChoice,
  disableChoice,
  enableChoice,
  deleteChoice,
  clearChoice,
  eraseChoice,
  displayCorrectNumberOfChoice
} from '../js/choice.js'

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
    const statusLessonDoneInStorage = this.getStatusCurrentLesson(this.code)

    kanaImg.setAttribute('src', '')
    info.innerText = ''

    this.kanaToStudy = []
    this.play = 0
    this.success = 0
    this.pourcentageReussite = 0

    this.initPourcentage()

    deleteChoice(this.nbChoice)
    clearChoice(this.nbChoice)
    enableChoice(this.nbChoice)
    displayCorrectNumberOfChoice(this.nbChoice)

    if (statusLessonDoneInStorage === 'true') {
      // lesson is done, keep it done
      this.done = true
    } else {
      // init done to false by default
      this.done = false
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

  initPourcentage () {
    this.play = 0
    this.success = 0
    this.pourcentageReussite = 0
  }

  makePourcentage () {
    this.pourcentageReussite = this.success / this.playAllowed * 100
  }

  stop () {
    this.kanaToStudy = []
    this.play = 0
    this.success = 0
    this.pourcentageReussite = 0

    disableChoice(this.nbChoice)
  }

  displayButtonLesson () {
    this.setDisableAllLessons()
    this.setActivateLessons()
    this.setActivateNextLesson()
  }

  setDisableAllLessons () {
    let myExpression = ''
    const buttonName = 'btnToR'
    let lessonName = ''
    let statusLessonDoneInStorage

    for (let i = 0; i < this.allLesson.length; i++) {
      statusLessonDoneInStorage = this.getStatusCurrentLesson(this.allLesson[i])

      lessonName = strUcFirst(strReplaceAll(this.allLesson[i], '-', ''))

      myExpression = `${buttonName}${lessonName}.style.pointerEvents = 'none'`
      eval(myExpression)
      myExpression = `${buttonName}${lessonName}.style.color = '${colorTextMenuOff}'`
      eval(myExpression)
    }
  }

  setActivateLessons () {
    let myExpression = ''
    let buttonName = 'btnToR'
    let lessonName = ''
    let statusLessonDoneInStorage = ''

    for (let i = 0; i < this.allLesson.length; i++) {
      statusLessonDoneInStorage = this.getStatusCurrentLesson(this.allLesson[i])
      // info : localstorage is string
      if (statusLessonDoneInStorage === 'true') {
        lessonName = strUcFirst(strReplaceAll(this.allLesson[i], '-', ''))

        myExpression = `${buttonName}${lessonName}.style.pointerEvents = 'auto'`
        eval(myExpression)
        myExpression = `${buttonName}${lessonName}.style.color = '${colorTextMenuOn}'`
        eval(myExpression)
      }
    }
  }

  setActivateNextLesson () {
    let statusLessonDoneInStorage = ''
    let idLastLessonTrue

    for (let i = 0; i < this.allLesson.length; i++) {
      statusLessonDoneInStorage = this.getStatusCurrentLesson(this.allLesson[i])
      // info : localstorage is string
      if (statusLessonDoneInStorage === 'true') {
        idLastLessonTrue = i
      }
    }

    if (idLastLessonTrue + 1 < this.allLesson.length) {
      this.setActivateCurrentLesson(idLastLessonTrue + 1)
    }
  }

  setActivateCurrentLesson (indexCurrentLesson) {
    let myExpression = ''
    const buttonName = 'btnToR'
    const lessonName = strUcFirst(strReplaceAll(this.allLesson[indexCurrentLesson], '-', ''))

    myExpression = `${buttonName}${lessonName}.style.pointerEvents = 'auto'`
    eval(myExpression)
    myExpression = `${buttonName}${lessonName}.style.color = '${colorTextMenuOn}'`
    eval(myExpression)
}

  getStatusCurrentLesson (code) {
    const localStorageDoneName = `oneLesson${strUcFirst(setStringWithoutCar(code, '-'))}Done`
    const statusLessonDoneInStorage = localStorage.getItem(localStorageDoneName)
    return statusLessonDoneInStorage
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

    this.nbChoice = 5
    this.init()

    this.displayButtonLesson()

    this.makeLesson()
    if (this.kanaToStudy.length <= 5) {
      writeChoice(this.nbChoice, this.kanaToStudy)
    } else {
      eraseChoice(this.nbChoice, this.kanaToStudy)
    }

    oneGuess.init(this)
    oneGuess.guessKana(this)
  }
}

export {
  Lesson
}
