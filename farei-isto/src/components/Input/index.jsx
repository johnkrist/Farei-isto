import { Container, InputContent } from "./style";

export const Input = ({ label, icon, ...rest }) => {
  return (
    <Container>
      <div>{label}</div>
      <InputContent>
        <input {...rest}/>
      </InputContent>
    </Container>
  );
};
