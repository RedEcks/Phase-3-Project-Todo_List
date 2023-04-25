
import './App.css';
import React, { useState, useEffect } from 'react';
import ACard from './Card';
import TaskForm from './TaskForm';
// import List from './List';



function App() {
  const [categories, setCategories] =useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/categories")
    .then((r)=>r.json())
    .then((data)=>setCategories(data))
  },[])


    console.log(categories)
    function handleList() {
      return categories.map((category, index) => <ACard key={index} category={category}/>);
    }


  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskForm/>
      {handleList()}
    </div>
  );
}

export default App;
