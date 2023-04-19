import React from "react";
import { AnimationContainer, Background, Container, Content } from "./style";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Signup= () => {

  const navigate = useNavigate()

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

  const onSubmitFunction = ({ name, email, password }) => {
    const user = { name, email, password };
    api
      .post("user/register", user)
      .then(() => {
        toast.success("sucesso ao criar a conta");
        navigate("/login");
      })
      .cath((err) => toast.error("erro ao criar a conta"));
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
                error={errors.name?.message}
              />
              <Input
                register={register}
                name="email"
                label="e-mail"
                placeholder="seu e-mail"
                error={errors.email?.message}
              />
              <Input
                register={register}
                name="password"
                label="senha"
                placeholder="escolha uma senha"
                type="password"
                error={errors.password?.message}
              />
              <Input
                register={register}
                name="passwordConfirm"
                label="repita a senha"
                placeholder="confirmação de senha"
                type="password"
                error={errors.passwordConfirm?.message}
              />

              <Button type="submit">enviar</Button>
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