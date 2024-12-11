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
   
    
  

   
  
    
]

// function removeTask(id: number){

// }



function Planer() {
    return (
        <div className = "page">
            
            <Blok  minWidth={12} minHeight={1} >планер</Blok>
            <Blok  minWidth={6} minHeight={1} maxHeight={6} maxWidth={4}>  <TodoList title='Список' tasks = {tasks}  /> </Blok>
           
  

           
            
            
        </div>
    )
}

export default Planer;