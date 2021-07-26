import {Practice} from './Practice';
import {Guess} from "./Guess";
import {Kana} from "./Kana";

export class PracticeProvider {

    fromLesson(lesson) {
        const guesses = lesson.kanas.map(k => new Guess(k, lesson.kanas))
        const practice = new Practice(guesses)
        return practice
    }

    fromLessonTitleAndAlphabet(lessonTitle, alphabet) {
        const kanas = lessonTitle
            .split(" ")
            .map(syllable => new Kana(alphabet, syllable))
        const guesses = kanas.map(k => new Guess(k, kanas))
        const practice = new Practice(guesses)
        return practice
    }

}
