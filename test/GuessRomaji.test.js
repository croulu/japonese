import {KanaSyllable} from "../domain/KanaSyllable";
import {RomajiSyllable} from "../domain/RomajiSyllable";
import {GuessRomajiSyllable} from "../domain/GuessRomajiSyllable";

import assert from "assert";

const kana = new KanaSyllable('hiragana', 'k', 'a');
const romaji = new RomajiSyllable('hiragana', 'k', 'a')

const kanaChoosenTrue = new KanaSyllable('hiragana', 'k', 'a');
const kanaChoosenFalse = new KanaSyllable('hiragana', 'k', 'i');

const kanas = [
    new KanaSyllable('hiragana', 'a'),
    new KanaSyllable('hiragana', 'i'),
    new KanaSyllable('hiragana', 'u')
];

describe('GuessRomaji', function () {
    it('should provide true when romaji and kana are the same', function () {
        const sut = new GuessRomajiSyllable(romaji, kanas)
        assert.ok(sut.equals(kana))
    })

    it('should provide true when choosen kana is correct', function () {
        const sut = new GuessRomajiSyllable(romaji, kanas)
        assert.ok(sut.validateChoice(kanaChoosenTrue))
    })

    it('should provide false when choosen kana is not correct', function () {
        const sut = new GuessRomajiSyllable(romaji, kanas)
        assert.ok(!sut.validateChoice(kanaChoosenFalse))
    })

})
