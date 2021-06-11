import React, { useReducer } from "react";
import StorageReducer from "./storageReducer";
import StorageContext from "./storageContext";
import { typeTask } from "../types";
import { InitialValueStorage, ActionsStorage } from "./typesTS";

const { GET_STORAGE, REMOVE_STORAGE } = typeTask;

const StorageState: React.FC = ({ children }: any) => {
  const initialState: InitialValueStorage = {
    dataStorage: null,
  };

  const [state, dispatch] = useReducer<
    React.Reducer<InitialValueStorage, ActionsStorage>
  >(StorageReducer, initialState);

  const getDataStorage = () => {
    const newData = localStorage.getItem("arrayHistory");
    if (!newData) return;
    dispatch({
      type: GET_STORAGE,
      payload: JSON.parse(newData),
    });
  };

  const removeStorage = () => {
    localStorage.removeItem("arrayHistory");
    dispatch({
      type: REMOVE_STORAGE,
    });
  };

  return (
    <StorageContext.Provider
      value={{
        dataStorage: state.dataStorage,
        getDataStorage,
        removeStorage,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageState;
