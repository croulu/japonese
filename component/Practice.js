import {Guess} from "./Guess";


class Practice {
    constructor(kanas, randomizeInList) {
        this.kanas = kanas
        this.randomizeInList = randomizeInList;
    }

    next() {
        const randomKanaToGuess = this.randomizeInList(this.kanas);
        return new Guess(randomKanaToGuess, this.kanas)
    }
}

export {
    Practice
}
