import React, { useEffect } from "react";
import { Table, Form } from "react-bootstrap";
import Task from "../Task";
import { useState } from "react";
import { useSelector } from "react-redux";
import { tasksSelector } from "../../../configs/redux/selectors";

function TaskTable() {
  const tasks = useSelector(tasksSelector.getTasks);
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  let taskElement;
  if (filterStatus === "all") {
    taskElement =
      filterName === ""
        ? tasks.map((task) => <Task task={task} key={task.id} />)
        : tasks
            .filter((task) =>
              task.name.toLowerCase().includes(filterName.toLowerCase())
            )
            .map((task) => <Task task={task} key={task.id} />);
  } else {
    taskElement =
      filterName === ""
        ? tasks
            .filter((task) => task.status === filterStatus)
            .map((task) => <Task task={task} key={task.id} />)
        : tasks
            .filter(
              (task) =>
                task.name.toLowerCase().includes(filterName.toLowerCase()) &&
                task.status === filterStatus
            )
            .map((task) => <Task task={task} key={task.id} />);
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

export default TaskTable;
