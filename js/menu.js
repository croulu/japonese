import {
  colorClearButton,
  colorTrueButton,
  colorFalseButton,
  colorActivatedMenu,
  colorTextMenuOn,
  colorTextMenuOff
} from '../index.js'

import {
  getInStorage,
  setLessonTitle
} from './helpers.js'

const home = document.getElementById('home')
const play = document.getElementById('play')
const playMenu = document.getElementById('playMenu')
const playItem = document.getElementById('playItem')
const playItemKana = document.getElementById('playItemKana')
const playItemRomanji = document.getElementById('playItemRomanji')
const draw = document.getElementById('draw')
const drawMenu = document.getElementById('drawMenu')
const drawItem = document.getElementById('drawItem')
const learn = document.getElementById('learn')
const learnItemKana = document.getElementById('learnItemKana')
const learnItemHiragana = document.getElementById('learnItemHiragana')
const learnItemKatakana = document.getElementById('learnItemKatakana')

function displayHome () {
  home.style.display = 'block'
  play.style.display = 'none'
  playMenu.style.display = 'none'
  playItem.style.display = 'none'
  playItemKana.style.display = 'none'
  playItemRomanji.style.display = 'none'
  draw.style.display = 'none'
  drawMenu.style.display = 'none'
  drawItem.style.display = 'none'
  learn.style.display = 'none'
  learnItemKana.style.display = 'none'
  learnItemHiragana.style.display = 'none'
  learnItemKatakana.style.display = 'none'
}

function displayPlay () {
  const btnContinue = document.getElementById('btnContinue')
  const lastLesson = getInStorage('oneLessonLastLessonName')

  // btnContinue.innerText = setLessonTitle(lastLesson)

  btnContinue.innerText = 'TODO'

  home.style.display = 'none'
  play.style.display = 'block'
  playMenu.style.display = 'block'
  playItem.style.display = 'none'
  playItemKana.style.display = 'none'
  playItemRomanji.style.display = 'none'
  draw.style.display = 'none'
  drawMenu.style.display = 'none'
  drawItem.style.display = 'none'
  learn.style.display = 'none'
  learnItemKana.style.display = 'none'
  learnItemHiragana.style.display = 'none'
  learnItemKatakana.style.display = 'none'
}

function displayPlayItem () {
  home.style.display = 'none'
  play.style.display = 'block'
  playMenu.style.display = 'none'
  playItem.style.display = 'block'
  playItemKana.style.display = 'block'
  playItemRomanji.style.display = 'block'
  draw.style.display = 'none'
  drawMenu.style.display = 'none'
  drawItem.style.display = 'none'
  learn.style.display = 'none'
  learnItemKana.style.display = 'none'
  learnItemHiragana.style.display = 'none'
  learnItemKatakana.style.display = 'none'
}

function displayDraw () {
  home.style.display = 'none'
  play.style.display = 'none'
  playMenu.style.display = 'none'
  playItem.style.display = 'none'
  playItemKana.style.display = 'none'
  playItemRomanji.style.display = 'none'
  draw.style.display = 'block'
  drawMenu.style.display = 'block'
  drawItem.style.display = 'none'
  learn.style.display = 'none'
  learnItemKana.style.display = 'none'
  learnItemHiragana.style.display = 'none'
  learnItemKatakana.style.display = 'none'
}

function displayDrawItem () {
  home.style.display = 'none'
  play.style.display = 'none'
  playMenu.style.display = 'none'
  playItem.style.display = 'none'
  playItemKana.style.display = 'none'
  playItemRomanji.style.display = 'none'
  draw.style.display = 'block'
  drawMenu.style.display = 'block'
  drawItem.style.display = 'block'
  learn.style.display = 'none'
  learnItemKana.style.display = 'none'
  learnItemHiragana.style.display = 'none'
  learnItemKatakana.style.display = 'none'
}

function displayLearn () {
  home.style.display = 'none'
  play.style.display = 'none'
  playMenu.style.display = 'none'
  playItem.style.display = 'none'
  playItemKana.style.display = 'none'
  playItemRomanji.style.display = 'none'
  draw.style.display = 'none'
  drawMenu.style.display = 'none'
  drawItem.style.display = 'none'
  learn.style.display = 'block'
  learnItemKana.style.display = 'none'
  learnItemHiragana.style.display = 'none'
  learnItemKatakana.style.display = 'none'
}

function displayLearnItemHiragana () {
  home.style.display = 'none'
  play.style.display = 'none'
  playMenu.style.display = 'none'
  playItem.style.display = 'none'
  playItemKana.style.display = 'none'
  playItemRomanji.style.display = 'none'
  draw.style.display = 'none'
  drawMenu.style.display = 'none'
  drawItem.style.display = 'none'
  learn.style.display = 'block'
  learnItemKana.style.display = 'none'
  learnItemHiragana.style.display = 'block'
  learnItemKatakana.style.display = 'none'
}

