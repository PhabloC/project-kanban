import { useContext } from "react";
import { TasksContext, TasksContextData } from "../contexts/TasksContext";

export const useTasks = (): TasksContextData => {
  return useContext(TasksContext);
};
