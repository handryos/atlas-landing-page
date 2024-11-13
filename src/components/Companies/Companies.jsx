import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <section id="clients" className="c-wrapper">
      <div
        style={{ top: "5dvh", position: "relative" }}
        className="paddings innerWidth flexCenter c-container"
      >
        <div className="flexColStart r-head">
          <span className="orangeText">Clientes &</span>
          <span className="primaryText">Empresas parceiras</span>
        </div>
      </div>
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./cresol.png" alt="" />
        <img src="./pescata.png" alt="" />
        <img src="./perpeto.png" alt="" />
        <img src="./sicob.png" alt="" />
      </div>
    </section>
  );
};

export default Companies;
