import React, { useState } from "react";
import CardCleave from "./components/Cleave/CardCleave";

import "animate.css";
import "./App.css";
import Card from "./components/Card/Card";
import CardHeader from "./components/CardHeader/CardHeader";
import CardFooter from "./components/CardFooter/CardFooter";
import CardFooterMain from "./components/CardFooterMain/CardFooterMain";
import CardHeaderMain from "./components/CardHeaderMain/CardHeaderMain";

const imageUrls = [
  "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png",
  "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png",
  "https://www.discover.com/company/images/newsroom/media-downloads/discover.png",
  "https://s1.q4cdn.com/692158879/files/design/svg/american-express-logo.svg",
  "https://cdn4.iconfinder.com/data/icons/simple-peyment-methods/512/diners_club-512.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1280px-JCB_logo.svg.png",
];

function App() {
  const [creditCardNum, setCreditCardNum] = useState("#### #### #### ####");
  const [cardType, setCardType] = useState("");
  const [securityCode, setSecurityCode] = useState("enter security code");
  const [expirationDate, setExpirationDate] = useState("03/04");
  const [postalCode, setPostalCode] = useState("10119");
  const [cardTypeUrl, setCardTypeUrl] = useState(
    "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png"
  );
  // const [flip, setFlip] = useState(null);

  const handleCreditCardNum = (e) => {
    setCreditCardNum(e.target.rawValue);
    // console.log(e.target.value);
  };

  const handleType = (type) => {
    setCardType(type);
    console.log(type);

    if (type === "visa") {
      setCardTypeUrl(imageUrls[0]);
      console.log("Visa");
    } else if (type === "mastercard") {
      setCardTypeUrl(imageUrls[1]);
      console.log("Mastercard");
    } else if (type === "discover") {
      setCardTypeUrl(imageUrls[2]);
      console.log("Discover");
    } else if (type === "amex") {
      setCardTypeUrl(imageUrls[3]);
      console.log("Amex");
    } else if (type === "diners") {
      console.log("Diners");
      setCardTypeUrl(imageUrls[4]);
    } else if (type === "jcb") {
      console.log("JCB");
      setCardTypeUrl(imageUrls[5]);
    }
  };

  const handleSecurityCode = (e) => {
    setSecurityCode(e.target.value);
  };

  const handleExpDate = (e) => {
    setExpirationDate(e.target.value);
  };

  const handlePostalCode = (e) => {
    setPostalCode(e.target.value);
  };

  return (
    <div className="container">
      <CardHeaderMain />
      <hr className="card-line top-mt" />
      <CardHeader />
      <form id="form">
        <div className="split__form mt">
          <Card
            cardTypeUrl={cardTypeUrl}
            creditCardNum={creditCardNum}
            securityCode={securityCode}
            expirationDate={expirationDate}
            postalCode={postalCode}
          />
          <div className="input-container-main">
            <div className="input-grp">
              <div className="input-container">
                <h4>Credit card number</h4>
                <CardCleave
                  handleType={handleType}
                  handleCreditCardNum={handleCreditCardNum}
                />
              </div>

              <div className="input-container">
                <h4>Expiration date</h4>
                <input
                  onChange={handleExpDate}
                  type="text"
                  placeholder="03/24"
                  required
                />
              </div>
            </div>

            <div className="input-grp">
              <div className="input-container">
                <h4>Security code</h4>
                <input
                  onChange={handleSecurityCode}
                  type="text"
                  placeholder="420"
                  required
                />
              </div>

              <div className="input-container">
                <h4>Postal Code</h4>
                <input
                  onChange={handlePostalCode}
                  type="text"
                  placeholder="10119"
                  required
                />
              </div>
            </div>
            <button>{`Add ${cardType} Card`}</button>
          </div>
        </div>
      </form>

      <hr className="card-line botoom-mt" />

      <CardFooter />

      <hr className="card-line botoom-mt" />

      <CardFooterMain />
    </div>
  );
}

export default App;
