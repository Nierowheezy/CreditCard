import React from "react";
import "./CardFooterMain.css";

const CardFooterMain = () => {
  return (
    <div className="card-footer-main-container">
      <div className="card-footer-main-content">
        <button>{`Complete payment`}</button>
      </div>

      <div className="card-footer-main-content">
        <h2>TOTAL: ₦2556.64</h2>
      </div>
    </div>
  );
};

export default CardFooterMain;
