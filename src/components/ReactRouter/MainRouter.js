import React from "react";
import { Route } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";
const MainRouter = () => {
  return (
    <div>
      <Route
        exact
        path='/'>
        <Dashboard />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/signin'>
        <Signin />
      </Route>

      <Route path='/admin'>
        <Admin />
      </Route>
    </div>
  );
};

export default MainRouter;
