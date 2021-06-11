import * as React from "react";
import { ArrayHeaderProps } from "./typesTS";
import { StyledH6 } from "../../../styles/styleComponents/StyledArrayHeaderElement";

const ArrayHeaderElement: React.FC<ArrayHeaderProps> = ({
  element,
}: ArrayHeaderProps) => {
  return <StyledH6 key={element}>{element}</StyledH6>;
};

export default ArrayHeaderElement;
