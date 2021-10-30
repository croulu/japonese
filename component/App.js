import React from "react";
import {Routing} from "./Routing";
import {LessonCatalog} from "../domain/LessonCatalog";

const lessonCatalog = new LessonCatalog();

export const App = () =>
  <Routing alphabets={lessonCatalog.list()}/>
