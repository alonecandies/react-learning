import PropTypes from "prop-types";
import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { FaPlus, FaTimes, FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { tasksAction } from "../../../configs/redux/actions";

function AddTaskForm(props) {
  const dispatch = useDispatch();
  const [work, setWork] = useState({
    name: "",
    status: "active",
  });
  let handleAddWork = (event) => {
    event.preventDefault();
    setWork((prevState) => ({
      ...prevState,
      name: "",
    }));
    dispatch(tasksAction.addTask(work.name, work.status));
  };

  let handleChange = (event) => {
    setWork({
      ...work,
      [event.target.name]: event.target.value,
    });
  };

  let handleReset = () => {
    setWork({
      name: "",
    });
  };

  let toggleAddTaskForm = () => {
    props.setIsAddTaskFormOpened((prevState) => !prevState);
  };

  return (
    <Card>
      <Card.Header className="bg-warning">
        <Card.Title className="text-center d-flex justify-content-between">
          <span>Add work</span>
          <FaTimesCircle
            style={{ cursor: "pointer" }}
            onClick={toggleAddTaskForm}
          ></FaTimesCircle>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleAddWork} onReset={handleReset}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter work name"
              name="name"
              value={work.name}
              onChange={handleChange}
            />
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={work.status}
              onChange={handleChange}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Form.Select>
            <div className="text-center mt-3 d-flex justify-content-around">
              <Button type="submit" variant="warning">
                <span>
                  <FaPlus className="me-1" />
                  Save
                </span>
              </Button>
              <Button type="reset" variant="danger">
                <span>
                  <FaTimes className="me-1" />
                  Cancel
                </span>
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

AddTaskForm.propTypes = {
  setIsAddTaskFormOpen: PropTypes.func,
};

export default AddTaskForm;
