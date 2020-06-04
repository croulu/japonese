import {
  colorClearButton,
  colorTrueButton,
  colorFalseButton,
  colorActivatedMenu,
  colorTextMenuOn,
  colorTextMenuOff
} from '../index.js'

import { Kana } from './kana.js'

import {
  displayPlayItem,
  notDisplayPlayItem,
  displayWhatToGuess
} from '../js/menu.js'

import {
  nextRandom,
  strUcFirst,
  strReplaceAll,
  setStringWithArray,
  getStatusLessonInStorage,
  setStatusLessonInStorage,
  disableButton,
  enableButton,
  setLessonTitle,
  setLastLessonPlayed
} from '../js/helpers.js'

import {
  writeChoice,
  writeChoiceMoreThanNbChoicePossible,
  randomizeChoice,
  disableChoice,
  deleteChoice,
  eraseChoice,
  displayButtonChoice
} from '../js/choice.js'

import {
  resetCountdown,
  stopCountdown
} from '../js/timerCountDown.js'

class Lesson {
  constructor () {
    this.title = ''
    // possible values : learned / simple (next : selected)
    this.type = ''
    this.code = ''
    this.nbChoice = 0
    this.kanaToStudy = []
    this.toplay = 0
    this.played = 0
    this.success = 0
    this.pourcentageReussite = 0
    this.status = 'todo'
    this.allLesson = []
  }

  init () {
    let info = document.getElementById('info')
    const statusLessonInStorage = getStatusLessonInStorage(this.code)

    info.innerText = ''

    this.kanaToStudy = []
    this.toplay = 0
    this.played = 0
    this.success = 0
    this.pourcentageReussite = 0
    this.guessWhat = nextRandom(2)

    this.initPourcentage()

    if (statusLessonInStorage !== '') {
      this.status = statusLessonInStorage
    } else {
      this.status = 'todo'
    }
  }

  initDisplay () {
    displayButtonChoice(this.nbChoice)
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
    this.allLesson.push('h-ga-gi-gu-ge-go')
    this.allLesson.push('h-za-ji-zu-ze-zo')
    this.allLesson.push('h-da-dzi-dzu-de-do')
    this.allLesson.push('h-ba-bi-bu-be-bo')
    this.allLesson.push('h-pa-pi-pu-pe-po')
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
    this.allLesson.push('k-ga-gi-gu-ge-go')
    this.allLesson.push('k-za-ji-zu-ze-zo')
    this.allLesson.push('k-da-dzi-dzu-de-do')
    this.allLesson.push('k-ba-bi-bu-be-bo')
    this.allLesson.push('k-pa-pi-pu-pe-po')
  }

  getIndexLesson () {
    for (let i = 0; i < this.allLesson.length; i++) {
      if (this.allLesson[i] === this.code) {
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
    this.played = 0
    this.success = 0
    this.pourcentageReussite = 0
  }

  makePourcentage () {
    const pourcentage = (this.success / this.played) * 100
    this.pourcentageReussite = Math.floor(pourcentage)
  }

  infoFinished () {
    const finished = ` - success : ${this.pourcentageReussite}% - ${this.success}/${this.played}`
    return finished
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
      btnName = `btnGuess${lessonName}`
      disableButton(btnName)
    }
  }

  setActivateLessons () {
    let btnName = ''
    let lockName = ''
    let lessonName = ''
    let statusLessonInStorage = ''

    for (let i = 0; i < this.allLesson.length; i++) {
      statusLessonInStorage = getStatusLessonInStorage(this.allLesson[i])

      if (statusLessonInStorage === 'done' || statusLessonInStorage === 'inprogress') {
        lessonName = strUcFirst(strReplaceAll(this.allLesson[i], '-', ''))
        btnName = `btnGuess${lessonName}`
        lockName = `lockGuess${lessonName}`
        enableButton(btnName, lockName)
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

  getNbDoneLessons () {
    let statusLessonInStorage = ''
    let nb = 0

    for (let i = 0; i < this.allLesson.length; i++) {
      statusLessonInStorage = getStatusLessonInStorage(this.allLesson[i])
      if (statusLessonInStorage === 'done') {
        nb++
      }
    }
    return nb
  }

  makeLesson () {
    const arrayCode = this.code.split('-')

    for (let i = 1; i < arrayCode.length; i++) {
      this.kanaToStudy.push(new Kana(arrayCode[0], arrayCode[i]))
    }
  }

  launchLesson (typeLesson, lessonText, oneGuess) {
console.log(`launchLesson ${typeLesson}, ${lessonText}`)
    const info = document.getElementById('info')
    let arrayToWrite = []

    displayPlayItem()

    // prepare lesson
    this.code = lessonText
    this.type = typeLesson
    this.title = setLessonTitle(this.type, this.code)

console.log(`this title === ${this.title}`)

    this.init()

    this.makeLesson()

    this.nbChoice = this.kanaToStudy.length
    // menu all learned
    if (this.nbChoice > 5) this.nbChoice = 5

    this.initDisplay()

    setLastLessonPlayed(this.code, this.type, 'current')

    resetCountdown(this)

    // launch lesson
    if (this.kanaToStudy.length > 0) {
      oneGuess.init(this)

      arrayToWrite = randomizeChoice(this.guessWhat, this.kanaToStudy)
      oneGuess.writeChoiceTrueFalse(arrayToWrite)

      if (this.kanaToStudy.length <= 5) {
        writeChoice(oneGuess.guessWhat, this.nbChoice, arrayToWrite)
      } else {
        // write choice if number of kana to guess > of nb of choice
        // need  oneGuess.init to display the true choice
        eraseChoice(oneGuess.guessWhat, this.nbChoice, this.kanaToStudy)
        arrayToWrite = writeChoiceMoreThanNbChoicePossible(oneGuess.guessWhat, this.nbChoice, arrayToWrite, oneGuess.choiceTrueIndex)
        oneGuess.writeChoiceTrueFalse(arrayToWrite)
      }

      oneGuess.guessKana(this)
      displayWhatToGuess(oneGuess.guessWhat)
    } else {
      info.innerText = 'pas de kana à étudier !'
      // todo : ne pas créer les choice si kana === 0, il faut les suprimer ici
      deleteChoice(this.nbChoice)
      stopCountdown()
      notDisplayPlayItem()
    }
  }

  stop () {
    const info = document.getElementById('info')
    let indexLesson
    let nextLesson = ''
    let statusNextLesson

    this.makePourcentage()

    info.innerText += this.infoFinished()

    stopCountdown()

    if (this.pourcentageReussite === 100) {
      if (this.type === 'simple') {
        this.status = 'done'

        setStatusLessonInStorage(this.code, this.status)
        indexLesson = this.getIndexLesson()
        nextLesson = this.getNextLesson(indexLesson)
        setLastLessonPlayed(this.code, 'simple', nextLesson)
        statusNextLesson = getStatusLessonInStorage(nextLesson)

        if (statusNextLesson === 'done') {
          // keep it done
        } else {
          setStatusLessonInStorage(nextLesson, 'inprogress')
        }
      } else {
        // nothing, only simple lesson are "done"
      }
      this.displayButtonLesson()
    }
    disableChoice(this.nbChoice)
  }
}

export {
  Lesson
}
