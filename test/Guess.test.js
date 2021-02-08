import {Guess} from "../component/Guess";
import {Kana} from "../component/Kana";

import assert from "assert";

const kana = new Kana('hiragana', 'a');

const kanaChoosen = new Kana('hiragana', 'a');

const kanas = [
    new Kana('hiragana', 'a'),
    new Kana('hiragana', 'i'),
    new Kana('hiragana', 'u')
];

describe('Guess', function () {
    it('should provide true because choice made is the good proposal', function () {
        const sut = new Guess(kana, kanas)
        assert.ok(sut.validateChoice(kanaChoosen))
    })

})
