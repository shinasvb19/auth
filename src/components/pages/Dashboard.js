import React, { useContext, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Navbar from "../ReactRouter/Navbar";
import { AuthContext } from "../store/AuthContext";
const Dashboard = () => {
  const { user, SetUser, isLogedIn, setIsLoggedin } = useContext(AuthContext);
  // console.log(user);
  const history = useHistory();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setIsLoggedin(true);
    }
    // if (isLogedIn === false) {
    //   history.push("/signin");
    // }
  }, [isLogedIn]);

  return (
    <>
      <div>
        <Navbar />
        <Container>
          <div className='col-md-12 row'>
            <h2 className='col-md-8   '>Welcome user</h2>
            <Button className='col-md-2 btn-success'>view profile</Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
