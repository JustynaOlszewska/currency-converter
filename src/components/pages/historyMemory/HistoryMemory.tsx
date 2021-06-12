import React, { useContext, useEffect, lazy } from "react";
import HistoryContext from "../../../context/history/historyContext";
import StorageContext from "../../../context/storage/storageContext";
import { Transla } from "../../../shareTS";

import { StyledHeader } from "../../../styles/styleComponents/StyledHistoryMemory";
import { arrayHeaderElements } from "../../../constant";

import {
  StyledWrapperHistoryMemory,
  StyledContainerDiv,
} from "../../../styles/styleComponents/StyledHistoryMemory";
const ArrayHistory = lazy(
  () => import("../../molecules/arrayHistory/ArrayHistory")
);
const ArrayHeader = lazy(
  () => import("../../molecules/arrayHeader/ArrayHeader")
);
const ResetHistory = lazy(
  () => import("../../atoms/resetHistory/ResetHistory")
);

const HistoryMemory: React.FC<Transla> = ({ transla }: Transla) => {
  const historyContext = useContext(HistoryContext);
  const { data } = historyContext || {};
  const storageContext = useContext(StorageContext);
  const { getDataStorage } = storageContext || {};
  useEffect(() => {
    if (!data?.length) return;
    localStorage.setItem("arrayHistory", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    getDataStorage && getDataStorage();
  }, [data]);

  return (
    <StyledWrapperHistoryMemory transla={transla}>
      <StyledContainerDiv>
        <ArrayHeader />
        <ArrayHistory />
        <ResetHistory />
      </StyledContainerDiv>
    </StyledWrapperHistoryMemory>
  );
};

export default HistoryMemory;
