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
    const [easyLesson, setEasyLesson] = useState("")

    const handleLesson = (alphabet, lesson, order, alphabetName) => {
        if (easyLesson) {
            setLesson(lesson);
        } else {
            setAlphabet(alphabet);

            const previousLesson = new LessonCatalog();
            const syllablesPreviousLesson = previousLesson.randomizeListPreviousButNoMoreThanNb(alphabetName, order);

            setLesson(syllablesPreviousLesson);
        }
    };

    const handleLevelLesson = (levelLesson) => {
        setEasyLesson(levelLesson);
    };

    console.log(easyLesson);

    return (
        <Router>
            <Route exact path='/'>
                <HomeMenu onLevelLessonChange={handleLevelLesson} />
                <HomeHero/>
            </Route>
            <Route exact path='/practice'>
                <HomeMenu/>
                <PlayMenu
                    alphabets={alphabets}
                    easyLesson={easyLesson}
                    onLessonChange={handleLesson}/>
            </Route>
            <Route exact path='/play'>
                <HomeMenu/>
                <PlayItem
                    onLessonChange={handleLesson}
                    easyLesson={easyLesson}
                    alphabet={alphabet}
                    lesson={lesson}/>
            </Route>
            <Route exact path='/lesson'>
                <HomeMenu/>
                <LearnMenu></LearnMenu>
            </Route>
        </Router>
    );
};

