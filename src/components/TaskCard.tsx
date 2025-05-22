import { Badge, Button, Card, Flex, Heading, Text } from "@radix-ui/themes"; // Adicionei Text
import type { Task, TaskPriority } from "../entities/Task";

// Definindo o tipo TaskStatus explicitamente
type TaskStatus = "todo" | "doing" | "done";

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const getActionText = (status: TaskStatus) => {
    const actionsTexts: { [key in TaskStatus]: string } = {
      todo: "Iniciar",
      doing: "Concluir",
      done: "Arquivar",
    };
    return actionsTexts[status];
  };

  const getActionsColor = (status: TaskStatus) => {
    const actionsColors: {
      [key: string]: "indigo" | "green" | "bronze";
    } = {
      todo: "indigo",
      doing: "green",
      done: "bronze",
    };
    return actionsColors[status];
  };

  const getPriorityColor = (priority: TaskPriority) => {
    const priorityColors: {
      [key: string]: "sky" | "amber" | "tomato";
    } = {
      low: "sky",
      medium: "amber",
      high: "tomato",
    };
    return priorityColors[priority];
  };

  return (
    <Card>
      <Flex align="center" gap="4">
        <Heading as="h3" size="3">
          {task.title}
        </Heading>
        <Badge color={getPriorityColor(task.priority)}>{task.priority}</Badge>
      </Flex>
      <Text as="p" my="4">
        {task.description}
      </Text>
      <Flex gap="2">
        {task.status !== "done" && (
          <Button color={getActionsColor(task.status)}>
            {getActionText(task.status)}
          </Button>
        )}
        <Button color="red">Excluir</Button>
      </Flex>
    </Card>
  );
};
