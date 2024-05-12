import LoginForm from '../components/LoginForm';
import React from 'react'
import styles from './style.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function LoginPage() {
  return (
    <div className={cx("main-context")}>
    <LoginForm/>
    </div>
  )
}

export default LoginPage