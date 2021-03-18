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
            "katakana": [
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
                {
                    id: "pa",
                    title: "pa pi pu pe po",
                    group: "handakuon",
                },
            ]
        }
    }

    getHiraganaId(id) {
        return this.getHiraganas()
            .filter(lesson => lesson.id === id)
    }

    getKatakanaId(id) {
        return this.list().katakana
            .filter(lesson => lesson.id === id)
    }

    getHiraganas() {
        const {basic, dakuon, handakuon} = this.list().hiragana;
        return [...basic, ...dakuon, ...handakuon];
    }

    getKatakanas() {
        const lessons = this.list()
        return lessons.katakana
    }

    getHiraganaByGroup(group) {
        return this.list().hiragana[group]
    }

    getKatakanaByGroup(group) {
        return this.list().katakana
            .filter(lesson => lesson.group === group)
    }

    getCategorizedList() {
        return this.getHiraganas()
            .concat(this.getKatakanas())
    }

}
