import {Kana} from './Kana'

class Lesson {
    constructor(alphabet, line, kanas) {
        this.alphabet = alphabet
        this.line = line
        this.kanas = kanas
    }

    getLesson() {

        const kanasHiraganaA = [
            new Kana("hiragana", "a"),
            new Kana("hiragana", "i"),
            new Kana("hiragana", "u"),
            new Kana("hiragana", "e"),
            new Kana("hiragana", "o"),
        ]

        const kanasHiraganaK = [
            new Kana("hiragana", "ka"),
            new Kana("hiragana", "ki"),
            new Kana("hiragana", "ku"),
            new Kana("hiragana", "ke"),
            new Kana("hiragana", "ko"),
        ]

        const kanasHiraganaS = [
            new Kana("hiragana", "sa"),
            new Kana("hiragana", "shi"),
            new Kana("hiragana", "su"),
            new Kana("hiragana", "se"),
            new Kana("hiragana", "so"),
        ]

        let lessons = [
            new Lesson("hiragana", "-", kanasHiraganaA),
            new Lesson("hiragana", "k", kanasHiraganaK),
            new Lesson("hiragana", "s", kanasHiraganaS),
            new Lesson("hiragana", "t", kanasHiraganaA),
            new Lesson("hiragana", "n", kanasHiraganaA),
            new Lesson("hiragana", "h", kanasHiraganaA),
            new Lesson("hiragana", "m", kanasHiraganaA),
            new Lesson("hiragana", "y", kanasHiraganaA),
            new Lesson("hiragana", "r", kanasHiraganaA),
            new Lesson("hiragana", "w", kanasHiraganaA),
            new Lesson("hiragana", "g", kanasHiraganaA),
            new Lesson("hiragana", "z", kanasHiraganaA),
            new Lesson("hiragana", "d", kanasHiraganaA),
            new Lesson("hiragana", "b", kanasHiraganaA),
            new Lesson("hiragana", "p", kanasHiraganaA),
        ]

        lessons = lessons
            .filter(lesson => lesson.alphabet === this.alphabet)
            .filter(lesson => lesson.line === this.line)

        return lessons
    }

}

export {
    Lesson
}
