import * as yup from "yup";

export const schema = yup.object().shape({
  amount: yup.number().positive().required(),
  fromCurrency: yup.string(),
  toCurrency: yup.string(),
});
