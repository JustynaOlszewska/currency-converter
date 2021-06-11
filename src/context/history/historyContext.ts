import { createContext } from "react";
// import {HistoryContextInterface} from "./typesTS";
interface HistoryContextInterface {
  data:
    | {
        date: string;
        amount: number;
        exchangeRate: number;
        fromCurrency: string;
        toCurrency: string;
      }[]
    | [];
  setHistoryMemory: (
    date: string,
    amount: number,
    exchangeRate: number,
    fromCurrency: string,
    toCurrency: string
  ) => void;
  resetData: () => void;
}
const historyContext = createContext<HistoryContextInterface | null>(null);
export default historyContext;
