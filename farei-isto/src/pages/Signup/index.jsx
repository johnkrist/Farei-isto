import React from "react";
import { AnimationContainer, Background, Container, Content } from "./style";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Signup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("campo obrigatorio"),
    email: yup.string().email("email invalido").required("campo obrigatorio"),
    password: yup
      .string()
      .min(8, "minimo 8 digitos")
      .required("campo obrigatorio"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "senhas não conferem")
      .required("campo obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    console.log(data)
  };
  return (
    <Container>
      <Background>
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h2>cadastro</h2>
              <Input
                register={register}
                name="name"
                label="nome"
                placeholder="seu nome"
              />
              <Input
                register={register}
                name="email"
                label="e-mail"
                placeholder="seu e-mail"
              />
              <Input
                register={register}
                name="password"
                label="senha"
                placeholder="escolha uma senha"
                type="password"
              />
              <Input
                register={register}
                name="passwordConfirm"
                label="repita a senha"
                placeholder="confirmação de senha"
                type="password"
              />

              <Button type='submit'>enviar</Button>
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
