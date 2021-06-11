import React, { useReducer } from "react";
import { typeTask } from "../types";
import HistoryContext from "./historyContext";
import HistoryReducer from "./historyReducer";
import { ActionsHistory } from "./historyReducer";
const { SET_HISTORY, RESET_DATA } = typeTask || {};

export type InitialValueHistory = {
  data:
    | {
        date: string;
        amount: number;
        exchangeRate: number;
        fromCurrency: string;
        toCurrency: string;
      }[]
    | [];
};

const HistoryState: React.FC = ({ children }: any) => {
  const initialState: InitialValueHistory = {
    data: [],
  };

  const [state, dispatch] = useReducer<
    React.Reducer<InitialValueHistory, ActionsHistory>
  >(HistoryReducer, initialState);

  const setHistoryMemory = (
    date: string,
    amount: number,
    exchangeRate: number,
    fromCurrency: string,
    toCurrency: string
  ): void => {
    const objHistory = { date, amount, exchangeRate, fromCurrency, toCurrency };

    dispatch({
      type: SET_HISTORY,
      payload: objHistory,
    });
  };
  const resetData = (): void => {
    dispatch({
      type: RESET_DATA,
    });
  };
  return (
    <HistoryContext.Provider
      value={{ data: state.data, setHistoryMemory, resetData }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
export default HistoryState;
