import { DashDiv, Container } from "./style";
import { AddTask } from "../../components/AddTask";

export const Dashboard = () => {
  return (
    <DashDiv>
      <Container>
        <AddTask></AddTask>
        Dashboard
      </Container>
    </DashDiv>
  );
};
