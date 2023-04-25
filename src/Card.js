import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from "react";
import handleDelete from './Delete';

const ACard =  ({ category }) => {
    let taskNames = category.tasks.map((task, index) => <li key={index}>{task.name}</li>);

    return (
    <Card>
        <CardContent>
            <div>
                <div>{category.name}</div>
                <ul>{taskNames}</ul>
                <button onClick={() => handleDelete(category)}>Delete Category</button>
            </div>
        </CardContent>
    </Card>
    );
};

// function Cards({task}){
//     console.log(task)

//     return(
//         <div>
//             <ul className="card">{task}</ul>
//             <Checkbox/>
//         </div>
//     )
// }




export default ACard