import {Lesson} from "../component/Lesson";

import assert from "assert";
import {Kana} from "../component/Kana";

describe('Lesson', function () {
    it('should provide the hiragana "-" lesson list', function () {
        const line = "-"
        const kanasHiraganaA = [
            new Kana("hiragana", "a"),
            new Kana("hiragana", "i"),
            new Kana("hiragana", "u"),
            new Kana("hiragana", "e"),
            new Kana("hiragana", "o"),
        ]
        const sut = new Lesson("hiragana", line)
        const actual = sut.getLesson()
        const expected = [new Lesson("hiragana", line, kanasHiraganaA)]
        assert.deepEqual(actual, expected)
    })

    it('should provide the hiragana complete lesson list', function () {
// TODO
    })

})