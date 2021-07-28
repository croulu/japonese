
export class Kana {
  constructor (alphabet, syllable) {
    this.alphabet = alphabet
    this.syllable = syllable
  }

  determineKanaImageWithAlphabetAndSyllable(alphabet, syllable) {
    return alphabet.toUpperCase() + syllable
  }

}
