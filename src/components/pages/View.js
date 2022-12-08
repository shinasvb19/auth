import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import Navbar from "../ReactRouter/AdminNavbar";
const View = () => {
  const [user, setUser] = useState("");
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:5000/admin/view/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Custom-Header": `${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.user);
        setUser(data.user);
        if (data.errormsg) {
          history.push("/admin/signin");
        }
      });
  }, []);
  function backward() {
    history.push("/admin");
  }
  return (
    <>
      <Navbar />
      <Container className='text-center pt-5'>
        <Row>
          <h2 style={{ color: "Red" }}>USER DETAILS</h2>
          <h5>USER NAME:</h5>
          <h5>{user.name}</h5>
          <h5>USER EMAIL:</h5>
          <h5>{user.email}</h5>

          <Col>
            <Button
              variant='outline-info'
              onClick={backward}>
              Dashboard
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default View;
