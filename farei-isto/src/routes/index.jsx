import { Route, Routes as Switch} from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Dashboard } from "../pages/Dashboard";


export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" Component={Home}></Route>
      <Route path="/signup" Component={Signup}></Route>
      <Route path="/login" Component={Login}></Route>
      <Route path="/dashboard" Component={Dashboard}></Route>
    </Switch>
  );
};
