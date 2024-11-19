import React from "react";
import "./Footer.css";
const Footer = () => {
  const scrollToCompanies = () => {
    const section = document.getElementById("clients");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const section = document.getElementById("services");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const section = document.getElementById("about");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    const section = document.getElementById("home");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContacts = () => {
    const section = document.getElementById("contact-us");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img
            style={{ top: "2rem", position: "relative" }}
            src="./logo3.png"
            alt=""
            width={160}
          />
          <span className="secondaryText">
            Transformando dívidas em oportunidades,
            <br />
            reconstruindo o seu futuro financeiro.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Informações</span>
          <span className="secondaryText">Concórdia, SC, Brasil </span>
          <div className="flexCenter f-menu">
            <span
              className="buttons"
              style={{ cursor: "pointer" }}
              onClick={scrollToHome}
            >
              Home
            </span>
            <span
              className="buttons"
              style={{ cursor: "pointer" }}
              onClick={scrollToAbout}
            >
              Sobre
            </span>
            <span
              className="buttons"
              style={{ cursor: "pointer" }}
              onClick={scrollToServices}
            >
              Serviços
            </span>
            <span
              className="buttons"
              style={{ cursor: "pointer" }}
              onClick={scrollToCompanies}
            >
              Clientes
            </span>
            <span
              className="buttons"
              style={{ cursor: "pointer" }}
              onClick={scrollToContacts}
            >
              Contato
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
