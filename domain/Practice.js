
import {GuessRomaji} from "./GuessRomaji";


export class Practice {

    constructor(syllables, randomizeSyllableToGuess, randomizeSyllablesProposals) {
        this.syllables = syllables
        this.randomizeSyllableToGuess = randomizeSyllableToGuess;
        this.randomizeSyllablesProposals = randomizeSyllablesProposals;
    }

    next() {
 //       console.log("ici dans next")
        const randomSyllableToGuess = this.randomizeSyllableToGuess(this.syllables);
        const proposals = this.randomizeSyllablesProposals(this.syllables);

        console.log("---- next ----")
        console.log({randomSyllableToGuess})
        console.log({proposals})
        console.log("====")

        return new GuessRomaji(randomSyllableToGuess, proposals)
    }
}

