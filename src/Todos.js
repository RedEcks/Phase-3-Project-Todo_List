import React, {useState} from "react";
import Form from './Form';

function Todos(){
    const [edit, setEdit] = useState()

    return(
        <li className="card">
            <div className="todo-cards">
                <h3 className="artist-name">{song.artist}</h3>
            </div>
        </li>
    )
}

export default Todos