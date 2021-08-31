import {Exercise} from './Exercise';
import {Kana} from "./Kana";
import {randomizeKanaToGuess} from "./randomizeKanaToGuess";

export class ExerciseFactory {

    createExercise(lessonTitle, alphabet) {
        const kanas = lessonTitle
            .split(" ")
            .map(syllable => new Kana(alphabet, syllable))
        return new Exercise(kanas, randomizeKanaToGuess, randomizeKanaToGuess)
    }

}

