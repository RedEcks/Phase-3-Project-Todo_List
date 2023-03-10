import React, {useState} from "react";
import Form from './Form';


function List(){
    const [todos,setTodos] = useState([])

    function AddTodo(todo){
        
        const newTodos = [todo,...todos];
        setTodos(newTodos);
        console.log(...todos)
    }

    return(
    <div>
        <h1>What's up doc?</h1>
        <Form onSubmit={AddTodo}/>
    </div>)
}

export default List;