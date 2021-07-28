import { Card, Row, Container } from "react-bootstrap";

function About() {
  return (
    <>
      <Container>
        <Row></Row>
        <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img
          style={{maxWidth: "95%"}}
            variant="top"
            src={
              "https://lamelona.es/sello/wp-content/uploads/sites/2/2019/07/logo_melona-2.png"
            }
          />
          <Card.Body>
            <Card.Text>Contacta con La Melona</Card.Text>
            <Card.Text>patata@gmail.patata</Card.Text>
          </Card.Body>
        </Card>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
}

export default About;
