import React, { lazy, useState } from "react";
import { StyledWrapperMain } from "../../../styles/styleComponents/StyledMain";
const Form = lazy(() => import("../../organism/form/Form"));
const ActionHistoryMemory = lazy(
  () => import("../../molecules/actionHistoryMemory/ActionHistoryMemory")
);
const HistoryMemory = lazy(() => import("../historyMemory/HistoryMemory"));

const Main: React.FC = () => {
  const [transla, setTransla] = useState<boolean>(false);

  return (
    <StyledWrapperMain>
      <Form />
      <HistoryMemory transla={transla} />
      <ActionHistoryMemory transla={transla} settransla={setTransla} />
    </StyledWrapperMain>
  );
};

export default Main;
