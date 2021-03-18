export class LessonCatalog {

    list() {
        return {
            "hiragana": [
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
            ],
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
        let lessons = this.list()
        lessons = lessons.hiragana.filter(lesson => lesson.id === id)
        return lessons
    }

    getKatakanaId(id) {
        let lessons = this.list()
        lessons = lessons.katakana.filter(lesson => lesson.id === id)
        return lessons
    }

    getHiraganas() {
        const lessons = this.list()
        return lessons.hiragana
    }

    getKatakanas() {
        const lessons = this.list()
        return lessons.katakana
    }

    getHiraganaByGroup(group) {
        let lessons = this.list()
        lessons = lessons.hiragana.filter(lesson => lesson.group === group)
        return lessons
    }

    getKatakanaByGroup(group) {
        let lessons = this.list()
        lessons = lessons.katakana.filter(lesson => lesson.group === group)
        return lessons
    }

    getCategorizedList() {
        const lessons = this.getHiraganas().concat(this.getKatakanas())
        return lessons
    }

}
