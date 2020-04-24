import {
  selectHiragana,
  selectKatakana,
  selectOneKana,
  nextExercise,
  showSoluce,
  changeExercise
} from './index.js'

// kana (hiragana ou katakana)
const imgKanaHiragana = document.getElementById('imgKanaHiragana')
const imgKanaKatakana = document.getElementById('imgKanaKatakana')

// hiragana

const imgHa = document.getElementById('h-a')
const imgHi = document.getElementById('h-i')
const imgHu = document.getElementById('h-u')
const imgHe = document.getElementById('h-e')
const imgHo = document.getElementById('h-o')

const imgHka = document.getElementById('h-ka')
const imgHki = document.getElementById('h-ki')
const imgHku = document.getElementById('h-ku')
const imgHke = document.getElementById('h-ke')
const imgHko = document.getElementById('h-ko')

const imgHsa = document.getElementById('h-sa')
const imgHshi = document.getElementById('h-shi')
const imgHsu = document.getElementById('h-su')
const imgHse = document.getElementById('h-se')
const imgHso = document.getElementById('h-so')

const imgHta = document.getElementById('h-ta')
const imgHchi = document.getElementById('h-chi')
const imgHtsu = document.getElementById('h-tsu')
const imgHte = document.getElementById('h-te')
const imgHto = document.getElementById('h-to')

const imgHna = document.getElementById('h-na')
const imgHni = document.getElementById('h-ni')
const imgHnu = document.getElementById('h-nu')
const imgHne = document.getElementById('h-ne')
const imgHno = document.getElementById('h-no')

const imgHha = document.getElementById('h-ha')
const imgHhi = document.getElementById('h-hi')
const imgHfu = document.getElementById('h-fu')
const imgHhe = document.getElementById('h-he')
const imgHho = document.getElementById('h-ho')

const imgHma = document.getElementById('h-ma')
const imgHmi = document.getElementById('h-mi')
const imgHmu = document.getElementById('h-mu')
const imgHme = document.getElementById('h-me')
const imgHmo = document.getElementById('h-mo')

const imgHya = document.getElementById('h-ya')
const imgHyu = document.getElementById('h-yu')
const imgHyo = document.getElementById('h-yo')

const imgHra = document.getElementById('h-ra')
const imgHri = document.getElementById('h-ri')
const imgHru = document.getElementById('h-ru')
const imgHre = document.getElementById('h-re')
const imgHro = document.getElementById('h-ro')

const imgHwa = document.getElementById('h-wa')
const imgHwo = document.getElementById('h-wo')

const imgHn = document.getElementById('h-n')

// katakana

const imgKa = document.getElementById('k-a')
const imgKi = document.getElementById('k-i')
const imgKu = document.getElementById('k-u')
const imgKe = document.getElementById('k-e')
const imgKo = document.getElementById('k-o')

const imgKka = document.getElementById('k-ka')
const imgKki = document.getElementById('k-ki')
const imgKku = document.getElementById('k-ku')
const imgKke = document.getElementById('k-ke')
const imgKko = document.getElementById('k-ko')

const imgKsa = document.getElementById('k-sa')
const imgKshi = document.getElementById('k-shi')
const imgKsu = document.getElementById('k-su')
const imgKse = document.getElementById('k-se')
const imgKso = document.getElementById('k-so')

const imgKta = document.getElementById('k-ta')
const imgKchi = document.getElementById('k-chi')
const imgKtsu = document.getElementById('k-tsu')
const imgKte = document.getElementById('k-te')
const imgKto = document.getElementById('k-to')

const imgKna = document.getElementById('k-na')
const imgKni = document.getElementById('k-ni')
const imgKnu = document.getElementById('k-nu')
const imgKne = document.getElementById('k-ne')
const imgKno = document.getElementById('k-no')

const imgKha = document.getElementById('k-ha')
const imgKhi = document.getElementById('k-hi')
const imgKfu = document.getElementById('k-fu')
const imgKhe = document.getElementById('k-he')
const imgKho = document.getElementById('k-ho')

const imgKma = document.getElementById('k-ma')
const imgKmi = document.getElementById('k-mi')
const imgKmu = document.getElementById('k-mu')
const imgKme = document.getElementById('k-me')
const imgKmo = document.getElementById('k-mo')

