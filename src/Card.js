import React, { useState } from "react";
import Cards from "react-credit-cards";
import CreditCardInput from "react-credit-card-input";
import "react-credit-cards/es/styles-compiled.css";

import "./Card.css";

export default function Card() {
  const [cvc, setCVC] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFoucs] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  //   const handleInputFocus = (e) => {
  //     this.setState({ focus: e.target.name });
  //   };

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;

  //     this.setState({ [name]: value });
  //   };

  return (
    <div id="PaymentForm">
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
      <div className="formPayment">
        <form>
          <div>
            <label for="number">Card Number</label>
            <input
              id="number"
              type="tel"
              name="number"
              //   placeholder="Card Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
          <div>
            <label for="expiry">Expiration Date</label>
            <input
              id="expiry"
              type="text"
              name="expiry"
              //   placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFoucs(e.target.name)}
            />
            <label for="expiry">CVV</label>
            <input
              id="cvc"
              type="text"
              name="cvc"
              //   placeholder="CVC"
              value={cvc}
              onChange={(e) => setCVC(e.target.value)}
              onFocus={(e) => setFoucs(e.target.name)}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
