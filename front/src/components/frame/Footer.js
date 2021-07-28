import { Col, Row, Button } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer" sticky="bottom">
      <Row >
        <Col></Col>
        <Col style={{ fontSize: "14px" }}>
          <p>
            Política de copyright © 2021 - Todos los derechos de esta página web
            quedan reservados
          </p>
        </Col>
        <Col >
          <Button 
            variant="secondary"
            class="btn btn-primary btn-sm"
            style={{borderRadius: "50px", background:"grey", border:"solid"}}
            onClick={() => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0; 
            }}
          >
            UP
          </Button>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
