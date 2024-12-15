import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FilterValuesType } from '../../Pages/Planer';

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}


type DataType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    chengeFilter: (value: FilterValuesType) => void
    addTask: Function
}



export function TodoList(p: DataType) {

    const [NewTaskeTitle, setNewTaskeTitle] = useState("");

    const onNewTitleChengeHander = (e: ChangeEvent<HTMLInputElement>) => { 
        setNewTaskeTitle(e.currentTarget.value)
    }; 

    const OnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.code === 'Enter' ){
                p.addTask(NewTaskeTitle);
                setNewTaskeTitle("");
            }
    }

    const addTask = () => {
        p.addTask(NewTaskeTitle);
        setNewTaskeTitle("");
    }



    return (
        <div >
            <h3>{p.title}</h3>

            <div>

                <input 
                value={NewTaskeTitle} 
                onChange={ onNewTitleChengeHander }
                onKeyDown = { OnKeyPressHandler }
                ></input>

                <button onClick={addTask} >+</button>

            </div>
            
            <ul>
                {
                    p.tasks.map( t => 
                        
                            <li>
                                <input type='checkbox' checked={t.isDone} />
                                <span>{t.title} </span>

                                <button onClick={ () => {p.removeTask(t.id)}}> x </button>
                            </li>
                        
                    )
                }


            </ul>
            <div>
                <button onClick={() => {p.chengeFilter("all")}} >All</button>
                <button onClick={() => {p.chengeFilter("active")}} >Active</button>
                <button onClick={() => {p.chengeFilter("completed")}} >Completed</button>
            </div>

        </div>
    )
}
