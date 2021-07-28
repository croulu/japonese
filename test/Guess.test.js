import {Guess} from "../domain/Guess";
import {Kana} from "../domain/Kana";

import assert from "assert";

const kana = new Kana('hiragana', 'a');

const kanaChoosenTrue = new Kana('hiragana', 'a');
const kanaChoosenFalse = new Kana('hiragana', 'b');

const kanas = [
    new Kana('hiragana', 'a'),
    new Kana('hiragana', 'i'),
    new Kana('hiragana', 'u')
];

describe('Guess', function () {
    it('should provide true when choosen kana is correct', function () {
        const sut = new Guess(kana, kanas)
        assert.ok(sut.validateChoice(kanaChoosenTrue))
    })

    it('should provide false when choosen kana is not correct', function () {
        const sut = new Guess(kana, kanas)
        assert.ok(!sut.validateChoice(kanaChoosenFalse))
    })

})
