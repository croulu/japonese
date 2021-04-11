import {LessonCatalog} from "./component/LessonCatalog";
import {Lesson} from "./component_legacy/lesson";
import {Guess} from "./component_legacy/guess";
import {Menu} from "./component_legacy/menu";
import {
    getInStorage,
    getStatusLessonInStorage,
    setInitLessons,
    setLastLessonPlayed,
    setLessonTitle, setStatusLessonInStorage
} from "./js/helpers";


const lessonCatalog = new LessonCatalog()

const menuGuessRomanjiHiraganaBasic = document.getElementById('menuGuessRomanjiHiraganaBasic')
const menuGuessRomanjiHiraganaDakuon = document.getElementById('menuGuessRomanjiHiraganaDakuon')
const menuGuessRomanjiHiraganaHandakuon = document.getElementById('menuGuessRomanjiHiraganaHandakuon')
const hiraganasBasic = lessonCatalog.getHiraganasByGroup("basic")
const hiraganasDakuon = lessonCatalog.getHiraganasByGroup("dakuon")
const hiraganasHandakuon = lessonCatalog.getHiraganasByGroup("handakuon")

const menuGuessRomanjiKatakanaBasic = document.getElementById('menuGuessRomanjiKatakanaBasic')
const menuGuessRomanjiKatakanaDakuon = document.getElementById('menuGuessRomanjiKatakanaDakuon')
const menuGuessRomanjiKatakanaHandakuon = document.getElementById('menuGuessRomanjiKatakanaHandakuon')
const katakanasBasic = lessonCatalog.getHiraganasByGroup("basic")
const katakanasDakuon = lessonCatalog.getHiraganasByGroup("dakuon")
const katakanasHandakuon = lessonCatalog.getHiraganasByGroup("handakuon")

function extracted(htmlElement, kana, alphabet, oneLesson, oneGuess) {
    htmlElement.insertAdjacentHTML('beforeend', `<a
class="w3-button w3-white w3-hover-opacity bigButton" id="btnGuess${alphabet}${kana.id}">
<span class="kanaAlphabetIco ico${alphabet}${kana.img}"></span><br>${kana.title}</a>`)

    const btn = document.getElementById('btnGuess' + alphabet + kana.id)
    btn.addEventListener('click', () => oneLesson.launchLesson('simple', alphabet.toLowerCase() + '-' + kana.title.split(" ").join("-"), oneGuess))

}

const oneLesson = new Lesson()
const oneGuess = new Guess()

hiraganasBasic.forEach(kana => extracted(menuGuessRomanjiHiraganaBasic, kana, "H", oneLesson, oneGuess))
hiraganasDakuon.forEach(kana => extracted(menuGuessRomanjiHiraganaDakuon, kana, "H", oneLesson, oneGuess))
hiraganasHandakuon.forEach(kana => extracted(menuGuessRomanjiHiraganaHandakuon, kana, "H", oneLesson, oneGuess))

katakanasBasic.forEach(kana => extracted(menuGuessRomanjiKatakanaBasic, kana, "K", oneLesson, oneGuess))
katakanasDakuon.forEach(kana => extracted(menuGuessRomanjiKatakanaDakuon, kana, "K", oneLesson, oneGuess))
katakanasHandakuon.forEach(kana => extracted(menuGuessRomanjiKatakanaHandakuon, kana, "K", oneLesson, oneGuess))



const oneMenu = new Menu()

// last lesson
const lastLessonName = getInStorage('oneLessonLastLessonName')
const lastLessonType = getInStorage('oneLessonLastLessonType')

// menus app
const bigMenuHome = document.getElementById('bigMenuHome')
const bigMenuLearn = document.getElementById('bigMenuLearn')

const bigMenuHomeSmallScreen = document.getElementById('bigMenuHomeSmallScreen')
const bigMenuLearnSmallScreen = document.getElementById('bigMenuLearnSmallScreen')

// buttons
let funcName = ''
const btnContinue = document.getElementById('btnContinue')

const btnAllHiraganaLearned = document.getElementById('btnAllHiraganaLearned')
const btnAllKatakanaLearned = document.getElementById('btnAllKatakanaLearned')

const btnAlphabetHiragana = document.getElementById('btnAlphabetHiragana')
const btnAlphabetKatakana = document.getElementById('btnAlphabetKatakana')
const btnAlphabetKana = document.getElementById('btnAlphabetKanaComplet')
const btnAlphabetRomanji = document.getElementById('btnAlphabetRomanji')

