import React from "react";
import "./SectionLayout.css";

const SectionLayout = (props) => {
  return (
    <div className="box-container">
      <img className="sLImg" src={props.icon} alt="img" />
      <h4 className="sLHeading4">{props.heading}</h4>
      <p className="sLPara">{props.para}</p>
      <button className="sLBtn">Learn more ➡️</button>
    </div>
  );
};

export default SectionLayout;
