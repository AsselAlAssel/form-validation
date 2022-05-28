import { useState } from "react";

const useInputNew = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const doseEnterdValueValid = validateValue(enteredValue);
  const doseEnteredValueHasError = !doseEnterdValueValid && isTouched;

  const enteredValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const isTouchedChangeHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    enteredValue,
    doseEnteredValueHasError,
    doseEnterdValueValid,
    enteredValueChangeHandler,
    isTouchedChangeHandler,
    reset
  };
};

export default useInputNew;
