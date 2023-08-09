import React from 'react'

async function getTasks() {
const res = await fetch('http://localhost:3000/api/tasks')
const data = await res.json() 
return data
}
const Tasks = async() => {
 const tasks = await getTasks()
  return (
    <div>     
      {tasks.map((task) => (
        <>
        <div className="task">
   <h3 > {task.text}</h3>
         <small>{task.day}</small>
        </div>
        </>
      ))}
    </div>
  )
}

export default Tasks
