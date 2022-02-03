import React from "react";
import "./CardHeaderMain.css";
import user from "../../images/user.jpg";

const CardHeaderMain = () => {
  return (
    <div className="card-header-main-container">
      <h2>TRIPS</h2>
      <h2>RECENTLY VIEWED</h2>
      <h2>BOOKINGS</h2>
      <img src={user} alt="Logo" className="user-image" />
    </div>
  );
};

export default CardHeaderMain;
