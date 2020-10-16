import React from "react";
import "./style.css";

const Property = props => {
  return (
    <div className="property_center">
      <img
        src={props.imgsrc}
        alt="Property"
      />
      <div className="property-details">
        <p className="price">{props.price}</p>
        <span className="beds">{props.beds}</span>
        <span className="baths">{props.baths}</span>
        <span className="sqft">{props.sqft}</span>
        <address>{props.address}</address>
      </div>
    </div>
  );
};

export default Property;
