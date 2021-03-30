import {LessonCatalog} from "../component/LessonCatalog";

import assert from "assert";

const hiraganaBasicList = [
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

const hiraganaDakuonList = [
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

const hiraganaHandakuonList = [
    {
        id: "pa",
        title: "pa pi pu pe po",
    },
]

const hiraganaList = [
    ...hiraganaBasicList,
    ...hiraganaDakuonList,
    ...hiraganaHandakuonList
]

const katakanaBasicList = [
    {
        id: "a",
        title: "a i u e o",
    },
    {
        id: "ka",
        title: "ka ki ku ke ko",
    },
]

const katakanaDakuonList = [
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

const katakanaHandakuonList = [
    {
        id: "pa",
        title: "pa pi pu pe po",
    },
]

const katakanaList = [
    ...katakanaBasicList,
    ...katakanaDakuonList,
    ...katakanaHandakuonList
]

const kanas = [
    ...hiraganaList,
    ...katakanaList
]

describe('LessonCatalog', function () {
    it('should provide all the hiraganas', function () {
        const expected = hiraganaList
        const sut = new LessonCatalog()
        const result = sut.getHiraganas()
        assert.deepEqual(expected, result)
    })

    it('should provide all the katakana', function () {
        const expected = katakanaList
        const sut = new LessonCatalog()
        const result = sut.getKatakanas()
        assert.deepEqual(expected, result)
    })

    it('should provide the basic hiraganas', function () {
        const expected = hiraganaBasicList
        const sut = new LessonCatalog()
        const result = sut.getHiraganasByGroup('basic')
        assert.deepEqual(expected, result)
    })

    it('should provide the dakuon hiraganas', function () {
        const expected = hiraganaDakuonList
        const sut = new LessonCatalog()
        const result = sut.getHiraganasByGroup('dakuon')
        assert.deepEqual(expected, result)
    })

    it('should provide the handakuon hiraganas', function () {
        const expected = hiraganaHandakuonList
        const sut = new LessonCatalog()
        const result = sut.getHiraganasByGroup('handakuon')
        assert.deepEqual(expected, result)
    })

    it('should provide the basic katakanas', function () {
        const expected = katakanaBasicList
        const sut = new LessonCatalog()
        const result = sut.getKatakanasByGroup("basic")
        assert.deepEqual(expected, result)
    })

    it('should provide the dakuon katakanas', function () {
        const expected = katakanaDakuonList
        const sut = new LessonCatalog()
        const result = sut.getKatakanasByGroup("dakuon")
        assert.deepEqual(expected, result)
    })

    it('should provide the handakuon katakanas', function () {
        const expected = katakanaHandakuonList
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
