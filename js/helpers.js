
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

function getStatusLessonInStorage (code) {
  const localStorageName = `oneLesson${strUcFirst(setStringWithoutCar(code, '-'))}Status`
  const inStorage = localStorage.getItem(localStorageName)
  return inStorage
}

function setStatusLessonInStorage (code, status) {
  const localStorageName = `oneLesson${strUcFirst(setStringWithoutCar(code, '-'))}Status`
  localStorage.setItem(localStorageName, status)
}

function getLastLessonInStorage () {
  const localStorageName = 'oneLessonLastLesson'
  const inStorage = localStorage.getItem(localStorageName)
  return inStorage
}

function setLastLessonInStorage (code) {
  const localStorageName = 'oneLessonLastLesson'
  localStorage.setItem(localStorageName, code)
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

function setLessonTitle (code) {
  let result
  if (code !== null) {
    const arrayCode = code.split('-')
  
    if (arrayCode[0] === 'h') {
      result = 'hiragana : '
    } else {
      result = 'katakana : '
    }
  
    for (let i = 1; i < arrayCode.length; i++) {
      result += arrayCode[i] + ' '
    }
  } else {
    result = ''
  }

  return result
}

export {
  nextRandom,
  strUcFirst,
  strReplaceAll,
  setStringWithoutCar,
  randomize,
  setStringWithArray,
  getStatusLessonInStorage,
  setStatusLessonInStorage,
  getLastLessonInStorage,
  setLastLessonInStorage,
  disableButton,
  enableButton,
  setLessonTitle
}
