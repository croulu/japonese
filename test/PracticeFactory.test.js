import {PracticeFactory} from "../domain/PracticeFactory";
import {Practice} from "../domain/Practice";
import {Kana} from "../domain/Kana";

import assert from "assert";
import {randomizeKanaToGuess} from "../domain/randomizeKanaToGuess";

describe('SeanceProvider', function () {

    it('should provide practice from lesson title', function () {
        const alphabet = "hiragana"
        const lessonTitle = "a i u"
        const sut = new PracticeFactory();
        const kanas = [
            new Kana(alphabet, 'a'),
            new Kana(alphabet, 'i'),
            new Kana(alphabet, 'u')
        ];

        const actual = sut.createPractice(lessonTitle, alphabet);

        const expected = new Practice([
            new Kana(alphabet, 'a'),
            new Kana(alphabet, 'i'),
            new Kana(alphabet, 'u')
        ], randomizeKanaToGuess,randomizeKanaToGuess);
        assert.deepEqual(actual, expected);
    });

});


