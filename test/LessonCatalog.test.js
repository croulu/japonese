import {LessonCatalog} from "../component/LessonCatalog";

import assert from "assert";


describe('LessonCatalog', function () {
    it('should provide the hiragana list', function () {
        const actual = [
            {
                id: "a",
                title: "a i u e o",
            },
            {
                id: "ka",
                title: "ka ki ku ke ko",
            },
            {
                id: "sa",
                title: "sa shi su se so",
            },
            {
                id: "ta",
                title: "ta chi tsu te to",
            },
        ]
        const sut = new LessonCatalog()
        const result = sut.list()
        assert.deepEqual(actual, result.hiragana)
    })

    it('should provide the "a" lesson', function () {
        const actual = [
            {
                id: "a",
                title: "a i u e o",
            },
        ]
        const sut = new LessonCatalog()
        const result = sut.getId("a")
        assert.deepEqual(actual, result)
    })

//    it('should provide the categorized list', function () {
})
