import { useState } from "react";
import Axios from "axios";
import { Row, Form, Col, Button, Container } from "react-bootstrap";

function Registro() {
  const [inputEmail, setinputEmail] = useState("");
  const [inputPassword, setinputPassword] = useState("");
  const [inputNombre, setinputNombre] = useState("");
  const [inputApellido1, setinputApellido1] = useState("");
  const [inputApellido2, setinputApellido2] = useState("");
  const [inputDni, setinputDni] = useState("");
  const [inputTelefono, setinputTelefono] = useState("");
  const [feedback, setFeedback] = useState("")
  
  const registrar = () => {
    Axios({
      method: "POST",
      data: {
        email: inputEmail,
        password: inputPassword,
        nombre: inputNombre,
        apellido1: inputApellido1,
        apellido2: inputApellido2,
        dni: inputDni,
        telefono: inputTelefono,
      },
      withCredentials: true,
      url: `${process.env.REACT_APP_API_URL}/users/signup`,
    }).then((res) => console.log(res));
  };

  return (
    <>
      <Container>
        <Row></Row>
        <Row>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setinputEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setinputPassword(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  placeholder="Nombre"
                  onChange={(e) => setinputNombre(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Primer apellido</Form.Label>
                <Form.Control
                  placeholder="Primer Apellido"
                  onChange={(e) => setinputApellido1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Segundo apellido</Form.Label>
                <Form.Control
                  placeholder="Segundo Apellido"
                  onChange={(e) => setinputApellido2(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>DNI/NIE/PASAPORTE</Form.Label>
                <Form.Control
                  placeholder="DNI/NIE/PASAPORTE"
                  onChange={(e) => setinputDni(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  placeholder="Teléfono"
                  onChange={(e) => setinputTelefono(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit" onClick={()=>(registrar())}>
              Registrar
            </Button>
          </Form>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
}

export default Registro;
