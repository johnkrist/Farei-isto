import React from "react";
import { AnimationContainer, Background, Container, Content } from "./style";
import { Button } from "../../components/Button";
import { Link, redirect } from "react-router-dom";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = ({ authenticated, setAuthenticated }) => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("campo obrigatorio"),

    password: yup
      .string()
      .min(6, "minimo 6 digitos")
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
    console.log(data);

    api
      .post("/login", data)
      .then((res) => {
        const { accessToken } = res.data;
        toast.success("login realizado");
        localStorage.setItem("token", accessToken);
        setAuthenticated(true);
        if (authenticated) {
          navigate("/dashboard")
        }
      })
      .catch((err) => toast.error("Email ou senha invalidos"));
  };
  return (
    <Container>
      <Background>
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h2>login</h2>
              <Input
                register={register}
                name="email"
                label="email"
                placeholder="seu nome"
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

              <Button type="submit">enviar</Button>
              <p>
                não possui conta? <Link to="/signup">cadastre-se</Link>.
              </p>
            </form>
          </AnimationContainer>
        </Content>
      </Background>
    </Container>
  );
};
