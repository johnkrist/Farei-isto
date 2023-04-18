import { Container, InputContent } from "./style";

export const Input = ({ label, icon, register, name, ...rest }) => {
  return (
    <Container>
      <div>{label}</div>
      <InputContent>
        <input {...register(name)} {...rest}/>
      </InputContent>
    </Container>
  );
};