function displayLearnItemKatakana () {
  home.style.display = 'none'
  play.style.display = 'none'
  playMenu.style.display = 'none'
  playItem.style.display = 'none'
  playItemKana.style.display = 'none'
  playItemRomanji.style.display = 'none'
  draw.style.display = 'none'
  drawMenu.style.display = 'none'
  drawItem.style.display = 'none'
  learn.style.display = 'block'
  learnItemKana.style.display = 'none'
  learnItemHiragana.style.display = 'none'
  learnItemKatakana.style.display = 'block'
}

function displayLearnItemKana () {
  home.style.display = 'none'
  play.style.display = 'none'
  playMenu.style.display = 'none'
  playItem.style.display = 'none'
  playItemKana.style.display = 'none'
  playItemRomanji.style.display = 'none'
  draw.style.display = 'none'
  drawMenu.style.display = 'none'
  drawItem.style.display = 'none'
  learn.style.display = 'block'
  learnItemKana.style.display = 'block'
  learnItemHiragana.style.display = 'none'
  learnItemKatakana.style.display = 'none'
}

function displayWhatToGuess (whatToGuess) {
  if (whatToGuess === 0) {
    playItemKana.style.display = 'block'
    playItemRomanji.style.display = 'none'
  } else if (whatToGuess === 1) {
    playItemKana.style.display = 'none'
    playItemRomanji.style.display = 'block'
  } else {
    playItemKana.style.display = 'none'
    playItemRomanji.style.display = 'none'
  }
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
  let romanjiHCg = document.getElementById('r-h-cg')
  let romanjiHCz = document.getElementById('r-h-cz')
  let romanjiHCji = document.getElementById('r-h-ji')
  let romanjiHCd = document.getElementById('r-h-cd')
  let romanjiHCdzi = document.getElementById('r-h-dzi')
  let romanjiHCdzu = document.getElementById('r-h-dzu')
  let romanjiHCb = document.getElementById('r-h-cb')
  let romanjiHCp = document.getElementById('r-h-cp')

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
  let romanjiKCg = document.getElementById('r-k-cg')
  let romanjiKCz = document.getElementById('r-k-cz')
  let romanjiKCji = document.getElementById('r-k-ji')
  let romanjiKCd = document.getElementById('r-k-cd')  
  let romanjiKCdzi = document.getElementById('r-k-dzi')
  let romanjiKCdzu = document.getElementById('r-k-dzu')
  let romanjiKCb = document.getElementById('r-k-cb')
  let romanjiKCp = document.getElementById('r-k-cp')

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
    romanjiHCg.innerHTML = ''
    romanjiHCz.innerHTML = ''
    romanjiHCji.innerHTML = ''
    romanjiHCd.innerHTML = ''
    romanjiHCdzi.innerHTML = ''
    romanjiHCdzu.innerHTML = ''
    romanjiHCb.innerHTML = ''
    romanjiHCp.innerHTML = ''

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
    romanjiKCg.innerHTML = ''
    romanjiKCz.innerHTML = ''
    romanjiKCji.innerHTML = ''
    romanjiKCd.innerHTML = ''
    romanjiKCdzi.innerHTML = ''
    romanjiKCdzu.innerHTML = ''
    romanjiKCb.innerHTML = ''
    romanjiKCp.innerHTML = ''

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
    romanjiHCg.innerHTML = 'g'
    romanjiHCz.innerHTML = 'z'
    romanjiHCji.innerHTML = 'ji'
    romanjiHCd.innerHTML = 'd'
    romanjiHCdzi.innerHTML = 'dzi'
    romanjiHCdzu.innerHTML = 'dzu'
    romanjiHCb.innerHTML = 'b'
    romanjiHCp.innerHTML = 'p'

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
    romanjiKCg.innerHTML = 'g'
    romanjiKCz.innerHTML = 'z'
    romanjiKCji.innerHTML = 'ji'
    romanjiKCd.innerHTML = 'd'
    romanjiKCdzi.innerHTML = 'dzi'
    romanjiKCdzu.innerHTML = 'dzu'
    romanjiKCb.innerHTML = 'b'
    romanjiKCp.innerHTML = 'p'
  }
}

export {
  displayHome,
  displayPlay,
  displayPlayItem,
  displayDraw,
  displayDrawItem,
  displayLearn,
  displayLearnItemHiragana,
  displayLearnItemKatakana,
  displayLearnItemKana,
  displayRomanji,
  displayWhatToGuess
}
