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
