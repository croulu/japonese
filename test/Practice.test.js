import {Practice} from "../domain/Practice";
import {Kana} from "../domain/Kana";

import assert from "assert";


const kanas = [
    new Kana('hiragana', 'k', 'a'),
    new Kana('hiragana', 'k', 'i'),
    new Kana('hiragana', 'k', 'u')
];

describe('Practice', function () {

    it('should provide GuessSyllable within Kana lesson or Romaji lesson', function () {
        const sut = new Practice(
            kanas,
            list => list[0],
            list => list)
        const guess = sut.next()
        assert.ok(kanas.includes(guess.syllable))
    })

    it('should randomize kana to guess', function () {
        const sut = new Practice(
            kanas,
            list => list[1],
            list => list)
        const guess = sut.next()
        assert.deepEqual(kanas[1], guess.syllable)
    })

    it('should randomize proposed kanas', function () {
        const sut = new Practice(
            kanas,
            list => list[0],
            list => [list[1], list[2], list[0]]
        )
        const guess = sut.next()
        const proposedKanas = guess.syllables
        assert.deepEqual([kanas[1], kanas[2], kanas[0]], proposedKanas);
    })

})
