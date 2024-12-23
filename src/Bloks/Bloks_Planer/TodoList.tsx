import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FilterValuesType } from '../../Pages/Planer';



export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}


type DataType = {

    id: string

    title: string
    tasks: Array<TaskType>

    error: any
    setError: any
    
    filter: any
    
    removeTask: (id: string) => void
    chengeFilter: (value: FilterValuesType, todoListId: string ) => void
    addTask: (title: string) => void
    changeTaskStatus: (id: string , isDone: boolean) => void
}



export function TodoList(p: DataType) {


    const [NewTaskeTitle, setNewTaskeTitle] = useState("");
   

    const onNewTitleChengeHander = (e: ChangeEvent<HTMLInputElement>) => { 
        setNewTaskeTitle(e.currentTarget.value)
    }; 

    const OnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
            p.setError(null);
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
                className={p.error ? 'error' : ""}
                ></input>
                <button onClick={addTask} >+</button>
                {p.error && <div className='error-message'>Ошибка: нельзя добавить пустую задачу</div>}
                

            </div>
            
            <ul>
                {
                    p.tasks.map( (t) => {

                        const onRemoveHendler = (e) => {p.removeTask(t.id)}

                        const onChangeHendler = (e) => {
                            p.changeTaskStatus( t.id, e.currentTarget.checked);
                        }

                        return <li key={t.id} className={t.isDone ? 'is-done': ""}>
                        <input type='checkbox' checked={t.isDone} onChange={onChangeHendler} />
                        <span>{t.title} </span>

                        <button onClick={onRemoveHendler}> x </button>
                    </li>
                    })
                }


            </ul>
            <div>
                <button className={p.filter === "all" ? "active-filter": ""} onClick={() => {p.chengeFilter("all", p.id)}} >All</button>
                <button className={p.filter === "active" ? "active-filter": ""} onClick={() => {p.chengeFilter("active", p.id)}} >Active</button>
                <button className={p.filter === "completed" ? "active-filter": ""} onClick={() => {p.chengeFilter("completed", p.id)}} >Completed</button>
            </div>

        </div>
    )
}
