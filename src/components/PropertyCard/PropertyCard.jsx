import React from "react";
import "./PropertyCard.css";

const PropertyCard = ({ card }) => {
  return (
    <div className="flexColStart r-card">
      <img src={card.image} alt="home" />
      <span className="secondaryText r-price">
        <span>{card.label}</span>
        <span style={{ color: "orange", marginLeft: 4 }}>✔</span>
      </span>
    </div>
  );
};

export default PropertyCard;
