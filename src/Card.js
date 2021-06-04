import React, { useState, useEffect } from "react";
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
  // const [prev, setPrev] = useState(0);

  const [month, setMonth] = useState("MM");
  const [year, setYear] = useState("YY");

  //   Card Porops
  const namePlaceholder = { name: "Card Holder" };
  const expiryPlaceholder = { valid: "Expires" };

  //   const handleInputFocus = (e) => {
  //     this.setState({ focus: e.target.name });
  //   };

  const selectMonth = (e) => {
    setMonth(e.target.value);
    // console.log("The selected month is:", month);
  };

  const selectYear = (e) => {
    setYear(e.target.value);
    // console.log("The selected year is:", year);
  };

  useEffect(() => {
    // setMonth()
    setExpiry(month + year);
    // console.log("Month: ", month);
    // console.log("Year: ", year);
    // console.log("Expiry: ", expiry);
  }, [month, year]);

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
              <select
                onChange={(e) => selectMonth(e)}
                value={month}
                name="Month"
                id="month"
              >
                {/* <option selected disabled>
                  Month
                </option> */}
                <option value="MM" disabled selected label="✓ Month" />
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select
                onChange={(e) => selectYear(e)}
                value={year}
                name="Year"
                id="year"
              >
                {/* <optgroup selected="selected" label="✓ Year"> */}
                <option value="YY" disabled selected label="✓ Year" />
                <option value="21">2021</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
                <option value="25">2025</option>
                <option value="26">2026</option>
                <option value="27">2027</option>
                <option value="28">2028</option>
                <option value="29">2029</option>
                <option value="30">2030</option>
                {/* </optgroup> */}
              </select>
              {/* <input
                id="expiry"
                type="text"
                name="expiry"
                maxlength="4"
                //   placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={(e) => setFoucs(e.target.name)}
              /> */}
            </div>
            <div className="lastRowCVV">
              <label for="expiry">CVV</label>
              <input
                id="cvc"
                type="text"
                name="cvc"
                maxLength="4"
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