const btnDrawH = document.getElementById('btnDrawH')
const btnDrawK = document.getElementById('btnDrawK')

// play
const choice1 = document.getElementById('choice1')
const choice2 = document.getElementById('choice2')
const choice3 = document.getElementById('choice3')
const choice4 = document.getElementById('choice4')
const choice5 = document.getElementById('choice5')



oneMenu.displayHome()

oneLesson.setAllLesson()

lessonsByDefault()

if (oneLesson.getNbDoneLessons() === 0) {
    setInitLessons()
    // oneLesson.setActivateLessons()
} else {
    //  oneLesson.displayButtonLesson()
}

bigMenuHome.addEventListener('click', () => oneMenu.displayHome())
bigMenuLearn.addEventListener('click', () => oneMenu.displayLearn())

bigMenuHomeSmallScreen.addEventListener('click', () => oneMenu.displayHome())
bigMenuLearnSmallScreen.addEventListener('click', () => oneMenu.displayLearn())

continueButton(lastLessonName, lastLessonType)

btnAllHiraganaLearned.addEventListener('click', () => oneLesson.launchLesson('learned', oneLesson.getAllLearnedLessonsInString('h'), oneGuess))
btnAllKatakanaLearned.addEventListener('click', () => oneLesson.launchLesson('learned', oneLesson.getAllLearnedLessonsInString('k'), oneGuess))

btnDrawH.addEventListener('click', () => oneMenu.displayDrawItemHiragana())
btnDrawK.addEventListener('click', () => oneMenu.displayDrawItemKatakana())

btnAlphabetHiragana.addEventListener('click', () => oneMenu.displayLearnItemHiragana())
btnAlphabetKatakana.addEventListener('click', () => oneMenu.displayLearnItemKatakana())
btnAlphabetKana.addEventListener('click', () => oneMenu.displayLearnItemKana())

btnAlphabetRomanji.addEventListener('click', () => oneMenu.displayRomanji())

choice1.addEventListener('click', () => oneGuess.makeAChoice(0, oneLesson, oneMenu))
choice2.addEventListener('click', () => oneGuess.makeAChoice(1, oneLesson, oneMenu))
choice3.addEventListener('click', () => oneGuess.makeAChoice(2, oneLesson, oneMenu))
choice4.addEventListener('click', () => oneGuess.makeAChoice(3, oneLesson, oneMenu))
choice5.addEventListener('click', () => oneGuess.makeAChoice(4, oneLesson, oneMenu))



function continueButton(lastLessonName, lastLessonType) {
    // TODO traite uniquement les lesson hiragana et katakana
    let kana = ''

    if (funcName !== '') {
        btnContinue.removeEventListener('click', funcName)
    }

    if (lastLessonName != null) {
        kana = lastLessonName.charAt(0)
        if (lastLessonType === 'learned') {
            btnContinue.addEventListener('click', funcName = function () {
                oneLesson.launchLesson('learned', oneLesson.getAllLearnedLessonsInString(kana), oneGuess)
            })
        } else {
            btnContinue.addEventListener('click', funcName = function () {
                oneLesson.launchLesson('simple', lastLessonName, oneGuess)
            })
        }
    } else {
        continueByDefault()
    }
// console.log(`funcName === ${funcName}`)
}

function continueByDefault() {
    let lastLessonName = ''
    let lastLessonType = ''

    const firstLessonName = 'h-a-i-u-e-o'
    const firstLessonType = 'simple'

    setLastLessonPlayed(firstLessonName, firstLessonType, 'current')
    lastLessonName = getInStorage('oneLessonLastLessonName')
    lastLessonType = getInStorage('oneLessonLastLessonType')
    btnContinue.innerText = setLessonTitle(lastLessonType, lastLessonName)
    btnContinue.addEventListener('click', funcName = function () {
        oneLesson.launchLesson(lastLessonType, lastLessonName, oneGuess)
    })
}

function lessonsByDefault() {
    const lessonName = []
    lessonName.push('h-a-i-u-e-o')
    lessonName.push('k-a-i-u-e-o')

    for (let i = 0; i < lessonName.length; i++) {
        if (getStatusLessonInStorage(lessonName[i]) === '') {
            setStatusLessonInStorage(lessonName[i], 'inprogress')
        }
    }
}

export {
    oneLesson,
    oneGuess,
    continueButton
}
