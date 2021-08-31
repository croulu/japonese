import assert from "assert";
import {Syllable} from "../domain/Syllable";

const syllable = new Syllable('hiragana', 'k', 'a');

describe('Syllable', function () {
    it('should confirm that 2 syllables are the same', function () {
        const sut = new Syllable('hiragana', 'k', 'a');

        assert.ok(sut.equals(syllable))
    })


})
