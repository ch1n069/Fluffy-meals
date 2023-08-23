import React from "react";
import styles from "./Checkout.module.css";
const Checkout = (props) => {
  const submitFormHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <div className={styles.control}>
        <label for="name">Name</label>
        <input type="text" name="" value="" />
      </div>
      <div className={styles.control}>
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
      </div>
      <div>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button onClick={{}}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
