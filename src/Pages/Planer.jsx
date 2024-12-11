import React from 'react';
import Blok from "../Bloks/Blok.tsx";
import {TodoList} from "../Bloks/Bloks_Planer/TodoList.tsx";


let tasks = [
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 1, title: "nameп", isDone: true },
   
    
]

// function removeTask(id: number){

// }



function Planer() {
    return (
        <div className = "page">
            <Blok>rкккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккк</Blok>
            <Blok  width={2} height={3} />
            <Blok >  <TodoList title='Список' tasks = {tasks}  /> </Blok>
           
            
            
        </div>
    )
}

export default Planer;