import {Practice} from './Practice';
import {Kana} from "./Kana";

export class PracticeFactory {

    createPractice(lessonTitle, alphabet, randomizeKanaToGuess, randomizeKanasProposals) {
        const kanas = lessonTitle
            .split(" ")
            .map(syllable => new Kana(alphabet, syllable))
        return new Practice(kanas, randomizeKanaToGuess, randomizeKanasProposals)
    }

}

