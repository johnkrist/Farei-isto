import { Button } from "../../components/Button";
import { Container, Content } from "./style";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <h2>Just it</h2>
        <span>Agende suas tarefas de forma simples</span>
        <Button onClick={() => navigate("./signup")}>Cadastro</Button>
        <Button onClick={() => navigate("./login")}>Login</Button>
      </Content>
    </Container>
  );
};
