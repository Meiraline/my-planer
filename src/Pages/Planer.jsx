import React from 'react';
import Blok from "../Bloks/Blok";
import {TodoList} from "../Bloks/Bloks_Planer/TodoList.tsx";


let tasks = [
    { id: 1, title: "name", isDone: true },
    { id: 2, title: "name2", isDone: true },
    { id: 3, title: "name", isDone: false },
    { id: 4, title: "name4", isDone: true },
    { id: 5, title: "name5", isDone: true },
    { id: 6, title: "name6", isDone: true },
]



function Planer() {
    return (
        <div className = "page">
            <Blok filling="planer" />
            <TodoList title='Список' tasks = {tasks}/>
            
        </div>
    )
}

export default Planer;