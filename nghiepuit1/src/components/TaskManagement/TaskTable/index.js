import PropTypes from "prop-types";
import React from "react";
import { Table, Form } from "react-bootstrap";
import Task from "../Task";
import { useState } from "react";

function TaskTable(props) {
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  let taskElement;
  if (filterStatus === "all") {
    taskElement =
      filterName === ""
        ? props.tasks.map((task) => (
            <Task
              task={task}
              key={task.id}
              tasks={props.tasks}
              setTasks={props.setTasks}
            />
          ))
        : props.tasks
            .filter((task) =>
              task.name.toLowerCase().includes(filterName.toLowerCase())
            )
            .map((task) => (
              <Task
                task={task}
                key={task.id}
                tasks={props.tasks}
                setTasks={props.setTasks}
              />
            ));
  } else {
    taskElement =
      filterName === ""
        ? props.tasks
            .filter((task) => task.status === filterStatus)
            .map((task) => (
              <Task
                task={task}
                key={task.id}
                tasks={props.tasks}
                setTasks={props.setTasks}
              />
            ))
        : props.tasks
            .filter(
              (task) =>
                task.name.toLowerCase().includes(filterName.toLowerCase()) &&
                task.status === filterStatus
            )
            .map((task) => (
              <Task
                task={task}
                key={task.id}
                tasks={props.tasks}
                setTasks={props.setTasks}
              />
            ));
  }
  let handleChangeFilterName = (event) => {
    setFilterName(event.target.value);
  };
  let handleChangeFilterStatus = (event) => {
    setFilterStatus(event.target.value);
  };
  return (
    <Table className="text-center">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
            <Form.Control
              type="text"
              name="filterName"
              value={filterName}
              onChange={handleChangeFilterName}
            ></Form.Control>
          </td>
          <td>
            <Form.Select
              name="filterStatus"
              value={filterStatus}
              onChange={handleChangeFilterStatus}
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Form.Select>
          </td>
        </tr>
        {taskElement}
      </tbody>
    </Table>
  );
}

TaskTable.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
    })
  ),
  setTasks: PropTypes.func,
};

export default TaskTable;
