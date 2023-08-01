import { Route, Routes as Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Dashboard } from "../pages/Dashboard";
import { useEffect, useState } from "react";

export const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  /* useEffect(() => {
    const token = JSON.parse(localStorage.getItem(token));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]); */
  return (
    <Switch>
      <Route
        exact
        path="/"
        Component={Home}
        authenticated={authenticated}
      ></Route>
      <Route
        path="/signup"
        Component={Signup}
        authenticated={authenticated}
      ></Route>
      <Route
        path="/login"
        Component={Login}
        authenticated={authenticated}
      ></Route>
      <Route
        path="/dashboard"
        Component={Dashboard}
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      ></Route>
    </Switch>
  );
};
