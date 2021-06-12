import {
  useForm,
  SubmitHandler,
  Control,
  UseFormHandleSubmit,
  FieldError,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInput } from "../../components/organism/form/typesTS";
import { schema } from "../../components/organism/form/validation";
import { UseSubmitProps } from "./typesTS";

const useSubmit = (
  dataToScore: UseSubmitProps
): {
  control: Control<IFormInput>;
  handleSubmit: UseFormHandleSubmit<IFormInput>;
  amount?: FieldError;
  onSubmit: SubmitHandler<IFormInput>;
} => {
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
    if (!dataToScore.getExchangeRate) return;
    dataToScore.getExchangeRate(
      dataToScore.newFromCurrency,
      dataToScore.newToCurrency,
      Number(amount)
    );
  };
  return { control, handleSubmit, amount, onSubmit };
};

export default useSubmit;
