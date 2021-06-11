import { createContext } from "react";
import { TaskContextInterface } from "./typesTS";

const taskContext = createContext<TaskContextInterface | null>(null);
export default taskContext;