const imgKya = document.getElementById('k-ya')
const imgKyu = document.getElementById('k-yu')
const imgKyo = document.getElementById('k-yo')

const imgKra = document.getElementById('k-ra')
const imgKri = document.getElementById('k-ri')
const imgKru = document.getElementById('k-ru')
const imgKre = document.getElementById('k-re')
const imgKro = document.getElementById('k-ro')

const imgKwa = document.getElementById('k-wa')
const imgKwo = document.getElementById('k-wo')

const imgKn = document.getElementById('k-n')

// navigate

const brToRomanji = document.getElementById('brToRomanji')
const brToKana = document.getElementById('brToKana')
const btnNext = document.getElementById('btnNext')
const btnSoluce = document.getElementById('btnSoluce')

// évènements

imgKanaHiragana.addEventListener('click', () => selectHiragana())
imgKanaKatakana.addEventListener('click', () => selectKatakana())

imgHa.addEventListener('click', () => selectOneKana(imgHa.id))
imgHi.addEventListener('click', () => selectOneKana(imgHi.id))
imgHu.addEventListener('click', () => selectOneKana(imgHu.id))
imgHe.addEventListener('click', () => selectOneKana(imgHe.id))
imgHo.addEventListener('click', () => selectOneKana(imgHo.id))

imgHka.addEventListener('click', () => selectOneKana(imgHka.id))
imgHki.addEventListener('click', () => selectOneKana(imgHki.id))
imgHku.addEventListener('click', () => selectOneKana(imgHku.id))
imgHke.addEventListener('click', () => selectOneKana(imgHke.id))
imgHko.addEventListener('click', () => selectOneKana(imgHko.id))

imgHsa.addEventListener('click', () => selectOneKana(imgHsa.id))
imgHshi.addEventListener('click', () => selectOneKana(imgHshi.id))
imgHsu.addEventListener('click', () => selectOneKana(imgHsu.id))
imgHse.addEventListener('click', () => selectOneKana(imgHse.id))
imgHso.addEventListener('click', () => selectOneKana(imgHso.id))

imgHta.addEventListener('click', () => selectOneKana(imgHta.id))
imgHchi.addEventListener('click', () => selectOneKana(imgHchi.id))
imgHtsu.addEventListener('click', () => selectOneKana(imgHtsu.id))
imgHte.addEventListener('click', () => selectOneKana(imgHte.id))
imgHto.addEventListener('click', () => selectOneKana(imgHto.id))

imgHna.addEventListener('click', () => selectOneKana(imgHna.id))
imgHni.addEventListener('click', () => selectOneKana(imgHni.id))
imgHnu.addEventListener('click', () => selectOneKana(imgHnu.id))
imgHne.addEventListener('click', () => selectOneKana(imgHne.id))
imgHno.addEventListener('click', () => selectOneKana(imgHno.id))

imgHha.addEventListener('click', () => selectOneKana(imgHha.id))
imgHhi.addEventListener('click', () => selectOneKana(imgHhi.id))
imgHfu.addEventListener('click', () => selectOneKana(imgHfu.id))
imgHhe.addEventListener('click', () => selectOneKana(imgHhe.id))
imgHho.addEventListener('click', () => selectOneKana(imgHho.id))

imgHma.addEventListener('click', () => selectOneKana(imgHma.id))
imgHmi.addEventListener('click', () => selectOneKana(imgHmi.id))
imgHmu.addEventListener('click', () => selectOneKana(imgHmu.id))
imgHme.addEventListener('click', () => selectOneKana(imgHme.id))
imgHmo.addEventListener('click', () => selectOneKana(imgHmo.id))

imgHya.addEventListener('click', () => selectOneKana(imgHya.id))
imgHyu.addEventListener('click', () => selectOneKana(imgHyu.id))
imgHyo.addEventListener('click', () => selectOneKana(imgHyo.id))

imgHra.addEventListener('click', () => selectOneKana(imgHra.id))
imgHri.addEventListener('click', () => selectOneKana(imgHri.id))
imgHru.addEventListener('click', () => selectOneKana(imgHru.id))
imgHre.addEventListener('click', () => selectOneKana(imgHre.id))
imgHro.addEventListener('click', () => selectOneKana(imgHro.id))

