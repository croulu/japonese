import {randomizeSyllablesToPropoze} from "./randomizeSyllablesToPropoze";

const withHiraganaId = lesson => ({...lesson, id: lesson.title.split(" ").join("")});
const withKatakanaId = lesson => ({...lesson, id: lesson.title.split(" ").join("")});

const maxSyllables = 5;

export class LessonCatalog {
    listPrevious(alphabet, order) {
        const lessons = Object.values(this.list()[alphabet].basic);

        return lessons.filter(lesson => lesson.order <= order);
    }

    randomizeListPrevious(alphabet, order) {
        const syllables = [];

        const lessons = this.listPrevious(alphabet, order);
        lessons.map(lesson => syllables.push(lesson.syllables));

        const randomFlatSyllables = randomizeSyllablesToPropoze(syllables.flat());

        return randomFlatSyllables;
    }

    randomizeListPreviousButNoMoreThanNb(alphabet, order) {
        const syllables = this.randomizeListPrevious(alphabet, order).slice(0, maxSyllables);

        return syllables;
    }

    // TODO: Obsolete with legacy, to remove
    codeWithSyllablesList(syllables) {
        const syllablesCodes = syllables.map(syllable => syllable.consonant + syllable.vowel)

        const reducer = (previousValue, currentValue) => previousValue + "-" + currentValue;
        const codeWithLegacyFormat = syllablesCodes.reduce(reducer);

        return codeWithLegacyFormat;
    }

    romajiWithSyllable(syllableToFind) {
        const listMapSyllableRomajiUnicode = this.mapSyllableRomajiUnicode();
        const found = listMapSyllableRomajiUnicode.mapping.find(element =>
            element.syllable.alphabet === syllableToFind.alphabet &&
            element.syllable.consonant === syllableToFind.consonant &&
            element.syllable.vowel === syllableToFind.vowel);

        return found.romaji;
    }

    unicodeWithSyllable(syllableToFind) {
        const listMapSyllableRomajiUnicode = this.mapSyllableRomajiUnicode();
        const found = listMapSyllableRomajiUnicode.mapping.find(element =>
            element.syllable.alphabet === syllableToFind.alphabet &&
            element.syllable.consonant === syllableToFind.consonant &&
            element.syllable.vowel === syllableToFind.vowel);

        return found.unicode;
    }

