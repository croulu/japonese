import {Syllable} from "./Syllable";
import {LessonCatalog} from "./LessonCatalog";

export class KanaSyllable extends Syllable {
  constructor (alphabet, consonant, vowel) {
    super(alphabet, consonant, vowel);
  }

  display() {

    const syllableToDisplay = new Syllable(this.alphabet, this.consonant, this.vowel);

    const unicodeForThisKana = new LessonCatalog().unicodeWithSyllable(syllableToDisplay);

    return unicodeForThisKana;
  }

}
