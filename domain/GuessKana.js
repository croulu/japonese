import {GuessSyllable} from "./GuessSyllable";

export class GuessKana extends GuessSyllable {
    constructor (kana, romajis) {
        super(kana, romajis)
    }

    equals(romaji) {
        return (this.syllable.alphabet === romaji.alphabet &&
            this.syllable.consonant === romaji.consonant &&
            this.syllable.vowel === romaji.vowel)
    }

    validateChoice(kanaChosen) {
        return this.equals(kanaChosen)
    }

}
