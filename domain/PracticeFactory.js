import {Practice} from './Practice';
import {randomizeSyllableToGuess} from "./randomizeSyllableToGuess";
import {randomizeSyllablesToPropose} from "./randomizeSyllablesToPropoze";

export class PracticeFactory {

    createPractice(syllables) {


        return new Practice(syllables, randomizeSyllableToGuess, randomizeSyllablesToPropose)
    }

}

