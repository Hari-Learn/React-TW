import React, { useState } from "react";

const ListGroup = ()=>{
    const [tasks, setTasks] = useState(['Learn','Build','Test'])
    return(
        <div className="flex justify-center">
            <h2>Tasks</h2>
            {tasks.map(item => (
                <h3>{"   -  "+item+ " "}</h3>
            ))}
        </div>
    )
}

export default ListGroup