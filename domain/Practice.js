import {GuessRomajiSyllable} from "./GuessRomajiSyllable";
import {GuessKanaSyllable} from "./GuessKanaSyllable";
import {RomajiSyllable} from "./RomajiSyllable";
import {KanaSyllable} from "./KanaSyllable";
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
        const NO_MORE_THAN = 5;
        this.syllables = this.newSyllablesIfMoreThanExpectedProposals(this.allSyllabesToPractice, NO_MORE_THAN);

        const randomSyllableToGuess = randomizeSyllableToGuess(this.syllables);

        const isKanaToGuess = this.hasKanaToGuess();

        const objectToGuess = this.createKanaOrRomaji(isKanaToGuess, randomSyllableToGuess);

        // TODO if expert level, proposals do not include good proposal
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
        return isKanaToGuess ? new GuessKanaSyllable(objectToGuess, objectsToPropose) :
            new GuessRomajiSyllable(objectToGuess, objectsToPropose);
    }

    createProposalsKanaOrRomaji(isKanaToGuess, proposals) {
        return isKanaToGuess ?
            proposals.map(proposal => new RomajiSyllable(proposal.alphabet, proposal.consonant, proposal.vowel)) :
            proposals.map(proposal => new KanaSyllable(proposal.alphabet, proposal.consonant, proposal.vowel));
    }

    createKanaOrRomaji(isKanaToGuess, randomSyllableToGuess) {
        return isKanaToGuess ?
            new KanaSyllable(randomSyllableToGuess.alphabet, randomSyllableToGuess.consonant, randomSyllableToGuess.vowel) :
            new RomajiSyllable(randomSyllableToGuess.alphabet, randomSyllableToGuess.consonant, randomSyllableToGuess.vowel);
    }

    newSyllablesIfMoreThanExpectedProposals(allSyllables, noMoreThan) {
        if (allSyllables.length > noMoreThan) {
            const onePartOfLessonForPractice = new LessonCatalog();
            return onePartOfLessonForPractice.randomizeLessonWithAFewProposals(allSyllables, noMoreThan);
        }
    }
}

