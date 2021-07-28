import {Guess} from "./Guess";


export class Practice {

    constructor(kanas, randomizeKanaToGuess, randomizeKanasProposals) {
        this.kanas = kanas
        this.randomizeKanaToGuess = randomizeKanaToGuess;
        this.randomizeKanasProposals = randomizeKanasProposals;
    }

    next() {
        const randomKanaToGuess = this.randomizeKanaToGuess(this.kanas);
        const proposals = this.randomizeKanasProposals(this.kanas);
        return new Guess(randomKanaToGuess, proposals)
    }
}

