/* import logo from "./logo.svg"; */
import "./App.css";
import {
  Header,
  Footer,
  Bandas,
  Registro,
  About,
  Tienda,
  Usuario,
  Inicio,
  Noticias,
} from "./components";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
  const [usuario, setUsuario] = useState({});

  return (
    <BrowserRouter>
      <Header usuario={usuario} setUsuario={setUsuario}/>
      <Route exact path="/">
        <Inicio />
      </Route>
      <Route exact path="/Bandas">
        <Bandas />
      </Route>
      <Route exact path="/Tienda">
        <Tienda />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="/Registro">
        <Registro />
      </Route>
      <Route exact path="/Usuario">
        <Usuario setUsuario={setUsuario} usuario={usuario}/>
      </Route>
      <Route exact path="/Noticias">
        <Noticias />
      </Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
