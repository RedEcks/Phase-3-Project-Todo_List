import React, {useState} from "react";
import Cards from "./Card";
import Dropdown from "./Dropdown";


function ToDo(){

    const [task,setTask]=useState("")
    const [category, setCategory]=useState("")



    function handleTask(event){
        setTask(event.target.value)
    }


    function handleSubmit(event){
        event.preventDefault();
        let newTodo=  {
            "Task": task,
            "Category": category
        }


        fetch("http://localhost:9292/task",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newTodo)
        })
            .then((r)=>r.json())
            .then((newList)=>{ console.log(newList); setTask(newList)})
        }
        
    

    let newTask=tasks.map((task)=><Cards task={task}/>)

    return(

        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" placeholder="Add Task" onChange={handleTask} />
            <button type="submit" >Add Task</button>
            <Dropdown placeholder="Select"/>
        </form>
            <div>
                {newTask}
            </div>
        </div>
    )

}

export default ToDo