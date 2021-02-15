export class LessonCatalog {

    list() {
        return {
            "hiragana": [
                {
                    id: "a",
                    title: "a i u e o",
                },
                {
                    id: "ka",
                    title: "ka ki ku ke ko",
                },
                {
                    id: "sa",
                    title: "sa shi su se so",
                },
                {
                    id: "ta",
                    title: "ta chi tsu te to",
                },
            ],
            "katakana": [
                {
                    id: "a",
                    title: "a i u e o",
                },
                {
                    id: "ka",
                    title: "ka ki ku ke ko",
                },
            ]
        }
    }

    getId(id) {
        let lessons = this.list()
        lessons = lessons.hiragana.filter(lesson => lesson.id === id)
        return lessons
    }

}
