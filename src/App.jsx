//import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import FormData from "./components/FormData";
import DataTable from "./components/DataTable";

import "./App.css";
import { useState } from "react";
const App = () => {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  return (
    <div className="container justify-content-center">
      <div className="row text-center">
        <div className="col-12">
          <h3 style={{ marginLeft: "260px" }}>CRUD React & SpringBoot</h3>
        </div>
      </div>
      <div className="row mt-4 text-center">
        <div className="col-8 mt-4" style={{ marginLeft: "60px" }}>
          <DataTable onSelectUser={setUsuarioSeleccionado} />
        </div>
        <div className="col-2 mt-5 text-center">
          <FormData usuarioSeleccionado={usuarioSeleccionado} />
        </div>
      </div>
    </div>
  );
};

export default App;

/* import { useState } from "react";

const App = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const realizarOperacion = async (operacion) => {
    try {
      setError(null); // Reiniciar el estado de error antes de cada solicitud

      // Validar entradas
      if (a === "" || b === "") {
        throw new Error("Por favor, ingrese ambos números.");
      }

      const response = await fetch(
        `http://localhost:8080/calculadora/${operacion}?a=${parseInt(
          a
        )}&b=${parseInt(b)}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error desconocido");
      }

      const data = await response.json();
      setResultado(data);
    } catch (error) {
      setResultado(null); // Reiniciar el resultado si ocurre un error
      setError(error.message || "Ocurrió un error");
    }
  };

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div>
        <label>Numero A:</label>
        <input
          type="number"
          value={a}
          onChange={(e) =>
            setA(e.target.value === "" ? "" : parseInt(e.target.value))
          }
        />
        <label>Numero B:</label>
        <input
          type="number"
          value={b}
          onChange={(e) =>
            setB(e.target.value === "" ? "" : parseInt(e.target.value))
          }
        />
      </div>
      <div>
        <button onClick={() => realizarOperacion("sumar")}>Sumar</button>
        <button onClick={() => realizarOperacion("restar")}>Restar</button>
        <button onClick={() => realizarOperacion("multiplicar")}>
          Multiplicar
        </button>
        <button onClick={() => realizarOperacion("dividir")}>Dividir</button>
      </div>
      {error && <h2 style={{ color: "red" }}>Error: {error}</h2>}
      {resultado !== null && <h2>Resultado: {resultado}</h2>}
    </div>
  );
};

export default App;
 */
