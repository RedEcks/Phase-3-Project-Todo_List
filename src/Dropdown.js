import React from "react";

function Dropdown(){

return(
    <div>
        <label for="category">Choose a Category: </label>
           <select name="category" id="category">
                <option value="house-chores">House Chorses</option>
                <option value="office-tasks">Office Task</option>
                <option value="yard-work">Yard Work</option>
                <option value="school-work">School Work</option>
            </select>
    </div>
    )
}




export default Dropdown;