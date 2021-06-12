import { IFormInput } from "../../components/organism/form/typesTS";
export interface UseSubmitProps {
  getExchangeRate:
    | ((fromCurrency: string, toCurrency: string, amount: number) => void)
    | undefined;
  newFromCurrency: string;
  newToCurrency: string;
}
