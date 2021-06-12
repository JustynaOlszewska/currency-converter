import React, { lazy } from "react";
import { StyledHeader } from "../../../styles/styleComponents/StyledHistoryMemory";
import { arrayHeaderElements } from "../../../constant";
const ArrayHeaderElement = lazy(
  () => import("../../atoms/arrayHeaderElement/ArrayHeaderElement")
);

const ArrayHeader: React.FC = () => {
  return (
    <StyledHeader>
      {arrayHeaderElements.map((element) => (
        <ArrayHeaderElement key={element} element={element} />
      ))}
    </StyledHeader>
  );
};

export default ArrayHeader;
