import React, { useState } from "react";
import Cards from "react-credit-cards";
// import CreditCardInput from "react-credit-card-input";
// import "react-credit-cards/es/styles-compiled.css";
import "react-credit-cards/lib/styles.scss";

import "./Card.scss";

export default function Card() {
  const [cvc, setCVC] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFoucs] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [prev, setPrev] = useState(0);

  //   Card Porops
  const namePlaceholder = { name: "Card Holder" };
  const expiryPlaceholder = { valid: "Expires" };

  //   const handleInputFocus = (e) => {
  //     this.setState({ focus: e.target.name });
  //   };

  const handleInputChange = (e) => {
    var val = e.target.value;
    const valArray = val.split(" ").join("").split("");
    var valSpace = val.split("");

    // to work with backspace
    if (valSpace[valSpace.length - 1] == " ") {
      var valSpaceN = valSpace.slice(0, -2);
      val = valSpaceN.join("");
      setNumber(val);
      // this.setState({ number: val });
      return;
    }

    if (isNaN(valArray.join(""))) return;
    if (valArray.length === 17) return;
    if (valArray.length % 4 === 0 && valArray.length <= 15) {
      setNumber(e.target.value + "  ");
      // this.setState({ number: e.target.value + "  " });
    } else {
      setNumber(e.target.value);
      // this.setState({ number: e.target.value });
    }
    // setNumber(cardNumberInput.replace(/\W/gi, "").replace(/(.{4})/g, "$1 "));
    // const { name, value } = e.target;
    // this.setState({ [name]: value });
  };

  return (
    <div className="cardLayout">
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
        placeholders={namePlaceholder}
        locale={expiryPlaceholder}
      />
      <div className="formPayment">
        <form>
          <div>
            <label for="number">Card Number</label>
            <input
              id="number"
              type="tel"
              name="number"
              // maxlength="19"
              //   placeholder="Card Number"
              value={number}
              // onChange={(e) => setNumber(e.target.value)}
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => setFoucs(e.target.name)}
            />
          </div>
          <div>
            <label for="name">Card Name</label>
            <input
              id="name"
              type="text"
              name="name"
              //   placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFoucs(e.target.name)}
            />
          </div>
          <div className="lastRow">
            <div className="lastRowExpiry">
              <label for="expiry">Expiration Date</label>
              <input
                id="expiry"
                type="text"
                name="expiry"
                maxlength="4"
                //   placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={(e) => setFoucs(e.target.name)}
              />
            </div>
            <div className="lastRowCVV">
              <label for="expiry">CVV</label>
              <input
                id="cvc"
                type="text"
                name="cvc"
                maxlength="4"
                //   placeholder="CVC"
                value={cvc}
                onChange={(e) => setCVC(e.target.value)}
                onFocus={(e) => setFoucs(e.target.name)}
              />
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
