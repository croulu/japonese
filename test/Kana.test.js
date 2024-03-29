import assert from "assert";
import {KanaSyllable} from "../domain/KanaSyllable";


const alphabet = "h";
const consonant = "";
const vowel = "a";
const unicodeHa = "\u3042";

describe('Kana', function () {


    it(`should provide unicode for kana ${alphabet}, ${consonant}, ${vowel}`, function () {
        const sut = new KanaSyllable(alphabet, consonant, vowel);

        const actual = sut.display();

        const expected = unicodeHa;
        assert.deepEqual(actual, expected);
    })
});
