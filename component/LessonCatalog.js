export class LessonCatalog {

    list() {
        return {
            "hiragana": {
                "basic": [
                    {
                        id: "a",
                        title: "a i u e o",
                        group: "basic",
                    },
                    {
                        id: "ka",
                        title: "ka ki ku ke ko",
                        group: "basic",
                    },
                    {
                        id: "sa",
                        title: "sa shi su se so",
                        group: "basic",
                    },
                    {
                        id: "ta",
                        title: "ta chi tsu te to",
                        group: "basic",
                    },
                ],
                "dakuon": [
                    {
                        id: "ga",
                        title: "ga gi gu ge go",
                        group: "dakuon",
                    },
                    {
                        id: "za",
                        title: "za ji zu ze zo",
                        group: "dakuon",
                    },
                    {
                        id: "da",
                        title: "da ji(di) zu(du) de do",
                        group: "dakuon",
                    },
                    {
                        id: "ba",
                        title: "ba bi bu be bo",
                        group: "dakuon",
                    },
                ],
                "handakuon": [
                    {
                        id: "pa",
                        title: "pa pi pu pe po",
                        group: "handakuon",
                    },
                ]
            },
            "katakana": {
                    "basic": [
                        {
                            id: "a",
                            title: "a i u e o",
                            group: "basic",
                        },
                        {
                            id: "ka",
                            title: "ka ki ku ke ko",
                            group: "basic",
                        },
                    ],
                    "dakuon": [
                        {
                            id: "ga",
                            title: "ga gi gu ge go",
                            group: "dakuon",
                        },
                        {
                            id: "za",
                            title: "za ji zu ze zo",
                            group: "dakuon",
                        },
                        {
                            id: "da",
                            title: "da ji(di) zu(du) de do",
                            group: "dakuon",
                        },
                        {
                            id: "ba",
                            title: "ba bi bu be bo",
                            group: "dakuon",
                        },
                    ],
                    "handakuon": [
                        {
                            id: "pa",
                            title: "pa pi pu pe po",
                            group: "handakuon",
                        },
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
