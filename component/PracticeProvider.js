import {Practice} from './Practice';
import {Guess} from "./Guess";



class PracticeProvider {

    fromLesson(lesson) {
        const guesses = lesson.kanas.map(k => new Guess(k, lesson.kanas))
        const seance = new Practice(guesses)
        return seance
    }

}

export {
    PracticeProvider
}
