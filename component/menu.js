import {
  getInStorage,
  setLessonTitle
} from '../js/helpers.js'

import {
  oneLesson,
  oneGuess,
  funcName,
  continueButton
} from '../index.js'

class Menu {
  constructor () {
    this.home = document.getElementById('home')
    this.play = document.getElementById('play')
    this.playMenu = document.getElementById('playMenu')
    this.countdown = document.querySelector('.time')
    this.playItem = document.getElementById('playItem')
    this.playKana = document.getElementById('playKana')
    this.playItemKana = document.getElementById('playItemKana')
    this.playItemRomanji = document.getElementById('playItemRomanji')
    this.draw = document.getElementById('draw')
    this.drawMenu = document.getElementById('drawMenu')
    this.drawItem = document.getElementById('drawItem')
    this.learn = document.getElementById('learn')
    this.learnItemKana = document.getElementById('learnItemKana')
    this.learnItemHiragana = document.getElementById('learnItemHiragana')
    this.learnItemKatakana = document.getElementById('learnItemKatakana')

    this.home.style.display = 'none'
    this.play.style.display = 'none'
    this.playMenu.style.display = 'none'
    this.countdown.style.display = 'none'
    this.playItem.style.display = 'none'
    this.playKana.style.display = 'none'
    this.playItemKana.style.display = 'none'
    this.playItemRomanji.style.display = 'none'
    this.draw.style.display = 'none'
    this.drawMenu.style.display = 'none'
    this.drawItem.style.display = 'none'
    this.learn.style.display = 'none'
    this.learnItemKana.style.display = 'none'
    this.learnItemHiragana.style.display = 'none'
    this.learnItemKatakana.style.display = 'none'
  }

  setNoneToAll () {
    this.home.style.display = 'none'
    this.play.style.display = 'none'
    this.playMenu.style.display = 'none'
    this.countdown.style.display = 'none'
    this.playItem.style.display = 'none'
    this.playKana.style.display = 'none'
    this.playItemKana.style.display = 'none'
    this.playItemRomanji.style.display = 'none'
    this.draw.style.display = 'none'
    this.drawMenu.style.display = 'none'
    this.drawItem.style.display = 'none'
    this.learn.style.display = 'none'
    this.learnItemKana.style.display = 'none'
    this.learnItemHiragana.style.display = 'none'
    this.learnItemKatakana.style.display = 'none'
  }

  displayHome () {
    const btnContinue = document.getElementById('btnContinue')
    const lastLessonName = getInStorage('oneLessonLastLessonName')
    const lastLessonType = getInStorage('oneLessonLastLessonType')

    this.setNoneToAll()
    this.home.style.display = 'block'

    btnContinue.innerText = setLessonTitle(lastLessonType, lastLessonName)
    if (funcName !== '') btnContinue.removeEventListener('click', funcName)
    continueButton(lastLessonName, lastLessonType)

    this.play.style.display = 'block'
    this.playMenu.style.display = 'block'

    this.draw.style.display = 'block'
    this.drawMenu.style.display = 'block'
  }

  displayPlayItem () {
    this.setNoneToAll()
    this.countdown.style.display = 'block'
    this.play.style.display = 'block'
    this.playItem.style.display = 'block'
    this.playKana.style.display = 'block'
    this.playItemKana.style.display = 'block'
    this.playItemRomanji.style.display = 'block'
  }

  notDisplayPlayItem () {
    this.setNoneToAll()
    this.play.style.display = 'block'
    this.playItem.style.display = 'block'
  }

  displayWhatToGuess (whatToGuess) {
    if (whatToGuess === 0) {
      this.playItemKana.style.display = 'block'
      this.playItemRomanji.style.display = 'none'
    } else if (whatToGuess === 1) {
      this.playItemKana.style.display = 'none'
      this.playItemRomanji.style.display = 'block'
    }
  }

  displayDrawItemHiragana () {
    this.setNoneToAll()
    this.play.style.display = 'block'
    this.draw.style.display = 'block'
    this.drawMenu.style.display = 'block'
    this.drawItem.style.display = 'block'

    oneLesson.launchLessonJustOneGuess('learned', oneLesson.getAllLearnedLessonsInString('h'), oneGuess)
  }

  displayDrawItemKatakana () {
    this.setNoneToAll()
    this.play.style.display = 'block'
    this.draw.style.display = 'block'
    this.drawMenu.style.display = 'block'
    this.drawItem.style.display = 'block'

    oneLesson.launchLessonJustOneGuess('learned', oneLesson.getAllLearnedLessonsInString('k'), oneGuess)
  }

  displayLearn () {
    this.setNoneToAll()
    this.learn.style.display = 'block'
  }

  displayLearnItemHiragana () {
    this.setNoneToAll()
    this.learn.style.display = 'block'
    this.learnItemHiragana.style.display = 'block'
  }

  displayLearnItemKatakana () {
    this.setNoneToAll()
    this.learn.style.display = 'block'
    this.learnItemKatakana.style.display = 'block'
  }

  displayLearnItemKana () {
    this.setNoneToAll()    
    this.learn.style.display = 'block'
    this.learnItemKana.style.display = 'block'
  }

  displayRomanji () {  
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

      romanjiHC.innerHTML = ''
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
      romanjiHCnn.innerHTML = ''
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

      romanjiKC.innerHTML = ''
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
      romanjiKCnn.innerHTML = ''
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
}

export {
  Menu
}
