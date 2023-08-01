import { DashDiv, Container } from "./style";
import { AddTask } from "../../components/AddTask";
import { useNavigate } from "react-router-dom";

export const Dashboard = ({ authenticated }) => {
  const navigate = useNavigate();

  if (!authenticated) {
    return navigate("/login");
  }
  return (
    <DashDiv>
      <Container>
        <AddTask></AddTask>
        Dashboard
      </Container>
    </DashDiv>
  );
};
