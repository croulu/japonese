import {LessonCatalog} from "../domain/LessonCatalog";
import {Syllable} from "../domain/Syllable";

import assert from "assert";
import {Kana} from "../domain/Kana";


const alphabet = "hiragana";
const maxOrderLesson = 3;

const syllableHa = new Syllable("h", "", "a");
const romajiHa = "a";
const unicodeHa = "\u3042";
const syllableHki = new Syllable("h", "k", "i");
const romajiHki = "ki";
const unicodeHki = "\u304D";
const syllableHsi = new Syllable("h", "s", "i");
const romajiHsi = "shi";
const unicodeHsi = "\u3057";

const syllablesToMap = [
    [syllableHa.alphabet, syllableHa.consonant, syllableHa.vowel, romajiHa, unicodeHa],
    [syllableHki.alphabet, syllableHki.consonant, syllableHki.vowel, romajiHki, unicodeHki],
    [syllableHsi.alphabet, syllableHsi.consonant, syllableHsi.vowel, romajiHsi, unicodeHsi],
];

const maxSyllables = 5;

const syllablesRandomLessonHk = [
    {alphabet: "h", consonant: "k", vowel: "u"},
    {alphabet: "h", consonant: "", vowel: "a"},
    {alphabet: "h", consonant: "", vowel: "i"},
    {alphabet: "h", consonant: "k", vowel: "e"},
    {alphabet: "h", consonant: "", vowel: "o"}
]

const codeLessonHk = "ku-a-i-ke-o";

const lessonHka = [
    {alphabet: "h", consonant: "k", vowel: "a"},
    {alphabet: "h", consonant: "k", vowel: "i"},
    {alphabet: "h", consonant: "k", vowel: "u"},
    {alphabet: "h", consonant: "k", vowel: "e"},
    {alphabet: "h", consonant: "k", vowel: "o"}
]

const kanaHka = new Kana("h", "k", "a")


describe('LessonCatalog', function () {
    it(`should provide lessons structured in alphabets and groups`, function () {
        const sut = new LessonCatalog()
        const result = sut.list()

        assert.deepEqual(10, result.hiragana.basic.length)
        assert.deepEqual(4, result.hiragana.dakuon.length)
        assert.deepEqual(1, result.hiragana.handakuon.length)
        assert.deepEqual(10, result.katakana.basic.length)
        assert.deepEqual(4, result.katakana.dakuon.length)
        assert.deepEqual(1, result.katakana.handakuon.length)
    })

    it(`should provide hiragana lessons plus its previous lessons with lesson order < ${maxOrderLesson}`, function () {
        const sut = new LessonCatalog();
        const lessons = sut.listPrevious(alphabet, maxOrderLesson);
        const result = [];
        lessons.map(lesson => result.push(lesson.code));

        assert.deepEqual(maxOrderLesson, result.length)
    })

    it(`should randomize syllables of various lessons`, function () {
        const sut = new LessonCatalog();
        const result = sut.randomizeListPrevious(alphabet, maxOrderLesson);

        // TODO : pas le bon test

//        assert.ok(result.includes(syllableHa))
    })

    it(`should provide no more than ${maxSyllables} proposals`, function () {
        const sut = new LessonCatalog();
        const result = sut.randomizeListPreviousButNoMoreThanNb(alphabet, maxOrderLesson);

        assert.deepEqual(maxSyllables, result.length)
    })

    it('should provide code lesson with syllables list', function () {
        const sut = new LessonCatalog();
        const result = sut.codeWithSyllablesList(syllablesRandomLessonHk);

        assert.deepEqual(codeLessonHk, result);
    });

    syllablesToMap.map(([alphabet, consonant, vowel, romaji]) =>
        it(`should provide romaji with syllable ${alphabet}, ${consonant}, ${vowel}`, function () {
            const sut = new LessonCatalog();
            const result = sut.romajiWithSyllable(new Syllable(alphabet, consonant, vowel));

            assert.deepEqual(result, romaji);
        })
    )

    syllablesToMap.map(([alphabet, consonant, vowel, romaji, unicode]) =>
        it(`should provide unicode with syllable ${alphabet}, ${consonant}, ${vowel}`, function () {
            const sut = new LessonCatalog();
            const result = sut.unicodeWithSyllable(new Syllable(alphabet, consonant, vowel));

            assert.deepEqual(result, unicode);
        })
    )

    it('should provide one kana to display for a lesson', function () {
        const sut = new LessonCatalog();
        const result = sut.kanaToDisplayForLesson(lessonHka);

        assert.deepEqual(kanaHka.display(), result);
    });

})
