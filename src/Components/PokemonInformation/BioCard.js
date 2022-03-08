import React from "react";
import "./BioCard.css";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
export default function BioCard(props) {
  const history = useHistory();
  const goBack = (e) => {
    history.push("/");
  };
  const types = props.types.map((type) => (
    <span key={Math.random() * 20} className="type-badge">
      {type.type.name}
    </span>
  ));
  const pokemonType = props.types[0].type.name;
  const bgColors = {
    water: "#1C658C",
    grass: "#019267",
    fire: "#F07B3F",
    ground: "#7C9473",
    ghost: "#222831",
    electric: "#FFCD3C",
    bug: "#9DAD7F",
    normal: "#F6F6F6",
  };
  var vals = Object.keys(bgColors).filter((key) => key === pokemonType);
  const bgColor = vals[0];

  return (
    <motion.div
      className={`container bio-card ${bgColor}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <motion.img
        className="bio-img"
        src={props.img}
        initial={{ y: "-200vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 2, delay: 1, type: "spring", stiffness: "50" }}
      ></motion.img>
      <h4>{props.name}</h4>
      <div className="badges">{types}</div>
      <div className="backDiv">
        <button className="back-button" onClick={goBack}>
          back
        </button>
      </div>
    </motion.div>
  );
}
