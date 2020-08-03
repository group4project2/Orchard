import React from "react";

function Card(props) {
  return (
  <div className="card">
    <div className="card-body">
      <h5>{props.heading}</h5>
      <p className="card-text">{props.cardText}</p>
    </div>
  </div>
  );
}

export default Card;