imgHwa.addEventListener('click', () => selectOneKana(imgHwa.id))
imgHwo.addEventListener('click', () => selectOneKana(imgHwo.id))

imgHn.addEventListener('click', () => selectOneKana(imgHn.id))

imgKa.addEventListener('click', () => selectOneKana(imgKa.id))
imgKi.addEventListener('click', () => selectOneKana(imgKi.id))
imgKu.addEventListener('click', () => selectOneKana(imgKu.id))
imgKe.addEventListener('click', () => selectOneKana(imgKe.id))
imgKo.addEventListener('click', () => selectOneKana(imgKo.id))

imgKka.addEventListener('click', () => selectOneKana(imgKka.id))
imgKki.addEventListener('click', () => selectOneKana(imgKki.id))
imgKku.addEventListener('click', () => selectOneKana(imgKku.id))
imgKke.addEventListener('click', () => selectOneKana(imgKke.id))
imgKko.addEventListener('click', () => selectOneKana(imgKko.id))

imgKsa.addEventListener('click', () => selectOneKana(imgKsa.id))
imgKshi.addEventListener('click', () => selectOneKana(imgKshi.id))
imgKsu.addEventListener('click', () => selectOneKana(imgKsu.id))
imgKse.addEventListener('click', () => selectOneKana(imgKse.id))
imgKso.addEventListener('click', () => selectOneKana(imgKso.id))

imgKta.addEventListener('click', () => selectOneKana(imgKta.id))
imgKchi.addEventListener('click', () => selectOneKana(imgKchi.id))
imgKtsu.addEventListener('click', () => selectOneKana(imgKtsu.id))
imgKte.addEventListener('click', () => selectOneKana(imgKte.id))
imgKto.addEventListener('click', () => selectOneKana(imgKto.id))

imgKna.addEventListener('click', () => selectOneKana(imgKna.id))
imgKni.addEventListener('click', () => selectOneKana(imgKni.id))
imgKnu.addEventListener('click', () => selectOneKana(imgKnu.id))
imgKne.addEventListener('click', () => selectOneKana(imgKne.id))
imgKno.addEventListener('click', () => selectOneKana(imgKno.id))

imgKha.addEventListener('click', () => selectOneKana(imgKha.id))
imgKhi.addEventListener('click', () => selectOneKana(imgKhi.id))
imgKfu.addEventListener('click', () => selectOneKana(imgKfu.id))
imgKhe.addEventListener('click', () => selectOneKana(imgKhe.id))
imgKho.addEventListener('click', () => selectOneKana(imgKho.id))

imgKma.addEventListener('click', () => selectOneKana(imgKma.id))
imgKmi.addEventListener('click', () => selectOneKana(imgKmi.id))
imgKmu.addEventListener('click', () => selectOneKana(imgKmu.id))
imgKme.addEventListener('click', () => selectOneKana(imgKme.id))
imgKmo.addEventListener('click', () => selectOneKana(imgKmo.id))

imgKya.addEventListener('click', () => selectOneKana(imgKya.id))
imgKyu.addEventListener('click', () => selectOneKana(imgKyu.id))
imgKyo.addEventListener('click', () => selectOneKana(imgKyo.id))

imgKra.addEventListener('click', () => selectOneKana(imgKra.id))
imgKri.addEventListener('click', () => selectOneKana(imgKri.id))
imgKru.addEventListener('click', () => selectOneKana(imgKru.id))
imgKre.addEventListener('click', () => selectOneKana(imgKre.id))
imgKro.addEventListener('click', () => selectOneKana(imgKro.id))

imgKwa.addEventListener('click', () => selectOneKana(imgKwa.id))
imgKwo.addEventListener('click', () => selectOneKana(imgKwo.id))

imgKn.addEventListener('click', () => selectOneKana(imgKn.id))

brToRomanji.addEventListener('click', () => changeExercise())
brToKana.addEventListener('click', () => changeExercise())
btnNext.addEventListener('click', () => nextExercise())
btnSoluce.addEventListener('click', () => showSoluce())
