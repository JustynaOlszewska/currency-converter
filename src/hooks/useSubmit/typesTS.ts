export interface UseSubmitProps {
  getExchangeRate:
    | ((fromCurrency: string, toCurrency: string, amount: number) => void)
    | undefined;
  newFromCurrency: string;
  newToCurrency: string;
}
