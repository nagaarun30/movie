import React, { useState } from "react";
import Signin from "./signin";
import { useUserContext } from "../context/userContext";
import Signup from "./signup";
import Button, { OutlineButton } from './button/Button';
const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  const { signInWithGoogle, signInWithGithub } = useUserContext();
  return (
    <div className="container1">
      {!index ? <Signin /> : <Signup />}
      
      <p onClick={toggleIndex}>
        {!index ? " New user? Click here ": "Already have an acount?"}
      </p>
    </div>
  );
};

export default Auth;
