import { useEffect, useState } from "react";
import { Card, Row, Navbar } from "react-bootstrap";
import "@mdi/font/css/materialdesignicons.min.css";

function Bandas() {
  const [bandas, setBandas] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/bandas/bandas`)
      .then((res) => res.json())
      .then((datos) => {
        setBandas(datos);
      });
  }, []);
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  let respuesta = bandas.map((datos, index) => {
    return (
      <Row>
        <Card
          border="info"
          className="containerCard"
          style={{ width: "18rem", justifyContent: "space-between" }}
        >
          <Card.Img
            style={{ maxWidth: "100%" }}
            variant="top"
            src={datos.imagen}
          />

          <Card.Body>
            <Card.Title>{datos.nombreBanda}</Card.Title>
            <Card.Text>{datos.descripBanda}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Navbar.Brand onClick={() => openInNewTab(datos.links.spotify)}>
              <span style={{ fontSize: 30 }} className="mdi mdi-spotify" />
            </Navbar.Brand>
            <Navbar.Brand onClick={() => openInNewTab(datos.links.appleMusic)}>
              <span style={{ fontSize: 30 }} className="mdi mdi-apple" />
            </Navbar.Brand>
            <Navbar.Brand onClick={() => openInNewTab(datos.links.instagram)}>
              <span style={{ fontSize: 30 }} className="mdi mdi-instagram" />
            </Navbar.Brand>
            <Navbar.Brand onClick={() => openInNewTab(datos.links.facebook)}>
              <span style={{ fontSize: 30 }} className="mdi mdi-facebook" />
            </Navbar.Brand>
          </Card.Body>
        </Card>
      </Row>
    );
  });

  return <div className="container">{respuesta}</div>;
}

export default Bandas;
