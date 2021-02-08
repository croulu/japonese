import {SeanceProvider} from "../component/SeanceProvider";
import {Practice} from "../component/Practice";
import {Kana} from "../component/Kana";
import {Guess} from "../component/Guess";
import {Lesson} from "../component/Lesson";


import assert from "assert";

describe('SeanceProvider', function () {
    it('should provide kana in order', function () {
        const sut = new SeanceProvider()
        const kanas = [
            new Kana('hiragana', 'a'),
            new Kana('hiragana', 'i'),
            new Kana('hiragana', 'u')
        ];
        const actual = sut.fromLesson(new Lesson(kanas));
        const expected = new Practice([
            new Guess(new Kana('hiragana', 'a'), kanas),
            new Guess(new Kana('hiragana', 'i'), kanas),
            new Guess(new Kana('hiragana', 'u'), kanas)
        ]);
        assert.deepEqual(actual, expected);
    });
});


