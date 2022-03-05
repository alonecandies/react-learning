import PropTypes from "prop-types";
import React from "react";
import { Button, Badge, Form } from "react-bootstrap";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { tasksAction } from "../../../configs/redux/actions";

function Task(props) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.task.name);
  let statusClass = props.task.status === "active" ? "success" : "warning";

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
    let newTask = {
      ...props.task,
      status: props.task.status === "active" ? "inactive" : "active",
    };
    dispatch(tasksAction.editTask(newTask));
  };

  let deleteTask = () => {
    dispatch(tasksAction.deleteTask(props.task.id));
  };

  let handleEdit = () => {
    let newTask = {
      ...props.task,
      name: newName,
    };
    setEditing((prevState) => !prevState);
    dispatch(tasksAction.editTask(newTask));
  };

  return (
    <tr>
      <td>{props.task.id}</td>
      {editNameElem}
      <td>
        <Badge
          bg={statusClass}
          style={{ cursor: "pointer" }}
          onClick={changeStatus}
        >
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
};

export default Task;
