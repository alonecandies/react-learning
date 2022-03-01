import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";
import shortid from 'shortid';

function Todo() {
  const [tasks, setTasks] = useState([
    {
      id: shortid.generate(),
      text: "Learn React",
      done: false,
    },
    {
      id: shortid.generate(),
      text: "Learn Redux",
      done: false,
    }
  ]);
  const [newTask, setNewTask] = useState("");
  let newTaskChange = (event) => {
    setNewTask(event.target.value);
  };
 
  let addTask = (event) => {
    event.preventDefault();
    const task = {
      id: shortid.generate(),
      text: newTask,
      done: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  return (
    <React.Fragment>
      <form onSubmit={addTask}>
        <input value={newTask} onChange={newTaskChange}></input>
        <button type="submit">Add</button>
      </form>
      <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
    </React.Fragment>
  );
}

export default Todo;
