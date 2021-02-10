import {Kana} from "./Kana";

class Guess {
    constructor(kanaToGuess, proposedKanas) {
        this.kanaToGuess = kanaToGuess
        this.proposedKanas = proposedKanas
    }

    validateChoice(kanaChoosen) {

        const result = this.kanaToGuess.syllable === kanaChoosen.syllable
        return result
    }

    

}

export {
    Guess
}
