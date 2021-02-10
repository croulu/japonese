import {Lesson} from "../component/Lesson";

import assert from "assert";

describe('Lesson', function () {
    it('should provide the hiragana - lesson list', function () {
        const line = "-"
        const sut = new Lesson("hiragana", line)
        assert.equal(sut.getLesson().length, 1)
    })

// TODO
    //it('should provide the hiragana complete lesson list', function () {
    //const sut = new LessonProvider("hiragana", "")
    //assert.strictEqual(sut.getLessonHiragana().length, 1)
    //})

})