import React, { useState } from 'react';
import { v1 } from 'uuid';

import Blok from "../Bloks/Blok.tsx";
import { TodoList } from "../Bloks/Bloks_Planer/TodoList.tsx";






export type FilterValuesType = "all" | "completed" | "active"

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
    error: null | string


}



function Planer() {



    let todoListId1 = "1";
    let todoListId2 = "2";
    let todoListId3 = "3";

    let [todoList, setTodoList] = useState<Array<TodolistType>> ([

        { id: todoListId1, title: "What to lern", filter: "active", error: null },
        { id: todoListId2, title: "What to buy", filter: "completed"  , error: null},
        { id: todoListId3, title: "What to coke", filter: "completed" , error: null },
    
    ]);



    
    let [tasksObj, setTasks] = useState({
        [todoListId1]: [
            { id: v1(), title: "name", isDone: true },
            { id: v1(), title: "name", isDone: true },
            { id: v1(), title: "name", isDone: true },
            { id: v1(), title: "name", isDone: true },
            { id: v1(), title: "name", isDone: false },
            { id: v1(), title: "name", isDone: true },
            { id: v1(), title: "name", isDone: true },
            
        ]
        ,
        [todoListId2] : [
            { id: v1(), title: "name", isDone: true },
            { id: v1(), title: "name", isDone: true },
            { id: v1(), title: "name", isDone: true },
            { id: v1(), title: "name", isDone: true },
            
            
        ]
        ,
        [todoListId3] : [
            { id: v1(), title: "name", isDone: true },
            { id: v1(), title: "name", isDone: true },
            { id: v1(), title: "name", isDone: true },
            { id: v1(), title: "name", isDone: true },
            
            
        ]
    })
    
    
    function removeTodolist(todoListId:string){
        let filteredTodolist = todoList.filter(tl=> tl.id !== todoListId );
        setTodoList(filteredTodolist);
        delete tasksObj[todoListId];
        setTasks({...tasksObj});
    }
    


    function addTask(title: string , todoListId: string) {
       
            if (title.trim() === "") {
                
                // todoList[todoListId].error = ("Pystaia taska");
               
                return
            }
            
        
        let task = {
            id: v1(),
            title: title,
            isDone: false
        };

        let tasks = tasksObj[todoListId];
        let newTasks = [task, ...tasks];
        

        tasksObj[todoListId] = newTasks;
        setTasks({...tasksObj});
    }



    function removeTask(id: string, todoListId: string) {
        let tasks = tasksObj[todoListId]
        let filtredTasks = tasks.filter(t => t.id !== id);
        tasksObj[todoListId] = filtredTasks;
        setTasks({...tasksObj});
    }

    function chengeStatus(id: string, isDone: boolean , todoListId: string) {
        let tasks = tasksObj[todoListId];
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone;
            setTasks({...tasksObj});
        }
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
            {/* <Blok minWidth={24} minHeight={1}>планер</Blok> */}


            {todoList.map((tl) => {

                let TasdksForTodoList = tasksObj[tl.id];

                if (tl.filter === "completed") {
                    TasdksForTodoList = TasdksForTodoList.filter(t => t.isDone === true)
                }
                if (tl.filter === "active") {
                    TasdksForTodoList = TasdksForTodoList.filter(t => t.isDone === false)
                }

                return (

                    <Blok key={tl.id} minWidth={6} maxWidth={8} minHeight={1} maxHeight={24} >
                        <TodoList
                            id = {tl.id}
                            title={tl.title}
                            tasks={TasdksForTodoList}
                            
                            error={tl.error}
                            

                            filter={tl.filter}

                            removeTask={removeTask}
                            chengeFilter={chengeFilter}
                            addTask={addTask}
                            changeTaskStatus={chengeStatus} 
                            removeTodolist={removeTodolist}/>
                            

                    </Blok>

                )


            })}



        </div>
    )



}

export default Planer;
