import React from "react";
import { AnimationContainer, Background, Container, Content } from "./style";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";


export const Signup = () => {
  return (
    <Container>
      <Background>
        <Content>
          <AnimationContainer>
            <form>
              <h2>cadastro</h2>
              <Input label="nome" placeholder="seu nome" />
              <Input label="e-mail" placeholder="seu e-mail" />
              <Input
                label="senha"
                placeholder="escolha uma senha"
                type="password"
              />
              <Input
                label="repita a senha"
                placeholder="confirmação de senha"
                type="password"
              />

              <Button>enviar</Button>
              <p>
                já possui conta? <Link to="/login">faça login</Link>.
              </p>
            </form>
          </AnimationContainer>
        </Content>
      </Background>
    </Container>
  );
};
