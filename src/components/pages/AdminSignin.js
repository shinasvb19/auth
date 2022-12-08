import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import "./css/Signin.css";
const AdminSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogedIn, setIsLoggedin] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const admin = { email, password };
    const response = await axios.post(
      "http://localhost:5000/admin/signin",
      admin
    );

    localStorage.setItem("token", response.data.token);
    setIsLoggedin(true);
  };
  const history = useHistory();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (isLogedIn === true) {
      history.push("/admin");
    }
  }, [isLogedIn]);

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
          </form>
        </div>
      </div>
    </>
  );
};
export default AdminSignin;
