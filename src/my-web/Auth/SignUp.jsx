import React, { useState } from "react";

const SignUp = (props) => {
    const onSwitchToSignInScreen = () => {
        props.setCurrentScreen('signin')
    }
  
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [passwordAgain, setPasswordAgain] = useState();
    const signUp = () => {
      if(!userName) {alert('You have not entered username')}
     else if(!password) {alert('You have not entered password')}
     else if(!passwordAgain) {alert('You have not entered passwordAgain')}
      else alert('Sign up successfully')
    }
  return (
    <div className="auth-form-register ">
      <div className="close-auth" onClick={() => props.setOn(false)}>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div className="auth-form__container">
        <div className="auth-form__header">
          <h3 className="auth-form__heading">Đăng ký</h3>
          <span className="auth-form__switch-btn" onClick={onSwitchToSignInScreen}>Đăng nhập</span>
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
              value = {userName}
              onChange={(e) => setUserName(e.target.value)}
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
              value = {password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="auth-form__group">
            <label htmlFor className="auth-form__label">
              Enter password again
            </label>
            <input
              type="text"
              className="auth-form__input"
              placeholder="Enter password again"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
            />
          </div>
        </div>
        <div className="auth-form__aside">
          <p className="auth-form__policy-text">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our
            <a href className="auth-form__policy-link">
              {" "}
              privacy policy
            </a>
            .
          </p>
        </div>
        <div className="auth-form__controls">
          <button className="btn auth-form__control-back btn--normal">
            TRỞ LẠI
          </button>
          <button className="btn btn--primaky" onClick={signUp}>ĐĂNG KÝ</button>
        </div>
      </div>
      <div className="auth-form__socials">
        <a
          href="https://www.facebook.com/?stype=lo&jlou=AfcoSqfdX76DgYuD4in2a23VO-T34v94Fn82qGewMg_wmWub5MXDeZQSFvv1JEUaZkIl90TnlIfS02pTWsdlpgVcEWbG1yNQKZHmnysTx_rCow&smuh=40981&lh=Ac_gdLeGWEMwJbijd-8"
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

export default SignUp;
