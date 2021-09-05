const withHiraganaId = lesson => ({...lesson, id: lesson.title.split(" ").join("")});
const withKatakanaId = lesson => ({...lesson, id: lesson.title.split(" ").join("")});

export class LessonCatalog {
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
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "s", vowel: "a"},
                        ],
                        title: "sa shi su se so",
                        img: "sa",
                        code: "sa-shi-su-se-so",
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "t", vowel: "a"},
                        ],
                        title: "ta chi tsu te to",
                        img: "ta",
                        code: "ta-chi-tsu-te-to",
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "n", vowel: "a"},
                        ],
                        title: "na ni nu ne no",
                        img: "na",
                        code: "na-ni-nu-ne-no",
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "h", vowel: "a"},
                        ],
                        title: "ha hi fu he ho",
                        img: "ha",
                        code: "ha-hi-fu-he-ho",
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "m", vowel: "a"},
                        ],
                        title: "ma mi mu me mo",
                        img: "ma",
                        code: "ma-mi-mu-me-mo",
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "y", vowel: "a"},
                        ],
                        title: "ya yu yo",
                        img: "ya",
                        code: "ya-yu-yo",
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "r", vowel: "a"},
                        ],
                        title: "ra ri ru re ro",
                        img: "ra",
                        code: "ra-ri-ru-re-ro",
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "w", vowel: "a"},
                        ],
                        title: "wa wo n",
                        img: "wa",
                        code: "wa-wo-n",
                    }),
                ],
                dakuon: [
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "g", vowel: "a"},
                        ],
                        title: "ga gi gu ge go",
                        img: "ga",
                        code: "ga-gi-gu-ge-go",
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "z", vowel: "a"},
                        ],
                        title: "za ji zu ze zo",
                        img: "za",
                        code: "za-ji-zu-ze-zo",
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "d", vowel: "a"},
                        ],
                        title: "da ji zu de do",
                        img: "da",
                        code: "da-ji-zu-de-do",
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "b", vowel: "a"},
                        ],
                        title: "ba bi bu be bo",
                        img: "ba",
                        code: "ba-bi-bu-be-bo",
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
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "k", vowel: "a"},
                        ],
                        title: "ka ki ku ke ko",
                        img: "ka",
                        code: "a-i-u-e-o",
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "s", vowel: "a"},
                        ],
                        title: "sa shi su se so",
                        img: "sa",
                        code: "a-i-u-e-o",
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "t", vowel: "a"},
                        ],
                        title: "ta chi tsu te to",
                        img: "ta",
                        code: "a-i-u-e-o",
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "n", vowel: "a"},
                        ],
                        title: "na ni nu ne no",
                        img: "na",
                        code: "a-i-u-e-o",
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "h", vowel: "a"},
                        ],
                        title: "ha hi fu he ho",
                        img: "ra",
                        code: "a-i-u-e-o",
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "m", vowel: "a"},
                        ],
                        title: "ma mi mu me mo",
                        img: "ma",
                        code: "a-i-u-e-o",
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "y", vowel: "a"},
                        ],
                        title: "ya yu yo",
                        img: "ya",
                        code: "a-i-u-e-o",
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "r", vowel: "a"},
                        ],
                        title: "ra ri ru re ro",
                        img: "ra",
                        code: "a-i-u-e-o",
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "w", vowel: "a"},
                        ],
                        title: "wa wo n",
                        img: "wa",
                        code: "a-i-u-e-o",
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
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "z", vowel: "a"},
                        ],
                        title: "za ji zu ze zo",
                        img: "za",
                        code: "a-i-u-e-o",
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "d", vowel: "a"},
                        ],
                        title: "da ji zu de do",
                        img: "da",
                        code: "a-i-u-e-o",
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "b", vowel: "a"},
                        ],
                        title: "ba bi bu be bo",
                        img: "ba",
                        code: "a-i-u-e-o",
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
                    }),
                ],
            }
        }
    }

}



