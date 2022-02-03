import React from "react";
import "./CardFooter.css";

const CardFooter = () => {
  return (
    <div className="card-footer-container">
      <div className="card-footer-container-content">
        <h2>Subtotal</h2>
        <h2>Estimated TAX</h2>
        <h2>Promotional Code: Z4KXLM9A</h2>
      </div>

      <div className="card-footer-container-content">
        <h2>₦2,497.00</h2>
        <h2 style={{ textAlign: "right" }}>₦119.64</h2>
        <h2 style={{ textAlign: "right" }}>₦-60.00</h2>
      </div>
    </div>
  );
};

export default CardFooter;
