import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setisTouched] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);
  const isValidValue = !enteredValueIsValid && isTouched;

  const EnterdInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const reset = () => {
    setEnteredValue("");
    setisTouched(false);
  };

  const EnteredInputBlurHandler = () => {
    setisTouched(true);
  };

  return {
    enteredValue,
    isValidValue,
    EnterdInputChangeHandler,
    EnteredInputBlurHandler,
    enteredValueIsValid,
    reset
  };
};
export default useInput;
