import {Syllable} from "./Syllable";

export class Kana extends Syllable {
  constructor (alphabet, consonant, vowel) {
    super(alphabet, consonant, vowel);
  }

  display() {

    //TODO: mapping pour trouver la bonne image dans les cas exceptions comme shi
    return this.alphabet.toUpperCase() + this.consonant + this.vowel
  }

}
