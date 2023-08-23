import React, { useState } from "react";
const useForm = (validateValue) => {
  // accept a function that will be used to check the validity of the entered input
  //return a form validity status
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredValueHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  //
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  //   blur function
  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };
  const resetInput = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    enteredValueHandler,
    inputBlurHandler,
    resetInput,
    enteredValue,
    // isTouched,
    hasError,
    formIsValid,
  };
};
export default useForm;
