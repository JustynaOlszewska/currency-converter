import React, { useContext } from "react";
import { Controller } from "react-hook-form";
import InputAdornment from "@material-ui/core/InputAdornment";
import TaskContext from "../../../context/tasks/taskContext";
import { NumberInputsProps } from "./typesTS";
import {
  StyledInput,
  StyledInputAdornment,
  StyledFormHelperText,
} from "../../../styles/styleComponents/StyledNumberInputs";

const NumberInputs: React.FC<NumberInputsProps> = ({
  control,
  amount,
  newFromCurrency,
  newToCurrency,
  currency,
}: NumberInputsProps) => {
  const taskContext = useContext(TaskContext);
  const { removeExchangeRate, exchangeRate } = taskContext || {};

  const handleClick = (e: React.FocusEvent<any>): void => {
    const value = e.target.value;
    if (!removeExchangeRate) return;
    value && removeExchangeRate();
  };
  return (
    <>
      <Controller
        name="amount"
        control={control}
        defaultValue=""
        render={({ field }) => {
          return (
            <>
              <StyledInput
                {...field}
                col={amount && "error"}
                onClick={handleClick}
                type="text"
                placeholder="Wpisz kwotę"
                inputProps={{ min: 0, maxLength: 5 }}
                endAdornment={
                  <StyledInputAdornment col={amount && "error"} position="end">
                    <p>{newFromCurrency || currency || ""}</p>
                  </StyledInputAdornment>
                }
                id="standard-basic"
              />
              <StyledFormHelperText col={amount && "error"}>
                {amount && "Nieprawidłowa wartość"}
              </StyledFormHelperText>
            </>
          );
        }}
      />
      <Controller
        name="score"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <StyledInput
              {...field}
              type={exchangeRate ? "number" : "text"}
              readOnly
              placeholder={`${exchangeRate !== null ? exchangeRate : "Wynik"}`}
              endAdornment={
                <InputAdornment position="end">
                  {newToCurrency || currency || ""}
                </InputAdornment>
              }
              id="standard-basic"
            />
          </>
        )}
      />
    </>
  );
};

export default NumberInputs;
