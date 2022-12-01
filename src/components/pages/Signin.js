import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import "./css/Signin.css";
import { computeHeadingLevel } from "@testing-library/react";

const Signin = () => {
  // const [user, setUser] = useState();
  const { user, setUser, isLoggedin, setIsLoggedin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const response = await axios.post("http://localhost:5000/signin", user);
    setUser(response.data);

    localStorage.setItem("user", response.data.token);
    setIsLoggedin(true);
    // console.log(response.data);
  };
  const history = useHistory();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
      console.log(isLoggedin);
      if (isLoggedin === true) {
        history.replace("/");
      }
    }
  }, [isLoggedin]);

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className='Signin'>
        <div className='Form'>
          <h1> Signin</h1>
          <form onSubmit={handleSubmit}>
            <input
              className='Forminput'
              type='text'
              placeholder='username'
              value={email}
              onChange={emailChange}></input>
            <input
              className='Forminput'
              type='text'
              placeholder='password'
              onChange={passwordChange}></input>
            <button
              className='Button'
              type='submit'>
              Signin
            </button>
            <span>craete an account</span>
            <Link to='/signup'>Signup </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
