import App from "../App";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Test from "../pages/Test";
import TestElem from "../pages/TestElem";
const routes = [
  {
    path: "",
    element: <App />,
    index: false,
    routes: [
      { path: "", element: <Home />, index: true, routes: [] },
      { path: "about", element: <About />, index: false, routes: [] },
      { path: "test", element: <Test />, index: false, routes: [
         { path: "", element: <div>Select data</div>, index: true, routes: [] },
         { path: ":id", element: <TestElem />, index: false, routes: [] },
         { path: "new", element: <div>New data</div>, index: false, routes: [] },
      ] },
      { path: "*", element: <NotFound />, index: false, routes: [] },
    ],
  },
];

export default routes;
