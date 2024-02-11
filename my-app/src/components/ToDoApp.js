import React, { useState } from "react";

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");
  const handleInputChange = (event) => {
    setNewTasks(event.target.value);
  };
  const handleAddItem = () => {
    if (newTasks.trim != "") {
      setTasks((prevTasks) => [...prevTasks, newTasks]);
      setNewTasks("");
    }
  };
  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <textarea
          placeholder="Enter task"
          value={newTasks}
          onChange={handleInputChange}
        ></textarea>
        <button onClick={handleAddItem}>Add</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoApp;
