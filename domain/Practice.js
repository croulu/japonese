import {GuessRomaji} from "./GuessRomaji";
import {GuessKana} from "./GuessKana";
import {Romaji} from "./Romaji";
import {Kana} from "./Kana";
import {randomizeWhatToGuess} from "./randomizeWhatToGuess";
import {randomizeSyllableToGuess} from "./randomizeSyllableToGuess";
import {randomizeSyllablesToPropoze} from "./randomizeSyllablesToPropoze";
import {LessonCatalog} from "./LessonCatalog";

export class Practice {

    constructor(lesson) {
        this.allSyllabesToPractice = lesson;
        this.syllables = lesson;
    }

    next() {
        this.newSyllablesIfMoreThanExpectedProposals();

        const randomSyllableToGuess = randomizeSyllableToGuess(this.syllables);

        const isKanaToGuess = this.hasKanaToGuess();

        const objectToGuess = this.createKanaOrRomaji(isKanaToGuess, randomSyllableToGuess);

        const proposals = randomizeSyllablesToPropoze(this.syllables);

        const objectsToPropose = this.createProposalsKanaOrRomaji(isKanaToGuess, proposals);

        const returnGuess = this.createGuessKanaOrGuessRomaji(isKanaToGuess, objectToGuess, objectsToPropose);

        return returnGuess;
    }

    hasKanaToGuess() {
        const guessWhat = randomizeWhatToGuess();
        const isKanaToGuess = guessWhat === "kana";
        return isKanaToGuess;
    }

    createGuessKanaOrGuessRomaji(isKanaToGuess, objectToGuess, objectsToPropose) {
        return isKanaToGuess ? new GuessKana(objectToGuess, objectsToPropose) :
            new GuessRomaji(objectToGuess, objectsToPropose);
    }

    createProposalsKanaOrRomaji(isKanaToGuess, proposals) {
        return isKanaToGuess ?
            proposals.map(proposal => new Romaji(proposal.alphabet, proposal.consonant, proposal.vowel)) :
            proposals.map(proposal => new Kana(proposal.alphabet, proposal.consonant, proposal.vowel));
    }

    createKanaOrRomaji(isKanaToGuess, randomSyllableToGuess) {
        return isKanaToGuess ?
            new Kana(randomSyllableToGuess.alphabet, randomSyllableToGuess.consonant, randomSyllableToGuess.vowel) :
            new Romaji(randomSyllableToGuess.alphabet, randomSyllableToGuess.consonant, randomSyllableToGuess.vowel);
    }

    newSyllablesIfMoreThanExpectedProposals() {
        if (this.allSyllabesToPractice.length > 5) {
            const onePartOfLessonForPractice = new LessonCatalog();
            this.syllables = onePartOfLessonForPractice.randomizeLessonWithAFewProposals(this.allSyllabesToPractice, 5);
        }
    }
}

