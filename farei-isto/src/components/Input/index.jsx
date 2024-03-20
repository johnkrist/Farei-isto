import { Container, InputContent } from "./style";

export const Input = ({ label, icon, register, nome, error="", ...rest }) => {
  return (
    <Container>
      <div>{label}{!!error && <span>-{error}</span>}</div>
      <InputContent isError={!!error}>
        <input {...register(nome)} {...rest}/>
      </InputContent>
    </Container>
  );
};
