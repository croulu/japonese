import {Syllable} from "./Syllable";

export class Kana extends Syllable {
  constructor (alphabet, consonant, vowel) {
    super(alphabet, consonant, vowel);
  }

  display() {
    return this.alphabet.toUpperCase() + this.consonant + this.vowel
  }

}
