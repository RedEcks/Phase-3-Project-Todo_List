import React, {useState} from "react";
import Cards from "./Card";
import Post from './Post'


function ToDo(){
    const [input,setInput]=useState("")
    const [tasks, setTasks]=useState([])

    function handleChange(event){
        setInput(event.target.value);
    }

    function addTask(){
        setTasks([...tasks,input]);
        setInput("")
        console.log(tasks)
    }

    let newTask=tasks.map((task)=><Cards task={task}/>)


    return(
        <div>
            <div className="add-task">
                <input value={input} onChange={handleChange}/>
                <button onClick={addTask}>
                    Add Task
                </button>
            </div>
            <div>
               {newTask}
            </div>
        </div>
    )
}

export default ToDo