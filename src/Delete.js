import React from "react"



function handleDelete(){
    console.log("Hi")
    fetch(`http://localhost:4000/music/${song.id}`,{
        method: "DELETE",
    })
        .then((r)=>r.json())

        return(
            <div>
                <button>
                    Delete Task
                </button>
            </div>
        )
}

export default handleDelete;