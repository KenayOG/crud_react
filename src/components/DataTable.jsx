/* eslint-disable react/prop-types */
//import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { useEffect, useState } from "react";

library.add(faTrash, faPen);

const DataTable = ({ onSelectUser }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fecthUsuarios = async () => {
      try {
        const response = await fetch("http://localhost:8080/usuarios");
        if (!response.ok) {
          throw new Error("Error al obtener la lista de los usuarios");
        }
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fecthUsuarios();
  }, []);

  const handleEditClick = (usuario) => {
    onSelectUser(usuario);
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/usuarios/delete?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Error al eliminar el usuario");
      }
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h4 className="mb-3">Lista de Usuarios</h4>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {usuarios.length > 0 ? (
        <div
          className="table-responsive"
          style={{ overflowY: "auto", overflowX: "hidden", maxHeight: "350px" }}
        >
          <table
            className="table table-striped"
            style={{ tableLayout: "auto" }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Domicilio</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td style={{ whiteSpace: "nowrap" }}>{usuario.id}</td>
                  <td style={{ whiteSpace: "nowrap" }}>{usuario.nombre}</td>
                  <td style={{ whiteSpace: "nowrap" }}>{usuario.apellido}</td>
                  <td style={{ whiteSpace: "nowrap" }}>{usuario.edad}</td>
                  <td style={{ whiteSpace: "nowrap" }}>{usuario.domicilio}</td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteClick(usuario.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} size="1x" color="white" />
                    </button>
                  </td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEditClick(usuario)}
                    >
                      <FontAwesomeIcon icon={faPen} size="1x" color="white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No hay usuarios para mostrar.</p>
      )}
    </div>
  );
};

export default DataTable;
