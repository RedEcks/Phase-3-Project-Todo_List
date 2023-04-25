import React from "react";

function Checkbox(){
    return(
    <div className="check-box">
        <div className="completed-task">
            <input type="checkbox" id="todo-item" name="todo-completed" value="completed" />Completed
        </div>
    </div>)
}

export default Checkbox;