import React from "react";
import PropTypes from "prop-types";
import styles from "../../assets/css/style.module.css";

function Task(props) {
  let changeTask = () => {
    const newTasks = props.tasks.map((task) => {
      if (props.task.id === task.id) {
        props.task.done = !props.task.done;
      }
      return task;
    });
    props.setTasks(newTasks);
  };

  let deleteTask = () => {
    const newTasks = props.tasks.filter((task) => task.id !== props.task.id);
    props.setTasks(newTasks);
  };
  return (
    <li
      style={props.task.done ? { textDecoration: "line-through" } : {}}
      className={styles.test}
    >
      <input
        type="checkbox"
        checked={props.task.done}
        onChange={changeTask}
      />
      {props.task.text}
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
  setTasks: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ),
};

export default Task;
