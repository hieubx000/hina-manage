import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { auth, google } from "../../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import styles from "./SignIn.module.scss";

export default function SignIn() {
  const [isLogin, setIsLogin] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const login = async (provider) => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);

    setIsLogin(true);
  };
  const logout = async () => {
    const res = await signOut(auth);
    setIsLogin(false);
  };

  return (
    <div className={styles.container}>
      <div>
        <img
          style={{ width: "60vw", height: "100vh" }}
          src="/assets/images/auth/img_login.jpg"
          alt=""
        />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <img
          style={{ width: "200px", height: "200px" }}
          src="/assets/icons/logo.svg"
          alt=""
        />
        <div style={{ margin: "50px 0", fontSize: "50px", fontWeight: "bold" }}>
          HINA HOSPITAL
        </div>
        <Form
          style={{
            width: "100%",
            textAlign: "center",
          }}
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            // label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <input
              placeholder="Email"
              style={{
                border: "none",
                height: "50px",
                width: "80%",
                padding: "10px 15px",
                borderRadius: "20px",
                alignContent: "center",
              }}
            ></input>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <input
              type="password"
              placeholder="password"
              style={{
                border: "none",
                height: "50px",
                width: "80%",
                padding: "10px 15px",
                borderRadius: "20px",
              }}
            ></input>
          </Form.Item>
          <Form.Item>
            <button
              style={{
                backgroundColor: "black",
                color: "#fff",
                width: "80%",
                height: "44px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </button>
          </Form.Item>
          <h1>{isLogin ? "true" : "false"}</h1>
          <img
            onClick={() => login(google)}
            src="/assets/icons/auth/google.svg"
            style={{ width: "80px", height: "80px", cursor: "pointer" }}
            alt=""
          />
          <img
            onClick={() => login(google)}
            src="/assets/icons/auth/facebook.svg"
            style={{
              width: "80px",
              height: "80px",
              margin: "20px",
              cursor: "pointer",
            }}
            alt=""
          />
          <img
            onClick={() => login(google)}
            src="/assets/icons/auth/twitter.svg"
            style={{ width: "80px", height: "80px", cursor: "pointer" }}
            alt=""
          />
        </Form>
        <Button type="primary" htmlType="submit" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
