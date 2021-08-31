import {Syllable} from "./Syllable";

export class Kana extends Syllable {
  constructor (alphabet, consonant, vowel) {
    super(alphabet, consonant, vowel);
  }

  determineKanaImage() {
    return this.alphabet.toUpperCase() + this.consonant + this.vowel
  }

}
