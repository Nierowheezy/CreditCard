import React from "react";
import "./Card.css";
const Card = ({
  cardTypeUrl,
  creditCardNum,
  // securityCode,
  expirationDate,
  // postalCode,
}) => {
  return (
    <div id="card">
      <div className="header">
        <div className="sticker"></div>
        <div>
          <img className="logo" src={cardTypeUrl} alt="Card logo" />
        </div>
      </div>
      <div className="body">
        <div className="card-body-p2">
          <h5>CARD NUMBER </h5>
          <h2 id="creditCardNumber">{creditCardNum}</h2>
        </div>
      </div>
      <div className="footer">
        <div className="card-footer-p2">
          <h5>EXPIRATION DATE</h5>
          <h3>{expirationDate}</h3>
        </div>

        <div>
          <h5>John Doe</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
