import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section id="home" className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Recupere ativos. <br />
              Restaure confiança.
              <br />
            </motion.h1>
          </div>
          <motion.div
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="flexColStart secondaryText flexhero-des"
          >
            <span>Transformando inadimplência em oportunidade</span>
            <span>Recuperando seu patrimônio com eficiência</span>
          </motion.div>

          <motion.div
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="flexCenter stats"
          >
            <div className="flexColCenter stat">
              <span>
                <CountUp start={800} end={1000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Quantidade de Processos</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={9999900} end={10000000} duration={4} />{" "}
                <span>+</span>
              </span>
              <span className="secondaryText">Valor recuperado</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={80} /> <span>%</span>
              </span>
              <span className="secondaryText">Taxa de sucesso</span>
            </div>
          </motion.div>
        </div>
        {/* right side */}
      </div>
    </section>
  );
};

export default Hero;
