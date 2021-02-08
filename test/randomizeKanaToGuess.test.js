import assert from "assert";

describe('randomizeKanaToGuess', function () {
    it('should guess all provided kanas', function () {
        const list = [7, 8, 9]
        const result = Array(100).map(() => randomizeKanaToGuess(list));
    })
r