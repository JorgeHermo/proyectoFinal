import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

function Tienda() {
  const [tienda, setTienda] = useState([]);
  const [contador, setContador] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [sumaArticulo, setsumaArticulo] = useState(1);
  const [restaArticulo, setrestaArticulo] = useState(1);

  function mostrarCarrito() {
    let cesta = tienda.filter((articulo) =>
      carrito.includes(articulo.idArticulo)
    );
    let cestita = cesta.map((datosCesta, index) => {
      return(
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={datosCesta.imagen} />
        <Card.Body>
          <Card.Title>{datosCesta.nombreArticulo}</Card.Title>
          <Card.Text>talla s:{datosCesta.tallaArticulo.s}</Card.Text>
          <Card.Text>{datosCesta.precioArticulo}</Card.Text>

        </Card.Body>
      </Card>
      )
    });
  }
  function contadorCesta(idArticulo, orden) {
    let contador2 = contador;
    for (let i = 0; i <= contador2.length; i++) {
      if (contador2[i].idArticulo === idArticulo) {
        if(orden === "+"){
          contador2[i].cantidad += 1
        }else if (orden === "-"){
          contador2[i].cantidad -= 1
        }
      }
    }setContador(contador2)
  }

  function guardarCarrito(idArticulo, tallaArticulo) {
    let array = [...carrito];
    array.push({ idArticulo: idArticulo, cantidad:1, tallaArticulo: tallaArticulo});
    setCarrito(array);
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/tienda/tienda`)
      .then((res) => res.json())
      .then((datos) => {
        setTienda(datos);
      });
  }, []);
  let respuesta = tienda.map((datos, index) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={datos.imagen} />
        <Card.Body>
          <Card.Title>{datos.nombreArticulo}</Card.Title>
          <Card.Text>talla xs:{datos.tallaArticulo.xs}</Card.Text>
          <Card.Text>{datos.precioArticulo}</Card.Text>
          <Button onClick={() => guardarCarrito(datos.idArticulo)}>añadir</Button>
        </Card.Body>
      </Card>
    );
  });
  return <div className="container">{respuesta}</div>;
}

export default Tienda;
/* "http://localhost:3000/tienda" */
