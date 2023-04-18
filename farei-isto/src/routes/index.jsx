import { Route, Routes as Switch} from "react-router-dom";
import { Home } from "../pages/Home";
import { Signup } from "../pages/Signup";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" Component={Home}></Route>
      <Route path="/signup" Component={Signup}></Route>
      <Route path="/login" Component={'Login'}></Route>
    </Switch>
  );
};
