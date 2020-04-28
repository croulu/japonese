
const colorClear = '#B8B8B8'
const colorTrue = '#16ca52'
const colorFalse = '#ca2716'

class Kana {
  constructor (alphabet, letter) {
    this.alphabet = alphabet
    this.letter = letter
  }

}



function disableChoice (number) {
    let myExpression = ''
    for (let i = 0; i < number; i++) {
      myExpression = `choice${i + 1}.style.backgroundColor = colorClear`
      eval(myExpression)
      myExpression = `choice${i + 1}.style.pointerEvents = 'none'`
      eval(myExpression)
    }
  }
  
  function enableChoice (number) {
    let myExpression = ''
    for (let i = 0; i < number; i++) {
      myExpression = `choice${i + 1}.style.backgroundColor = colorClear`
      eval(myExpression)
      myExpression = `choice${i + 1}.style.pointerEvents = 'auto'`
      eval(myExpression)
    }
  }
  
  function deleteChoice (number) {
    let myExpression = ''
    for (let i = 0; i < number; i++) {
      myExpression = `choice${i + 1}.style.display = 'none'`
      eval(myExpression)
    }
  }
  
  function displayCorrectNumberOfChoice (number) {
    let myExpression = ''
    for (let i = 5; i > 0; i--) {
      if (i > number) {
        myExpression = `choice${i}.style.display = 'none'`
      } else {
        myExpression = `choice${i}.style.display = 'block'`
      }
      eval(myExpression)
    }
  }
  
  function clearChoice (number) {
    let myExpression = ''
    for (let i = 0; i < number; i++) {
      myExpression = `choice${i + 1}.style.backgroundColor = colorClear`
      eval(myExpression)
    }
  }


export {
  Kana,
  disableChoice,
  enableChoice,
  deleteChoice,
  displayCorrectNumberOfChoice,
  clearChoice
}
