import React, { useState } from "react";
const useForm = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredValueHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };
  const resetInput = () => {
    setEnteredValue("");
  };
};
export default useForm;
