import { Container, InputContent } from "./style";

export const Input = ({ label, icon, register, name, error, ...rest }) => {
  return (
    <Container>
      <div>{label}{!!error && <span>-{error}</span>}</div>
      <InputContent isError={!!error}>
        <input {...register(name)} {...rest}/>
      </InputContent>
    </Container>
  );
};
