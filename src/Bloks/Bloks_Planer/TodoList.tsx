import React from 'react';

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
        <div >
            <h3>{p.title}</h3>

            <div>
                <input type='text'></input>
                <button>+</button>
            </div>
            <ul>
                {
                    p.tasks.map((t) => {
                        return (
                            <li>
                                <input type='checkbox' checked={t.isDone} />
                                <span>{t.title} </span>
                                <button onClick={function () {
                                    alert(t.id);
                                }}> x </button>
                            </li>
                        )
                    })
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
