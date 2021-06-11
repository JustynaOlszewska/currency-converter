import React, { useContext } from "react";
import StorageContext from "../../../context/storage/storageContext";
import HistoryContext from "../../../context/history/historyContext";
import { StyledReset } from "../../../styles/styleComponents/StyledResetHistory";

const ResetHistory: React.FC = () => {
  const storageContext = useContext(StorageContext);
  const { removeStorage } = storageContext || {};

  const historyContext = useContext(HistoryContext);
  const { resetData } = historyContext || {};

  const handleClickReset = () => {
    removeStorage && removeStorage();
    resetData && resetData();
  };
  return <StyledReset onClick={handleClickReset}>Wyczyść historię</StyledReset>;
};

export default ResetHistory;
