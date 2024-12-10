import Blok from "../Bloks/Blok";
import {TodoList, TodoList2} from "../Bloks/Bloks_Planer/TodoList";



function Planer() {
    return (
        <div className = "page">
            <Blok filling="planer" />
            <TodoList/>
            <TodoList2/>
        </div>
    )
}

export default Planer;