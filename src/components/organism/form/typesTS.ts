export interface ThemeProps {
  input: {
    color: string;
    borderBottom: string;
  };
  before: {
    backgroundColor: string;
  };
  after: {
    color: string;
    backgroundColor: string;
  };
}

export type IFormInput = {
  amount: string;
  score: string;
  fromCurrency: string;
  toCurrency: string;
};
