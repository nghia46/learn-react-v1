import React, { useState } from "react";
import styles from "./style.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LoginForm = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={cx("login-card")}>
      <div className={cx("login-card-title")}>Login</div>
      <form className={cx("login-form")} onSubmit={handleSubmit}>
        <div className={cx("login-input")}>
          <input
            type="email"
            value={email}
            placeholder="email..."
            onChange={handleEmailChange}
          />
        </div>
        <div className={cx("login-input")}>
          <input
            type="password"
            value={password}
            placeholder="password..."
            onChange={handlePasswordChange}
          />
        </div>
        <button className={cx("login-button")} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
