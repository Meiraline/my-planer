import React, { useState } from 'react';
import { v1 } from 'uuid';

import Blok from "../Bloks/Blok.tsx";
import { TodoList } from "../Bloks/Bloks_Planer/TodoList.tsx";





export type FilterValuesType = "all" | "completed" | "active";

export type TodolistType = {
    id: string;
    title: string;
    filter: FilterValuesType


}





let initTasks = [

    { id: v1(), title: "name", isDone: true },
    { id: v1(), title: "name", isDone: true },
    { id: v1(), title: "name", isDone: true },
    { id: v1(), title: "name", isDone: true },
    { id: v1(), title: "name", isDone: false },
    { id: v1(), title: "name", isDone: true },
    { id: v1(), title: "name", isDone: true },
    { id: v1(), title: "name", isDone: true },
    { id: v1(), title: "name", isDone: true },
    { id: v1(), title: "name", isDone: false },
    { id: v1(), title: "name", isDone: false },
    { id: v1(), title: "name", isDone: false },
]




function Planer() {

    let [tasks, setTasks] = useState(initTasks);
    let [error, setError] = useState<string | null>(null);


    let [todoList, setTodoList] = useState<Array<TodolistType>> ([

        { id: v1(), title: "What to lern", filter: "active" },
        { id: v1(), title: "What to buy", filter: "completed" },
        { id: v1(), title: "What to buy", filter: "completed" },
    
    ]);


    function addTask(title: string) {
        if (title.trim() === "") {
            setError("Pystaia taska");
            return

        }


        let newTask =
        {
            id: v1(),
            title: title,
            isDone: false
        };

        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }


    function removeTask(id: string) {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    function chengeStatus(id: string, isDone: boolean) {
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone;
        }
        setTasks([...tasks]);



    }


    function chengeFilter(value: FilterValuesType, todoListId: string) {
        let todolist = todoList.find(tl => tl.id === todoListId);
        if (todolist) {
            todolist.filter = value;
            setTodoList([...todoList]);
        }
    }
    




    return (
        <div className="page1">
            <Blok minWidth={24} minHeight={1}>планер</Blok>


            {todoList.map((tl) => {

                let TasdksForTodoList = tasks;

                if (tl.filter === "completed") {
                    TasdksForTodoList = tasks.filter(t => t.isDone === true)
                }
                if (tl.filter === "active") {
                    TasdksForTodoList = tasks.filter(t => t.isDone === false)
                }

                return (

                    <Blok key={tl.id} minWidth={6} maxWidth={8} minHeight={1} maxHeight={24} >
                        <TodoList
                            id = {tl.id}
                            title={tl.title}
                            tasks={TasdksForTodoList}

                            error={error}
                            setError={setError}

                            filter={tl.filter}

                            removeTask={removeTask}
                            chengeFilter={chengeFilter}
                            addTask={addTask}
                            changeTaskStatus={chengeStatus} />

                    </Blok>

                )


            })}



        </div>
    )



}

export default Planer;
