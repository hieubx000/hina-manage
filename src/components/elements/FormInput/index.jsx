import React, { useState } from "react";
import { Form, Input, DatePicker } from "antd";
import styles from "./FormInput.module.scss";

export default function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, name, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={styles.formInput}>
      <label>{label}</label>
      <Form.Item name={name}>
        {inputProps.htmlTag === "input" && (
          <Input
            className={styles.formInput_input}
            placeholder={inputProps.placeholder}
            type={inputProps.type}
          />
        )}
        {/* {inputProps.htmlTag === "DatePicker" && (
          <DatePicker
            // className={styles.formInput_input}
            placeholder={inputProps.placeholder}
            // type={inputProps.type}
          />
        )} */}
      </Form.Item>
      {/* <span>{errorMessage}</span> */}
    </div>
  );
}
