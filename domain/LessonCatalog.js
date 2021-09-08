const withHiraganaId = lesson => ({...lesson, id: lesson.title.split(" ").join("")});
const withKatakanaId = lesson => ({...lesson, id: lesson.title.split(" ").join("")});

export class LessonCatalog {
    listPrevious(alphabet, order) {
        const lessons = Object.values(this.list()[alphabet].basic);

        return lessons.filter(lesson => lesson.order < order);
    }

    randomizeListPrevious() {
        return "rrr";
    }

    list() {
        return {
            hiragana: {
                basic: [
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "", vowel: "a"},
                            {alphabet: "h", consonant: "", vowel: "i"},
                            {alphabet: "h", consonant: "", vowel: "u"},
                            {alphabet: "h", consonant: "", vowel: "e"},
                            {alphabet: "h", consonant: "", vowel: "o"},
                        ],
                        title: "a i u e o",
                        img: "a",
                        code: "a-i-u-e-o",
                        order: 1,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "k", vowel: "a"},
                            {alphabet: "h", consonant: "k", vowel: "i"},
                            {alphabet: "h", consonant: "k", vowel: "u"},
                            {alphabet: "h", consonant: "k", vowel: "e"},
                            {alphabet: "h", consonant: "k", vowel: "o"},
                        ],
                        title: "ka ki ku ke ko",
                        img: "ka",
                        code: "ka-ki-ku-ke-ko",
                        order: 2,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "s", vowel: "a"},
                            {alphabet: "h", consonant: "s", vowel: "i"},
                            {alphabet: "h", consonant: "s", vowel: "u"},
                            {alphabet: "h", consonant: "s", vowel: "e"},
                            {alphabet: "h", consonant: "s", vowel: "o"},
                        ],
                        title: "sa shi su se so",
                        img: "sa",
                        code: "sa-shi-su-se-so",
                        order: 3,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "t", vowel: "a"},
                            {alphabet: "h", consonant: "t", vowel: "i"},
                            {alphabet: "h", consonant: "t", vowel: "u"},
                            {alphabet: "h", consonant: "t", vowel: "e"},
                            {alphabet: "h", consonant: "t", vowel: "o"},
                        ],
                        title: "ta chi tsu te to",
                        img: "ta",
                        code: "ta-chi-tsu-te-to",
                        order: 4,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "n", vowel: "a"},
                            {alphabet: "h", consonant: "n", vowel: "i"},
                            {alphabet: "h", consonant: "n", vowel: "u"},
                            {alphabet: "h", consonant: "n", vowel: "e"},
                            {alphabet: "h", consonant: "n", vowel: "o"},
                        ],
                        title: "na ni nu ne no",
                        img: "na",
                        code: "na-ni-nu-ne-no",
                        order: 5,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "h", vowel: "a"},
                            {alphabet: "h", consonant: "h", vowel: "i"},
                            {alphabet: "h", consonant: "h", vowel: "u"},
                            {alphabet: "h", consonant: "h", vowel: "e"},
                            {alphabet: "h", consonant: "h", vowel: "o"},
                        ],
                        title: "ha hi fu he ho",
                        img: "ha",
                        code: "ha-hi-fu-he-ho",
                        order: 6,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "m", vowel: "a"},
                            {alphabet: "h", consonant: "m", vowel: "i"},
                            {alphabet: "h", consonant: "m", vowel: "u"},
                            {alphabet: "h", consonant: "m", vowel: "e"},
                            {alphabet: "h", consonant: "m", vowel: "o"},
                        ],
                        title: "ma mi mu me mo",
                        img: "ma",
                        code: "ma-mi-mu-me-mo",
                        order: 7,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "y", vowel: "a"},
                            {alphabet: "h", consonant: "y", vowel: "u"},
                            {alphabet: "h", consonant: "y", vowel: "o"},
                        ],
                        title: "ya yu yo",
                        img: "ya",
                        code: "ya-yu-yo",
                        order: 8,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "r", vowel: "a"},
                            {alphabet: "h", consonant: "r", vowel: "i"},
                            {alphabet: "h", consonant: "r", vowel: "u"},
                            {alphabet: "h", consonant: "r", vowel: "e"},
                            {alphabet: "h", consonant: "r", vowel: "o"},
                        ],
                        title: "ra ri ru re ro",
                        img: "ra",
                        code: "ra-ri-ru-re-ro",
                        order: 9,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "w", vowel: "a"},
                            {alphabet: "h", consonant: "w", vowel: "o"},
                            {alphabet: "h", consonant: "", vowel: "n"},
                        ],
                        title: "wa wo n",
                        img: "wa",
                        code: "wa-wo-n",
                        order: 10,
                    }),
                ],
                dakuon: [
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "g", vowel: "a"},
                            {alphabet: "h", consonant: "g", vowel: "i"},
                            {alphabet: "h", consonant: "g", vowel: "u"},
                            {alphabet: "h", consonant: "g", vowel: "e"},
                            {alphabet: "h", consonant: "g", vowel: "o"},
                        ],
                        title: "ga gi gu ge go",
                        img: "ga",
                        code: "ga-gi-gu-ge-go",
                        order: 11,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "z", vowel: "a"},
                            {alphabet: "h", consonant: "z", vowel: "i"},
                            {alphabet: "h", consonant: "z", vowel: "u"},
                            {alphabet: "h", consonant: "z", vowel: "e"},
                            {alphabet: "h", consonant: "z", vowel: "o"},
                        ],
                        title: "za ji zu ze zo",
                        img: "za",
                        code: "za-ji-zu-ze-zo",
                        order: 12,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "d", vowel: "a"},
                        ],
                        title: "da ji zu de do",
                        img: "da",
                        code: "da-ji-zu-de-do",
                        order: 13,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "b", vowel: "a"},
                        ],
                        title: "ba bi bu be bo",
                        img: "ba",
                        code: "ba-bi-bu-be-bo",
                        order: 14,
                    }),
                ],
                handakuon: [
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "p", vowel: "a"},
                        ],
                        title: "pa pi pu pe po",
                        img: "pa",
                        code: "pa-pi-pu-pe-po",
                        order: 15,
                    }),
                ]
            },
            katakana: {
                basic: [
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "", vowel: "a"},
                        ],
                        title: "a i u e o",
                        img: "a",
                        code: "a-i-u-e-o",
                        order: 1,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "k", vowel: "a"},
                        ],
                        title: "ka ki ku ke ko",
                        img: "ka",
                        code: "a-i-u-e-o",
                        order: 2,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "s", vowel: "a"},
                        ],
                        title: "sa shi su se so",
                        img: "sa",
                        code: "a-i-u-e-o",
                        order: 3,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "t", vowel: "a"},
                        ],
                        title: "ta chi tsu te to",
                        img: "ta",
                        code: "a-i-u-e-o",
                        order: 4,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "n", vowel: "a"},
                        ],
                        title: "na ni nu ne no",
                        img: "na",
                        code: "a-i-u-e-o",
                        order: 5,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "h", vowel: "a"},
                        ],
                        title: "ha hi fu he ho",
                        img: "ra",
                        code: "a-i-u-e-o",
                        order: 6,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "m", vowel: "a"},
                        ],
                        title: "ma mi mu me mo",
                        img: "ma",
                        code: "a-i-u-e-o",
                        order: 7,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "y", vowel: "a"},
                        ],
                        title: "ya yu yo",
                        img: "ya",
                        code: "a-i-u-e-o",
                        order: 8,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "r", vowel: "a"},
                        ],
                        title: "ra ri ru re ro",
                        img: "ra",
                        code: "a-i-u-e-o",
                        order: 9,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "w", vowel: "a"},
                        ],
                        title: "wa wo n",
                        img: "wa",
                        code: "a-i-u-e-o",
                        order: 10,
                    }),
                ],
                dakuon: [
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "g", vowel: "a"},
                        ],
                        title: "ga gi gu ge go",
                        img: "ga",
                        code: "a-i-u-e-o",
                        order: 11,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "z", vowel: "a"},
                        ],
                        title: "za ji zu ze zo",
                        img: "za",
                        code: "a-i-u-e-o",
                        order: 12,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "d", vowel: "a"},
                        ],
                        title: "da ji zu de do",
                        img: "da",
                        code: "a-i-u-e-o",
                        order: 13,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "b", vowel: "a"},
                        ],
                        title: "ba bi bu be bo",
                        img: "ba",
                        code: "a-i-u-e-o",
                        order: 14,
                    }),
                ],
                handakuon: [
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "p", vowel: "a"},
                        ],
                        title: "pa pi pu pe po",
                        img: "pa",
                        code: "a-i-u-e-o",
                        order: 15,
                    }),
                ],
            }
        }
    }

}



