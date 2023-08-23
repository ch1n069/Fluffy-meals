import React, { useState } from "react";
const useForm = () => {
  // accept a function that will be used to check the validity of the entered input
  //return a form validity status
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredValueHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  //
  const formValidity = enteredValue.trim() !== "" && !isTouched;
  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };
  const resetInput = () => {
    setEnteredValue("");
  };
  const hasError = formValidity;
  return {
    enteredValueHandler,
    inputBlurHandler,
    resetInput,
    enteredValue,
    isTouched,
    hasError,
    formIsValid,
  };
};
export default useForm;
