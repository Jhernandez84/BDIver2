"use client";

import React, { useState } from "react";
import "./styles.css";

const MyModalComponent = ({ onClose, item }) => {
  const {
    rut,
    nombre,
    apellidos,
    telefono,
    edad,
    foto,
    apellido_paterno,
    apellido_materno,
    fec_nac,
  } = item;
  // const formattedDate = `${SelectedYear}-${String(SelectedMonth + 1).padStart(2, '0')}-${String(SelectedDate).padStart(2, '0')}`;
  return (
    <>
      <div className="fixed inset-10 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="dark:bg-gray-600 relative w-[60%] h-[70%] mx-auto my-6 p-6 bg-white border rounded-md shadow-lg">
          <div className="flex items-start justify-between">
            <p className="text-white">
              Editando Perfil rut: {rut} - {nombre} {apellido_paterno}{" "}
              {apellido_materno}
            </p>
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={onClose}
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mt-4">
            <section className="modal-main-data-container">
              <section className="modal-personal-data-section">
                <div className="modal-personal-data-section-header">
                  <div>
                    <p>Información personal</p>
                  </div>
                </div>
                <div className="modal-personal-data-section-container">
                  <div className="modal-personal-data-section-right-col">
                    <div>
                      <label htmlFor="" className="input-label">
                        Nombres
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="input-data"
                        placeholder={nombre}
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="input-label">Apellido Paterno</label>
                      <input
                        type="text"
                        id="name"
                        className="input-name"
                        placeholder={apellido_paterno}
                      />
                    </div>
                    <div>
                      <label htmlFor=""  className="input-label">apellido Materno</label>
                      <input
                        type="text"
                        id="name"
                        className="input-name"
                        placeholder={apellido_materno}
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="input-label">Fecha Nacimiento</label>
                      <input
                        type="date"
                        id="name"
                        className="input-name dark:text-black"
                        placeholder={fec_nac}
                      />
                    </div>
                  </div>
                  <div className="modal-personal-data-section-left-col">
                    <div className="input-personal-data-img">
                      <img src={foto} alt={nombre} />
                    </div>
                  </div>
                </div>
              </section>

              {/* <section className="modal-personal-data-section">
                <h1>Información de contacto</h1>
                <div>
                  <label htmlFor="">Teléfono Contacto</label>
                  <input
                    type="text"
                    id="name"
                    className="input-name"
                    placeholder={telefono}
                  />
                </div>
                <div>
                  <label htmlFor="">Dirección</label>
                  <input type="text" id="name" className="input-name" />
                </div>
              </section>

              <section className="modal-personal-data-section">
                <h1>Grupo familiar</h1>
                <div>
                  <label htmlFor="">Estado Civil</label>
                  <input type="text" id="name" className="input-name" />
                </div>
                <div>
                  <label htmlFor="">Cónyuge</label>
                  <input type="text" id="name" className="input-name" />
                </div>
                <div>
                  <label htmlFor="">Hijos</label>
                  <input type="text" />
                </div>
              </section>

              <section className="modal-personal-data-section">
                <h1>Participación en la iglesia</h1>
                <div>
                  <label htmlFor="">Teléfono Contacto</label>
                  <input type="text" id="name" className="input-name" />
                </div>
                <div>
                  <label htmlFor="">Dirección</label>
                  <input type="text" id="name" className="input-name" />
                </div>
              </section> */}
            </section>
          </div>
          <div className="content">
            <button className="btn-modal">Guardar</button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-50 dark:text-white"></div>
    </>
  );
};

export default MyModalComponent;
