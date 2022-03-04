import PropTypes from "prop-types";
import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import TaskTable from "./TaskTable";
import Search from "../Search";
import Sort from "../Sort";
import { useState, useEffect } from "react";

function TaskManagement(props) {
  const [keyword, setKeyword] = useState("");
  const [searchData, setSearchData] = useState(props.tasks);
  const [sorting, setSorting] = useState({
    by: "A-Z",
    value:0
  });

  let toggleTaskForm = () => {
    props.setIsAddTaskFormOpened(!props.isAddTaskFormOpened);
  };

  useEffect(() => {
    setSearchData(props.tasks);
  },[props.tasks]);

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
            keyword={keyword}
            setKeyword={setKeyword}
            setSearchData={setSearchData}
          ></Search>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <Sort sorting={sorting} setSorting={setSorting} searchData={searchData} setSearchData={setSearchData}></Sort>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} sm={12} md={12} lg={12}>
          <TaskTable tasks={searchData} setTasks={props.setTasks}></TaskTable>
        </Col>
      </Row>
    </>
  );
}

TaskManagement.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
    })
  ),
  setTasks: PropTypes.func,
  isAddTaskFormOpened: PropTypes.bool,
  setIsAddTaskFormOpened: PropTypes.func,
};

export default TaskManagement;
