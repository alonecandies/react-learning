import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>React router v6 Homepage</h1>
      <nav>
        <Link to="">Home</Link> | <Link to="about">About</Link> | <Link to="test">Test</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
