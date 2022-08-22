import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {PlayMenu} from "./Learn/PlayMenu/PlayMenu";
import {PlayItem} from "./Learn/PlayItem/PlayItem";
import {LessonCatalog} from "../domain/LessonCatalog";
import {LearnMenu} from "./Lessons/LearnMenu";
import {HomeHero} from "./Home/HomeHero";
import {HomeMenu} from "./Home/HomeMenu";

export const Routing = ({alphabets}) => {

    const [alphabet, setAlphabet] = useState("")
    const [lesson, setLesson] = useState("")
    const [levelLessonToPlay, setLevelLessonToPlay] = useState("")

    const handleLesson = (alphabet, lesson, order, alphabetName) => {
        if (levelLessonToPlay === 'easy') {
            setLesson(lesson);
        } else {
            setAlphabet(alphabet);

            const previousLesson = new LessonCatalog();
            const syllablesPreviousLesson = previousLesson.randomizeListPrevious(alphabetName, order);

            setLesson(syllablesPreviousLesson);
        }
    };

    const handleLevelLesson = (levelLesson) => {
        setLevelLessonToPlay(levelLesson);
    };

    // TODO : practices et non pas practice
    // practices/play
    // arborescence REST

    // TODO le titre dans le menu ?

    // TODO est ce vraiment nécessaire d'avoir le burger ?

    // TODO site cassé (playMenu bougé), pas de tests KO

    return (
        <Router>
            <Route exact path='/'>
                <HomeMenu onLevelLessonChange={handleLevelLesson}/>
                <HomeHero onLevelLessonChange={handleLevelLesson}/>
            </Route>
            <Route exact path='/practice'>
                <HomeMenu/>
                <PlayMenu
                    alphabets={alphabets}
                    levelLessonToPlay={levelLessonToPlay}
                    onLessonChange={handleLesson}/>
            </Route>
            <Route exact path='/play'>
                <HomeMenu/>
                <PlayItem
                    onLessonChange={handleLesson}
                    levelLessonToPlay={levelLessonToPlay}
                    alphabet={alphabet}
                    lesson={lesson}/>
            </Route>
            <Route exact path='/lesson'>
                <HomeMenu/>
                <LearnMenu
                    alphabets={alphabets}/>
            </Route>
        </Router>
    );
};

