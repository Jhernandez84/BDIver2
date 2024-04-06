"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/Components/Firebase/firebase";
import { GetFireBaseData, GetFireBaseDataCount } from "@/Components/Firebase/DataManager/DataOperations";

import { HiSearch, HiArrowUp, HiArrowDown } from "react-icons/hi";
import "./lgTableStyles.css";

import LGTableModal from "./lgTableModal";
import CardChartComponent from "@/Components/CardsCharts/CardChartComponent";

const LGTableComponent = ({ tableTitle, tableHeaders, tableData }) => {
  const { user } = "Jhernand";

  const [DBEvento, setDBEvento] = useState("BDGeneralIglesia");

  const [DBdata, setDBdata] = useState([]); // Variable utilizada para tener todos los registros como base y no consultar constantemente la BD
  const [DBdataCounter, setDBdataCounter] = useState([]); // Variable utilizada para tener todos los registros como base y no consultar constantemente la BD

  console.log(DBEvento);

  useEffect(() => {
    const fetchData = async () => {
      if (DBEvento) {
        try {
          const data = await GetFireBaseData(DBEvento);
          const countData = await GetFireBaseDataCount(DBEvento)
          setDBdata(data);
          setDBdataCounter(countData);
          console.log("FetchData triggered");
        } catch (error) {
          // Handle error if fetching data fails
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData(); // Call the async function to fetch and update data when DBEvento is not null
  }, [DBEvento]);

  const headers = [
    "Foto",
    "Rut",
    "Nombres",
    "Apellidos",
    "Fech. Nac.",
    "Teléfono",
    "Correo",
    "Estado Civil",
    "Estado",
    "Actualizado?",
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    console.log("Opening modal for item:", item.item);
    setSelectedItem(item.item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [valueToFind, setvalueToFind] = useState("");
  const [readyToFind, setReadytoFind] = useState(false);
  const [filteredArray, setFilteredArray] = useState([]);

  // Filter the data when valueToFind or DBdata changes
  useEffect(() => {
    // If DBdata is empty, there's nothing to filter
    if (!DBdata || DBdata.length === 0) {
      setFilteredArray([]); // Set filteredArray to an empty array
      return;
    }

    // If valueToFind is empty, set filteredArray to DBdata directly
    if (!valueToFind) {
      setFilteredArray(DBdata);
      return; // Exit early to avoid unnecessary filtering
    }

    const searchString = valueToFind.toLowerCase();

    // Filter DBdata based on the search string
    const filteredData = DBdata.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchString)
      )
    );

    setFilteredArray(filteredData); // Update state with filtered array
  }, [valueToFind, DBdata]); // Run this effect whenever valueToFind or DBdata changes

  const handleSearchInput = (e) => {
    setvalueToFind(e.target.value);
    console.log(valueToFind);
  };

  useEffect(() => {
    console.log(DBdata);
  }, [DBdata]);

  if (DBdata.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <main className="table-container">
        {isModalOpen && (
          <LGTableModal closeModal={closeModal} item={selectedItem} />
        )}
        <section className="charts-container">
          <div>
            <CardChartComponent
              id={"lideres"}
              CardChartData={""}
              header={"lideres"}
              text={DBdataCounter}
              text2={"Var % en últimos 3 días"}
            />
          </div>
          <div>
            <CardChartComponent
              id={"IverRegiones"}
              CardChartData={"25"}
              header={"IverRegiones"}
              text={"50"}
              text2={"Var % en últimos 3 días"}
            />
          </div>
          <div>
            <CardChartComponent
              id={3}
              CardChartData={"25"}
              header={"IverRegiones"}
              text={"50"}
              text2={"Var % en últimos 3 días"}
            />
          </div>
          <div>
            <CardChartComponent
              id={4}
              CardChartData={"25"}
              header={"IverRegiones"}
              text={"50"}
              text2={"Var % en últimos 3 días"}
            />
          </div>
        </section>
        <section className="table">
          <section className="table_header">
            <p> {tableTitle}</p>
            <section className="table-header-finder">
              <input
                className="input-group"
                type="text"
                placeholder={"Buscar..."}
                onChange={handleSearchInput}
              />
            </section>
          </section>
          <section className="table_body">
            <table>
              <thead>
                {headers.map((header, index) => (
                  // <th key={index}>{header} {<HiArrowUp/>} {<HiArrowDown/>}</th>
                  <th key={index}>{header}</th>
                ))}
              </thead>
              <tbody>
                {filteredArray.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      openModal({ item });
                    }}
                    className={
                      item.visibility === "visible" ? "visible" : "hidden"
                    }
                  >
                    {/* // <tr key={index} onClick={() => alert("clicked")}> */}
                    <td>
                      {/* <img src={item.imageUrl} alt="" /> */}
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </td>
                    <td>{item.Rut}</td>
                    {/* <td>{item.Nombres}</td> */}
                    <td>{item.Nombres.charAt(0).toUpperCase() +item.Nombres.slice(1).toLowerCase() }</td>
                    <td>
                      {/* {item.ApellidoPaterno.charAt(0).toUpperCase() + item.ApellidoPaterno.slice(1).toLowerCase() } {item.ApellidoMaterno} */}
                      {item.ApellidoPaterno} {item.ApellidoMaterno}
                    </td>
                    <td>{item.FechaNacimiento}</td>
                    <td>{item.NumeroContacto}</td>
                    <td>{item.Direccion}</td>
                    <td>{item.EstadoCivil}</td>
                    <td>{item.EstadoIglesia}</td>
                    <td>{item.EstadoActualizacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
        {/* <section>
        <p>pagination</p>
      </section> */}
      </main>
    );
  }
};

export default LGTableComponent;
