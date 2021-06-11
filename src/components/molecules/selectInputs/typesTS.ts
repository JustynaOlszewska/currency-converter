import { Contr } from "../../../shareTS";
export interface SelectInputsProps {
  control: Contr;
  setNewToCurrency: (value: string) => void;
  setNewFromCurrency: (value: string) => void;
}
