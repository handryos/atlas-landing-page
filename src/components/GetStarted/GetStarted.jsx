import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">
            Dê o primeiro passo para transformar inadimplência em crescimento.
          </span>
          <span className="secondaryText">
            Vamos começar?
            <br />
          </span>
          <button className="button" href>
            <a
              target="_blank"
              href={
                "https://mail.google.com/mail/?view=cm&fs=1&to=consultoria.atlas@outlook.com"
              }
            >
              Começar
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
