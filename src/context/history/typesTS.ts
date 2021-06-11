import { Result } from "../shareTS";

export interface HistoryContextInterface {
  data: Array<Result> | [];
  setHistoryMemory: ({
    date,
    amount,
    exchangeRate,
    fromCurrency,
    toCurrency,
  }: Result) => void;
  resetData: () => void;
}
