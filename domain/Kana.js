
export class Kana {
  constructor (alphabet, syllable) {
    this.alphabet = alphabet
    this.syllable = syllable
  }

  determineKanaImageWithAlphabetAndSyllable() {
    return this.alphabet.toUpperCase() + this.syllable
  }

}
