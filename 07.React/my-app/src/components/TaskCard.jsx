import React from "react";

export function TaskCard(props) {
  return (
    <div>
      <li>
        {props.task.id} - {props.task.task}
        <button onClick={() => props.delete(props.task.id)}>Delete</button>
      </li>
    </div>
  );
}
