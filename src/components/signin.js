import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import Button, { OutlineButton } from './button/Button';
import '../login.scss';
import logo from '../assets/tmovie.png';
const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <>  
    <div className="logo3">
        <img src={logo} alt="" />
        
      </div>
      <div className="logo2">
         <h3>Moview</h3>
      </div>  
    <div className="form">
      
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        <input className="input1" placeholder="Email" type="email" ref={emailRef} />
        <input className="input1" placeholder="Password" type="password" ref={psdRef} />
        <Button className="button1" type="submit">Sign In</Button>
        <h3 onClick={forgotPasswordHandler}>Forgot Password?</h3>
      </form>
    </div>
   </> 
    
  );
};

export default Signin;