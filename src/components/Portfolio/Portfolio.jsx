import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={textVariant(0.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">Certificate</span>
            <p style={{ marginTop: "10px" }}>Perfect solution for digital experience</p>
          </div>
        </motion.div>
        <div className={`flexCenter ${css.showCase}`}>
          <img src="./showCase1.png" alt="project" />
          <img src="./showCase2.png" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
