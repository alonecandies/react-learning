import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import AddTaskForm from "./components/TaskManagement/AddTaskForm";
import TaskManagement from "./components/TaskManagement/";
import { useState } from "react";

function App() {
  const [isAddTaskFormOpened, setIsAddTaskFormOpened] = useState(false);

  return (
    <Container>
      <div className="text-center">
        <h1>Works management</h1>
      </div>
      <Row>
        <Col xs={4} sm={4} md={4} lg={4}>
          {isAddTaskFormOpened ? (
            <AddTaskForm setIsAddTaskFormOpened={setIsAddTaskFormOpened} />
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
            isAddTaskFormOpened={isAddTaskFormOpened}
            setIsAddTaskFormOpened={setIsAddTaskFormOpened}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
