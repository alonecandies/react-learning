import "./App.css";
import Todo from "./components/Todo/Todo";
import Parent from "./components/Memo/Parent";
import Modal from "./components/Portal/Modal";

function App() {
  return (
    <div className="App">
      <Parent />
      <Todo/>
      <Modal/>
    </div>
  );
}

export default App;
