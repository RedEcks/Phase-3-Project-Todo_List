import React, {useState} from "react";
import Post from './Post'


function ToDoForm(){
    const [input,setInput]=useState("")
    const [task, setTask]=useState([])

    function handleChange(event){
        setInput(event.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        // props.onSubmit({
        //     id: Math.floor(Math.random()*1000),
        //     text: input
        // })
        // <Post task={input}/>

    }

    return(<form className="todo-form" onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Add a task"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}/>
        <button className="todo-button">Add Todo</button>
    </form>)
}

export default ToDoForm