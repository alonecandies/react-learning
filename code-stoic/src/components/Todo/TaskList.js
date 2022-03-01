import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";

function TaskList(props) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <Task tasks={props.tasks} setTasks={props.setTasks} task={task} key={task.id}></Task>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ),
  setTasks: PropTypes.func.isRequired,
};

export default TaskList;
