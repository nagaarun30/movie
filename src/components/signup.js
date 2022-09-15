import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import Button, { OutlineButton } from './button/Button';
import logo from '../assets/tmovie.png';
import '../login.scss';
const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="form">
      <div className="logo3">
        <img src={logo} alt="" />
        
      </div>
      <div className="logo2">
        
        <h3>AniView</h3>
      </div>  
      <h2> New User</h2>
      <form onSubmit={onSubmit}>
        <input className="input1" placeholder="Email" type="email" ref={emailRef} />
        <input className="input1" placeholder="Name" type="name" ref={nameRef} />
        <input className="input1" placeholder="Password" type="password" ref={psdRef} />
        <Button className="button1" type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Signup;