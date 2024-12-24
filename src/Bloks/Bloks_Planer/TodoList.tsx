import React from 'react';
import { FilterValuesType } from '../../Pages/Planer.tsx';
import AddItemForm from './AddItemForm.tsx';



export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}


type DataType = {

    id: string

    title: string
    tasks: Array<TaskType>

    filter: any
    
    removeTask: (id: string, todoListId: string) => void
    chengeFilter: (value: FilterValuesType, todoListId: string ) => void
    addTask: (title: string, todoListId: string) => void
    changeTaskStatus: (id: string , isDone: boolean , todoListId: string) => void

    removeTodolist:(todoListId: string) => void

}



export function TodoList(p: DataType) {

    const removeTodolist = () => {
        p.removeTodolist(p.id)
    } 

    const AddTask = (title: string) => {
        p.addTask(title, p.id);
    }


    return (
        <div >
            <h3>{p.title} 
                <button onClick={removeTodolist} >x</button> 
            </h3>

            <AddItemForm addItem ={AddTask}/>
            
            <ul>
                {
                    p.tasks.map( (t) => {

                        const onRemoveHendler = (e) => {p.removeTask(t.id, p.id)}

                        const onChangeHendler = (e) => {
                            p.changeTaskStatus( t.id, e.currentTarget.checked, p.id);
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




