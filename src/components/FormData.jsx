/* eslint-disable react/prop-types */
//import React from 'react'

import { useEffect, useState } from "react";

const FormData = ({ usuarioSeleccionado }) => {
  const [formData, setNewFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    domicilio: "",
  });

  useEffect(() => {
    if (usuarioSeleccionado) {
      setNewFormData(usuarioSeleccionado);
    } else {
      setNewFormData({
        id: "",
        nombre: "",
        apellido: "",
        edad: "",
        domicilio: "",
      });
    }
  }, [usuarioSeleccionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/usuarios/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Datos insertados correctamente");
        setNewFormData({ nombre: "", apellido: "", edad: "", domicilio: "" });
        window.location.reload();
      } else {
        console.error("Error al insertar datos");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h4>Registro:</h4>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="edad">Edad:</label>
        <input
          type="number"
          id="edad"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="domicilio">Domicilio:</label>
        <input
          type="text"
          id="domicilio"
          name="domicilio"
          value={formData.domicilio}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-success mt-4">
        Guardar
      </button>
    </form>
  );
};

export default FormData;
