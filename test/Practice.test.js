import {Practice} from "../domain/Practice";
import {Syllable} from "../domain/Syllable";
import {Kana} from "../domain/Kana";
import {randomizeSyllableToGuess} from "../domain/randomizeSyllableToGuess";

import assert from "assert";

const lesson = [
    new Syllable('hiragana', 'k', 'a'),
    new Syllable('hiragana', 'k', 'i'),
    new Syllable('hiragana', 'k', 'u'),
    new Syllable('hiragana', 'k', 'e'),
    new Syllable('hiragana', 'k', 'o'),
];

describe('Practice', function () {

    /*
    it('should provide GuessKana within Kana lesson', function () {
        const guessWhat = "kana";
        const list = randomizeSyllableToGuess();
        const sut = new Practice(lesson,
            list => list[0],
            list => list,
            guessWhat)
        const guessRomaji = sut.next();
        assert.ok(lesson.includes(guessRomaji.syllable))
    })

    it('should provide GuessRomaji within Romaji lesson', function () {

    }

*/

})
