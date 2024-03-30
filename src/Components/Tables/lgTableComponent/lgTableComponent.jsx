import React from "react";
import "./styles.css";

const LGTableComponent = ({ tableTitle, tableHeaders, tableData }) => {
  const headers = [
    "image",
    "Name",
    "Name",
    "Name",
    "Email",
    "Email",
    "Email",
    "Role",
    "Last Seen",
  ];

  return (
    <main className="table-container">
      <section className="table">
        <section className="table_header">
          <p> {tableTitle}</p>
        </section>
        <section className="table_body">
          <table>
            <thead>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </thead>
            <tbody>
              {tableData.map((person, index) => (
                <tr key={index} onClick={()=>alert('clicked')}>
                  <td>
                    <img src={person.imageUrl} alt="" />
                  </td>
                  <td>{person.name}</td>
                  <td>{person.name}</td>
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                  <td>{person.email}</td>
                  <td>{person.email}</td>
                  <td>{person.role}</td>
                  <td>{person.lastSeen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
};

export default LGTableComponent;
