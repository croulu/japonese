import {Syllable} from "./Syllable";
import {LessonCatalog} from "./LessonCatalog";

export class Romaji extends Syllable {
    constructor (alphabet, consonant, vowel) {
        super(alphabet, consonant, vowel);
    }

    display() {
        const syllableToDisplay = new Syllable(this.alphabet, this.consonant, this.vowel);

        const goodRomajiForThisRomaji = new LessonCatalog().romajiWithSyllable(syllableToDisplay);

        return goodRomajiForThisRomaji;
    }
}
