import {Guess} from "./Guess";


class Practice {
    constructor(kanas, randomize) {
        this.kanas = kanas
        this.randomize = randomize;
    }

    next() {

        return new Guess(this.randomize(this.kanas), this.kanas)
    }

}

export {
    Practice
}
