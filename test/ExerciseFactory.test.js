import {ExerciseFactory} from "../domain/ExerciseFactory";
import {Exercise} from "../domain/Exercise";
import {Kana} from "../domain/Kana";

import assert from "assert";
import {randomizeKanaToGuess} from "../domain/randomizeKanaToGuess";

describe('ExerciseFactory', function () {

    it('should provide exercise from lesson title', function () {
        const alphabet = "hiragana"
        const lessonTitle = "a i u"
        const sut = new ExerciseFactory();
        const kanas = [
            new Kana(alphabet, 'a'),
            new Kana(alphabet, 'i'),
            new Kana(alphabet, 'u')
        ];

        const actual = sut.createExercise(lessonTitle, alphabet);

        const expected = new Exercise([
            new Kana(alphabet, 'a'),
            new Kana(alphabet, 'i'),
            new Kana(alphabet, 'u')
        ], randomizeKanaToGuess,randomizeKanaToGuess);
        assert.deepEqual(actual, expected);
    });

});


