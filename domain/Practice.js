
import {GuessRomaji} from "./GuessRomaji";
import {Romaji} from "./Romaji";
import {Kana} from "./Kana";


export class Practice {

    constructor(syllables, randomizeSyllableToGuess, randomizeSyllablesProposals) {
        this.syllables = syllables
        this.randomizeSyllableToGuess = randomizeSyllableToGuess;
        this.randomizeSyllablesProposals = randomizeSyllablesProposals;
    }

    next() {
 //       console.log("ici dans next")
        const randomSyllableToGuess = this.randomizeSyllableToGuess(this.syllables);

        // TODO:
        // soit un new Romaji soit un new Kana
        const objectToGuess = new Romaji(randomSyllableToGuess.alphabet, randomSyllableToGuess.consonant, randomSyllableToGuess.vowel)

        // TODO:
        //  guessRomaji -> proposals are randomized
        //  guessKana -> proposals are NOT randomized
        const proposals = this.randomizeSyllablesProposals(this.syllables);
        //const proposals = this.syllables;

        const objectsToPropose = proposals.map(proposal => new Kana(proposal.alphabet, proposal.consonant, proposal.vowel))

        console.log("---- next ----")
        console.log({randomSyllableToGuess})
        console.log({proposals})
        console.log("====")

        // TODO :
        // guessWhat === "romaji" -> return new GuessRomaji
        // guessWhat === "kana" -> return new GuessKana
        return new GuessRomaji(objectToGuess, objectsToPropose)
    }
}

