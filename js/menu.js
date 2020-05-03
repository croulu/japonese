
const divKanaMenu = document.getElementById('divKanaMenu')
const divBackMenu = document.getElementById('divBackMenu')
const divAlphabetRomanji = document.getElementById('divAlphabetRomanji')

const divAlphabetHiragana1 = document.getElementById('divAlphabetHiragana1')
const divAlphabetHiragana2 = document.getElementById('divAlphabetHiragana2')

const divAlphabetKatakana1 = document.getElementById('divAlphabetKatakana1')
const divAlphabetKatakana2 = document.getElementById('divAlphabetKatakana2')

const divGuess = document.getElementById('divGuess')

function displayScreenLesson () {
  divKanaMenu.style.display = 'none'
  divBackMenu.style.display = 'block'
  divAlphabetRomanji.style.display = 'none'
  divAlphabetHiragana1.style.display = 'none'
  divAlphabetHiragana2.style.display = 'none'
  divAlphabetKatakana1.style.display = 'none'
  divAlphabetKatakana2.style.display = 'none'
  divGuess.style.display = 'block'
}

function displayScreenHomePage () {
  divKanaMenu.style.display = 'block'
  divBackMenu.style.display = 'none'
  divAlphabetRomanji.style.display = 'none'
  divAlphabetHiragana1.style.display = 'kana'
  divAlphabetHiragana2.style.display = 'alphabet'
  divAlphabetKatakana1.style.display = 'kana'
  divAlphabetKatakana2.style.display = 'alphabet'
  divGuess.style.display = 'none'
}

function displayAlphabetHiragana () {
  divKanaMenu.style.display = 'none'
  divBackMenu.style.display = 'block'
  divAlphabetRomanji.style.display = 'block'
  divAlphabetHiragana1.style.display = 'kana'
  divAlphabetHiragana2.style.display = 'alphabet'
  divAlphabetKatakana1.style.display = 'none'
  divAlphabetKatakana2.style.display = 'none'
  divGuess.style.display = 'none'
}

function displayAlphabetKatakana () {
  divKanaMenu.style.display = 'none'
  divBackMenu.style.display = 'block'
  divAlphabetRomanji.style.display = 'block'
  divAlphabetHiragana1.style.display = 'none'
  divAlphabetHiragana2.style.display = 'none'
  divAlphabetKatakana1.style.display = 'kana'
  divAlphabetKatakana2.style.display = 'alphabet'
  divGuess.style.display = 'none'
}

