import PropTypes from "prop-types";
import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import TaskTable from "./TaskTable";
import Search from "../Search";
import Sort from "../Sort";
import {useSelector} from 'react-redux'
import {tasksSelector} from '../../configs/redux/selectors'

function TaskManagement(props) {
  const search = useSelector(tasksSelector.getSearch);

  let toggleTaskForm = () => {
    props.setIsAddTaskFormOpened(!props.isAddTaskFormOpened);
  };

  return (
    <>
      <Button type="button" variant="primary" onClick={toggleTaskForm}>
        <span>
          <FaPlus className="me-1" />
          Add work
        </span>
      </Button>
      <Row className="mt-3">
        <Col xs={6} sm={6} md={6} lg={6}>
          <Search
            tasks={props.tasks}
            search={search}
          ></Search>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <Sort></Sort>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} sm={12} md={12} lg={12}>
          <TaskTable/>
        </Col>
      </Row>
    </>
  );
}

TaskManagement.propTypes = {
  isAddTaskFormOpened: PropTypes.bool,
  setIsAddTaskFormOpened: PropTypes.func,
};

export default TaskManagement;
