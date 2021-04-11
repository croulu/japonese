import {LessonCatalog} from "../component/LessonCatalog";

import assert from "assert";

const hiraganasBasicNb = 10
const hiraganasDakuonNb = 4
const hiraganasHandakuonNb = 1

const hiraganas = hiraganasBasicNb + hiraganasDakuonNb + hiraganasHandakuonNb

const katakanasBasicNb = 10
const katakanasDakuonNb = 4
const katakanasHandakuonNb = 1

const katakanas = katakanasBasicNb + katakanasDakuonNb + katakanasHandakuonNb

const kanas = hiraganas + katakanas

describe('LessonCatalog', function () {

    ([
        { fn : sut => sut.getHiraganas(), expected : hiraganas, spelling: "s", title : "hiraganas"},
        { fn : sut => sut.getKatakanas(), expected : katakanas, spelling: "s", title : "katakanas"},
        { fn : sut => sut.getHiraganasByGroup("basic"), expected : hiraganasBasicNb, spelling: "s", title : "basic hiraganas"},
        { fn : sut => sut.getHiraganasByGroup("dakuon"), expected : hiraganasDakuonNb, spelling: "s", title : "dakuon hiraganas"},
        { fn : sut => sut.getHiraganasByGroup("handakuon"), expected : hiraganasHandakuonNb, spelling: "s", title : "handakuon hiraganas"},
        { fn : sut => sut.getKatakanasByGroup("basic"), expected : katakanasBasicNb, spelling: "s", title : "basic katakanas"},
        { fn : sut => sut.getKatakanasByGroup("dakuon"), expected : katakanasDakuonNb, spelling: "s", title : "dakuon katakanas"},
        { fn : sut => sut.getKatakanasByGroup("handakuon"), expected : katakanasHandakuonNb, spelling: "s", title : "handakuon katakanas"},
        { fn : sut => sut.getHiraganaId("aiueo"), expected : 1, spelling: "", title : "the hiragana lesson a i u e o"},
        { fn : sut => sut.getKatakanaId("aiueo"), expected : 1, spelling: "", title : "the katakana lesson a i u e o"},
        { fn : sut => sut.getKanas(), expected : kanas, spelling: "s", title : "kanas"},

    ]).forEach(({fn, expected, spelling, title})=>{
        it(`should provide ${expected} lesson${spelling} for ${title}`, function () {
            const sut = new LessonCatalog()
            const result = fn(sut).length
            assert.deepEqual(expected, result)
        })
    })

})