function displayRomanji () {
  let romanjiHa = document.getElementById('r-h-a')
  let romanjiHi = document.getElementById('r-h-i')
  let romanjiHu = document.getElementById('r-h-u')
  let romanjiHe = document.getElementById('r-h-e')
  let romanjiHo = document.getElementById('r-h-o')
  
  let romanjiKa = document.getElementById('r-k-a')
  let romanjiKi = document.getElementById('r-k-i')
  let romanjiKu = document.getElementById('r-k-u')
  let romanjiKe = document.getElementById('r-k-e')
  let romanjiKo = document.getElementById('r-k-o')
  
  let romanjiHC = document.getElementById('r-h-c')
  let romanjiHCk = document.getElementById('r-h-ck')
  let romanjiHCs = document.getElementById('r-h-cs')
  let romanjiHshi = document.getElementById('r-h-shi')
  let romanjiHCt = document.getElementById('r-h-ct')
  let romanjiHchi = document.getElementById('r-h-chi')
  let romanjiHtsu = document.getElementById('r-h-tsu')
  let romanjiHCn = document.getElementById('r-h-cn')
  let romanjiHCh = document.getElementById('r-h-ch')
  let romanjiHfu = document.getElementById('r-h-fu')
  let romanjiHCm = document.getElementById('r-h-cm')
  let romanjiHCy = document.getElementById('r-h-cy')
  let romanjiHCr = document.getElementById('r-h-cr')
  let romanjiHCw = document.getElementById('r-h-cw')
  let romanjiHCnn = document.getElementById('r-h-cnn')
  
  let romanjiKC = document.getElementById('r-k-c')
  let romanjiKCk = document.getElementById('r-k-ck')
  let romanjiKCs = document.getElementById('r-k-cs')
  let romanjiKshi = document.getElementById('r-k-shi')
  let romanjiKCt = document.getElementById('r-k-ct')
  let romanjiKchi = document.getElementById('r-k-chi')
  let romanjiKtsu = document.getElementById('r-k-tsu')
  let romanjiKCn = document.getElementById('r-k-cn')
  let romanjiKCh = document.getElementById('r-k-ch')
  let romanjiKfu = document.getElementById('r-k-fu')
  let romanjiKCm = document.getElementById('r-k-cm')
  let romanjiKCy = document.getElementById('r-k-cy')
  let romanjiKCr = document.getElementById('r-k-cr')
  let romanjiKCw = document.getElementById('r-k-cw')
  let romanjiKCnn = document.getElementById('r-k-cnn')

  if (romanjiHa.innerHTML === 'a') {
    romanjiHa.innerHTML = ''
    romanjiHi.innerHTML = ''
    romanjiHu.innerHTML = ''
    romanjiHe.innerHTML = ''
    romanjiHo.innerHTML = ''

    romanjiHC.innerHTML = ''
    romanjiHCk.innerHTML = ''
    romanjiHCs.innerHTML = ''
    romanjiHshi.innerHTML = ''
    romanjiHCt.innerHTML = ''
    romanjiHchi.innerHTML = ''
    romanjiHtsu.innerHTML = ''
    romanjiHCn.innerHTML = ''
    romanjiHCh.innerHTML = ''
    romanjiHfu.innerHTML = ''
    romanjiHCm.innerHTML = ''
    romanjiHCy.innerHTML = ''
    romanjiHCr.innerHTML = ''
    romanjiHCw.innerHTML = ''
    romanjiHCnn.innerHTML = ''

    romanjiKa.innerHTML = ''
    romanjiKi.innerHTML = ''
    romanjiKu.innerHTML = ''
    romanjiKe.innerHTML = ''
    romanjiKo.innerHTML = ''

    romanjiKC.innerHTML = ''
    romanjiKCk.innerHTML = ''
    romanjiKCs.innerHTML = ''
    romanjiKshi.innerHTML = ''
    romanjiKCt.innerHTML = ''
    romanjiKchi.innerHTML = ''
    romanjiKtsu.innerHTML = ''
    romanjiKCn.innerHTML = ''
    romanjiKCh.innerHTML = ''
    romanjiKfu.innerHTML = ''
    romanjiKCm.innerHTML = ''
    romanjiKCy.innerHTML = ''
    romanjiKCr.innerHTML = ''
    romanjiKCw.innerHTML = ''
    romanjiKCnn.innerHTML = ''

  } else {
    romanjiHa.innerHTML = 'a'
    romanjiHi.innerHTML = 'i'
    romanjiHu.innerHTML = 'u'
    romanjiHe.innerHTML = 'e'
    romanjiHo.innerHTML = 'o'

    romanjiHC.innerHTML = '-'
    romanjiHCk.innerHTML = 'k'
    romanjiHCs.innerHTML = 's'
    romanjiHshi.innerHTML = 'shi'
    romanjiHCt.innerHTML = 't'
    romanjiHchi.innerHTML = 'chi'
    romanjiHtsu.innerHTML = 'tsu'
    romanjiHCn.innerHTML = 'n'
    romanjiHCh.innerHTML = 'h'
    romanjiHfu.innerHTML = 'fu'
    romanjiHCm.innerHTML = 'm'
    romanjiHCy.innerHTML = 'y'
    romanjiHCr.innerHTML = 'r'
    romanjiHCw.innerHTML = 'w'
    romanjiHCnn.innerHTML = '-'

    romanjiKa.innerHTML = 'a'
    romanjiKi.innerHTML = 'i'
    romanjiKu.innerHTML = 'u'
    romanjiKe.innerHTML = 'e'
    romanjiKo.innerHTML = 'o'

    romanjiKC.innerHTML = '-'
    romanjiKCk.innerHTML = 'k'
    romanjiKCs.innerHTML = 's'
    romanjiKshi.innerHTML = 'shi'
    romanjiKCt.innerHTML = 't'
    romanjiKchi.innerHTML = 'chi'
    romanjiKtsu.innerHTML = 'tsu'
    romanjiKCn.innerHTML = 'n'
    romanjiKCh.innerHTML = 'h'
    romanjiKfu.innerHTML = 'fu'
    romanjiKCm.innerHTML = 'm'
    romanjiKCy.innerHTML = 'y'
    romanjiKCr.innerHTML = 'r'
    romanjiKCw.innerHTML = 'w'
    romanjiKCnn.innerHTML = '-'
  }
}

export {
  displayScreenLesson,
  displayScreenHomePage,
  displayAlphabetHiragana,
  displayAlphabetKatakana,
  displayRomanji
}