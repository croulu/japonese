import assert from "assert";
import {randomizeSyllableToGuess} from "../domain/randomizeSyllableToGuess";

describe('randomizeSyllableToGuess', function () {
    it('should guess all provided syllables', function () {
        const list = [7, 8, 9];
        const hundredElementArray = [...Array(100).keys()];
        const result = hundredElementArray.map(() => randomizeSyllableToGuess(list));
        assert.ok(list.every(k => result.includes(k)))
    })
})
