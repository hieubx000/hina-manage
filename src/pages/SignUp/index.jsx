import { Form } from "antd";
import React, { useState } from "react";
import FormInput from "../../components/elements/FormInput";
import styles from "./SignUp.module.scss";

export default function SignUp() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      htmlTag: "input",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      htmlTag: "input",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      htmlTag: "input",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      htmlTag: "input",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      htmlTag: "input",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className={styles.app}>
      <Form
        className={styles.boxForm}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <img
          className={styles.boxForm_img}
          // style={{ width: "50vw", height: "80vh" }}
          src="/assets/images/auth/img_login.jpg"
          alt=""
        />
        <div className={styles.boxForm_form}>
          <h1>Đăng ký</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              name={input.name}
              value={values[input.name]}
              // onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </div>
      </Form>
    </div>
  );
}
