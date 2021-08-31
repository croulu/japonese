
import {GuessRomaji} from "./GuessRomaji";


export class Exercise {

    constructor(syllables, randomizeSyllableToGuess, randomizeSyllablesProposals) {
        this.syllables = syllables
        this.randomizeSyllableToGuess = randomizeSyllableToGuess;
        this.randomizeSyllablesProposals = randomizeSyllablesProposals;
    }

    next() {
 //       console.log("ici dans next")
        const randomSyllableToGuess = this.randomizeSyllableToGuess(this.syllables);
        const proposals = this.randomizeSyllablesProposals(this.syllables);

        return new GuessRomaji(randomSyllableToGuess, proposals)
    }
}

