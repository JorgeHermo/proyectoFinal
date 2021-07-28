import { Carousel } from "react-bootstrap";

function Inicio() {
  return (
    <Carousel className="carousel" variant="dark" fade="true" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lamelona.es/wp-content/uploads/2020/02/588f7dbe-a4f4-4334-a247-bb76a9321118.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lamelona.es/wp-content/uploads/2020/02/Slider-Inicio.jpg
              "
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lamelona.es/sello/wp-content/uploads/sites/2/2020/02/Foto-Seda-Slider.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Inicio;
