import React, { useContext, lazy } from "react";
import { Controller } from "react-hook-form";
import TaskContext from "../../../context/tasks/taskContext";
import { SelectInputsProps } from "./typesTS";
import {
  StyledSelectsWrapper,
  StyledNativeSelect,
} from "../../../styles/styleComponents/StyledSelectInputs";
const SvgArrow = lazy(() => import("../../atoms/svgArrow/SvgArrow"));

const SelectInputs: React.FC<SelectInputsProps> = ({
  control,
  setNewFromCurrency,
  setNewToCurrency,
}: SelectInputsProps) => {
  const taskContext = useContext(TaskContext);
  const { allCurrencies } = taskContext || {};

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const name = event.target.name;
    const value = event.target.value;
    name === "fromCurrency"
      ? setNewFromCurrency(value)
      : setNewToCurrency(value);
  };

  return (
    <StyledSelectsWrapper>
      <Controller
        name="fromCurrency"
        control={control}
        render={({ field }) => (
          <StyledNativeSelect {...field} onChange={handleChange}>
            {allCurrencies?.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </StyledNativeSelect>
        )}
      />
      <SvgArrow view="true">
        <path
          className="b"
          transform="rotate(180 12 12) translate(4, 5)"
          d="M16.01,11H4v2H16.01v3L20,12,16.01,8Z"
        />
      </SvgArrow>
      <Controller
        name="toCurrency"
        control={control}
        render={({ field }) => (
          <StyledNativeSelect {...field} onChange={handleChange}>
            {allCurrencies?.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </StyledNativeSelect>
        )}
      />
    </StyledSelectsWrapper>
  );
};

export default SelectInputs;
