import React, { useState } from "react";
import Axios from "axios";
import { Form, Button, Container, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function Usuario(props) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [inputEmail, setinputEmail] = useState("");
  const [inputPassword, setinputPassword] = useState("");
  const [data, setData] = useState(null);
  const [feedback, setFeedback] = useState("");

  const login = () => {
    console.log("llamando");
    Axios({
      method: "POST",
      data: {
        email: loginEmail,
        password: loginPassword,
      },
      withCredentials: true,
      url: `${process.env.REACT_APP_API_URL}/users/login`,
    }).then((res) => {
      console.log(res);
      props.setUsuario(res.data);
    });
  };

  if (props.usuario.logged) {
    return <Redirect to="/" />;
  } else {
    return (
      <Container>
        <Row></Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button variant="primary" onClick={() => login()}>
                LOGIN
              </Button>
            </Form.Group>
          </Form>
        </Row>
        <Row></Row>
      </Container>
    );
  }
}

export default Usuario;
