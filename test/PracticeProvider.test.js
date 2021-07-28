import {PracticeFactory} from "../domain/PracticeFactory";
import {Practice} from "../domain/Practice";
import {Kana} from "../domain/Kana";
import {Guess} from "../domain/Guess";
import {Lesson} from "../domain/Lesson";


import assert from "assert";


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
        const randomizeKanaToGuess = () => {}
        const randomizeKanasProposals = () => []

        const actual = sut.createPractice(lessonTitle, alphabet, randomizeKanaToGuess, randomizeKanasProposals);

        const expected = new Practice([
            new Kana(alphabet, 'a'),
            new Kana(alphabet, 'i'),
            new Kana(alphabet, 'u')
        ], randomizeKanaToGuess, randomizeKanasProposals);
        assert.deepEqual(actual, expected);
    });

});


