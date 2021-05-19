import { Kana } from './kana.js'
import { Menu } from './menu.js'
import { ChoiceGroup } from './choiceGroup.js'

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
    const info = document.getElementById('info')
    const statusLessonInStorage = getStatusLessonInStorage(this.code)

    info.innerText += ''

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

  initDisplay (oneChoiceGgroup) {
    oneChoiceGgroup.displayButtonChoice(this.nbChoice)
    //this.displayButtonLesson()
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

  getLesson (i, wichOne) {
    let code = ''
    if (i < this.allLesson.length) {
      if (wichOne === 'next') {
        code = this.allLesson[i + 1]
      } else {
        code = this.allLesson[i]
      }
    }
    return code
  }

  initPourcentage () {
    this.played = 0
    this.success = 0
    this.pourcentageReussite = 0
  }

  makePourcentage () {
    const pourcentage = this.played === 0 ? 0 : (this.success / this.played) * 100
    this.pourcentageReussite = Math.floor(pourcentage)
  }

  displayPourcentage () {
    const finished = ` - success : ${this.pourcentageReussite}% - ${this.success}/${this.played}`
    return finished
  }

  displayButtonLesson () {
   // this.setDisableAllLessons()
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

      console.log(`${this.allLesson[i]} == ${statusLessonInStorage}`)

      if (statusLessonInStorage === 'done' || statusLessonInStorage === 'inprogress') {
        lessonName = strUcFirst(strReplaceAll(this.allLesson[i], '-', ''))
        btnName = `btnGuess${lessonName}`
        lockName = `lockGuess${lessonName}`
        enableButton(btnName, lockName)
      }
    }
  }

  getAllLearnedLessonsInString (kana) {
  // BUG TODO si pas de lesson learned -> draw plante
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

  prepareLesson (codeLesson, typeLesson) {
    this.code = codeLesson
    this.type = typeLesson
    this.title = setLessonTitle(this.type, this.code)

    this.init()

    this.makeLesson()

    this.nbChoice = this.kanaToStudy.length
    // menu all learned
    if (this.nbChoice > 5) this.nbChoice = 5
  }

  launchLesson (typeLesson, codeLesson, oneGuess) {

    const info = document.getElementById('info')
    let arrayToWrite = []

    const oneMenu = new Menu()
    oneMenu.displayPlayItem()

    this.prepareLesson(codeLesson, typeLesson)

    const oneChoiceGgroup = new ChoiceGroup(this.nbChoice)
    console.log(oneChoiceGgroup)
    // FIXME rend temporairement accessible oneChoiceGroup depuis l'extérieur
    this.oneChoiceGroup = oneChoiceGgroup
    this.initDisplay(oneChoiceGgroup)

    this.notDisplayButtonEndLesson()

    if (this.kanaToStudy.length > 0) {
      setLastLessonPlayed(this.code, this.type, 'current')

      resetCountdown(stopLesson, this, oneChoiceGgroup, oneGuess)

      oneGuess.init(this)

      arrayToWrite = oneChoiceGgroup.randomizeChoice(this.guessWhat, this.kanaToStudy)
      oneGuess.writeChoiceTrueFalse(arrayToWrite)

      if (this.kanaToStudy.length <= 5) {
        oneChoiceGgroup.writeChoice(oneGuess.guessWhat, arrayToWrite)
      } else {
        // write choice if number of kana to guess > of nb of choice
        // need  oneGuess.init to display the true choice
        oneChoiceGgroup.eraseChoice()
        arrayToWrite = oneChoiceGgroup.writeChoiceMoreThanNbChoicePossible(oneGuess.guessWhat, arrayToWrite, oneGuess.choiceTrueIndex)
        oneGuess.writeChoiceTrueFalse(arrayToWrite)
      }

      oneGuess.guessKana(this)
      oneMenu.displayWhatToGuess(oneGuess.guessWhat)

    } else {
      info.innerText = 'pas de kana à étudier !'
      // todo : ne pas créer les choice si kana === 0, il faut les suprimer ici
      oneChoiceGgroup.deleteChoice()
     stopCountdown()
      oneMenu.notDisplayPlayItem()
    }
  }

  launchLessonJustOneGuess (typeLesson, codeLesson, oneGuess) {
    let kana
    let drawKanaItem = document.getElementById('drawKanaItem')

    this.code = codeLesson
    this.type = typeLesson
    this.title = setLessonTitle(this.type, this.code)

    this.init()

    this.makeLesson()

    oneGuess.firstToGuess(this)

    console.log(oneGuess.kana.alphabet.toUpperCase())

    const specificImage = oneGuess.kana.alphabet.toUpperCase() + oneGuess.kana.letter
    const drawRomanjiItem = document.getElementById('drawRomanjiItem')

    drawRomanjiItem.innerHTML = oneGuess.kana.letter
    drawKanaItem.className = 'kanaAlphabet'

    drawRomanjiItem.addEventListener('click', kana = function () {
      drawKanaItem.className = `kanaAlphabet ${specificImage}`
     })
  }

  stop (oneChoiceGroup, oneGuess) {
    const info = document.getElementById('info')
    this.makePourcentage()
    info.innerText += this.displayPourcentage()

    this.displayReloadForward(oneGuess)

    oneChoiceGroup.disableChoice()
    this.displayButtonLesson()
  }

  displayReloadForward (oneGuess) {
    displayButtonReload(this, oneGuess)

    if (this.type === 'simple') {
      if (this.isLessonAlreadyDone()) {
        displayButtonForward(this, oneGuess)
      } else {
        if (this.isLessonDone()) {
          this.setlessonDone()
          displayButtonForward(this, oneGuess)
        } else if (this.isLessonDoneButNotEnough()) {
          this.displayLessonNotDone()
        }
      }
    }
  }

  setlessonDone () {
    const nextLesson = this.getCodeNextlesson()
    const statusNextLesson = getStatusLessonInStorage(nextLesson)

    this.status = 'done'
    setStatusLessonInStorage(this.code, this.status)

    setLastLessonPlayed(this.code, 'simple', nextLesson)

    if (statusNextLesson === 'done') {
      // keep it done
    } else {
      setStatusLessonInStorage(nextLesson, 'inprogress')
    }
  }

  isLessonAlreadyDone () {
    let result = false
    const indexLesson = this.getIndexLesson()
    const codeLesson = this.getLesson(indexLesson, 'current')
    const statusLesson = getStatusLessonInStorage(codeLesson)

    if (statusLesson === 'done') result = true

    return result
  }

  isLessonDone () {
    let result = false

    if (this.type === 'simple' && this.pourcentageReussite === 100 && this.isEnoughToSetDone()) {
      result = true
    }

    return result
  }

  isLessonDoneButNotEnough () {
    let result = false

    if (this.type === 'simple' && this.pourcentageReussite === 100 && !this.isEnoughToSetDone()) {
      result = true
    }

    return result
  }

  displayLessonNotDone () {
    const info = document.getElementById('info')
    info.innerText += ' - a minimum of 10 success is required to finish the lesson'
  }

  isEnoughToSetDone () {
    let isEnough = false
    if (this.success >= 10) {
      isEnough = true
    }
    return isEnough
  }

  getCodeNextlesson () {
    const indexLesson = this.getIndexLesson()
    const nextLesson = this.getLesson(indexLesson, 'next')
    return nextLesson
  }

  notDisplayButtonEndLesson () {
    const btnReload = document.getElementById('reload')
    const btnForward = document.getElementById('forward')

    btnReload.style.display = 'none'
    btnForward.style.display = 'none'
  }

  launchNextLesson (oneGuess) {
    this.launchLesson(this.type, this.getCodeNextlesson(), oneGuess)
  }

  launchCurrentLesson (oneGuess) {
    this.launchLesson(this.type, this.code, oneGuess)
  }
}

let funcNameReload = ''
let funcNameForward = ''

function displayButtonReload (oneLesson, oneGuess) {
  const btnReload = document.getElementById('reload')
  btnReload.style.display = 'block'
  if (funcNameReload !== '') btnReload.removeEventListener('click', funcNameReload)
  btnReload.addEventListener('click', funcNameReload = function () { oneLesson.launchCurrentLesson(oneGuess) })
}

function displayButtonForward (oneLesson, oneGuess) {
  const btnForward = document.getElementById('forward')
  btnForward.style.display = 'block'
  if (funcNameForward !== '') btnForward.removeEventListener('click', funcNameForward)
  btnForward.addEventListener('click', funcNameForward = function () { oneLesson.launchNextLesson(oneGuess) })
}

// to be invoked, must be out of a class
function stopLesson (oneLesson, oneChoiceGroup, oneGuess) {
  oneLesson.stop(oneChoiceGroup, oneGuess)
}

export {
  Lesson,
  stopLesson
}
