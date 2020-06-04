
import {
  colorClearButton,
  colorTrueButton,
  colorFalseButton,
  colorActivatedMenu,
  colorTextMenuOn,
  colorTextMenuOff
} from '../index.js'

function nextRandom (number) {
  const iRandom = getRandomInt(number)
  return iRandom
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function fnCall (fn, ...args) {
  const func = (typeof fn === 'string') ? window[fn] : fn
  if (typeof func === 'function') func(...args)
  else throw new Error(`${fn} is Not a function!`)
}

function strUcFirst (a) {
  return (a + '').charAt(0).toUpperCase() + a.substr(1)
}

function strReplaceAll (myString, stringToReplace, stringToUse) {
  return myString.replace(new RegExp(stringToReplace, 'g'), stringToUse)
}

function setStringWithoutCar (stringToReplace, car) {
  const arrayString = stringToReplace.split(car)
  let result = ''

  for (let i = 0; i < arrayString.length; i++) {
    result += arrayString[i]
  }

  return result
}

function randomize (arr) {
  for (let i = 0; i < arr.length; i++) {
    const random = Math.floor(Math.random() * arr.length);
    [arr[i], arr[random]] = [arr[random], arr[i]]
  }

  return arr
}

function setStringWithArray (myArray, separator) {
  let result = ''
  for (let i = 0; i < myArray.length; i++) {
    result += myArray[i]
    if (i < myArray.length - 1) {
      result += separator
    }
  }
  return result
}

function getInStorage (name) {
  const inStorage = localStorage.getItem(name)
  return inStorage
}

function setInStorage (name, value) {
  localStorage.setItem(name, value)
}

function getStatusLessonInStorage (code) {
  const localStorageName = `oneLesson${strUcFirst(setStringWithoutCar(code, '-'))}Status`
  const result = localStorage.getItem(localStorageName)
  return result
}

function setStatusLessonInStorage (code, status) {
  const localStorageName = `oneLesson${strUcFirst(setStringWithoutCar(code, '-'))}Status`
  localStorage.setItem(localStorageName, status)
}

function disableButton (name) {
  let myExpression = ''

  myExpression = `${name}.style.pointerEvents = 'none'`
  eval(myExpression)
  myExpression = `${name}.style.color = '${colorTextMenuOff}'`
  eval(myExpression)
}

function enableButton (buttonName, lockName) {
  let myExpression = ''
  const lockGuess = document.getElementById(lockName)

  myExpression = `${buttonName}.style.pointerEvents = 'auto'`
  eval(myExpression)
  myExpression = `${buttonName}.style.color = '${colorTextMenuOn}'`
  eval(myExpression)

  lockGuess.src = ''
}

function setLessonTitle (type, code) {
  let result

  if (code !== null) {
    const arrayCode = code.split('-')

    if (arrayCode[0] === 'h') {
      result = 'hiragana : '
    } else if (arrayCode[0] === 'k') {
      result = 'katakana : '
    } else {
      result = code
    }

    if (type === 'learned') {
      result += 'all learned'
    } else {
      // simple
      for (let i = 1; i < arrayCode.length; i++) {
        result += arrayCode[i] + ' '
      }
    }
  } else {
    result = ''
  }

console.log(`result === ${result}`)

  return result
}

function setLastLessonPlayed (code, type, lesson) {
  if (lesson === 'current') {
    lesson = code
  }

  setInStorage('oneLessonLastLessonName', lesson)
  setInStorage('oneLessonLastLessonType', type)
}

function setInitLessons () {
  let arrayInitLesson = []

  arrayInitLesson.push('h-a-i-u-e-o')
  arrayInitLesson.push('k-a-i-u-e-o')

  for (let i = 0; i < arrayInitLesson.length; i++) {
    setStatusLessonInStorage(arrayInitLesson[i], 'inprogress')
  }
}

export {
  nextRandom,
  strUcFirst,
  strReplaceAll,
  setStringWithoutCar,
  randomize,
  setStringWithArray,
  getInStorage,
  setInStorage,
  getStatusLessonInStorage,
  setStatusLessonInStorage,
  disableButton,
  enableButton,
  setLessonTitle,
  setLastLessonPlayed,
  setInitLessons
}
