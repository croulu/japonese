import {randomizeSyllablesToPropoze} from "./randomizeSyllablesToPropoze";
import {KanaSyllable} from "./KanaSyllable";

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

    randomizeLessonWithAFewProposals(syllablesForLesson, maxSyllables) {

        const randomFlatSyllables = randomizeSyllablesToPropoze(syllablesForLesson).slice(0, maxSyllables);

        return randomFlatSyllables;
    }

    // TODO verbe (nom de la fonction)

    romajiWithSyllable(syllableToFind) {
        const listMapSyllableRomajiUnicode = this.mapSyllableRomajiUnicode();
        const found = listMapSyllableRomajiUnicode.mapping.find(element =>
            element.syllable.alphabet === syllableToFind.alphabet &&
            element.syllable.consonant === syllableToFind.consonant &&
            element.syllable.vowel === syllableToFind.vowel);

        return found.romaji;
    }

    // TODO verbe (nom de la fonction)

    unicodeWithSyllable(syllableToFind) {
        const listMapSyllableRomajiUnicode = this.mapSyllableRomajiUnicode();
        const found = listMapSyllableRomajiUnicode.mapping.find(element =>
            element.syllable.alphabet === syllableToFind.alphabet &&
            element.syllable.consonant === syllableToFind.consonant &&
            element.syllable.vowel === syllableToFind.vowel);

        return found.unicode;
    }

    // TODO verbe (nom de la fonction)
    // c'est une fonction pure, elle n'a pas besoin de manipuler lesson

    kanaToDisplayForLesson(lesson) {
        const lessonWithKanaObjects = [];
        lesson.map(syllable =>
            lessonWithKanaObjects.push(new KanaSyllable(syllable.alphabet, syllable.consonant, syllable.vowel)));

        return lessonWithKanaObjects[0].display();
    }

    // TODO tester tous les cas particuliers

    // TODO aujouter un test sur les romajis identhiques (cas de "ji")

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
                {syllable: {alphabet: "k", consonant: "k", vowel: "a"}, romaji: "ka", unicode: "\u30AB"},
                {syllable: {alphabet: "k", consonant: "k", vowel: "i"}, romaji: "ki", unicode: "\u30AD"},
                {syllable: {alphabet: "k", consonant: "k", vowel: "u"}, romaji: "ku", unicode: "\u30AF"},
                {syllable: {alphabet: "k", consonant: "k", vowel: "e"}, romaji: "ke", unicode: "\u30B1"},
                {syllable: {alphabet: "k", consonant: "k", vowel: "o"}, romaji: "ko", unicode: "\u30B3"},
                {syllable: {alphabet: "k", consonant: "s", vowel: "a"}, romaji: "sa", unicode: "\u30B5"},
                {syllable: {alphabet: "k", consonant: "s", vowel: "i"}, romaji: "shi", unicode: "\u30B7"},
                {syllable: {alphabet: "k", consonant: "s", vowel: "u"}, romaji: "su", unicode: "\u30B9"},
                {syllable: {alphabet: "k", consonant: "s", vowel: "e"}, romaji: "se", unicode: "\u30BB"},
                {syllable: {alphabet: "k", consonant: "s", vowel: "o"}, romaji: "so", unicode: "\u30BD"},
                {syllable: {alphabet: "k", consonant: "t", vowel: "a"}, romaji: "ta", unicode: "\u30BF"},
                {syllable: {alphabet: "k", consonant: "t", vowel: "i"}, romaji: "chi", unicode: "\u30C1"},
                {syllable: {alphabet: "k", consonant: "t", vowel: "u"}, romaji: "tsu", unicode: "\u30C4"},
                {syllable: {alphabet: "k", consonant: "t", vowel: "e"}, romaji: "te", unicode: "\u30C6"},
                {syllable: {alphabet: "k", consonant: "t", vowel: "o"}, romaji: "to", unicode: "\u30C8"},
                {syllable: {alphabet: "k", consonant: "n", vowel: "a"}, romaji: "na", unicode: "\u30CA"},
                {syllable: {alphabet: "k", consonant: "n", vowel: "i"}, romaji: "ni", unicode: "\u30CB"},
                {syllable: {alphabet: "k", consonant: "n", vowel: "u"}, romaji: "nu", unicode: "\u30CC"},
                {syllable: {alphabet: "k", consonant: "n", vowel: "e"}, romaji: "ne", unicode: "\u30CD"},
                {syllable: {alphabet: "k", consonant: "n", vowel: "o"}, romaji: "no", unicode: "\u30CE"},
                {syllable: {alphabet: "k", consonant: "h", vowel: "a"}, romaji: "ha", unicode: "\u30CF"},
                {syllable: {alphabet: "k", consonant: "h", vowel: "i"}, romaji: "hi", unicode: "\u30D2"},
                {syllable: {alphabet: "k", consonant: "h", vowel: "u"}, romaji: "fu", unicode: "\u30D5"},
                {syllable: {alphabet: "k", consonant: "h", vowel: "e"}, romaji: "he", unicode: "\u30D8"},
                {syllable: {alphabet: "k", consonant: "h", vowel: "o"}, romaji: "ho", unicode: "\u30DB"},
                {syllable: {alphabet: "k", consonant: "m", vowel: "a"}, romaji: "ma", unicode: "\u30DE"},
                {syllable: {alphabet: "k", consonant: "m", vowel: "i"}, romaji: "mi", unicode: "\u30DF"},
                {syllable: {alphabet: "k", consonant: "m", vowel: "u"}, romaji: "mu", unicode: "\u30E0"},
                {syllable: {alphabet: "k", consonant: "m", vowel: "e"}, romaji: "me", unicode: "\u30E1"},
                {syllable: {alphabet: "k", consonant: "m", vowel: "o"}, romaji: "mo", unicode: "\u30E2"},
                {syllable: {alphabet: "k", consonant: "y", vowel: "a"}, romaji: "ya", unicode: "\u30E4"},
                {syllable: {alphabet: "k", consonant: "y", vowel: "u"}, romaji: "yu", unicode: "\u30E6"},
                {syllable: {alphabet: "k", consonant: "y", vowel: "o"}, romaji: "yo", unicode: "\u30E8"},
                {syllable: {alphabet: "k", consonant: "r", vowel: "a"}, romaji: "ra", unicode: "\u30E9"},
                {syllable: {alphabet: "k", consonant: "r", vowel: "i"}, romaji: "ri", unicode: "\u30EA"},
                {syllable: {alphabet: "k", consonant: "r", vowel: "u"}, romaji: "ru", unicode: "\u30EB"},
                {syllable: {alphabet: "k", consonant: "r", vowel: "e"}, romaji: "re", unicode: "\u30EC"},
                {syllable: {alphabet: "k", consonant: "r", vowel: "o"}, romaji: "ro", unicode: "\u30ED"},
                {syllable: {alphabet: "k", consonant: "w", vowel: "a"}, romaji: "wa", unicode: "\u30EF"},
                {syllable: {alphabet: "k", consonant: "w", vowel: "o"}, romaji: "wo", unicode: "\u30F2"},
                {syllable: {alphabet: "k", consonant: "", vowel: "n"}, romaji: "n", unicode: "\u30F3"},
                {syllable: {alphabet: "k", consonant: "g", vowel: "a"}, romaji: "ga", unicode: "\u30AC"},
                {syllable: {alphabet: "k", consonant: "g", vowel: "i"}, romaji: "gi", unicode: "\u30AE"},
                {syllable: {alphabet: "k", consonant: "g", vowel: "u"}, romaji: "gu", unicode: "\u30B0"},
                {syllable: {alphabet: "k", consonant: "g", vowel: "e"}, romaji: "ge", unicode: "\u30B2"},
                {syllable: {alphabet: "k", consonant: "g", vowel: "o"}, romaji: "go", unicode: "\u30B4"},
                {syllable: {alphabet: "k", consonant: "z", vowel: "a"}, romaji: "za", unicode: "\u30B6"},
                {syllable: {alphabet: "k", consonant: "z", vowel: "i"}, romaji: "ji", unicode: "\u30B8"},
                {syllable: {alphabet: "k", consonant: "z", vowel: "u"}, romaji: "zu", unicode: "\u30BA"},
                {syllable: {alphabet: "k", consonant: "z", vowel: "e"}, romaji: "ze", unicode: "\u30BC"},
                {syllable: {alphabet: "k", consonant: "z", vowel: "o"}, romaji: "zo", unicode: "\u30BE"},
                {syllable: {alphabet: "k", consonant: "d", vowel: "a"}, romaji: "da", unicode: "\u30C0"},
                {syllable: {alphabet: "k", consonant: "d", vowel: "i"}, romaji: "ji", unicode: "\u30C2"},
                {syllable: {alphabet: "k", consonant: "d", vowel: "u"}, romaji: "zu", unicode: "\u30C5"},
                {syllable: {alphabet: "k", consonant: "d", vowel: "e"}, romaji: "de", unicode: "\u30C7"},
                {syllable: {alphabet: "k", consonant: "d", vowel: "o"}, romaji: "do", unicode: "\u30C9"},
                {syllable: {alphabet: "k", consonant: "b", vowel: "a"}, romaji: "ba", unicode: "\u30D0"},
                {syllable: {alphabet: "k", consonant: "b", vowel: "i"}, romaji: "bi", unicode: "\u30D3"},
                {syllable: {alphabet: "k", consonant: "b", vowel: "u"}, romaji: "bu", unicode: "\u30D6"},
                {syllable: {alphabet: "k", consonant: "b", vowel: "e"}, romaji: "be", unicode: "\u30D9"},
                {syllable: {alphabet: "k", consonant: "b", vowel: "o"}, romaji: "bo", unicode: "\u30DC"},
                {syllable: {alphabet: "k", consonant: "p", vowel: "a"}, romaji: "pa", unicode: "\u30D1"},
                {syllable: {alphabet: "k", consonant: "p", vowel: "i"}, romaji: "pi", unicode: "\u30D4"},
                {syllable: {alphabet: "k", consonant: "p", vowel: "u"}, romaji: "pu", unicode: "\u30D7"},
                {syllable: {alphabet: "k", consonant: "p", vowel: "e"}, romaji: "pe", unicode: "\u30DA"},
                {syllable: {alphabet: "k", consonant: "p", vowel: "o"}, romaji: "po", unicode: "\u30DD"},
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
                        order: 7,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "y", vowel: "a"},
                            {alphabet: "h", consonant: "y", vowel: "u"},
                            {alphabet: "h", consonant: "y", vowel: "o"},
                        ],
                        title: "ya yu yo",
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
                        order: 9,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "w", vowel: "a"},
                            {alphabet: "h", consonant: "w", vowel: "o"},
                            {alphabet: "h", consonant: "", vowel: "n"},
                        ],
                        title: "wa wo n",
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
                        order: 12,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "d", vowel: "a"},
                            {alphabet: "h", consonant: "d", vowel: "i"},
                            {alphabet: "h", consonant: "d", vowel: "u"},
                            {alphabet: "h", consonant: "d", vowel: "e"},
                            {alphabet: "h", consonant: "d", vowel: "o"},
                        ],
                        title: "da ji zu de do",
                        order: 13,
                    }),
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "b", vowel: "a"},
                            {alphabet: "h", consonant: "b", vowel: "i"},
                            {alphabet: "h", consonant: "b", vowel: "u"},
                            {alphabet: "h", consonant: "b", vowel: "e"},
                            {alphabet: "h", consonant: "b", vowel: "o"},
                        ],
                        title: "ba bi bu be bo",
                        order: 14,
                    }),
                ],
                handakuon: [
                    withHiraganaId({
                        syllables: [
                            {alphabet: "h", consonant: "p", vowel: "a"},
                            {alphabet: "h", consonant: "p", vowel: "i"},
                            {alphabet: "h", consonant: "p", vowel: "u"},
                            {alphabet: "h", consonant: "p", vowel: "e"},
                            {alphabet: "h", consonant: "p", vowel: "o"},
                        ],
                        title: "pa pi pu pe po",
                        order: 15,
                    }),
                ]
            },
            katakana: {
                basic: [
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "", vowel: "a"},
                            {alphabet: "k", consonant: "", vowel: "i"},
                            {alphabet: "k", consonant: "", vowel: "u"},
                            {alphabet: "k", consonant: "", vowel: "e"},
                            {alphabet: "k", consonant: "", vowel: "o"},
                        ],
                        title: "a i u e o",
                        order: 1,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "k", vowel: "a"},
                            {alphabet: "k", consonant: "k", vowel: "i"},
                            {alphabet: "k", consonant: "k", vowel: "u"},
                            {alphabet: "k", consonant: "k", vowel: "e"},
                            {alphabet: "k", consonant: "k", vowel: "o"},
                        ],
                        title: "ka ki ku ke ko",
                        order: 2,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "s", vowel: "a"},
                            {alphabet: "k", consonant: "s", vowel: "i"},
                            {alphabet: "k", consonant: "s", vowel: "u"},
                            {alphabet: "k", consonant: "s", vowel: "e"},
                            {alphabet: "k", consonant: "s", vowel: "o"},
                        ],
                        title: "sa shi su se so",
                        order: 3,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "t", vowel: "a"},
                            {alphabet: "k", consonant: "t", vowel: "i"},
                            {alphabet: "k", consonant: "t", vowel: "u"},
                            {alphabet: "k", consonant: "t", vowel: "e"},
                            {alphabet: "k", consonant: "t", vowel: "o"},
                        ],
                        title: "ta chi tsu te to",
                        order: 4,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "n", vowel: "a"},
                            {alphabet: "k", consonant: "n", vowel: "i"},
                            {alphabet: "k", consonant: "n", vowel: "u"},
                            {alphabet: "k", consonant: "n", vowel: "e"},
                            {alphabet: "k", consonant: "n", vowel: "o"},
                        ],
                        title: "na ni nu ne no",
                        order: 5,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "h", vowel: "a"},
                            {alphabet: "k", consonant: "h", vowel: "i"},
                            {alphabet: "k", consonant: "h", vowel: "u"},
                            {alphabet: "k", consonant: "h", vowel: "e"},
                            {alphabet: "k", consonant: "h", vowel: "o"},
                        ],
                        title: "ha hi fu he ho",
                        order: 6,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "m", vowel: "a"},
                            {alphabet: "k", consonant: "m", vowel: "i"},
                            {alphabet: "k", consonant: "m", vowel: "u"},
                            {alphabet: "k", consonant: "m", vowel: "e"},
                            {alphabet: "k", consonant: "m", vowel: "o"},
                        ],
                        title: "ma mi mu me mo",
                        order: 7,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "y", vowel: "a"},
                            {alphabet: "k", consonant: "y", vowel: "u"},
                            {alphabet: "k", consonant: "y", vowel: "o"},
                        ],
                        title: "ya yu yo",
                        order: 8,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "r", vowel: "a"},
                            {alphabet: "k", consonant: "r", vowel: "i"},
                            {alphabet: "k", consonant: "r", vowel: "u"},
                            {alphabet: "k", consonant: "r", vowel: "e"},
                            {alphabet: "k", consonant: "r", vowel: "o"},
                        ],
                        title: "ra ri ru re ro",
                        order: 9,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "w", vowel: "a"},
                            {alphabet: "k", consonant: "w", vowel: "o"},
                            {alphabet: "k", consonant: "", vowel: "n"},
                        ],
                        title: "wa wo n",
                        order: 10,
                    }),
                ],
                dakuon: [
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "g", vowel: "a"},
                            {alphabet: "k", consonant: "g", vowel: "i"},
                            {alphabet: "k", consonant: "g", vowel: "u"},
                            {alphabet: "k", consonant: "g", vowel: "e"},
                            {alphabet: "k", consonant: "g", vowel: "o"},
                        ],
                        title: "ga gi gu ge go",
                        order: 11,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "z", vowel: "a"},
                            {alphabet: "k", consonant: "z", vowel: "i"},
                            {alphabet: "k", consonant: "z", vowel: "u"},
                            {alphabet: "k", consonant: "z", vowel: "e"},
                            {alphabet: "k", consonant: "z", vowel: "o"},
                        ],
                        title: "za ji zu ze zo",
                        order: 12,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "d", vowel: "a"},
                            {alphabet: "k", consonant: "d", vowel: "i"},
                            {alphabet: "k", consonant: "d", vowel: "u"},
                            {alphabet: "k", consonant: "d", vowel: "e"},
                            {alphabet: "k", consonant: "d", vowel: "o"},
                        ],
                        title: "da ji zu de do",
                        order: 13,
                    }),
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "b", vowel: "a"},
                            {alphabet: "k", consonant: "b", vowel: "i"},
                            {alphabet: "k", consonant: "b", vowel: "u"},
                            {alphabet: "k", consonant: "b", vowel: "e"},
                            {alphabet: "k", consonant: "b", vowel: "o"},
                        ],
                        title: "ba bi bu be bo",
                        order: 14,
                    }),
                ],
                handakuon: [
                    withKatakanaId({
                        syllables: [
                            {alphabet: "k", consonant: "p", vowel: "a"},
                            {alphabet: "k", consonant: "p", vowel: "i"},
                            {alphabet: "k", consonant: "p", vowel: "u"},
                            {alphabet: "k", consonant: "p", vowel: "e"},
                            {alphabet: "k", consonant: "p", vowel: "o"},
                        ],
                        title: "pa pi pu pe po",
                        order: 15,
                    }),
                ],
            }
        }
    }

}
