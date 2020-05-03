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
  displayScreenLesson
} from '../js/menu.js'

import {
  strUcFirst,
  strReplaceAll,
  setStringWithArray,
  getStatusLessonInStorage,
  disableButton,
  enableButton
} from '../js/helpers.js'

import {
  writeChoice,
  writeChoiceMoreThanNbChoicePossible,
  disableChoice,
  enableChoice,
  deleteChoice,
  clearChoice,
  eraseChoice,
  displayCorrectNumberOfChoice
} from '../js/choice.js'

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
    this.status = 'todo'
    this.allLesson = []
  }

  init () {
    let kanaImg = document.getElementById('kanaImg')
    let info = document.getElementById('info')
    const statusLessonInStorage = getStatusLessonInStorage(this.code)

    kanaImg.setAttribute('src', '')
    info.innerText = ''

    this.kanaToStudy = []
    this.play = 0
    this.success = 0
    this.pourcentageReussite = 0

    this.initPourcentage()

    if (statusLessonInStorage !== '') {
      this.status = statusLessonInStorage
    } else {
      this.status = 'todo'
    }

    deleteChoice(this.nbChoice)
    clearChoice(this.nbChoice)
    enableChoice(this.nbChoice)
    displayCorrectNumberOfChoice(this.nbChoice)

    this.displayButtonLesson()
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

  getIndexLesson (code) {
    for (let i = 0; i < this.allLesson.length; i++) {
      if (this.allLesson[i] === code) {
        return i
      }
    }
  }

  getNextLesson (i) {
    let code = ''
    if (i < this.allLesson.length) {
      code = this.allLesson[i + 1]
    }
    return code
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
  }

  setDisableAllLessons () {
    let btnName = ''
    let lessonName = ''

    for (let i = 0; i < this.allLesson.length; i++) {
      lessonName = strUcFirst(strReplaceAll(this.allLesson[i], '-', ''))
      btnName = `btnToR${lessonName}`
      disableButton(btnName)
    }
  }

  setActivateLessons () {
    let btnName = ''
    let lessonName = ''
    let statusLessonInStorage = ''

    for (let i = 0; i < this.allLesson.length; i++) {
      statusLessonInStorage = getStatusLessonInStorage(this.allLesson[i])

      if (statusLessonInStorage === 'done' || statusLessonInStorage === 'inprogress') {
        lessonName = strUcFirst(strReplaceAll(this.allLesson[i], '-', ''))
        btnName = `btnToR${lessonName}`
        enableButton(btnName)
      }
    }
  }

  getAllLearnedLessonsInString (kana) {
    let arrayResult = []
    let statusLessonInStorage
    let arrayCode = []
    let result = ''

    for (let i = 0; i < this.allLesson.length; i++) {
      statusLessonInStorage = getStatusLessonInStorage(this.allLesson[i])

      if (statusLessonInStorage === 'done') {
        arrayCode = this.allLesson[i].split('-')
        if (arrayCode[0] === kana) {
          for (let i = 1; i < arrayCode.length; i++) {
            arrayResult.push(arrayCode[i])
          }
        }
      }
    }

    if (arrayResult.length > 0) {
      result = kana + '-'
      result += setStringWithArray(arrayResult, '-')
    }

    return result
  }

  getNbTrueLessons () {
    let statusLessonInStorage = ''
    let nbTrueLesson = 0

    for (let i = 0; i < this.allLesson.length; i++) {
      statusLessonInStorage = getStatusLessonInStorage(this.allLesson[i])
      if (statusLessonInStorage === 'true') {
        nbTrueLesson++
      }
    }
    return nbTrueLesson
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
    const info = document.getElementById('info')

    let arrayToWrite = []

    // display screen of the lesson
    displayScreenLesson()

    // prepare lesson
    this.code = lessonText
    this.setLessonTitle()

    this.nbChoice = 5
    this.init()

    this.makeLesson()

    // launch lesson
    if (this.kanaToStudy.length > 0) {
      if (this.kanaToStudy.length <= 5) {
        writeChoice(this.nbChoice, this.kanaToStudy)
      } else {
        eraseChoice(this.nbChoice, this.kanaToStudy)
      }

      oneGuess.init(this)

      // write choice if number of kana to guess > of nb of choice
      // need  oneGuess.init to display the true choice
      if (this.kanaToStudy.length > 5) {
        arrayToWrite = writeChoiceMoreThanNbChoicePossible(this.nbChoice, this.kanaToStudy, oneGuess.choiceTrueIndex)
        oneGuess.writeChoiceTrueFalse(arrayToWrite)
      }

      oneGuess.guessKana(this)
    } else {
      // todo : ne pas créer les choice si kana === 0, il faut les suprimer ici
      deleteChoice(this.nbChoice)
      info.innerText = 'pas de kana à étudier !'
    }
  }
}

export {
  Lesson
}
