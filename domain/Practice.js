import {GuessRomaji} from "./GuessRomaji";
import {GuessKana} from "./GuessKana";
import {Romaji} from "./Romaji";
import {Kana} from "./Kana";
import {randomizeWhatToGuess} from "./randomizeWhatToGuess";
import {randomizeSyllableToGuess} from "./randomizeSyllableToGuess";
import {randomizeSyllablesToPropoze} from "./randomizeSyllablesToPropoze";

export class Practice {

    constructor(lesson) {
        this.syllables = lesson
        this.randomizeSyllableToGuess = randomizeSyllableToGuess;
        this.randomizeSyllablesProposals = randomizeSyllablesToPropoze;
        this.guessWhat = randomizeWhatToGuess();
    }

    next() {
        const randomSyllableToGuess = this.randomizeSyllableToGuess(this.syllables);

        const isKanaToGuess = this.guessWhat === "kana"

        const objectToGuess = isKanaToGuess ?
            new Kana(randomSyllableToGuess.alphabet, randomSyllableToGuess.consonant, randomSyllableToGuess.vowel) :
            new Romaji(randomSyllableToGuess.alphabet, randomSyllableToGuess.consonant, randomSyllableToGuess.vowel)

        const proposals = isKanaToGuess ?
            this.syllables :
            this.randomizeSyllablesProposals(this.syllables);

        const objectsToPropose = isKanaToGuess ?
            proposals.map(proposal => new Romaji(proposal.alphabet, proposal.consonant, proposal.vowel)) :
            proposals.map(proposal => new Kana(proposal.alphabet, proposal.consonant, proposal.vowel))

        console.log("---- next ----")
        console.log({randomSyllableToGuess})
        console.log({proposals})
        console.log(this.guessWhat)
        console.log("====")

        const returnGuess = isKanaToGuess ? new GuessKana(objectToGuess, objectsToPropose) :
            new GuessRomaji(objectToGuess, objectsToPropose)

        return returnGuess;
    }
}

