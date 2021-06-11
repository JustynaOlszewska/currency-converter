import { typeTask } from "../types";
import { InitialValueHistory } from "./HistoryState";

const { SET_HISTORY, RESET_DATA } = typeTask || {};

export type ActionsHistory =
  | {
      type: typeof SET_HISTORY;
      payload: {
        date: string;
        amount: number;
        exchangeRate: number;
        fromCurrency: string;
        toCurrency: string;
      };
    }
  | {
      type: typeof RESET_DATA;
    };

const HistoryReducer = (
  state: InitialValueHistory,
  action: ActionsHistory
): InitialValueHistory => {
  switch (action.type) {
    case SET_HISTORY:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case RESET_DATA:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

export default HistoryReducer;
