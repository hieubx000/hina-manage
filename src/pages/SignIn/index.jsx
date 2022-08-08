import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { auth, google } from "../../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import styles from "./SignIn.module.scss";
import { localStorageConstant } from "../../constant/localStorage";
import { useNavigate } from "react-router-dom";
import { rootPath } from "../../helpers/buildUrl";
import FormInput from "../../components/elements/FormInput";

export default function SignIn() {
  const [isLogin, setIsLogin] = useState(false);
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const login = async (provider) => {
    const result = await signInWithPopup(auth, provider);
    const userCurrent = {
      displayName: result.user.displayName,
      photoURL: result.user.photoURL,
      email: result.user.email,
    };
    localStorage.setItem(
      localStorageConstant.userCurrent,
      JSON.stringify(userCurrent)
    );
    localStorage.setItem(localStorageConstant.token, result.user.accessToken);
    navigate(rootPath.home);
    setIsLogin(true);
  };

  const inputs = [
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
  ];

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
          <h1>Đăng nhập</h1>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} name={input.name} />
          ))}
          <button>Submit</button>
          <div>
            <img
              onClick={() => login(google)}
              src="/assets/icons/auth/google.svg"
              className={styles.boxForm_form_iconSocial}
              alt=""
            />
            <img
              onClick={() => login(google)}
              src="/assets/icons/auth/facebook.svg"
              className={styles.boxForm_form_iconSocial}
              alt=""
            />
            <img
              onClick={() => login(google)}
              src="/assets/icons/auth/twitter.svg"
              className={styles.boxForm_form_iconSocial}
              alt=""
            />
          </div>
          <span>
            Bạn chưa có tài khoản?{" "}
            <span>
              <Link to="/signup">Đăng ký ngay</Link>
            </span>
          </span>
        </div>
      </Form>
    </div>
  );
}
