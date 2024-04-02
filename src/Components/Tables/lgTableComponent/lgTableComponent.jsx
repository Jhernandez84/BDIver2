"use client";

import React, { useEffect, useState } from "react";
import "./lgTableStyles.css";
import { HiSearch, HiArrowUp, HiArrowDown } from "react-icons/hi";

import LGTableModal from "./lgTableModal";
import CardChartComponent from "@/Components/CardsCharts/CardChartComponent";

const LGTableComponent = ({ tableTitle, tableHeaders, tableData }) => {
  const headers = [
    "Foto",
    "Name",
    "Name",
    "Name",
    "Email",
    "Email",
    "Email",
    "Role",
    "Last Seen",
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

  const ArrayTableData = tableData;
  const [valueToFind, setvalueToFind] = useState("");
  const [readyToFind, setReadytoFind] = useState(false);
  const [filteredArray, setFilteredArray] = useState(ArrayTableData);

  //   this filters the array data
  useEffect(() => {
    const filteredData = ArrayTableData.filter((item) =>
      Object.values(item).some((value) =>
        value.toLowerCase().includes(valueToFind.toLowerCase())
      )
    );

    setFilteredArray(filteredData); // Update state with filtered array
  }, [valueToFind]); // Run this effect whenever valueToFind changes

  const handleSearchInput = (e) => {
    setvalueToFind(e.target.value);
  };

  return (
    <main className="table-container">
      {isModalOpen && (
        <LGTableModal closeModal={closeModal} item={selectedItem} />
      )}
      <section className="charts-container">
        <div>
          <CardChartComponent
            id={"lideres"}
            CardChartData={"25"}
            header={"lideres"}
            text={"50"}
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
              {/* <tr>
                <th>
                  <p>Foto</p>
                </th>
                <th>
                  <div className="theader-header">
                    <p>Nombres</p>
                    <div className="theader-header">{<HiArrowUp />}</div>
                    <div className="theader-header">{<HiArrowDown />}</div>
                  </div>
                </th>
              </tr> */}
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
                    <img src={item.imageUrl} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.email}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>{item.lastSeen}</td>
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
};

export default LGTableComponent;
