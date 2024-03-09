"use client";

import React, { useState } from "react";
import MyModal from "./modal";
import "./styles.css";

const TableData = ({setModalOpen}) => {

  const openModal = ({ item }) => {
    console.log(item.nombre);
    setModalOpen(true);
    MyModal((item = { item }));
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const BDdata = [
    {
      rut: "15957386",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    {
      rut: "17388935",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    {
      rut: "12096190",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    {
      rut: "7831008",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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

  return (
    <>
      <tbody>
        {BDdata.map((item, index) => (
          <tr
            key={index}
            className="tbody-profile-row"
            onClick={() => { openModal({ item })}}
          >
            <td>
              <img className="tbody-profile-image" src={item.foto} alt="" />
            </td>
            <td>{item.rut}</td>
            <td>{item.nombre}</td>
            <td>{item.apellidos}</td>
            <td>{item.telefono}</td>
            <td>{item.edad}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableData;
