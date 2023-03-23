import React from "react";

function Cards({task}){
    console.log(task)

    return(
        <ul className="card">{task}</ul>
    )
}




export default Cards