import {LessonCatalog} from "../component/LessonCatalog";

import assert from "assert";

const hiraganaBasicList = [
    {
        id: "a",
        title: "a i u e o",
        group: "basic",
    },
    {
        id: "ka",
        title: "ka ki ku ke ko",
        group: "basic",
    },
    {
        id: "sa",
        title: "sa shi su se so",
        group: "basic",
    },
    {
        id: "ta",
        title: "ta chi tsu te to",
        group: "basic",
    },
]

const hiraganaDakuonList = [
    {
        id: "ga",
        title: "ga gi gu ge go",
        group: "dakuon",
    },
    {
        id: "za",
        title: "za ji zu ze zo",
        group: "dakuon",
    },
    {
        id: "da",
        title: "da ji(di) zu(du) de do",
        group: "dakuon",
    },
    {
        id: "ba",
        title: "ba bi bu be bo",
        group: "dakuon",
    },
]

const hiraganaHandakuonList = [
    {
        id: "pa",
        title: "pa pi pu pe po",
        group: "handakuon",
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
        group: "basic",
    },
    {
        id: "ka",
        title: "ka ki ku ke ko",
        group: "basic",
    },
]

const katakanaDakuonList = [
    {
        id: "ga",
        title: "ga gi gu ge go",
        group: "dakuon",
    },
    {
        id: "za",
        title: "za ji zu ze zo",
        group: "dakuon",
    },
    {
        id: "da",
        title: "da ji(di) zu(du) de do",
        group: "dakuon",
    },
    {
        id: "ba",
        title: "ba bi bu be bo",
        group: "dakuon",
    },
]

const katakanaHandakuonList = [
    {
        id: "pa",
        title: "pa pi pu pe po",
        group: "handakuon",
    },
]

const katakanaList = katakanaBasicList.concat(katakanaDakuonList).concat(katakanaHandakuonList)


describe('LessonCatalog', function () {
    it('should provide all the hiraganas', function () {
        const expected = hiraganaList
        const sut = new LessonCatalog()
        const result = sut.getHiraganas()
        assert.deepEqual(expected, result)
    })

    it('should provide the basic hiraganas', function () {
        const expected = hiraganaBasicList
        const sut = new LessonCatalog()
        const result = sut.getHiraganaByGroup("basic")
        assert.deepEqual(expected, result)
    })

    it('should provide the dakuon hiragana list', function () {
        const expected = hiraganaDakuonList
        const sut = new LessonCatalog()
        const result = sut.getHiraganaByGroup("dakuon")
        assert.deepEqual(expected, result)
    })

    it('should provide the handakuon hiragana list', function () {
        const expected = hiraganaHandakuonList
        const sut = new LessonCatalog()
        const result = sut.getHiraganaByGroup("handakuon")
        assert.deepEqual(expected, result)
    })

    it('should provide the katakana list', function () {
        const expected = katakanaList
        const sut = new LessonCatalog()
        const result = sut.getKatakanas()
        assert.deepEqual(expected, result)
    })

    it('should provide the basic katakana list', function () {
        const expected = katakanaBasicList
        const sut = new LessonCatalog()
        const result = sut.getKatakanaByGroup("basic")
        assert.deepEqual(expected, result)
    })

    it('should provide the dakuon katakana list', function () {
        const expected = katakanaDakuonList
        const sut = new LessonCatalog()
        const result = sut.getKatakanaByGroup("dakuon")
        assert.deepEqual(expected, result)
    })

    it('should provide the handakuon katakana list', function () {
        const expected = katakanaHandakuonList
        const sut = new LessonCatalog()
        const result = sut.getKatakanaByGroup("handakuon")
        assert.deepEqual(expected, result)
    })

    it('should provide the hiragana "a" lesson', function () {
        const expected = [
            {
                id: "a",
                title: "a i u e o",
                group: "basic",
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
                group: "basic",
            },
        ]
        const sut = new LessonCatalog()
        const result = sut.getKatakanaId("a")
        assert.deepEqual(expected, result)
    })

    it('should provide the categorized list', function () {
        const expected = hiraganaList.concat(katakanaList)
        const sut = new LessonCatalog()
        const result = sut.getCategorizedList()
        assert.deepEqual(expected, result)
    })
})
