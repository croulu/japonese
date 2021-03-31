import {LessonCatalog} from "../component/LessonCatalog";

import assert from "assert";

const hiraganasBasicNb = 4
const hiraganasDakuonNb = 4
const hiraganasHandakuonNb = 1

const hiraganas = hiraganasBasicNb + hiraganasDakuonNb + hiraganasHandakuonNb

const katakanasBasicNb = 2
const katakanasDakuonNb = 4
const katakanasHandakuonNb = 1

const katakanas = katakanasBasicNb + katakanasDakuonNb + katakanasHandakuonNb

const kanas = hiraganas + katakanas

describe('LessonCatalog', function () {
    it('should provide the number of hiraganas', function () {
        const expected = hiraganas
        const sut = new LessonCatalog()
        const result = sut.getHiraganas().length
        assert.deepEqual(expected, result)
    })

    it('should provide the number of katakanas', function () {
        const expected = katakanas
        const sut = new LessonCatalog()
        const result = sut.getKatakanas().length
        assert.deepEqual(expected, result)
    })

    it('should provide the number of basic hiraganas', function () {
        const expected = hiraganasBasicNb
        const sut = new LessonCatalog()
        const result = sut.getHiraganasByGroup('basic').length
        assert.deepEqual(expected, result)
    })

    it('should provide the number of dakuon hiraganas', function () {
        const expected = hiraganasDakuonNb
        const sut = new LessonCatalog()
        const result = sut.getHiraganasByGroup('dakuon').length
        assert.deepEqual(expected, result)
    })

    it('should provide the number of handakuon hiraganas', function () {
        const expected = hiraganasHandakuonNb
        const sut = new LessonCatalog()
        const result = sut.getHiraganasByGroup('handakuon').length
        assert.deepEqual(expected, result)
    })

    it('should provide the number of basic katakanas', function () {
        const expected = katakanasBasicNb
        const sut = new LessonCatalog()
        const result = sut.getKatakanasByGroup("basic").length
        assert.deepEqual(expected, result)
    })

    it('should provide the number of dakuon katakanas', function () {
        const expected = katakanasDakuonNb
        const sut = new LessonCatalog()
        const result = sut.getKatakanasByGroup("dakuon").length
        assert.deepEqual(expected, result)
    })

    it('should provide the handakuon katakanas', function () {
        const expected = katakanasHandakuonNb
        const sut = new LessonCatalog()
        const result = sut.getKatakanasByGroup("handakuon").length
        assert.deepEqual(expected, result)
    })

    it('should provide one hiragana lesson', function () {
        const expected = 1
        const sut = new LessonCatalog()
        const result = sut.getHiraganaId("a").length
        assert.deepEqual(expected, result)
    })

    it('should provide one katakana lesson', function () {
        const expected = 1
        const sut = new LessonCatalog()
        const result = sut.getKatakanaId("a").length
        assert.deepEqual(expected, result)
    })

    it('should provide the number of kanas', function () {
        const expected = kanas
        const sut = new LessonCatalog()
        const result = sut.getKanas().length
        assert.deepEqual(expected, result)
    })





})
