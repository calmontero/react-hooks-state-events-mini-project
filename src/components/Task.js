import React from "react";


function Task({category, text, onDeleteTask}) {
  function handleTaskDelete() {
    onDeleteTask(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleTaskDelete} >X</button>
    </div>
  );
}

export default Task;
