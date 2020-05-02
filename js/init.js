import { Lesson } from '../component/lesson.js'
import { Guess } from '../component/guess.js'

const oneLesson = new Lesson()
const oneGuess = new Guess()

oneLesson.setAllLesson()

const btnAllKanaLearned = document.getElementById('btnAllKanaLearned')

const btnToRHaiueo = document.getElementById('btnToRHaiueo')
const btnToRKaiueo = document.getElementById('btnToRKaiueo')
const btnToRHkakikukeko = document.getElementById('btnToRHkakikukeko')
const btnToRKkakikukeko = document.getElementById('btnToRKkakikukeko')
const btnToRHsashisuseso = document.getElementById('btnToRHsashisuseso')
const btnToRKsashisuseso = document.getElementById('btnToRKsashisuseso')
const btnToRHtachitsuteto = document.getElementById('btnToRHtachitsuteto')
const btnToRKtachitsuteto = document.getElementById('btnToRKtachitsuteto')
const btnToRHnaninuneno = document.getElementById('btnToRHnaninuneno')
const btnToRKnaninuneno = document.getElementById('btnToRKnaninuneno')
const btnToRHhahifuheho = document.getElementById('btnToRHhahifuheho')
const btnToRKhahifuheho = document.getElementById('btnToRKhahifuheho')
const btnToRHmamimumemo = document.getElementById('btnToRHmamimumemo')
const btnToRKmamimumemo = document.getElementById('btnToRKmamimumemo')
const btnToRHyayuyo = document.getElementById('btnToRHyayuyo')
const btnToRKyayuyo = document.getElementById('btnToRKyayuyo')
const btnToRHrarirurero = document.getElementById('btnToRHrarirurero')
const btnToRKrarirurero = document.getElementById('btnToRKrarirurero')
const btnToRHwawon = document.getElementById('btnToRHwawon')
const btnToRKwawon = document.getElementById('btnToRKwawon')

const choice1 = document.getElementById('choice1')
const choice2 = document.getElementById('choice2')
const choice3 = document.getElementById('choice3')
const choice4 = document.getElementById('choice4')
const choice5 = document.getElementById('choice5')

btnAllKanaLearned.addEventListener('click', () => oneLesson.launchLesson('h-a-i-u-e-o-ka-ki-ku-ke-ko', oneGuess))

btnToRHaiueo.addEventListener('click', () => oneLesson.launchLesson('h-a-i-u-e-o', oneGuess))
btnToRKaiueo.addEventListener('click', () => oneLesson.launchLesson('k-a-i-u-e-o', oneGuess))
btnToRHkakikukeko.addEventListener('click', () => oneLesson.launchLesson('h-ka-ki-ku-ke-ko', oneGuess))
btnToRKkakikukeko.addEventListener('click', () => oneLesson.launchLesson('k-ka-ki-ku-ke-ko', oneGuess))
btnToRHsashisuseso.addEventListener('click', () => oneLesson.launchLesson('h-sa-shi-su-se-so', oneGuess))
btnToRKsashisuseso.addEventListener('click', () => oneLesson.launchLesson('k-sa-shi-su-se-so', oneGuess))
btnToRHtachitsuteto.addEventListener('click', () => oneLesson.launchLesson('h-ta-chi-tsu-te-to', oneGuess))
btnToRKtachitsuteto.addEventListener('click', () => oneLesson.launchLesson('k-ta-chi-tsu-te-to', oneGuess))
btnToRHnaninuneno.addEventListener('click', () => oneLesson.launchLesson('h-na-ni-nu-ne-no', oneGuess))
btnToRKnaninuneno.addEventListener('click', () => oneLesson.launchLesson('k-na-ni-nu-ne-no', oneGuess))
btnToRHhahifuheho.addEventListener('click', () => oneLesson.launchLesson('h-ha-hi-fu-he-ho', oneGuess))
btnToRKhahifuheho.addEventListener('click', () => oneLesson.launchLesson('k-ha-hi-fu-he-ho', oneGuess))
btnToRHmamimumemo.addEventListener('click', () => oneLesson.launchLesson('h-ma-mi-mu-me-mo', oneGuess))
btnToRKmamimumemo.addEventListener('click', () => oneLesson.launchLesson('k-ma-mi-mu-me-mo', oneGuess))
btnToRHyayuyo.addEventListener('click', () => oneLesson.launchLesson('h-ya-yu-yo', oneGuess))
btnToRKyayuyo.addEventListener('click', () => oneLesson.launchLesson('k-ya-yu-yo', oneGuess))
btnToRHrarirurero.addEventListener('click', () => oneLesson.launchLesson('h-ra-ri-ru-re-ro', oneGuess))
btnToRKrarirurero.addEventListener('click', () => oneLesson.launchLesson('k-ra-ri-ru-re-ro', oneGuess))
btnToRHwawon.addEventListener('click', () => oneLesson.launchLesson('h-wa-wo-n', oneGuess))
btnToRKwawon.addEventListener('click', () => oneLesson.launchLesson('k-wa-wo-n', oneGuess))

choice1.addEventListener('click', () => oneGuess.makeAChoice(0, oneLesson))
choice2.addEventListener('click', () => oneGuess.makeAChoice(1, oneLesson))
choice3.addEventListener('click', () => oneGuess.makeAChoice(2, oneLesson))
choice4.addEventListener('click', () => oneGuess.makeAChoice(3, oneLesson))
choice5.addEventListener('click', () => oneGuess.makeAChoice(4, oneLesson))

export {
  oneLesson,
  oneGuess,
  btnToRHaiueo,
  btnToRKaiueo,
  btnToRHkakikukeko,
  btnToRKkakikukeko,
  btnToRHsashisuseso,
  btnToRKsashisuseso,
  btnToRHtachitsuteto,
  btnToRKtachitsuteto,
  btnToRHnaninuneno,
  btnToRKnaninuneno,
  btnToRHhahifuheho,
  btnToRKhahifuheho,
  btnToRHmamimumemo,
  btnToRKmamimumemo,
  btnToRHyayuyo,
  btnToRKyayuyo,
  btnToRHrarirurero,
  btnToRKrarirurero,
  btnToRHwawon,
  btnToRKwawon
}
