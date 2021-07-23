import {Practice} from "../domain/Practice";
import {Kana} from "../domain/Kana";

import assert from "assert";

const kanas = [
    new Kana('hiragana', 'a'),
    new Kana('hiragana', 'i'),
    new Kana('hiragana', 'u')
];

describe('Practice', function () {
    it('should provide Guess within Kanas lesson', function () {
        const sut = new Practice(
            kanas,
            list => list[0],
            list => list)
        const guess = sut.next()
        assert.ok(kanas.includes(guess.kanaToGuess))
    })

    it('should randomize kana to guess', function () {
        const sut = new Practice(
            kanas,
            list => list[1],
            list => list)
        const guess = sut.next()
        assert.deepEqual(kanas[1], guess.kanaToGuess)
    })

    it('should randomize proposed kanas', function () {
        const sut = new Practice(
            kanas,
            list => list[0],
            list => [list[1], list[2], list[0]]
        )
        const guess = sut.next()
        const proposedKanas = guess.proposedKanas
        console.log(proposedKanas)
        assert.deepEqual([kanas[1], kanas[2], kanas[0]], proposedKanas);
    })

})
