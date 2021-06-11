import { FieldError } from "react-hook-form";
import { Contr } from "../../../shareTS";
export interface NumberInputsProps {
  control: Contr;
  amount?: FieldError;
  newFromCurrency: string;
  newToCurrency: string;
  currency?: string;
}
