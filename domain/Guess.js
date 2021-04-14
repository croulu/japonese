
import deepEqual from "deep-equal";

class Guess {
    constructor(kanaToGuess, proposedKanas) {
        this.kanaToGuess = kanaToGuess
        this.proposedKanas = proposedKanas
    }

    validateChoice(kanaChoosen) {


        const result = deepEqual(this.kanaToGuess, kanaChoosen)
        return result
    }



}

export {
    Guess
}
