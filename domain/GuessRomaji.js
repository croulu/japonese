import {GuessSyllable} from "./GuessSyllable";

export class GuessRomaji extends GuessSyllable {
    constructor (romaji, kanas) {
        super(romaji, kanas)
    }

    equals(kana) {
        return this.syllable.alphabet === kana.alphabet &&
            this.syllable.consonant === kana.consonant &&
            this.syllable.vowel === kana.vowel
    }

    validateChoice(romajiChosen) {
        return this.equals(romajiChosen)
    }

}
