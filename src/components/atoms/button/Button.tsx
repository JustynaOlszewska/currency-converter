import React, { useContext } from "react";
import TaskContext from "../../../context/tasks/taskContext";
import { StyledButton } from "../../../styles/styleComponents/StyledButton";

const Button: React.FC = () => {
  const taskContext = useContext(TaskContext);
  const { exchangeRate } = taskContext || {};
  return (
    <StyledButton type="submit" btn={exchangeRate && "sended"}>
      Konwertuj
    </StyledButton>
  );
};

export default Button;
