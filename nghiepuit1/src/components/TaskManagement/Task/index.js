import PropTypes from "prop-types";
import React from "react";
import { Button, Badge, Form } from "react-bootstrap";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import {useState} from "react";

function Task(props) {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.task.name);
  let statusClass =
    props.task.status === "active" ? "success" : "warning";

  let editNameElem = editing ? (
    <td>
      {" "}
      <Form.Control
        type="text"
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
      ></Form.Control>
    </td>
  ) : (
    <td>{props.task.name}</td>
  );

  let changeStatus = () => {
    props.setTasks(
      props.tasks.map((task) =>{
        if (task.id === props.task.id) {
          return {
            ...task,
            status: task.status === "active" ? "inactive" : "active",
          };
        }
        return task;
      })
    )
  }

  let deleteTask = () => {
    props.setTasks(
      props.tasks.filter((task) => task.id !== props.task.id)
    )
  }

  let handleEdit = () => {
    setEditing(prevState => !prevState);
    props.setTasks(
      props.tasks.map((task) =>{
        if (task.id === props.task.id) {
          return {
            ...task,
            name: newName,
          };
        }
        return task;
      })
    )
  }

  return (
    <tr>
      <td>{props.task.id}</td>
      {editNameElem}
      <td>
        <Badge bg={statusClass} style={{ cursor: "pointer" }} onClick={changeStatus}>
          {props.task.status}
        </Badge>
      </td>
      <td className="d-flex justify-content-around">
        <Button type="button" variant="warning" onClick={handleEdit}>
          <span>
            <FaPencilAlt className="me-1" />
            Edit
          </span>
        </Button>
        <Button type="button" variant="danger" onClick={deleteTask}>
          <span>
            <FaTrash className="me-1" />
            Delete
          </span>
        </Button>
      </td>
    </tr>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
  }),
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
    })
  ),
  setTasks: PropTypes.func,
};

export default Task;
