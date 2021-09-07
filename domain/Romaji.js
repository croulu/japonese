import {Syllable} from "./Syllable";

export class Romaji extends Syllable {
    constructor (alphabet, consonant, vowel) {
        super(alphabet, consonant, vowel);
    }

    display() {
        return "TO CONVERT -> " + this.consonant + this.vowel
    }
}
