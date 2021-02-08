import {Guess} from "./Guess";


class Practice {

    constructor(kanas, randomizeInList, randomizeProposals) {
        this.kanas = kanas
        this.randomizeInList = randomizeInList;
        this.randomizeProposals = randomizeProposals;
    }

    next() {
        const randomKanaToGuess = this.randomizeInList(this.kanas);
        const proposals = this.randomizeProposals(this.kanas);
        return new Guess(randomKanaToGuess, proposals)
    }
}

export {
    Practice
}
