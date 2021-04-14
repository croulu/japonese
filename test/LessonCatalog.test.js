import {LessonCatalog} from "../component/LessonCatalog";

import assert from "assert";

const hiraganasBasicNb = 10
const hiraganasDakuonNb = 4
const hiraganasHandakuonNb = 1

const hiraganasNb = hiraganasBasicNb + hiraganasDakuonNb + hiraganasHandakuonNb

const katakanasBasicNb = 10
const katakanasDakuonNb = 4
const katakanasHandakuonNb = 1

const katakanasNb = katakanasBasicNb + katakanasDakuonNb + katakanasHandakuonNb

const kanasNb = hiraganasNb + katakanasNb

describe('LessonCatalog', function () {

    ([
        { fn : sut => sut.getHiraganasByGroup("basic"), expected : hiraganasBasicNb, spelling: "s", title : "basic hiraganas"},
        { fn : sut => sut.getHiraganasByGroup("dakuon"), expected : hiraganasDakuonNb, spelling: "s", title : "dakuon hiraganas"},
        { fn : sut => sut.getHiraganasByGroup("handakuon"), expected : hiraganasHandakuonNb, spelling: "s", title : "handakuon hiraganas"},
        { fn : sut => sut.getKatakanasByGroup("basic"), expected : katakanasBasicNb, spelling: "s", title : "basic katakanas"},
        { fn : sut => sut.getKatakanasByGroup("dakuon"), expected : katakanasDakuonNb, spelling: "s", title : "dakuon katakanas"},
        { fn : sut => sut.getKatakanasByGroup("handakuon"), expected : katakanasHandakuonNb, spelling: "s", title : "handakuon katakanas"},
        { fn : sut => sut.getHiraganaId("aiueo"), expected : 1, spelling: "", title : "the hiragana lesson a i u e o"},
        { fn : sut => sut.getKatakanaId("aiueo"), expected : 1, spelling: "", title : "the katakana lesson a i u e o"},
 //       { fn : sut => sut.getKanas(), expected : kanas, spelling: "s", title : "kanas"},

    ]).forEach(({fn, expected, spelling, title})=>{
        it(`should provide ${expected} lesson${spelling} for ${title}`, function () {
            const sut = new LessonCatalog()
            const result = fn(sut).length
            assert.deepEqual(expected, result)
        })
    })

    it(`should provide grouped hiraganas`, function() {
        const sut = new LessonCatalog()
        const result = sut.getHiraganas()
        assert.deepEqual(hiraganasBasicNb, result.basic.length)
        assert.deepEqual(hiraganasDakuonNb, result.dakuon.length)
        assert.deepEqual(hiraganasHandakuonNb, result.handakuon.length)
    })

    it(`should provide grouped katakanas`, function() {
        const sut = new LessonCatalog()
        const result = sut.getKatakanas()
        assert.deepEqual(katakanasBasicNb, result.basic.length)
        assert.deepEqual(katakanasDakuonNb, result.dakuon.length)
        assert.deepEqual(katakanasHandakuonNb, result.handakuon.length)
    })

})
