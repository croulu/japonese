import {Practice} from '../../../domain/Practice';
import {Guess} from "../../../domain/Guess";
import {Kana} from "../../../domain/Kana";

const fromLesson = (lesson) => {
    const guesses = lesson.kanas.map(k => new Guess(k, lesson.kanas))
    const practice = new Practice(guesses)
    return practice
}

exports.fromLesson = fromLesson;
