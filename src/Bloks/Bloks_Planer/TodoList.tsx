import React from 'react';
import s from "./../Blok.module.css"


type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}


type DataType = {
    title: string;
    tasks: Array<TaskType>;
}





export function TodoList(p: DataType) {
    return (
        <div className={s.Blok}>

            <h3>{p.title}</h3>

            <div>
                <input type='text'></input>
                <button>+</button>
            </div>
            <ul>
                <li><input type='checkbox' checked={p.tasks[0].isDone}></input><span>{p.tasks[0].title}</span></li>
                <li><input type='checkbox' checked={p.tasks[1].isDone}></input><span>{p.tasks[1].title}</span></li>
                <li><input type='checkbox' checked={p.tasks[2].isDone}></input><span>{p.tasks[2].title}</span></li>
             
               
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>



        </div>
    )
}

