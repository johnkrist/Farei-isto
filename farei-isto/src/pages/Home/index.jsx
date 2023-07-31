import { Button } from "../../components/Button";
import { Container, Content } from "./style";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <h2>just it</h2>
        <span>agende suas tarefas de forma simples</span>
        <Button onClick={() => navigate("./signup")}>cadastro</Button>
        <Button onClick={() => navigate("./login")}>login</Button>
      </Content>
    </Container>
  );
};
