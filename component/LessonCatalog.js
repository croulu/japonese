const withHiraganaSrc = kana => ({...kana, imgSrc: `ico/hiragana/${kana.id}.png`});
const withKatakanaSrc = kana => ({...kana, imgSrc: `ico/katakana/${kana.id}.png`});

export class LessonCatalog {

    list() {
        return {
            "hiragana": {
                "basic": [
                    withHiraganaSrc({
                        id: "a",
                        title: "a i u e o",
                    }),
                    withHiraganaSrc({
                        id: "ka",
                        title: "ka ki ku ke ko",
                    }),
                    withHiraganaSrc({
                        id: "sa",
                        title: "sa shi su se so",
                    }),
                    withHiraganaSrc({
                        id: "ta",
                        title: "ta chi tsu te to",
                    }),
                ],
                "dakuon": [
                    withHiraganaSrc({
                        id: "ga",
                        title: "ga gi gu ge go",
                    }),
                    withHiraganaSrc({
                        id: "za",
                        title: "za ji zu ze zo",
                    }),
                    withHiraganaSrc({
                        id: "da",
                        title: "da ji(di) zu(du) de do",
                    }),
                    withHiraganaSrc({
                        id: "ba",
                        title: "ba bi bu be bo",
                    }),
                ],
                "handakuon": [
                    withHiraganaSrc({
                        id: "pa",
                        title: "pa pi pu pe po",
                    }),
                ]
            },
            "katakana": {
                "basic": [
                    withKatakanaSrc({
                        id: "a",
                        title: "a i u e o",
                    }),
                    withKatakanaSrc({
                        id: "ka",
                        title: "ka ki ku ke ko",
                    }),
                ],
                "dakuon": [
                    withKatakanaSrc({
                        id: "ga",
                        title: "ga gi gu ge go",
                    }),
                    withKatakanaSrc({
                        id: "za",
                        title: "za ji zu ze zo",
                    }),
                    withKatakanaSrc({
                        id: "da",
                        title: "da ji(di) zu(du) de do",
                    }),
                    withKatakanaSrc({
                        id: "ba",
                        title: "ba bi bu be bo",
                    }),
                ],
                "handakuon": [
                    withKatakanaSrc({
                        id: "pa",
                        title: "pa pi pu pe po",
                    }),
                ],
            }
        }
    }

    getHiraganas() {
        const {basic, dakuon, handakuon} = this.list().hiragana;
        return [...basic, ...dakuon, ...handakuon];
    }

    getKatakanas() {
        const {basic, dakuon, handakuon} = this.list().katakana;
        return [...basic, ...dakuon, ...handakuon];
    }

    getHiraganasByGroup(group) {
        return this.list().hiragana[group]
    }

    getKatakanasByGroup(group) {
        return this.list().katakana[group]
    }

    getHiraganaId(id) {
        return this.getHiraganas()
            .filter(lesson => lesson.id === id)
    }

    getKatakanaId(id) {
        return this.getKatakanas()
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



