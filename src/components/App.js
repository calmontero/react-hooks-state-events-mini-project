import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("ALL");

  function handleTask(addTask) {
    setTasks([...tasks, addTask]);
  }

  function handleDeleteTask(deleteTask) {
    setTasks(tasks.filter((task) => task.text !== deleteTask));
  }

  const visibleTasks = tasks.filter((task) => category === "All" || task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== "All")}
       onTaskFormSubmit={handleTask} />
      <TaskList onDeleteTask={handleDeleteTask} tasks={tasks} />
    </div>
  );
}

export default App;
