import React, { useContext, useEffect, useState, lazy } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TaskContext from "../../../context/tasks/taskContext";
import HistoryContext from "../../../context/history/historyContext";
import { currentDate } from "../../../utilities";
import { IFormInput } from "./typesTS";
import {
  StyledH1,
  StyledWrapperSectionForm,
  StyledForm,
} from "../../../styles/styleComponents/StyledForm";
import { schema } from "./validation";
const Button = lazy(() => import("../../atoms/button/Button"));
const SelectInputs = lazy(
  () => import("../../molecules/selectInputs/SelectInputs")
);
const NumberInputs = lazy(
  () => import("../../molecules/numberInputs/NumberInputs")
);

const Form: React.FC = () => {
  const taskContext = useContext(TaskContext);
  const historyContext = useContext(HistoryContext);

  const {
    exchangeRate,
    allCurrencies,
    amount: amountToHistory,
    getCurrencies,
    getExchangeRate,
  } = taskContext || {};

  const currency = allCurrencies?.find((currency, index, array) => array[0]);

  const { setHistoryMemory } = historyContext || {};

  const [newFromCurrency, setNewFromCurrency] = useState<string>("");
  const [newToCurrency, setNewToCurrency] = useState<string>("");

  useEffect((): void => {
    if (!getCurrencies) return;
    getCurrencies();
  }, []);

  useEffect((): void => {
    if (!exchangeRate || !setHistoryMemory || !amountToHistory) return;
    setHistoryMemory(
      currentDate(),
      amountToHistory,
      exchangeRate,
      newFromCurrency,
      newToCurrency
    );
  }, [exchangeRate]);

  useEffect((): void => {
    if (!currency) return;
    setNewFromCurrency(currency);
    setNewToCurrency(currency);
  }, [currency]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const { amount } = errors || {};

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { amount } = data;
    if (!getExchangeRate) return;
    getExchangeRate(newFromCurrency, newToCurrency, Number(amount));
  };

  return (
    <StyledWrapperSectionForm>
      <StyledH1>Konwerter walut</StyledH1>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <NumberInputs
          currency={currency}
          control={control}
          newToCurrency={newToCurrency}
          newFromCurrency={newFromCurrency}
          amount={amount}
        />
        <SelectInputs
          control={control}
          setNewFromCurrency={setNewFromCurrency}
          setNewToCurrency={setNewToCurrency}
        />
        <Button />
      </StyledForm>
    </StyledWrapperSectionForm>
  );
};

export default Form;
