import {Kana} from "../domain/Kana";
import {Romaji} from "../domain/Romaji";
import {GuessRomaji} from "../domain/GuessRomaji";

import assert from "assert";

const kana = new Kana('hiragana', 'k', 'a');
const romaji = new Romaji('hiragana', 'k', 'a')

const kanaChoosenTrue = new Kana('hiragana', 'k', 'a');
const kanaChoosenFalse = new Kana('hiragana', 'k', 'i');

const kanas = [
    new Kana('hiragana', 'a'),
    new Kana('hiragana', 'i'),
    new Kana('hiragana', 'u')
];

describe('GuessRomaji', function () {
    it('should provide true when romaji and kana are the same', function () {
        const sut = new GuessRomaji(romaji, kanas)
        assert.ok(sut.equals(kana))
    })

    it('should provide true when choosen kana is correct', function () {
        const sut = new GuessRomaji(romaji, kanas)
        assert.ok(sut.validateChoice(kanaChoosenTrue))
    })

    it('should provide false when choosen kana is not correct', function () {
        const sut = new GuessRomaji(romaji, kanas)
        assert.ok(!sut.validateChoice(kanaChoosenFalse))
    })

})
