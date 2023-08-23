import React, { useState } from "react";
import styles from "./Checkout.module.css";
import useForm from "../hooks/use-form";
const Checkout = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const {
    enteredValue: nameValue,
    enteredValueHandler: nameInputHandler,
    hasError: nameHasError,
    inputBlurHandler: nameBlurHandler,
    isTouched: nameTouched,
    resetInput: resetName,
  } = useForm((value) => value.trim() !== "");

  const nameChangeHandler = () => {};

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("submitting form with the following values", nameValue);
    resetName();
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={nameInputHandler}
          onBlur={nameBlurHandler}
          value={nameValue}
        />
      </div>
      {/* <div className={styles.control}>
        <label for="street">Street</label>
        <input type="" name="" value="" />
      </div>
      <div className={styles.control}>
        <label for="postal code">Postal Code</label>
        <input type="" name="" value="" />
      </div>
      <div className={styles.control}>
        <label for="postal code">Postal Code</label>
        <input type="text" name="" value="" />
      </div>
      <div className={styles.control}>
        <label for="city">City</label>
        <input type="text" name="" value="" />
      </div> */}
      <div>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
