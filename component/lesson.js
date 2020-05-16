// TODO MMA ces imports ne servent pas
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
  displayScreenLesson,
  displayWhatToGuess
} from '../js/menu.js'

import {
  nextRandom,
  strUcFirst,
  strReplaceAll,
  setStringWithArray,
  getStatusLessonInStorage,
  disableButton,
  enableButton,
  setLessonTitle,
  setStatusLessonInStorage
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
  countdown
} from '../js/timerCountDown.js'

class Lesson {
  constructor () {
    this.title = ''
    // possible values : learned / simple (next : selected)
    this.type = ''
    this.code = ''
    this.nbChoice = 0
    this.kanaToStudy = []
    this.play = 0
    this.playAllowed = 20
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
    // TODO MMA tu créer directement un tableau
    // this.allLesson = [
    // 'h-a-i-u-e-o',
    // 'h-ka-ki-ku-ke-ko']
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
    // TODO MMA penses à utiliser des methodes qui existent deja ici findIndex
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
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
    this.play = 0
    this.success = 0
    this.pourcentageReussite = 0
  }

  makePourcentage () {
    this.pourcentageReussite = this.success / this.playAllowed * 100
  }

  stop () {
    const info = document.getElementById('info')
    let indexLesson
    let nextLesson = ''
    let statusNextLesson

    this.makePourcentage()
    info.innerText += ` - success : ${this.pourcentageReussite}% - ${this.success}/${this.playAllowed}`
    if (this.pourcentageReussite === 100) {
      if (this.type === 'simple') {
        this.status = 'done'

        setStatusLessonInStorage(this.code, this.status)

        indexLesson = this.getIndexLesson()
        nextLesson = this.getNextLesson(indexLesson)
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
    let lessonName = ''
    let statusLessonInStorage = ''

    for (let i = 0; i < this.allLesson.length; i++) {
      statusLessonInStorage = getStatusLessonInStorage(this.allLesson[i])

      if (statusLessonInStorage === 'done' || statusLessonInStorage === 'inprogress') {
        lessonName = strUcFirst(strReplaceAll(this.allLesson[i], '-', ''))
        btnName = `btnGuess${lessonName}`
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
          //TODO MMA attention, tu as definis deux fois la variable i
          for (let i = 1; i < arrayCode.length; i++) {
            arrayResult.push(arrayCode[i])
          }
        }
      }
    }

    if (arrayResult.length > 0) {
      //TODO MMA tu peux utiliser la syntaxe template literals plus lisible
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
      // result = `${kana}- ${setStringWithArray(arrayResult, '-')}`
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

  launchLesson (typeLesson, lessonText, oneGuess) {
    const info = document.getElementById('info')
    let arrayToWrite = []

    displayScreenLesson()

    // prepare lesson
    this.code = lessonText
    this.title = setLessonTitle(this.code)
    this.type = typeLesson

    this.init()

    this.makeLesson()

    this.nbChoice = this.kanaToStudy.length
    // menu all learned
    if (this.nbChoice > 5) {
      this.nbChoice = 5
    }

    this.initDisplay()

    // reset timer
    countdown.reset()
    countdown.start()

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
      // todo : ne pas créer les choice si kana === 0, il faut les suprimer ici
      deleteChoice(this.nbChoice)
      info.innerText = 'pas de kana à étudier !'
    }
  }

  complete () {
    const info = document.getElementById('info')
    let indexLesson
    let nextLesson = ''

    this.makePourcentage()
    info.innerText += ` - success : ${this.pourcentageReussite}% - ${this.success}/${this.playAllowed}`
    if (this.pourcentageReussite === 100) {
      if (this.type === 'simple') {
        this.status = 'done'

        setStatusLessonInStorage(this.code, this.status)

        indexLesson = this.getIndexLesson(this.code)
        nextLesson = this.getNextLesson(indexLesson)
        setStatusLessonInStorage(nextLesson, 'inprogress')
      } else {
        // nothing, only simple lesson are "done"
      }
      this.displayButtonLesson()
    }
    this.stop()
  }

}

export {
  Lesson
}
