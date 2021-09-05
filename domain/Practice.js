
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

        // TODO :
        //  guessRomaji -> proposals are randomized
        //  guessKana -> proposals are NOT randomized
        const proposals = this.randomizeSyllablesProposals(this.syllables);
        //const proposals = this.syllables;

        console.log("---- next ----")
        console.log({randomSyllableToGuess})
        console.log({proposals})
        console.log("====")

        // TODO :
        // guessWhat === "romaji" -> return new GuessRomaji
        // guessWhat === "kana" -> return new GuessKana
        return new GuessRomaji(randomSyllableToGuess, proposals)
    }
}

