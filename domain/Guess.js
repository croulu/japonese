
export class Guess {
    constructor(kanaToGuess, proposedKanas) {
        this.kanaToGuess = kanaToGuess
        this.proposedKanas = proposedKanas
    }

    validateChoice(kanaChoosen) {

        return this.equals(this.kanaToGuess, kanaChoosen)
    }

    equals(kana1, kana2) {
        return (kana1.alphabet === kana2.alphabet &&
            kana1.syllable === kana2.syllable)
    }

}

