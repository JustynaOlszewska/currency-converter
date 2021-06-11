import { typeTask } from "../types";
import { InitialValue, ActionsTasks } from "./typesTS";
const {
  GET_EXCHANGE_RATE,
  GET_CURRENCIES,
  GET_ERROR,
  SET_LOADING,
  REMOVE_EXCHANGE_RATE,
} = typeTask;

const TaskReducer = (
  state: InitialValue,
  action: ActionsTasks
): InitialValue => {
  switch (action.type) {
    case GET_EXCHANGE_RATE: {
      const { amount, payload } = action;
      return {
        ...state,
        exchangeRate: amount && Number((amount * payload).toFixed(2)),
        loading: false,
        amount: amount,
      };
    }
    case GET_CURRENCIES:
      return {
        ...state,
        allCurrencies: Object.keys(action.payload).sort(),
        loading: false,
      };
    case REMOVE_EXCHANGE_RATE:
      return {
        ...state,
        exchangeRate: null,
      };
    case GET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default TaskReducer;
