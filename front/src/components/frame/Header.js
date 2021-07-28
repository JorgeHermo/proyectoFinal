import axios from "axios";
import { Navbar, Nav, Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(props) {
  const logout = () => {
    axios({
      method: "POST",
      withCredentials: true,
      url: `${process.env.REACT_APP_API_URL}/users/logout`,
    }).then((res) => {
      props.setUsuario({});
    });
  };
  return (
    <>
      <header>
        <Navbar bg="light" variant="light">
          <Navbar.Brand as={Link} to="/">
            Inicio
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Bandas">
              BANDAS
            </Nav.Link>
            <Nav.Link as={Link} to="/Tienda">
              TIENDA
            </Nav.Link>
            <Nav.Link as={Link} to="/Noticias">
              NOTICIAS
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              ABOUT
            </Nav.Link>
          </Nav>
          <Col></Col>
          {props.usuario.logged ? (
            <Form inline>
              <Button
                style={{ margin: 10 }}
                size="sm"
                variant="outline-primary"
                onClick={()=> logout()}
              >
                LogOut
              </Button>
            </Form>
          ) : (
            <Form inline>
              <Button
                style={{ margin: 10 }}
                size="sm"
                variant="outline-primary"
                as={Link}
                to="/Usuario"
              >
                Login
              </Button>
              <Button
                style={{ margin: 10 }}
                size="sm"
                variant="outline-primary"
                as={Link}
                to="/Registro"
              >
                Registro
              </Button>
            </Form>
          )}
        </Navbar>
      </header>
    </>
  );
}

export default Header;
