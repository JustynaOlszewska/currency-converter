import React, { useReducer } from "react";
import TaskReducer from "./taskReducer";
import { InitialValue, ActionsTasks } from "./typesTS";
import TaskContext from "./taskContext";
import { typeTask } from "../types";
import { apiURL, apiKEY } from "./helperTask";

const {
  GET_EXCHANGE_RATE,
  GET_CURRENCIES,
  GET_ERROR,
  SET_LOADING,
  REMOVE_EXCHANGE_RATE,
} = typeTask;

const TaskState: React.FC = ({ children }: any) => {
  const initialState: InitialValue = {
    exchangeRate: null,
    error: "",
    loading: false,
    allCurrencies: null,
    amount: null,
  };

  const [state, dispatch] = useReducer<
    React.Reducer<InitialValue, ActionsTasks>
  >(TaskReducer, initialState);

  const apiActions = async (
    url: string,
    curriencies: string | null,
    type: any,
    amount: number | null
  ): Promise<void> => {
    try {
      setLoading();
      const res = await fetch(url);
      const data = await res.json();
      const copyData = curriencies && data[curriencies];

      dispatch({
        type: type,
        payload: curriencies ? copyData : data.results,
        amount: amount && amount,
      });
    } catch (error) {
      dispatch({
        type: GET_ERROR,
        payload: error,
      });
    }
  };

  const getExchangeRate = (
    fromCurrency: string,
    toCurrency: string,
    amount: number
  ): void => {
    apiActions(
      `${apiURL}convert?q=${fromCurrency}_${toCurrency}&compact=ultra&${apiKEY}`,
      `${fromCurrency}_${toCurrency}`,
      GET_EXCHANGE_RATE,
      amount
    );
  };

  const getCurrencies = (): void => {
    apiActions(`${apiURL}currencies?${apiKEY}`, null, GET_CURRENCIES, null);
  };

  const removeExchangeRate = (): void => {
    dispatch({
      type: REMOVE_EXCHANGE_RATE,
    });
  };

  const setLoading = (): void => dispatch({ type: SET_LOADING });

  return (
    <TaskContext.Provider
      value={{
        allCurrencies: state.allCurrencies,
        exchangeRate: state.exchangeRate,
        loading: state.loading,
        amount: state.amount,
        getExchangeRate,
        getCurrencies,
        removeExchangeRate,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
export default TaskState;
