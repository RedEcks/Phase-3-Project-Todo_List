import React, {useState} from "react";
import Cards from "./Card";


function ToDo(){

    //const [input,setInput]=useState("")
    const [category,setCategory]=useState("")
    const [taskMaster, setTaskmaster]=useState("")
    const [task,setTask]=useState("")
    const [tasks, setTasks]=useState([])

    // function handleChange(event){
    //     setInput(event.target.value);
    // }

    function handleTask(event){
        setTask(event.target.value)
    }

    function handleCategory(event){
        setCategory(event.target.value)
    }

    function handleTaskMaster(event){
        setTaskmaster(event.target.value)
    }



    function handleSubmit(event){
        event.preventDefault();
        const newTodo=  {
            "Task": task,
            "Category": category,
            "Task Master": taskMaster,
        }
        //setTasks([...tasks,newTodo]);
        //setInput("")
        console.log(tasks)

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
        
    }

    let newTask=tasks.map((task)=><Cards task={task}/>)


    return(

        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" placeholder="Add Task" onChange={handleTask} />
            <input type="text" name="category" placeholder="Add Category" onChange={handleCategory}/>
            <input type="text" name="name" placeholder="Add Task Master" onChange={handleTaskMaster}/>
            <button type="submit" >Add Task</button>
        </form>
            <div>
                {newTask}
            </div>
        </div>
    )

    }
export default ToDo