import { typeTask } from "../types";

const {
  GET_EXCHANGE_RATE,
  GET_CURRENCIES,
  GET_ERROR,
  SET_LOADING,
  REMOVE_EXCHANGE_RATE,
} = typeTask;

export interface TaskContextInterface extends InitialValue {
  getExchangeRate: (
    fromCurrency: string,
    toCurrency: string,
    amount: number
  ) => void;
  getCurrencies: () => void;
  removeExchangeRate: () => void;
}

export interface InitialValue {
  exchangeRate: number | null;
  error?: string;
  loading: boolean;
  allCurrencies: null | Array<string>;
  amount: number | null;
}

export type ActionsTasks =
  | {
      type: typeof GET_EXCHANGE_RATE;
      payload: number;
      amount: number | null;
    }
  | {
      type: typeof GET_ERROR;
      payload?: string;
    }
  | {
      type: typeof SET_LOADING;
    }
  | {
      type: typeof GET_CURRENCIES;
      payload: string;
    }
  | {
      type: typeof REMOVE_EXCHANGE_RATE;
    };
