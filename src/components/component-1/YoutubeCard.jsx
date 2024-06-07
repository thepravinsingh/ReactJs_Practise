import React from "react";
import "./YoutubeCard.css";

const YoutubeCard = (props) => {
  return (
    <div className="container">
      <img className="yCardImg" src={props.image} alt={props.alt} />
      <h4 className="yHeading4">{props.heading}</h4>
      <p className="yPara">{props.para}</p>
    </div>
  );
};

export default YoutubeCard;
