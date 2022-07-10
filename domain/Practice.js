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
        // TODO avoir une liste plus grosse que 5 éléments
        this.allSyllabesToPractice = lesson;
        this.syllables = lesson;
    }

    next() {

        if (this.allSyllabesToPractice.length > 5) {
            const onePartOfLessonForPractice = new LessonCatalog();
            this.syllables = onePartOfLessonForPractice.randomizeLessonWithAFewProposals(this.allSyllabesToPractice, 5);
        }

        const randomSyllableToGuess = randomizeSyllableToGuess(this.syllables);

        const guessWhat = randomizeWhatToGuess();

        const isKanaToGuess = guessWhat === "kana";

        const objectToGuess = isKanaToGuess ?
            new Kana(randomSyllableToGuess.alphabet, randomSyllableToGuess.consonant, randomSyllableToGuess.vowel) :
            new Romaji(randomSyllableToGuess.alphabet, randomSyllableToGuess.consonant, randomSyllableToGuess.vowel)

        const proposals = isKanaToGuess ?
            this.syllables :
            randomizeSyllablesToPropoze(this.syllables);

        const objectsToPropose = isKanaToGuess ?
            proposals.map(proposal => new Romaji(proposal.alphabet, proposal.consonant, proposal.vowel)) :
            proposals.map(proposal => new Kana(proposal.alphabet, proposal.consonant, proposal.vowel))

        const returnGuess = isKanaToGuess ? new GuessKana(objectToGuess, objectsToPropose) :
            new GuessRomaji(objectToGuess, objectsToPropose)

        return returnGuess;
    }
}

