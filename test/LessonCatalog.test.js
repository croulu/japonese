import {LessonCatalog} from "../domain/LessonCatalog";

import assert from "assert";

const alphabet = "hiragana";
const maxOrderLesson = 3;
const codesPreviousLessonOrder = ["a-i-u-e-o", "ka-ki-ku-ke-ko"];


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

        assert.deepEqual(codesPreviousLessonOrder, result);
    })

    it(`should randomize syllables of various lessons`, function () {
        const sut = new LessonCatalog();
        const lessons = sut.listPrevious(alphabet, maxOrderLesson);
        const result = sut.randomizeListPrevious(lessons);

        assert.deepEqual(codesPreviousLessonOrder, result);
    }
})
