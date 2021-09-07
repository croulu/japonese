import {LessonCatalog} from "../domain/LessonCatalog";

import assert from "assert";

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

    it( `should provide lesson requested plus it previous lessons`, function () {
        const sut = new LessonCatalog();
        const alphabet = "hiragana";
        const lessons = sut.list();

        console.log(lessons[alphabet].basic)

        const result = lessons[alphabet].basic.filter(lesson => lesson[alphabet].basic.order < 3);

        console.log(result);


    })

})
