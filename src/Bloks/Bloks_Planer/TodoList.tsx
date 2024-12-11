import React from 'react';

type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}


type DataType = {
    title: string
    tasks: Array<TaskType>
    removeTask: Function 
}



export function TodoList(p: DataType) {
    return (
        <div >
            <h3>{p.title}</h3>

            <div>
                <input type='text'></input>
                <button>+</button>
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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>

        </div>
    )
}
