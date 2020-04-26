import {
  showKanaOrRomanji
} from '../index.js'

import {
  makeObjetKana
} from './helpers.js'

class Lesson {
  constructor () {
    this.choice = 0
  }
}

const oneLesson = new Lesson()

let arrayKana = []

function getOneKana (i) {
  return arrayKana[i]
}

function hToRA () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('h-a'))
  arrayKana.push(makeObjetKana('h-i'))
  arrayKana.push(makeObjetKana('h-u'))
  arrayKana.push(makeObjetKana('h-e'))
  arrayKana.push(makeObjetKana('h-o'))

  showKanaOrRomanji('kana')
}

function kToRA () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('k-a'))
  arrayKana.push(makeObjetKana('k-i'))
  arrayKana.push(makeObjetKana('k-u'))
  arrayKana.push(makeObjetKana('k-e'))
  arrayKana.push(makeObjetKana('k-o'))

  showKanaOrRomanji('kana')
}

function hToRK () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('h-ka'))
  arrayKana.push(makeObjetKana('h-ki'))
  arrayKana.push(makeObjetKana('h-ku'))
  arrayKana.push(makeObjetKana('h-ke'))
  arrayKana.push(makeObjetKana('h-ko'))

  showKanaOrRomanji('kana')
}

function kToRK () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('k-ka'))
  arrayKana.push(makeObjetKana('k-ka'))
  arrayKana.push(makeObjetKana('k-ka'))
  arrayKana.push(makeObjetKana('k-ka'))
  arrayKana.push(makeObjetKana('k-ka'))

  showKanaOrRomanji('kana')
}

function hToRS () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('h-sa'))
  arrayKana.push(makeObjetKana('h-shi'))
  arrayKana.push(makeObjetKana('h-su'))
  arrayKana.push(makeObjetKana('h-se'))
  arrayKana.push(makeObjetKana('h-so'))

  showKanaOrRomanji('kana')
}

function kToRS () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('k-sa'))
  arrayKana.push(makeObjetKana('k-shi'))
  arrayKana.push(makeObjetKana('k-si'))
  arrayKana.push(makeObjetKana('k-se'))
  arrayKana.push(makeObjetKana('k-so'))

  showKanaOrRomanji('kana')
}

function hToRT () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('h-ta'))
  arrayKana.push(makeObjetKana('h-chi'))
  arrayKana.push(makeObjetKana('h-tu'))
  arrayKana.push(makeObjetKana('h-te'))
  arrayKana.push(makeObjetKana('h-to'))

  showKanaOrRomanji('kana')
}

function kToRT () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('k-ta'))
  arrayKana.push(makeObjetKana('k-chi'))
  arrayKana.push(makeObjetKana('k-ti'))
  arrayKana.push(makeObjetKana('k-te'))
  arrayKana.push(makeObjetKana('k-to'))

  showKanaOrRomanji('kana')
}

function hToRN () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('h-na'))
  arrayKana.push(makeObjetKana('h-ni'))
  arrayKana.push(makeObjetKana('h-nu'))
  arrayKana.push(makeObjetKana('h-ne'))
  arrayKana.push(makeObjetKana('h-no'))

  showKanaOrRomanji('kana')
}

function kToRN () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('k-na'))
  arrayKana.push(makeObjetKana('k-ni'))
  arrayKana.push(makeObjetKana('k-ni'))
  arrayKana.push(makeObjetKana('k-ne'))
  arrayKana.push(makeObjetKana('k-no'))

  showKanaOrRomanji('kana')
}

function hToRH () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('h-ha'))
  arrayKana.push(makeObjetKana('h-hi'))
  arrayKana.push(makeObjetKana('h-hu'))
  arrayKana.push(makeObjetKana('h-he'))
  arrayKana.push(makeObjetKana('h-ho'))

  showKanaOrRomanji('kana')
}

function kToRH () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('k-ha'))
  arrayKana.push(makeObjetKana('k-hi'))
  arrayKana.push(makeObjetKana('k-hi'))
  arrayKana.push(makeObjetKana('k-he'))
  arrayKana.push(makeObjetKana('k-ho'))

  showKanaOrRomanji('kana')
}

function hToRM () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('h-ma'))
  arrayKana.push(makeObjetKana('h-mi'))
  arrayKana.push(makeObjetKana('h-mu'))
  arrayKana.push(makeObjetKana('h-me'))
  arrayKana.push(makeObjetKana('h-mo'))

  showKanaOrRomanji('kana')
}

function kToRM () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('k-ma'))
  arrayKana.push(makeObjetKana('k-mi'))
  arrayKana.push(makeObjetKana('k-mi'))
  arrayKana.push(makeObjetKana('k-me'))
  arrayKana.push(makeObjetKana('k-mo'))

  showKanaOrRomanji('kana')
}

function hToRY () {
  arrayKana = []

  oneLesson.choice = 3

  arrayKana.push(makeObjetKana('h-ya'))
  arrayKana.push(makeObjetKana('h-yu'))
  arrayKana.push(makeObjetKana('h-yo'))

  showKanaOrRomanji('kana')
}

function kToRY () {
  arrayKana = []

  oneLesson.choice = 3

  arrayKana.push(makeObjetKana('k-ya'))
  arrayKana.push(makeObjetKana('k-yu'))
  arrayKana.push(makeObjetKana('k-yo'))

  showKanaOrRomanji('kana')
}

function hToRR () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('h-ra'))
  arrayKana.push(makeObjetKana('h-ri'))
  arrayKana.push(makeObjetKana('h-ru'))
  arrayKana.push(makeObjetKana('h-re'))
  arrayKana.push(makeObjetKana('h-ro'))

  showKanaOrRomanji('kana')
}

function kToRR () {
  arrayKana = []

  oneLesson.choice = 5

  arrayKana.push(makeObjetKana('k-ra'))
  arrayKana.push(makeObjetKana('k-ri'))
  arrayKana.push(makeObjetKana('k-ri'))
  arrayKana.push(makeObjetKana('k-re'))
  arrayKana.push(makeObjetKana('k-ro'))

  showKanaOrRomanji('kana')
}

function hToRW () {
  arrayKana = []

  oneLesson.choice = 3

  arrayKana.push(makeObjetKana('h-wa'))
  arrayKana.push(makeObjetKana('h-wo'))
  arrayKana.push(makeObjetKana('h-n'))

  showKanaOrRomanji('kana')
}

function kToRW () {
  arrayKana = []

  oneLesson.choice = 3

  arrayKana.push(makeObjetKana('k-wa'))
  arrayKana.push(makeObjetKana('k-wo'))
  arrayKana.push(makeObjetKana('k-n'))

  showKanaOrRomanji('kana')
}

export {
  Lesson,
  oneLesson,
  getOneKana,
  arrayKana,
  hToRA,
  kToRA,
  hToRK,
  kToRK,
  hToRS,
  kToRS,
  hToRT,
  kToRT,
  hToRN,
  kToRN,
  hToRH,
  kToRH,
  hToRM,
  kToRM,
  hToRY,
  kToRY,
  hToRR,
  kToRR,
  hToRW,
  kToRW
}
