import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./config/routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map((route,index) => (
          <Route key={index} path={route.path} element={route.element} index={route.index} >
            {route.routes.map((route,index) => (
              <Route key={index} path={route.path} element={route.element} index={route.index} >
                {route.routes.map((route,index) => (
                  <Route key={index} path={route.path} element={route.element} index={route.index} />
                ))}
              </Route>
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
