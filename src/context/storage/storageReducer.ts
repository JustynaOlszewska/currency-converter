import { typeTask } from "../types";
import { InitialValueStorage, ActionsStorage } from "./typesTS";

const { GET_STORAGE, REMOVE_STORAGE } = typeTask || {};

const HistoryReducer = (
  state: InitialValueStorage,
  action: ActionsStorage
): InitialValueStorage => {
  switch (action.type) {
    case GET_STORAGE:
      return {
        ...state,
        dataStorage: action.payload,
      };
    case REMOVE_STORAGE:
      return {
        ...state,
        dataStorage: [],
      };
    default:
      return state;
  }
};

export default HistoryReducer;
