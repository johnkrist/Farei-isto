import { DashDiv, Container, InputContainer, TaskContainer } from "./style";
import { AddTask } from "../../components/AddTask";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import { api } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
export const Dashboard = ({ authenticated }) => {
  const [tasks, setTasks] = useState([""]);
  const [token] = useState(localStorage.getItem("token") || "");
  const [Id] = useState(JSON.parse(localStorage.getItem("user")) || "");
  const { register, handleSubmit } = useForm();

  function loadTasks() {
    api
      .get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },

        //params: {
        //  userId: { Id },
        // },
      })
      .then((response) => setTasks(response.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    loadTasks();
  }, []);
  if (!authenticated) {
    Navigator = "/login";
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
      <TaskContainer>
        {tasks.map((task) => (
          <Card
            key={task.id}
            title={task.nome}
            date={task.createdAd}
            onClick={() => {}}
          />
        ))}
      </TaskContainer>
    </Container>
  );
};
