import assert from "assert";
import {Kana} from "../domain/Kana";


const alphabet = "h";
const consonant = "";
const vowel = "a";
const unicodeHa = "\u3042";

describe('Kana', function () {


    it(`should provide unicode for kana ${alphabet}, ${consonant}, ${vowel}`, function () {
        const sut = new Kana(alphabet, consonant, vowel);

        const actual = sut.display();

        const expected = unicodeHa;
        assert.deepEqual(actual, expected);
    })
});
