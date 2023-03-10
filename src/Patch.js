import React from "react";


function handlePatch(){

    fetch("http://localhost:4000/music",{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(newMusicData)
    })
        .then((r)=>r.json())
        .then((newItem)=>{setMusicInfo([...musicInfo,newItem])
    })
    return(
        <div>
            <button>
                Update Task
            </button>
        </div>
    )
}


export default handlePatch; 