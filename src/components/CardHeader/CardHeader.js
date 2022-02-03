import React from "react";
import "./CardHeader.css";
import paypal from "../../images/paypal.png";
import discover from "../../images/discover.png";
import visa from "../../images/visa.jfif";

const CardHeader = () => {
  return (
    <div className="card-header-container">
      <div className="card-header-container-left">
        <h2>Payment Information</h2>
        <p style={{ color: "#cfcfcf" }}>Choose your method of payment.</p>
      </div>

      <div className="card-header-container-right">
        <img src={visa} alt="discover" className="visa" />
        <img src={discover} alt="discover" className="discover" />
        <img src={paypal} alt="paypal" className="paypal" />
      </div>
    </div>
  );
};

export default CardHeader;
