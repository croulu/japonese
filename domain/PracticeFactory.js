import {Practice} from './Practice';
import {Kana} from "./Kana";
import {randomizeKanaToGuess} from "./randomizeKanaToGuess";

export  class  PracticeFactory {

    static createPractice(lessonTitle, alphabet) {
        const kanas = lessonTitle
            .split(" ")
            .map(syllable => new Kana(alphabet, syllable))
        return new Practice(kanas, randomizeKanaToGuess, randomizeKanaToGuess)
    }

}

