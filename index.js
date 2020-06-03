// kana === hiragana or katagana
// romanji === latin alphabet

import { oneLesson } from './js/init.js'
import {
  getLastLessonInStorage,
  setLessonTitle
} from './js/helpers.js'

const colorClearButton = '#f44336'
const colorTrueButton = '#16ca52'
const colorFalseButton = '#ca2716'

const colorActivatedMenu = '#e0762f'
const colorTextMenuOn = '#FFFFFF'
const colorTextMenuOff = '#000000'

const btnContinue = document.getElementById('btnContinue')
const lastLesson = getLastLessonInStorage()

btnContinue.innerText = setLessonTitle(lastLesson)

oneLesson.displayButtonLesson()

export {
  colorClearButton,
  colorTrueButton,
  colorFalseButton,
  colorActivatedMenu,
  colorTextMenuOn,
  colorTextMenuOff
}
