import React from "react";
import "./KingCard.css";

const KingCard = props => (
  <div className="card" onClick={() => props.selectKing(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default KingCard;
