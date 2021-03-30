import {LessonCatalog} from "../component/LessonCatalog";

import assert from "assert";

const hiraganasBasic = [
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

const hiraganasDakuon = [
    {
        id: "ga",
        title: "ga gi gu ge go",
    },
    {
        id: "za",
        title: "za ji zu ze zo",
    },
    {
        id: "da",
        title: "da ji(di) zu(du) de do",
    },
    {
        id: "ba",
        title: "ba bi bu be bo",
    },
]

const hiraganasHandakuon = [
    {
        id: "pa",
        title: "pa pi pu pe po",
    },
]

const hiraganas = [
    ...hiraganasBasic,
    ...hiraganasDakuon,
    ...hiraganasHandakuon
]

const katakanasBasic = [
    {
        id: "a",
        title: "a i u e o",
    },
    {
        id: "ka",
        title: "ka ki ku ke ko",
    },
]

const katakanasDakuon = [
    {
        id: "ga",
        title: "ga gi gu ge go",
    },
    {
        id: "za",
        title: "za ji zu ze zo",
    },
    {
        id: "da",
        title: "da ji(di) zu(du) de do",
    },
    {
        id: "ba",
        title: "ba bi bu be bo",
    },
]

const katakanasHandakuon = [
    {
        id: "pa",
        title: "pa pi pu pe po",
    },
]

const katakanas = [
    ...katakanasBasic,
    ...katakanasDakuon,
    ...katakanasHandakuon
]

const kanas = [
    ...hiraganas,
    ...katakanas
]

describe('LessonCatalog', function () {
    it('should provide all the hiraganas', function () {
        const expected = hiraganas
        const sut = new LessonCatalog()
        const result = sut.getHiraganas()
        assert.deepEqual(expected, result)
    })

    it('should provide all the katakana', function () {
        const expected = katakanas
        const sut = new LessonCatalog()
        const result = sut.getKatakanas()
        assert.deepEqual(expected, result)
    })

    it('should provide the basic hiraganas', function () {
        const expected = hiraganasBasic
        const sut = new LessonCatalog()
        const result = sut.getHiraganasByGroup('basic')
        assert.deepEqual(expected, result)
    })

    it('should provide the dakuon hiraganas', function () {
        const expected = hiraganasDakuon
        const sut = new LessonCatalog()
        const result = sut.getHiraganasByGroup('dakuon')
        assert.deepEqual(expected, result)
    })

    it('should provide the handakuon hiraganas', function () {
        const expected = hiraganasHandakuon
        const sut = new LessonCatalog()
        const result = sut.getHiraganasByGroup('handakuon')
        assert.deepEqual(expected, result)
    })

    it('should provide the basic katakanas', function () {
        const expected = katakanasBasic
        const sut = new LessonCatalog()
        const result = sut.getKatakanasByGroup("basic")
        assert.deepEqual(expected, result)
    })

    it('should provide the dakuon katakanas', function () {
        const expected = katakanasDakuon
        const sut = new LessonCatalog()
        const result = sut.getKatakanasByGroup("dakuon")
        assert.deepEqual(expected, result)
    })

    it('should provide the handakuon katakanas', function () {
        const expected = katakanasHandakuon
        const sut = new LessonCatalog()
        const result = sut.getKatakanasByGroup("handakuon")
        assert.deepEqual(expected, result)
    })

    it('should provide the hiragana "a" lesson', function () {
        const expected = [
            {
                id: "a",
                title: "a i u e o",
            },
        ]
        const sut = new LessonCatalog()
        const result = sut.getHiraganaId("a")
        assert.deepEqual(expected, result)
    })

    it('should provide the katakana "a" lesson', function () {
        const expected = [
            {
                id: "a",
                title: "a i u e o",
            },
        ]
        const sut = new LessonCatalog()
        const result = sut.getKatakanaId("a")
        assert.deepEqual(expected, result)
    })

    it('should provide all the kanas', function () {
        const expected = kanas
        const sut = new LessonCatalog()
        const result = sut.getKanas()
        assert.deepEqual(expected, result)
    })

})
