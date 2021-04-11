const withHiraganaSrc = kana => ({...kana, imgSrc: `ico/hiragana/${kana.img}.png`});
const withKatakanaSrc = kana => ({...kana, imgSrc: `ico/katakana/${kana.img}.png`});

export class LessonCatalog {

    list() {
        return {
            "hiragana": {
                "basic": [
                    withHiraganaSrc({
                        id: "aiueo",
                        title: "a i u e o",
                        img: "a",
                    }),
                    withHiraganaSrc({
                        id: "kakikukeko",
                        title: "ka ki ku ke ko",
                        img: "ka",
                    }),
                    withHiraganaSrc({
                        id: "sashisuseso",
                        title: "sa shi su se so",
                        img: "sa",
                    }),
                    withHiraganaSrc({
                        id: "tachitsuteto",
                        title: "ta chi tsu te to",
                        img: "ta",
                    }),
                    withHiraganaSrc({
                        id: "naninuneno",
                        title: "na ni nu ne no",
                        img: "na",
                    }),
                    withHiraganaSrc({
                        id: "hahifuheho",
                        title: "ha hi fu he ho",
                        img: "ha",
                    }),
                    withHiraganaSrc({
                        id: "mamimumemo",
                        title: "ma mi mu me mo",
                        img: "ma",
                    }),
                    withHiraganaSrc({
                        id: "yayuyo",
                        title: "ya yu yo",
                        img: "ya",
                    }),
                    withHiraganaSrc({
                        id: "rarirurero",
                        title: "ra ri ru re ro",
                        img: "ra",
                    }),
                    withHiraganaSrc({
                        id: "wawon",
                        title: "wa wo n",
                        img: "wa",
                    }),
                ],
                "dakuon": [
                    withHiraganaSrc({
                        id: "gagigugego",
                        title: "ga gi gu ge go",
                        img: "ga",
                    }),
                    withHiraganaSrc({
                        id: "zajizuzezo",
                        title: "za ji zu ze zo",
                        img: "za",
                    }),
                    withHiraganaSrc({
                        id: "dadzidzudedo",
                        title: "da ji(di) zu(du) de do",
                        img: "da",
                    }),
                    withHiraganaSrc({
                        id: "babibubebo",
                        title: "ba bi bu be bo",
                        img: "ba",
                    }),
                ],
                "handakuon": [
                    withHiraganaSrc({
                        id: "papipupepo",
                        title: "pa pi pu pe po",
                        img: "pa",
                    }),
                ]
            },
            "katakana": {
                "basic": [
                    withKatakanaSrc({
                        id: "aiueo",
                        title: "a i u e o",
                        img: "a",
                    }),
                    withKatakanaSrc({
                        id: "kakikukeko",
                        title: "ka ki ku ke ko",
                        img: "ka",
                    }),
                    withKatakanaSrc({
                        id: "sashisuseso",
                        title: "sa shi su se so",
                        img: "sa",
                    }),
                    withKatakanaSrc({
                        id: "tachitsuteto",
                        title: "ta chi tsu te to",
                        img: "ta",
                    }),
                    withKatakanaSrc({
                        id: "naninuneno",
                        title: "na ni nu ne no",
                        img: "na",
                    }),
                    withKatakanaSrc({
                        id: "hahifuheho",
                        title: "ha hi fu he ho",
                        img: "ra",
                    }),
                    withKatakanaSrc({
                        id: "mamimumemo",
                        title: "ma mi mu me mo",
                        img: "ma",
                    }),
                    withKatakanaSrc({
                        id: "yayuyo",
                        title: "ya yu yo",
                        img: "ya",
                    }),
                    withKatakanaSrc({
                        id: "rarirurero",
                        title: "ra ri ru re ro",
                        img: "ra",
                    }),
                    withKatakanaSrc({
                        id: "wawon",
                        title: "wa wo n",
                        img: "wa",
                    }),
                ],
                "dakuon": [
                    withKatakanaSrc({
                        id: "gagigugego",
                        title: "ga gi gu ge go",
                        img: "ga",
                    }),
                    withKatakanaSrc({
                        id: "zajizuzezo",
                        title: "za ji zu ze zo",
                        img: "za",
                    }),
                    withKatakanaSrc({
                        id: "dadzidzudedo",
                        title: "da ji(di) zu(du) de do",
                        img: "da",
                    }),
                    withKatakanaSrc({
                        id: "babibubebo",
                        title: "ba bi bu be bo",
                        img: "ba",
                    }),
                ],
                "handakuon": [
                    withKatakanaSrc({
                        id: "papipupepo",
                        title: "pa pi pu pe po",
                        img: "pa",
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



