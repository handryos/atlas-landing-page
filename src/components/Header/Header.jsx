import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";

import { motion } from "framer-motion";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

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
  const scrollToContacts = () => {
    const section = document.getElementById("contact-us");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <motion.img
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
          src="./atlas.png"
          alt="logo"
          style={{
            top: "-25px",
            width: window.innerWidth <= 576 ? "200px" : "350px",
          }}
        />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <motion.a
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              <p
                className={
                  window.innerWidth <= 576 ? "buttons" : "buttons-header"
                }
              >
                Home
              </p>
            </motion.a>
            <motion.div
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              <p
                className={
                  window.innerWidth <= 576 ? "buttons" : "buttons-header"
                }
                onClick={scrollToServices}
              >
                Serviços
              </p>
            </motion.div>

            <motion.div
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              <p
                className={
                  window.innerWidth <= 576 ? "buttons" : "buttons-header"
                }
                onClick={scrollToAbout}
              >
                Sobre
              </p>
            </motion.div>

            {/* add property */}

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
              className="button"
            >
              <motion.span
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "ease-in",
                }}
              >
                <p
                  className={
                    window.innerWidth <= 576 ? "buttons" : "buttons-header"
                  }
                  onClick={scrollToContacts}
                >
                  Contato
                </p>
              </motion.span>
            </motion.button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
