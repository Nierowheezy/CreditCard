import React from "react";
import Cleave from "cleave.js/react";

const CardCleave = ({ handleCreditCardNum, handleType }) => {
  return (
    <Cleave
      delimiter="-"
      options={{
        creditCard: true,
        onCreditCardTypeChanged: handleType,
      }}
      onChange={handleCreditCardNum}
      placeholder="4324 5433 9382 1030"
    />
  );
};

export default CardCleave;
