import React from "react";
import "./Contact.css";
import { MdCall, MdEmail } from "react-icons/md";
import { BsFillChatDotsFill, BsPhone, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Nossos Contatos</span>
          <span className="primaryText">Formas simples de nos contatar</span>
          <span className="secondaryText">
            Estamos sempre prontos para ajudar, fornecendo os melhores serviços
            para você.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdEmail style={{ fill: "#e52929" }} size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">E-mail</span>
                    <span
                      style={{ overflowWrap: "anywhere", fontSize: 14 }}
                      className="secondaryText"
                    >
                      consultoria.atlas@outlook.com
                    </span>
                  </div>
                </div>
                <a
                  href={
                    "https://mail.google.com/mail/?view=cm&fs=1&to=consultoria.atlas@outlook.com"
                  }
                  target="_blank"
                  className="flexCenter button"
                >
                  Enviar mensagem
                </a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div style={{ color: "red" }} className="flexCenter icon">
                    <BsWhatsapp style={{ fill: "green" }} size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">WhatsApp</span>
                    <span style={{ fontSize: 14 }} className="secondaryText">
                      Lucas Lazzari
                    </span>
                    <span style={{ fontSize: 14 }} className="secondaryText">
                      (49)99962-5298
                    </span>
                  </div>
                </div>
                <a
                  href="https://wa.me/5549999625298"
                  target="_blank"
                  className="flexCenter button"
                >
                  Enviar mensagem
                </a>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsWhatsapp style={{ fill: "green" }} size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">WhatsApp</span>
                    <span style={{ fontSize: 14 }} className="secondaryText">
                      Saymon dos Santos
                    </span>
                    <span style={{ fontSize: 14 }} className="secondaryText">
                      (49)8436-7101
                    </span>
                  </div>
                </div>
                <a
                  href="https://wa.me/554984367101"
                  target="_blank"
                  className="flexCenter button"
                >
                  Enviar mensagem
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
