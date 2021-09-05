import assert from "assert";
import {Kana} from "../domain/Kana";

describe('Kana', function () {

    [["h", "k", "a", "Hka"], ["h", "k", "i","Hki"], ["k", "k", "i", "Kki"], ["h", "s", "i", "Hsi"]]
        .map(([alphabetInput, consonantInput, vowelInput, imageName]) =>
    it('should provide kana in image mode for : ' + imageName, function () {
        const alphabet = alphabetInput
        const consonant = consonantInput
        const vowel = vowelInput
        const sut = new Kana(alphabet, consonant, vowel)

        const actual = sut.display()

        const expected = imageName
        assert.deepEqual(actual, expected)
    }))
});
