import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import AddTaskForm from "./components/TaskManagement/AddTaskForm";
import TaskManagement from "./components/TaskManagement/";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("tasks");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  useEffect(() => {
    // storing input name
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [isAddTaskFormOpened, setIsAddTaskFormOpened] = useState(false);

  let genData = () => {
    let data = [
      {
        id: uuidv4(),
        name: "a",
        status: "active",
      },
      {
        id: uuidv4(),
        name: "b",
        status: "inactive",
      },
      {
        id: uuidv4(),
        name: "c",
        status: "active",
      },
    ];
    localStorage.setItem("tasks", JSON.stringify(data));
    setTasks(data);
  };

  return (
    <Container>
      <div className="text-center">
        <h1>Works management</h1>
        <Button type="button" onClick={genData}>
          Generate Data
        </Button>
      </div>
      <Row>
        <Col xs={4} sm={4} md={4} lg={4}>
          {isAddTaskFormOpened ? (
            <AddTaskForm
              tasks={tasks}
              setTasks={setTasks}
              setIsAddTaskFormOpened={setIsAddTaskFormOpened}
            />
          ) : (
            <></>
          )}
        </Col>
        <Col
          xs={isAddTaskFormOpened ? 8 : 12}
          sm={isAddTaskFormOpened ? 8 : 12}
          md={isAddTaskFormOpened ? 8 : 12}
          lg={isAddTaskFormOpened ? 8 : 12}
        >
          <TaskManagement
            tasks={tasks}
            setTasks={setTasks}
            isAddTaskFormOpened={isAddTaskFormOpened}
            setIsAddTaskFormOpened={setIsAddTaskFormOpened}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
