import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          {/* Agrega los botones de redes sociales aquí */}
          <div className={css.socialLinks}>
            <a
              href="https://www.linkedin.com/in/ronaldo-wm-a4138b288/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="mailto:deigamerwong@gmail.com">
              <i className="bx bxl-gmail"></i>
            </a>
            <a
              href="https://github.com/RonaldoWongs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">WongProgramer&copy;2023</span>
          </div>
          <ul className={css.menu}></ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
