import React, { useState } from 'react';
import {v1} from 'uuid';

import Blok from "../Bloks/Blok.tsx";
import { TodoList } from "../Bloks/Bloks_Planer/TodoList.tsx";
import { title } from 'process';



export type FilterValuesType = "all" | "completed" | "active";


let initTasks =[

    { id:  v1(), title: "name", isDone: true },
    { id:  v1(), title: "name", isDone: true },
    { id:  v1(), title: "name", isDone: true },
    { id:  v1(), title: "name", isDone: true },
    { id:  v1(), title: "name", isDone: false },
    { id:  v1(), title: "name", isDone: true },
    { id:  v1(), title: "name", isDone: true },
    { id:  v1(), title: "name", isDone: true },
    { id:  v1(), title: "name", isDone: true },
    { id:  v1(), title: "name", isDone: false },
    { id:  v1(), title: "name", isDone: false },
    { id:  v1(), title: "name", isDone: false },
]


function Planer() {
    
    let [tasks, setTasks] = useState(initTasks);
    let [filter, setFilter] = useState<FilterValuesType>("all");
    
    function addTask(title: string){
        let newTask = 
        {id: v1(),
        title: title, 
        isDone: false};
        
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }


    function removeTask(id: string){
        setTasks(tasks.filter((t) => t.id !== id));
    }; 

    function chengeFilter(value: FilterValuesType){
      setFilter(value);  
    };

let TasdksForTodoList = tasks;
if (filter === "completed"){
    TasdksForTodoList = tasks.filter(t => t.isDone === true)
}
if (filter === "active"){
    TasdksForTodoList = tasks.filter(t => t.isDone === false)
}

    return (
        <div className="page1">
            <Blok minWidth={24} minHeight={1}>планер</Blok>
            <Blok minWidth={6} maxWidth={8} minHeight={1} maxHeight={24} >
                <TodoList 
                title="Список" 
                tasks={TasdksForTodoList} 

                removeTask={removeTask} 
                chengeFilter={chengeFilter} 
                addTask = {addTask}/>
            </Blok>
        </div>
    );
}

export default Planer;

