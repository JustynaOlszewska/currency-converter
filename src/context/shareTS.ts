export interface FromForm {
  fromCurrency: string;
  toCurrency: string;
  amount: number;
}
export interface Result extends FromForm {
  date: string;
  exchangeRate: number;
}
