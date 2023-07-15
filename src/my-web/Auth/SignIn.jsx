import React, { useState } from "react";

const SignIn = (props) => {
  const onSwitchToSignUpScreen = () => {
    props.setCurrentScreen("signup");
  };

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const login = () => {
    if (!userName) {
      alert("You have not entered username ");
    } else if (!password) {
      alert("You have not entered password");
    } else alert("login successfully ");
  };
  return (
    <div className="auth-form-login ">
      <div className="close-auth" onClick={() => props.setOn(false)}>
        <i class="fa-solid fa-xmark"></i>
      </div>

      <div className="auth-form__container">
        <div className="auth-form__header">
          <h3 className="auth-form__heading">Đăng nhập</h3>
          <span
            className="auth-form__switch-btn"
            onClick={onSwitchToSignUpScreen}
          >
            Đăng ký
          </span>
        </div>
        <div className="auth-form__form">
          <div className="auth-form__group">
            <label htmlFor className="auth-form__label">
              Email or username
            </label>
            <input
              type="text"
              className="auth-form__input"
              placeholder="Email or username"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className="auth-form__group">
            <label htmlFor className="auth-form__label">
              Password
            </label>
            <input
              type="text"
              className="auth-form__input"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="auth-form__help">
          <a href className="auth-form__help-link auth-form__help-forgot">
            Forgot password
          </a>
          <span className="auth-form__help-separate" />
          <a href className="auth-form__help-link auth-form__help-help">
            Help ?{" "}
          </a>
        </div>
        <div className="auth-form__controls">
          <button className="btn auth-form__control-back btn--normal">
            TRỞ LẠI
          </button>
          <button className="btn btn--primaky" onClick={login}>
            ĐĂNG nhập
          </button>
        </div>
      </div>
      <div className="auth-form__socials">
        <a
          href="https://www.facebook.com/"
          className="auth-form__socials--facebook btn btn--icon"
        >
          <i className="auth-form__socials-icon fa-brands fa-square-facebook" />
          <span className="auth-form__socials-title">
            {" "}
            Continue with facebook
          </span>
        </a>
        <a
          href="https://github.com/"
          className="auth-form__socials--google btn btn--icon"
        >
          <i className="auth-form__socials-icon fa-brands fa-github" />
          <span className="auth-form__socials-title">
            {" "}
            Continue with Github
          </span>
        </a>
      </div>
    </div>
  );
};

export default SignIn;
