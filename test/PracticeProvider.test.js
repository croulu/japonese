import {PracticeProvider} from "../domain/PracticeProvider";
import {Practice} from "../domain/Practice";
import {Kana} from "../domain/Kana";
import {Guess} from "../domain/Guess";
import {Lesson} from "../domain/Lesson";


import assert from "assert";

describe('SeanceProvider', function () {
    it('should provide kana in order', function () {
        const alphabet = "hiragana"
        const sut = new PracticeProvider()
        const kanas = [
            new Kana(alphabet, 'a'),
            new Kana(alphabet, 'i'),
            new Kana(alphabet, 'u')
        ];
        const actual = sut.fromLesson(new Lesson(kanas));
        const expected = new Practice([
            new Guess(new Kana(alphabet, 'a'), kanas),
            new Guess(new Kana(alphabet, 'i'), kanas),
            new Guess(new Kana(alphabet, 'u'), kanas)
        ]);
        assert.deepEqual(actual, expected);
    });




});


