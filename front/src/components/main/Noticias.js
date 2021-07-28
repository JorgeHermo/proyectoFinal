import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/noticias/noticias`)
      .then((res) => res.json())
      .then((datos) => {
        setNoticias(datos);
      });
  }, []);

  let respuesta = noticias.map((datos, index) => {
    return (
      <Card border="info" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={datos.imagen} />
        <Card.Body>
          <Card.Title>{datos.tituloNoticia}</Card.Title>
          <Card.Text>{datos.contenidoNoticia}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return <div className="container">{respuesta}</div>;
}
export default Noticias;
