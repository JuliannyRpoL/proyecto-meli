import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import { map } from "lodash";
import configRounting from "./config-routing.js";

export default function routing() {
  return (
    <Router>
      <Routes >
        {map(configRounting, (route, index) => (
          <Route key={index} path={route.path} exact={route.exact} element={<route.page/>}></Route>
        ))}
      </Routes >
    </Router>
  );
}