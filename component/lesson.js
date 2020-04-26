import {
  showKanaOrRomanji
} from '../index.js'

import {
  makeObjetKana
} from '../js/helpers.js'

class Lesson {
  constructor () {
    this.choice = 0
    this.kanaToStudy = []
  }

  getOneKana (i) {
    return this.kanaToStudy[i]
  }

  hToRA () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('h-a'))
    this.kanaToStudy.push(makeObjetKana('h-i'))
    this.kanaToStudy.push(makeObjetKana('h-u'))
    this.kanaToStudy.push(makeObjetKana('h-e'))
    this.kanaToStudy.push(makeObjetKana('h-o'))

    showKanaOrRomanji('kana')
  }

  kToRA () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('k-a'))
    this.kanaToStudy.push(makeObjetKana('k-i'))
    this.kanaToStudy.push(makeObjetKana('k-u'))
    this.kanaToStudy.push(makeObjetKana('k-e'))
    this.kanaToStudy.push(makeObjetKana('k-o'))

    showKanaOrRomanji('kana')
  }

  hToRK () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('h-ka'))
    this.kanaToStudy.push(makeObjetKana('h-ki'))
    this.kanaToStudy.push(makeObjetKana('h-ku'))
    this.kanaToStudy.push(makeObjetKana('h-ke'))
    this.kanaToStudy.push(makeObjetKana('h-ko'))

    showKanaOrRomanji('kana')
  }

  kToRK () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('k-ka'))
    this.kanaToStudy.push(makeObjetKana('k-ka'))
    this.kanaToStudy.push(makeObjetKana('k-ka'))
    this.kanaToStudy.push(makeObjetKana('k-ka'))
    this.kanaToStudy.push(makeObjetKana('k-ka'))

    showKanaOrRomanji('kana')
  }

  hToRS () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('h-sa'))
    this.kanaToStudy.push(makeObjetKana('h-shi'))
    this.kanaToStudy.push(makeObjetKana('h-su'))
    this.kanaToStudy.push(makeObjetKana('h-se'))
    this.kanaToStudy.push(makeObjetKana('h-so'))

    showKanaOrRomanji('kana')
  }

  kToRS () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('k-sa'))
    this.kanaToStudy.push(makeObjetKana('k-shi'))
    this.kanaToStudy.push(makeObjetKana('k-si'))
    this.kanaToStudy.push(makeObjetKana('k-se'))
    this.kanaToStudy.push(makeObjetKana('k-so'))

    showKanaOrRomanji('kana')
  }

  hToRT () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('h-ta'))
    this.kanaToStudy.push(makeObjetKana('h-chi'))
    this.kanaToStudy.push(makeObjetKana('h-tu'))
    this.kanaToStudy.push(makeObjetKana('h-te'))
    this.kanaToStudy.push(makeObjetKana('h-to'))

    showKanaOrRomanji('kana')
  }

  kToRT () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('k-ta'))
    this.kanaToStudy.push(makeObjetKana('k-chi'))
    this.kanaToStudy.push(makeObjetKana('k-ti'))
    this.kanaToStudy.push(makeObjetKana('k-te'))
    this.kanaToStudy.push(makeObjetKana('k-to'))

    showKanaOrRomanji('kana')
  }

  hToRN () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('h-na'))
    this.kanaToStudy.push(makeObjetKana('h-ni'))
    this.kanaToStudy.push(makeObjetKana('h-nu'))
    this.kanaToStudy.push(makeObjetKana('h-ne'))
    this.kanaToStudy.push(makeObjetKana('h-no'))

    showKanaOrRomanji('kana')
  }

  kToRN () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('k-na'))
    this.kanaToStudy.push(makeObjetKana('k-ni'))
    this.kanaToStudy.push(makeObjetKana('k-ni'))
    this.kanaToStudy.push(makeObjetKana('k-ne'))
    this.kanaToStudy.push(makeObjetKana('k-no'))

    showKanaOrRomanji('kana')
  }

  hToRH () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('h-ha'))
    this.kanaToStudy.push(makeObjetKana('h-hi'))
    this.kanaToStudy.push(makeObjetKana('h-hu'))
    this.kanaToStudy.push(makeObjetKana('h-he'))
    this.kanaToStudy.push(makeObjetKana('h-ho'))

    showKanaOrRomanji('kana')
  }

  kToRH () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('k-ha'))
    this.kanaToStudy.push(makeObjetKana('k-hi'))
    this.kanaToStudy.push(makeObjetKana('k-hi'))
    this.kanaToStudy.push(makeObjetKana('k-he'))
    this.kanaToStudy.push(makeObjetKana('k-ho'))

    showKanaOrRomanji('kana')
  }

  hToRM () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('h-ma'))
    this.kanaToStudy.push(makeObjetKana('h-mi'))
    this.kanaToStudy.push(makeObjetKana('h-mu'))
    this.kanaToStudy.push(makeObjetKana('h-me'))
    this.kanaToStudy.push(makeObjetKana('h-mo'))

    showKanaOrRomanji('kana')
  }

  kToRM () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('k-ma'))
    this.kanaToStudy.push(makeObjetKana('k-mi'))
    this.kanaToStudy.push(makeObjetKana('k-mi'))
    this.kanaToStudy.push(makeObjetKana('k-me'))
    this.kanaToStudy.push(makeObjetKana('k-mo'))

    showKanaOrRomanji('kana')
  }

  hToRY () {
    this.choice = 3
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('h-ya'))
    this.kanaToStudy.push(makeObjetKana('h-yu'))
    this.kanaToStudy.push(makeObjetKana('h-yo'))

    showKanaOrRomanji('kana')
  }

  kToRY () {
    this.choice = 3
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('k-ya'))
    this.kanaToStudy.push(makeObjetKana('k-yu'))
    this.kanaToStudy.push(makeObjetKana('k-yo'))

    showKanaOrRomanji('kana')
  }

  hToRR () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('h-ra'))
    this.kanaToStudy.push(makeObjetKana('h-ri'))
    this.kanaToStudy.push(makeObjetKana('h-ru'))
    this.kanaToStudy.push(makeObjetKana('h-re'))
    this.kanaToStudy.push(makeObjetKana('h-ro'))

    showKanaOrRomanji('kana')
  }

  kToRR () {
    this.choice = 5
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('k-ra'))
    this.kanaToStudy.push(makeObjetKana('k-ri'))
    this.kanaToStudy.push(makeObjetKana('k-ri'))
    this.kanaToStudy.push(makeObjetKana('k-re'))
    this.kanaToStudy.push(makeObjetKana('k-ro'))

    showKanaOrRomanji('kana')
  }

  hToRW () {
    this.choice = 3
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('h-wa'))
    this.kanaToStudy.push(makeObjetKana('h-wo'))
    this.kanaToStudy.push(makeObjetKana('h-n'))

    showKanaOrRomanji('kana')
  }

  kToRW () {
    this.choice = 3
    this.kanaToStudy = []

    this.kanaToStudy.push(makeObjetKana('k-wa'))
    this.kanaToStudy.push(makeObjetKana('k-wo'))
    this.kanaToStudy.push(makeObjetKana('k-n'))

    showKanaOrRomanji('kana')
  }
}

export {
  Lesson
}