    mapSyllableRomajiUnicode() {
        return {
            mapping: [
                {syllable: {alphabet: "h", consonant: "", vowel: "a"}, romaji: "a", unicode: "\u3042"},
                {syllable: {alphabet: "h", consonant: "", vowel: "i"}, romaji: "i", unicode: "\u3044"},
                {syllable: {alphabet: "h", consonant: "", vowel: "u"}, romaji: "u", unicode: "\u3046"},
                {syllable: {alphabet: "h", consonant: "", vowel: "e"}, romaji: "e", unicode: "\u3048"},
                {syllable: {alphabet: "h", consonant: "", vowel: "o"}, romaji: "o", unicode: "\u304A"},
                {syllable: {alphabet: "h", consonant: "k", vowel: "a"}, romaji: "ka", unicode: "\u304B"},
                {syllable: {alphabet: "h", consonant: "k", vowel: "i"}, romaji: "ki", unicode: "\u304D"},
                {syllable: {alphabet: "h", consonant: "k", vowel: "u"}, romaji: "ku", unicode: "\u304F"},
                {syllable: {alphabet: "h", consonant: "k", vowel: "e"}, romaji: "ke", unicode: "\u3051"},
                {syllable: {alphabet: "h", consonant: "k", vowel: "o"}, romaji: "ko", unicode: "\u3053"},
                {syllable: {alphabet: "h", consonant: "s", vowel: "a"}, romaji: "sa", unicode: "\u3055"},
                {syllable: {alphabet: "h", consonant: "s", vowel: "i"}, romaji: "shi", unicode: "\u3057"},
                {syllable: {alphabet: "h", consonant: "s", vowel: "u"}, romaji: "su", unicode: "\u3059"},
                {syllable: {alphabet: "h", consonant: "s", vowel: "e"}, romaji: "se", unicode: "\u305B"},
                {syllable: {alphabet: "h", consonant: "s", vowel: "o"}, romaji: "so", unicode: "\u305D"},
                {syllable: {alphabet: "h", consonant: "t", vowel: "a"}, romaji: "ta", unicode: "\u305F"},
                {syllable: {alphabet: "h", consonant: "t", vowel: "i"}, romaji: "chi", unicode: "\u3061"},
                {syllable: {alphabet: "h", consonant: "t", vowel: "u"}, romaji: "tsu", unicode: "\u3064"},
                {syllable: {alphabet: "h", consonant: "t", vowel: "e"}, romaji: "te", unicode: "\u3066"},
                {syllable: {alphabet: "h", consonant: "t", vowel: "o"}, romaji: "to", unicode: "\u3068"},
                {syllable: {alphabet: "h", consonant: "n", vowel: "a"}, romaji: "na", unicode: "\u306A"},
                {syllable: {alphabet: "h", consonant: "n", vowel: "i"}, romaji: "ni", unicode: "\u306B"},
                {syllable: {alphabet: "h", consonant: "n", vowel: "u"}, romaji: "nu", unicode: "\u306C"},
                {syllable: {alphabet: "h", consonant: "n", vowel: "e"}, romaji: "ne", unicode: "\u306D"},
                {syllable: {alphabet: "h", consonant: "n", vowel: "o"}, romaji: "no", unicode: "\u306E"},
                {syllable: {alphabet: "h", consonant: "h", vowel: "a"}, romaji: "ha", unicode: "\u306F"},
                {syllable: {alphabet: "h", consonant: "h", vowel: "i"}, romaji: "hi", unicode: "\u3072"},
                {syllable: {alphabet: "h", consonant: "h", vowel: "u"}, romaji: "fu", unicode: "\u3075"},
                {syllable: {alphabet: "h", consonant: "h", vowel: "e"}, romaji: "he", unicode: "\u3078"},
                {syllable: {alphabet: "h", consonant: "h", vowel: "o"}, romaji: "ho", unicode: "\u307B"},
                {syllable: {alphabet: "h", consonant: "m", vowel: "a"}, romaji: "ma", unicode: "\u307E"},
                {syllable: {alphabet: "h", consonant: "m", vowel: "i"}, romaji: "mi", unicode: "\u307F"},
                {syllable: {alphabet: "h", consonant: "m", vowel: "u"}, romaji: "mu", unicode: "\u3080"},
                {syllable: {alphabet: "h", consonant: "m", vowel: "e"}, romaji: "me", unicode: "\u3081"},
                {syllable: {alphabet: "h", consonant: "m", vowel: "o"}, romaji: "mo", unicode: "\u3082"},
                {syllable: {alphabet: "h", consonant: "y", vowel: "a"}, romaji: "ya", unicode: "\u3084"},
                {syllable: {alphabet: "h", consonant: "y", vowel: "u"}, romaji: "yu", unicode: "\u3086"},
                {syllable: {alphabet: "h", consonant: "y", vowel: "o"}, romaji: "yo", unicode: "\u3088"},
                {syllable: {alphabet: "h", consonant: "r", vowel: "a"}, romaji: "ra", unicode: "\u3089"},
                {syllable: {alphabet: "h", consonant: "r", vowel: "i"}, romaji: "ri", unicode: "\u308A"},
                {syllable: {alphabet: "h", consonant: "r", vowel: "u"}, romaji: "ru", unicode: "\u308B"},
                {syllable: {alphabet: "h", consonant: "r", vowel: "e"}, romaji: "re", unicode: "\u308C"},
                {syllable: {alphabet: "h", consonant: "r", vowel: "o"}, romaji: "ro", unicode: "\u308D"},
                {syllable: {alphabet: "h", consonant: "w", vowel: "a"}, romaji: "wa", unicode: "\u308F"},
                {syllable: {alphabet: "h", consonant: "w", vowel: "o"}, romaji: "wo", unicode: "\u3092"},
                {syllable: {alphabet: "h", consonant: "", vowel: "n"}, romaji: "n", unicode: "\u3093"},
                {syllable: {alphabet: "h", consonant: "g", vowel: "a"}, romaji: "ga", unicode: "\u304C"},
                {syllable: {alphabet: "h", consonant: "g", vowel: "i"}, romaji: "gi", unicode: "\u304E"},
                {syllable: {alphabet: "h", consonant: "g", vowel: "u"}, romaji: "gu", unicode: "\u3050"},
                {syllable: {alphabet: "h", consonant: "g", vowel: "e"}, romaji: "ge", unicode: "\u3052"},
                {syllable: {alphabet: "h", consonant: "g", vowel: "o"}, romaji: "go", unicode: "\u3054"},
                {syllable: {alphabet: "h", consonant: "z", vowel: "a"}, romaji: "za", unicode: "\u3056"},
                {syllable: {alphabet: "h", consonant: "z", vowel: "i"}, romaji: "ji", unicode: "\u3058"},
                {syllable: {alphabet: "h", consonant: "z", vowel: "u"}, romaji: "zu", unicode: "\u305A"},
                {syllable: {alphabet: "h", consonant: "z", vowel: "e"}, romaji: "ze", unicode: "\u305C"},
                {syllable: {alphabet: "h", consonant: "z", vowel: "o"}, romaji: "zo", unicode: "\u305E"},
                {syllable: {alphabet: "h", consonant: "d", vowel: "a"}, romaji: "da", unicode: "\u3060"},
                {syllable: {alphabet: "h", consonant: "d", vowel: "i"}, romaji: "ji", unicode: "\u3062"},
                {syllable: {alphabet: "h", consonant: "d", vowel: "u"}, romaji: "zu", unicode: "\u3065"},
                {syllable: {alphabet: "h", consonant: "d", vowel: "e"}, romaji: "de", unicode: "\u3067"},
                {syllable: {alphabet: "h", consonant: "d", vowel: "o"}, romaji: "do", unicode: "\u3069"},
                {syllable: {alphabet: "h", consonant: "b", vowel: "a"}, romaji: "ba", unicode: "\u3070"},
                {syllable: {alphabet: "h", consonant: "b", vowel: "i"}, romaji: "bi", unicode: "\u3073"},
                {syllable: {alphabet: "h", consonant: "b", vowel: "u"}, romaji: "bu", unicode: "\u3076"},
                {syllable: {alphabet: "h", consonant: "b", vowel: "e"}, romaji: "be", unicode: "\u3079"},
                {syllable: {alphabet: "h", consonant: "b", vowel: "o"}, romaji: "bo", unicode: "\u307C"},
                {syllable: {alphabet: "h", consonant: "p", vowel: "a"}, romaji: "pa", unicode: "\u3071"},
                {syllable: {alphabet: "h", consonant: "p", vowel: "i"}, romaji: "pi", unicode: "\u3074"},
                {syllable: {alphabet: "h", consonant: "p", vowel: "u"}, romaji: "pu", unicode: "\u3077"},
                {syllable: {alphabet: "h", consonant: "p", vowel: "e"}, romaji: "pe", unicode: "\u307A"},
                {syllable: {alphabet: "h", consonant: "p", vowel: "o"}, romaji: "po", unicode: "\u307D"},

                {syllable: {alphabet: "k", consonant: "", vowel: "a"}, romaji: "a", unicode: "\u30A2"},
                {syllable: {alphabet: "k", consonant: "", vowel: "i"}, romaji: "i", unicode: "\u30A4"},
                {syllable: {alphabet: "k", consonant: "", vowel: "u"}, romaji: "u", unicode: "\u30A6"},
                {syllable: {alphabet: "k", consonant: "", vowel: "e"}, romaji: "e", unicode: "\u30A8"},
                {syllable: {alphabet: "k", consonant: "", vowel: "o"}, romaji: "o", unicode: "\u30AA"},
                {syllable: {alphabet: "k", consonant: "k", vowel: "a"}, romaji: "ka", unicode: "\u304B"}, // faux
                {syllable: {alphabet: "k", consonant: "k", vowel: "i"}, romaji: "ki", unicode: "\u304D"},
                {syllable: {alphabet: "k", consonant: "k", vowel: "u"}, romaji: "ku", unicode: "\u304F"},
                {syllable: {alphabet: "k", consonant: "k", vowel: "e"}, romaji: "ke", unicode: "\u3051"},
                {syllable: {alphabet: "k", consonant: "k", vowel: "o"}, romaji: "ko", unicode: "\u3053"},
                {syllable: {alphabet: "k", consonant: "s", vowel: "a"}, romaji: "sa", unicode: "\u3055"},
                {syllable: {alphabet: "k", consonant: "s", vowel: "i"}, romaji: "shi", unicode: "\u3057"},
                {syllable: {alphabet: "k", consonant: "s", vowel: "u"}, romaji: "su", unicode: "\u3059"},
                {syllable: {alphabet: "k", consonant: "s", vowel: "e"}, romaji: "se", unicode: "\u305B"},
                {syllable: {alphabet: "k", consonant: "s", vowel: "o"}, romaji: "so", unicode: "\u305D"},
                {syllable: {alphabet: "k", consonant: "t", vowel: "a"}, romaji: "ta", unicode: "\u305F"},
                {syllable: {alphabet: "k", consonant: "t", vowel: "i"}, romaji: "chi", unicode: "\u3061"},
                {syllable: {alphabet: "k", consonant: "t", vowel: "u"}, romaji: "tsu", unicode: "\u3064"},
                {syllable: {alphabet: "k", consonant: "t", vowel: "e"}, romaji: "te", unicode: "\u3066"},
                {syllable: {alphabet: "k", consonant: "t", vowel: "o"}, romaji: "to", unicode: "\u3068"},
                {syllable: {alphabet: "k", consonant: "n", vowel: "a"}, romaji: "na", unicode: "\u306A"},
                {syllable: {alphabet: "k", consonant: "n", vowel: "i"}, romaji: "ni", unicode: "\u306B"},
                {syllable: {alphabet: "k", consonant: "n", vowel: "u"}, romaji: "nu", unicode: "\u306C"},
                {syllable: {alphabet: "k", consonant: "n", vowel: "e"}, romaji: "ne", unicode: "\u306D"},
                {syllable: {alphabet: "k", consonant: "n", vowel: "o"}, romaji: "no", unicode: "\u306E"},
                {syllable: {alphabet: "k", consonant: "h", vowel: "a"}, romaji: "ha", unicode: "\u306F"},
                {syllable: {alphabet: "k", consonant: "h", vowel: "i"}, romaji: "hi", unicode: "\u3072"},
                {syllable: {alphabet: "k", consonant: "h", vowel: "u"}, romaji: "fu", unicode: "\u3075"},
                {syllable: {alphabet: "k", consonant: "h", vowel: "e"}, romaji: "he", unicode: "\u3078"},
                {syllable: {alphabet: "k", consonant: "h", vowel: "o"}, romaji: "ho", unicode: "\u307B"},
                {syllable: {alphabet: "k", consonant: "m", vowel: "a"}, romaji: "ma", unicode: "\u307E"},
                {syllable: {alphabet: "k", consonant: "m", vowel: "i"}, romaji: "mi", unicode: "\u307F"},
                {syllable: {alphabet: "k", consonant: "m", vowel: "u"}, romaji: "mu", unicode: "\u3080"},
                {syllable: {alphabet: "k", consonant: "m", vowel: "e"}, romaji: "me", unicode: "\u3081"},
                {syllable: {alphabet: "k", consonant: "m", vowel: "o"}, romaji: "mo", unicode: "\u3082"},
                {syllable: {alphabet: "k", consonant: "y", vowel: "a"}, romaji: "ya", unicode: "\u3084"},
                {syllable: {alphabet: "k", consonant: "y", vowel: "u"}, romaji: "yu", unicode: "\u3086"},
                {syllable: {alphabet: "k", consonant: "y", vowel: "o"}, romaji: "yo", unicode: "\u3088"},
                {syllable: {alphabet: "k", consonant: "r", vowel: "a"}, romaji: "ra", unicode: "\u3089"},
                {syllable: {alphabet: "k", consonant: "r", vowel: "i"}, romaji: "ri", unicode: "\u308A"},
                {syllable: {alphabet: "k", consonant: "r", vowel: "u"}, romaji: "ru", unicode: "\u308B"},
                {syllable: {alphabet: "k", consonant: "r", vowel: "e"}, romaji: "re", unicode: "\u308C"},
                {syllable: {alphabet: "k", consonant: "r", vowel: "o"}, romaji: "ro", unicode: "\u308D"},
                {syllable: {alphabet: "k", consonant: "w", vowel: "a"}, romaji: "wa", unicode: "\u308F"},
                {syllable: {alphabet: "k", consonant: "w", vowel: "o"}, romaji: "wo", unicode: "\u3092"},
                {syllable: {alphabet: "k", consonant: "", vowel: "n"}, romaji: "n", unicode: "\u3093"},
                {syllable: {alphabet: "k", consonant: "g", vowel: "a"}, romaji: "ga", unicode: "\u304C"},
                {syllable: {alphabet: "k", consonant: "g", vowel: "i"}, romaji: "gi", unicode: "\u304E"},
                {syllable: {alphabet: "k", consonant: "g", vowel: "u"}, romaji: "gu", unicode: "\u3050"},
                {syllable: {alphabet: "k", consonant: "g", vowel: "e"}, romaji: "ge", unicode: "\u3052"},
                {syllable: {alphabet: "k", consonant: "g", vowel: "o"}, romaji: "go", unicode: "\u3054"},
                {syllable: {alphabet: "k", consonant: "z", vowel: "a"}, romaji: "za", unicode: "\u3056"},
                {syllable: {alphabet: "k", consonant: "z", vowel: "i"}, romaji: "ji", unicode: "\u3058"},
                {syllable: {alphabet: "k", consonant: "z", vowel: "u"}, romaji: "zu", unicode: "\u305A"},
                {syllable: {alphabet: "k", consonant: "z", vowel: "e"}, romaji: "ze", unicode: "\u305C"},
                {syllable: {alphabet: "k", consonant: "z", vowel: "o"}, romaji: "zo", unicode: "\u305E"},
                {syllable: {alphabet: "k", consonant: "d", vowel: "a"}, romaji: "da", unicode: "\u3060"},
                {syllable: {alphabet: "k", consonant: "d", vowel: "i"}, romaji: "ji", unicode: "\u3062"},
                {syllable: {alphabet: "k", consonant: "d", vowel: "u"}, romaji: "zu", unicode: "\u3065"},
                {syllable: {alphabet: "k", consonant: "d", vowel: "e"}, romaji: "de", unicode: "\u3067"},
                {syllable: {alphabet: "k", consonant: "d", vowel: "o"}, romaji: "do", unicode: "\u3069"},
                {syllable: {alphabet: "k", consonant: "b", vowel: "a"}, romaji: "ba", unicode: "\u3070"},
                {syllable: {alphabet: "k", consonant: "b", vowel: "i"}, romaji: "bi", unicode: "\u3073"},
                {syllable: {alphabet: "k", consonant: "b", vowel: "u"}, romaji: "bu", unicode: "\u3076"},
                {syllable: {alphabet: "k", consonant: "b", vowel: "e"}, romaji: "be", unicode: "\u3079"},
                {syllable: {alphabet: "k", consonant: "b", vowel: "o"}, romaji: "bo", unicode: "\u307C"},
                {syllable: {alphabet: "k", consonant: "p", vowel: "a"}, romaji: "pa", unicode: "\u3071"},
                {syllable: {alphabet: "k", consonant: "p", vowel: "i"}, romaji: "pi", unicode: "\u3074"},
                {syllable: {alphabet: "k", consonant: "p", vowel: "u"}, romaji: "pu", unicode: "\u3077"},
                {syllable: {alphabet: "k", consonant: "p", vowel: "e"}, romaji: "pe", unicode: "\u307A"},
                {syllable: {alphabet: "k", consonant: "p", vowel: "o"}, romaji: "po", unicode: "\u307D"},
            ]
        }
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
