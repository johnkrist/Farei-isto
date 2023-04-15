import { Route, Routes as Switch} from "react-router-dom";
import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" Component={Home}></Route>
    </Switch>
  );
};
