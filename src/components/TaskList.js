import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskToDisplay = tasks.map((task) => (
    <Task
      key={task.text}
      category={task.category}
      text={task.text}
      onDeleteTask={onDeleteTask} 
    />
    ));
  return (
    <div className="tasks">
      {taskToDisplay}
    </div>
  );
}

export default TaskList;
