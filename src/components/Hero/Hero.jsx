import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  const formatNumber = (value) => {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
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
                <CountUp
                  start={15315073.32}
                  end={16315073.32}
                  formattingFn={formatNumber}
                  duration={4}
                />{" "}
                <span>+</span>
              </span>
              <span className="secondaryText">Ativos sob gestão</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={90} end={100} duration={6} /> <span>+</span>
              </span>
              <span className="secondaryText">Empresas atendidas</span>
            </div>

            <div className="flexColCenter stat"></div>
          </motion.div>
        </div>
        {/* right side */}
      </div>
    </section>
  );
};

export default Hero;
