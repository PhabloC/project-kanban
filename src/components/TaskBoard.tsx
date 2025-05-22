import { Badge, Flex, Grid, ScrollArea } from "@radix-ui/themes";
import type { Task } from "../entities/Task";
import { TaskCard } from "./TaskCard";

export const TaskBoard: React.FC = () => {
  const tasksTodo: Task[] = [
    {
      id: 1,
      title: "Reunião com a equipe",
      description:
        "Reunião para discutir o progresso do projeto e próximos passos.",
      status: "todo",
      priority: "high",
    },
    {
      id: 2,
      title: "Planejar sprints",
      description: "Definir tarefas para a próxima sprint.",
      status: "todo",
      priority: "medium",
    },
  ];

  const tasksInProgress: Task[] = [
    {
      id: 3,
      title: "Desenvolver login",
      description: "Implementar tela de login.",
      status: "doing",
      priority: "high",
    },
    {
      id: 4,
      title: "Ajustar layout",
      description: "Melhorar responsividade do quadro.",
      status: "done",
      priority: "low",
    },
  ];

  const tasksDone: Task[] = [
    {
      id: 5,
      title: "Configurar projeto",
      description: "Criar estrutura inicial do projeto Kanban.",
      status: "done",
      priority: "medium",
    },
    {
      id: 6,
      title: "Documentar API",
      description: "Adicionar documentação inicial da API.",
      status: "done",
      priority: "low",
    },
  ];

  return (
    <ScrollArea scrollbars="horizontal">
      <Grid columns={"3"} gap="4" minWidth={"64rem"}>
        <Flex direction="column" gap="4">
          <Badge size="3" color="gray">
            Para fazer (2)
          </Badge>
          {tasksTodo.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Flex>
        <Flex direction="column" gap="4">
          <Badge size="3" color="yellow">
            Em progresso (2)
          </Badge>

          {tasksInProgress.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Flex>
        <Flex direction="column" gap="4">
          <Badge size="3" color="green">
            Concluídas (2)
          </Badge>

          {tasksDone.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Flex>
      </Grid>
    </ScrollArea>
  );
};
