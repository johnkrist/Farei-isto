import { DashDiv, Container, InputContainer } from "./style";
import { AddTask } from "../../components/AddTask";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";

export const Dashboard = ({ authenticated }) => {
  const { register, handleSubmit } = useForm();
if (!authenticated) {
  Navigator = "/login"
}

  return (
    <Container>
      <InputContainer>
        <time>4 de setembro de 2023</time>
        <section>
          <Input
            icon={FiEdit2}
            placeholder="nova tarefa"
            register={register}
            name="task"
          />
          <AddTask type="Submit">+</AddTask>
        </section>
      </InputContainer>
    </Container>
  );
};
