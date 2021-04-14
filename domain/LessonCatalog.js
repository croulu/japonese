const withHiraganaId = kana => ({...kana, id: kana.title.split(" ").join("")});
const withKatakanaId = kana => ({...kana, id: kana.title.split(" ").join("")});

export class LessonCatalog {

    list() {
        return {
            "hiragana": {
                "basic": [
                    withHiraganaId({
                        title: "a i u e o",
                        img: "a",
                    }),
                    withHiraganaId({
                        title: "ka ki ku ke ko",
                        img: "ka",
                    }),
                    withHiraganaId({
                        title: "sa shi su se so",
                        img: "sa",
                    }),
                    withHiraganaId({
                        title: "ta chi tsu te to",
                        img: "ta",
                    }),
                    withHiraganaId({
                        title: "na ni nu ne no",
                        img: "na",
                    }),
                    withHiraganaId({
                        title: "ha hi fu he ho",
                        img: "ha",
                    }),
                    withHiraganaId({
                        title: "ma mi mu me mo",
                        img: "ma",
                    }),
                    withHiraganaId({
                        title: "ya yu yo",
                        img: "ya",
                    }),
                    withHiraganaId({
                        title: "ra ri ru re ro",
                        img: "ra",
                    }),
                    withHiraganaId({
                        title: "wa wo n",
                        img: "wa",
                    }),
                ],
                "dakuon": [
                    withHiraganaId({
                        title: "ga gi gu ge go",
                        img: "ga",
                    }),
                    withHiraganaId({
                        title: "za ji zu ze zo",
                        img: "za",
                    }),
                    withHiraganaId({
                        title: "da ji zu de do",
                        img: "da",
                    }),
                    withHiraganaId({
                        title: "ba bi bu be bo",
                        img: "ba",
                    }),
                ],
                "handakuon": [
                    withHiraganaId({
                        title: "pa pi pu pe po",
                        img: "pa",
                    }),
                ]
            },
            "katakana": {
                "basic": [
                    withKatakanaId({
                        title: "a i u e o",
                        img: "a",
                    }),
                    withKatakanaId({
                        title: "ka ki ku ke ko",
                        img: "ka",
                    }),
                    withKatakanaId({
                        title: "sa shi su se so",
                        img: "sa",
                    }),
                    withKatakanaId({
                        title: "ta chi tsu te to",
                        img: "ta",
                    }),
                    withKatakanaId({
                        id: "naninuneno",
                        title: "na ni nu ne no",
                        img: "na",
                    }),
                    withKatakanaId({
                        title: "ha hi fu he ho",
                        img: "ra",
                    }),
                    withKatakanaId({
                        title: "ma mi mu me mo",
                        img: "ma",
                    }),
                    withKatakanaId({
                        title: "ya yu yo",
                        img: "ya",
                    }),
                    withKatakanaId({
                        title: "ra ri ru re ro",
                        img: "ra",
                    }),
                    withKatakanaId({
                        title: "wa wo n",
                        img: "wa",
                    }),
                ],
                "dakuon": [
                    withKatakanaId({
                        title: "ga gi gu ge go",
                        img: "ga",
                    }),
                    withKatakanaId({
                        title: "za ji zu ze zo",
                        img: "za",
                    }),
                    withKatakanaId({
                        title: "da ji zu de do",
                        img: "da",
                    }),
                    withKatakanaId({
                        title: "ba bi bu be bo",
                        img: "ba",
                    }),
                ],
                "handakuon": [
                    withKatakanaId({
                        title: "pa pi pu pe po",
                        img: "pa",
                    }),
                ],
            }
        }
    }

    getHiraganas() {
        return this.list().hiragana;
    }

    getKatakanas() {
        return this.list().katakana;
    }

    getHiraganasByGroup(group) {
        return this.list().hiragana[group]
    }

    getKatakanasByGroup(group) {
        return this.list().katakana[group]
    }

    getHiraganaId(id) {
        const {basic, dakuon, handakuon} = this.list().hiragana;
        return [...basic, ...dakuon, ...handakuon]
            .filter(lesson => lesson.id === id)
    }

    getKatakanaId(id) {
        const {basic, dakuon, handakuon} = this.list().katakana;
        return [...basic, ...dakuon, ...handakuon]
            .filter(lesson => lesson.id === id)
    }

    getKanas() {
        const kanas = [
            ...this.getHiraganas(),
            ...this.getKatakanas()
        ]
        return kanas
    }

}


