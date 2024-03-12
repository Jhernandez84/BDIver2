"use client";
import React from "react";
import { useState, useEffect } from "react";
import MyModalComponent from "./modal";
import ModalUserData from "./modal2";
import TableData from "./tableData";
import "./styles.css";

const Home = () => {
  const BDdata = [
    {
      rut: "15957386",
      nombre: "Jonathan Antonio",
      foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellido_paterno: "Hernandez",
      apellido_materno: "Miranda",
      telefono: "978778829",
      fec_nac: "1984-09-13",
    },
    {
      rut: "17388935",
      nombre: "Daniela",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellido_paterno: "Navarro",
      apellido_materno: "Quevedo",
      telefono: "978772331",
      fec_nac: "1984-09-13",
    },
    {
      rut: "12096190",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    {
      rut: "7831008",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    {
      rut: "7735953",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    {
      rut: "19419909",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    console.log("Opening modal for item:", item);
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setSelectedItem(null);
    setModalOpen(false);
  };

  const [valueToFind, setValueToFind] = useState("");
  const [animateRows, setAnimateRows] = useState(true);
  const [filtering, setFiltering] = useState(false);

  useEffect(() => {
    // Trigger animation once when the component mounts
    setAnimateRows(true);
  }, []);

  const resetFiltering = () => {
    setFiltering(false);
  };

  const handleValueToFind = (e) => {
    getValueToFind(e.target.value);
  };

  const getValueToFind = (value) => {
    console.log(value);
    setValueToFind(value);
  };

  return (
    <>
      <div className="container">
        {isModalOpen && (
          <ModalUserData closeModal={closeModal} item={selectedItem} />
        )}
        <div className="container-finder-summary-header">
          <p>Listado de hermanos:</p>
          <input
            type="text"
            value={valueToFind}
            placeholder="Buscar"
            onFocus={resetFiltering}
            onChange={handleValueToFind}
            className="search-icon"
          />
        </div>

        <div className="container-table-2">
          {/* <table> */}
          <thead className="table-header">
            <tr>
              <th className="th-img">Foto</th>
              <th className="th-text">Rut</th>
              <th className="th-text">Nombre</th>
              <th className="th-text">Apellidos</th>
              <th className="th-text">Teléfono</th>
              <th className="th-text">Fec. Nacimiento</th>
            </tr>
          </thead>
          <tbody>
            {BDdata.map((item, index) => {
              if (
                Object.values(item).some(
                  (property) =>
                    typeof property === "string" &&
                    property.toLowerCase().includes(valueToFind.toLowerCase())
                )
              ) {
                return (
                  <tr
                    key={index}
                    className={`tbody-profile-row ${filtering ? 'animate' : ''}`}
                    onClick={() => {
                      openModal(item);
                    }}
                  >
                    <td>
                      <img
                        className="tbody-profile-image"
                        src={item.foto}
                        alt=""
                      />
                    </td>
                    <td>{item.rut}</td>
                    <td>{item.nombre}</td>
                    <td>
                      {item.apellido_paterno} {item.apellido_materno}{" "}
                    </td>
                    <td>{item.telefono}</td>
                    <td>{item.fec_nac}</td>
                  </tr>
                );
                return null;
              }
            })}
          </tbody>
          {/* </table> */}
        </div>
      </div>
    </>
  );
};

export default Home;
