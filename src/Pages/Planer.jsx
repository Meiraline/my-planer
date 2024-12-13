import React, { useState } from 'react';
import Blok from "../Bloks/Blok.tsx";
import { TodoList } from "../Bloks/Bloks_Planer/TodoList.tsx";


let initTasks =[

    { id: 1, title: "name", isDone: true },
    { id: 2, title: "name", isDone: true },
    { id: 3, title: "name", isDone: true },
    { id: 4, title: "name", isDone: true },
    { id: 5, title: "name", isDone: false },
    { id: 6, title: "name", isDone: true },
    { id: 7, title: "name", isDone: true },
    { id: 8, title: "name", isDone: true },
    { id: 9, title: "name", isDone: true },
    { id: 10, title: "name", isDone: false },
    { id: 11, title: "name", isDone: false },
    { id: 12, title: "name", isDone: false },
]


function Planer() {
    
    let [tasks, setTasks] = useState(initTasks);
    
    const removeTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    }; 

    





    return (
        <div className="page">
            <Blok minWidth={12} minHeight={1}>планер</Blok>
            <Blok minWidth={6} minHeight={1} maxHeight={8} maxWidth={4}>
                <TodoList title="Список" tasks={tasks} removeTask={removeTask} />
            </Blok>
        </div>
    );
}

export default Planer;
