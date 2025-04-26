import React from "react";
import { useState } from "react";
import { TaskCard } from "./TaskCard";

export function TaskList() {

    const [tasks, setTasks] = useState(
        [
          {id:1, task:`Task 1`, isCompleted: false},
          {id:2, task:`Task 2`, isCompleted: false},
          {id:3, task:`Task 3`, isCompleted: false},
        ]);
    
        const [count,setCount] = useState(0);
        const [toggle, setToggle] = useState(true);
    
        function handleDelete(id){
          setTasks(tasks.filter((task) => task.id !== id));
        }


  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toogle</button>
      <ul>
        {toggle &&
          tasks.map((task) => {
            return (
              <TaskCard key={task.id} task = {task} delete={handleDelete}/>
            );
          })}
      </ul>
    </>
  );
}
