import assert from "assert";
import {randomizeKanaToGuess} from "../domain/randomizeKanaToGuess";

describe('randomizeKanaToGuess', function () {
    it('should guess all provided kanas', function () {
        const list = [7, 8, 9];
        const hundredElementArray = [...Array(100).keys()];
        const result = hundredElementArray.map(() => randomizeKanaToGuess(list));
        assert.ok(list.every(k => result.includes(k)))
    })
})
