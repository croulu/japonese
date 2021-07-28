import assert from "assert";
import {Kana} from "../domain/Kana";

describe('Kana', function () {

    [["ka","h", "Hka"], ["ki","h","Hki"], ["ki","k","Kki"]].map(([romanji,alphabetInput,imageName]) =>
    it('should provide kana in image mode with romanji:' + romanji, function () {
        const alphabet = alphabetInput
        const syllable = romanji
        const sut = new Kana(alphabet, syllable)

        const actual = sut.determineKanaImageWithAlphabetAndSyllable(alphabet, syllable)

        const expected = imageName
        assert.deepEqual(actual, expected)
    }))
});
