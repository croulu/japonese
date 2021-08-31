
export class Syllable {
    constructor (alphabet, consonant, vowel) {
        this.alphabet = alphabet;
        this.consonant = consonant;
        this.vowel = vowel;
    }

    equals(syllable) {
        return (this.alphabet === syllable.alphabet &&
            this.consonant === syllable.consonant &&
            this.vowel === syllable.vowel )
    }

}
