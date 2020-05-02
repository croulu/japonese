// kana === hiragana or katagana
// romanji === latin alphabet

import {} from './js/menu.js'
import { oneLesson } from './js/init.js'

const colorClearButton = '#B8B8B8'
const colorTrueButton = '#16ca52'
const colorFalseButton = '#ca2716'

const colorActivatedMenu = '#e0762f'
const colorTextMenuOn = '#FFFFFF'
const colorTextMenuOff = '#000000'

oneLesson.displayButtonLesson()

export {
  colorClearButton,
  colorTrueButton,
  colorFalseButton,
  colorActivatedMenu,
  colorTextMenuOn,
  colorTextMenuOff
}
