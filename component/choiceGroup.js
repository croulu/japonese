import {
  randomize,
  nextRandom
} from '../js/helpers.js'

class ChoiceGroup {
  constructor (nbChoice) {
    this.colorClearButton = '#f44336'
    this.colorTrueButton = '#16ca52'
    this.colorFalseButton = '#ca2716'
    this.colorActivatedMenu = '#e0762f'
    this.colorTextMenuOn = '#FFFFFF'
    this.colorTextMenuOff = '#000000'

    this.aChoice = []
    for (let i = 0; i < nbChoice; i++) {
      this.aChoice.push(document.getElementById(`choice${i + 1}`))
    }

    this.aChoiceTxt = []
    for (let i = 0; i < nbChoice; i++) {
      this.aChoiceTxt.push(document.getElementById(`choice${i + 1}Txt`))
    }

    this.aChoiceImg = []
    for (let i = 0; i < nbChoice; i++) {
      this.aChoiceImg.push(document.getElementById(`choice${i + 1}Img`))
    }
  }

  writeChoice (guessWhat, kanaToStudy) {
    for (let i = 0; i < this.aChoice.length; i++) {
      this.writeChoiceWhat(guessWhat, kanaToStudy[i].alphabet, i, kanaToStudy[i].letter)
    }
  }

  writeChoiceWhat (guessWhat, alphabet, indexChoice, kanaLetter) {
    let specificImage = ''

    if (guessWhat === 0) {
      this.aChoiceTxt[indexChoice].innerText = kanaLetter
      this.aChoiceTxt[indexChoice].className = 'kanaToGuess'
      this.aChoiceImg[indexChoice].className = ''
    } else {
      specificImage = `${alphabet.toUpperCase()}${kanaLetter}`

      this.aChoiceTxt[indexChoice].innerText = ''
      this.aChoiceTxt[indexChoice].className = ''
      this.aChoiceImg[indexChoice].className = `'kanaAlphabet ${specificImage}'`
    }
  }

  writeChoiceMoreThanNbChoicePossible (guessWhat, kanaToStudy, iTrueKana) {
    let arrayToWrite = []
    let indexNextRandom
    let indexUsed = []

    // the true kana
    arrayToWrite.push(kanaToStudy[iTrueKana])
    indexUsed.push(iTrueKana)

    for (let j = 0; j < this.aChoice.length; j++) {
      indexNextRandom = nextRandom(kanaToStudy.length)

      // random int not selected twice
      while (indexUsed.includes(indexNextRandom)) {
        indexNextRandom = nextRandom(kanaToStudy.length)
      }

      // true kana not selected twice
      while (indexNextRandom === iTrueKana) {
        indexNextRandom = nextRandom(kanaToStudy.length)
      }

      indexUsed.push(indexNextRandom)
      arrayToWrite.push(kanaToStudy[indexNextRandom])
    }
    arrayToWrite = randomize(arrayToWrite)
    for (let i = 0; i < this.aChoice.length; i++) {
      this.writeChoiceWhat(guessWhat, arrayToWrite[i].alphabet, i, arrayToWrite[i].letter)
    }

    return arrayToWrite
  }

  randomizeChoice (guessWhat, kanaToStudy) {
    let arrayChoice = []

    for (let i = 0; i < kanaToStudy.length; i++) {
      arrayChoice.push(kanaToStudy[i])
    }
    // in case of rimanji to guess, do not display the kana in the alphabet order
    // it would be too easy to guess :)
    if (guessWhat === 1) {
      arrayChoice = randomize(arrayChoice)
    }

    return arrayChoice
  }

  displayButtonChoice () {
    this.deleteChoice()
    this.clearChoice()
    this.enableChoice()
    this.displayCorrectNumberOfChoice()
  }

  disableChoice () {
    for (let i = 0; i < this.aChoice.length; i++) {
      this.aChoice[i].style.backgroundColor = this.colorClearButton
      this.aChoice[i].style.pointerEvents = 'none'
    }
  }

  enableChoice () {
    for (let i = 0; i < this.aChoice.length; i++) {
      this.aChoice[i].style.backgroundColor = this.colorClearButton
      this.aChoice[i].style.pointerEvents = 'auto'
    }
  }

  // remove the choice button
  deleteChoice () {
    for (let i = 0; i < this.aChoice.length; i++) {
      this.aChoice[i].style.display = 'none'
    }
  }

  // remove the color of the choice buttons
  clearChoice () {
    for (let i = 0; i < this.aChoice.length; i++) {
      this.aChoice[i].style.backgroundColor = this.colorClearButton
    }
  }

  // remove the text in the choice
  eraseChoice () {
    for (let i = 0; i < this.aChoiceTxt.length; i++) {
      this.aChoiceTxt[i].innerText = ''
    }
  }

  displayCorrectNumberOfChoice () {
    // TODO fonction à revoir dans le cas d'un nombre de choix supérieur à 5
    // for (let i = 0; i < this.aChoice.length; i++) {
    //   this.aChoice[i].style.display = 'block'
    // }
  }

  displayColorChoice (index, colorToApply) {
    this.aChoice[index].style.backgroundColor = this.colorToApply
  }
}

export {
  ChoiceGroup
}
