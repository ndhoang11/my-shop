import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
const Auth = (props) => {
  // signin | signup
  const [currentScreen, setCurrentScreen] = useState("signin");
  return (
    <div>
      {/* modal account */}

      <div className="modal">
        <div className="modal__overlay" />
        <div className="modal__body">
          {currentScreen === "signin" && (
            <SignIn {...props} setCurrentScreen={setCurrentScreen} />
          )}
          {currentScreen === "signup" && (
            <SignUp {...props} setCurrentScreen={setCurrentScreen} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
