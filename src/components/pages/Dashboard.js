import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Navbar from "../ReactRouter/Navbar";
import { AuthContext } from "../store/AuthContext";
const Dashboard = () => {
  const { user, setUser, isLogedIn, setIsLoggedin } = useContext(AuthContext);
  console.log("this user", user);
  const [userDetails, setUserDetails] = useState("");
  const history = useHistory();
  useEffect(() => {
    const storage = localStorage.getItem("user");
    setUser(storage);
    if (!user) {
      history.replace("/signin");
    }
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Container>
          <div className='col-md-12 row'>
            <h2 className='col-md-8'>Welcome user</h2>
            <Button className='col-md-2 btn-success'>view profile</Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
