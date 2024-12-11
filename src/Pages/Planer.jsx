import React from 'react';
import Blok from "../Bloks/Blok.tsx";
import {TodoList} from "../Bloks/Bloks_Planer/TodoList.tsx";


let tasks = [
    { id: 1, title: "nameп", isDone: true },
    { id: 2, title: "name2", isDone: true },
    { id: 3, title: "name", isDone: false },
    { id: 4, title: "name4", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 2, title: "name2", isDone: true },
    { id: 3, title: "name", isDone: false },
    { id: 4, title: "name4", isDone: true },
    { id: 1, title: "nameп", isDone: true },
    { id: 2, title: "name2", isDone: true },
    { id: 3, title: "name", isDone: false },
    { id: 4, title: "name4", isDone: true },

  


  

    
]

// function removeTask(id: number){

// }



function Planer() {
    return (
        <div className = "page">
            <Blok> ррззззззззззззззззззззззззззззззззззззззззррззззззззззззззззззззззззззззззззззззззззррзззззззззззззззззззззззззззззззззззззззз  </Blok>
            <Blok  width={1} height={3} />
            <Blok >  <TodoList title='Список' tasks = {tasks}  /> </Blok>
           
            
            
        </div>
    )
}

export default Planer;