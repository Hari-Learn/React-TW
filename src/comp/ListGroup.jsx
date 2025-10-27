import React, { useState } from "react";

const ListGroup = ()=>{
    const [tasks, setTasks] = useState(['Learn','Build','Test'])

    const removeTask = (index) =>{
        setTasks(tasks.filter((_,i)=> i!= index));        
    }
    return(
        <>
       

        <div className="flex flex-col items-center"> <h2>Tasks</h2> 
        



<ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg divide-y divide-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:divide-gray-600 dark:text-white">
  {tasks.map((item, index) => (
    <li key={index}
      className="flex items-center justify-between w-full px-4 py-2" >
      <span>{item}</span>
      <button
        className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded"
        onClick={() => removeTask(index)}> Delete   </button>
    </li>
  ))}
</ul></div>
</>

    )
}

export default ListGroup