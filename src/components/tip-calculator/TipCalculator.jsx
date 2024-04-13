import React, { useState } from "react";
import "./tip.css"

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState(null);
  const [tipPercentage, setTipPercentage] = useState(10);
  const [splitCount, setSplitCount] = useState(1);

  const [tipAmount, setTipAmount] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

	const handleCalculateTip = () => {
		console.log("inside handleCalculateTip");
		if(!billAmount || billAmount <=0 || !tipPercentage || tipPercentage <=0){
			console.log(tipAmount);
			setTipAmount(null)
			setErrorMsg("Please enter valid values for bill amount and tip percentage")
			return;
		}
		const bill = parseFloat(billAmount)
		const tip = (bill * tipPercentage) / 100;
		const totalAmount = bill + tip;
		const tipAmountPerPerson = tip / splitCount;
		const totalAmountPerPerson = totalAmount / splitCount
	
		console.log('totalAmountPerPerson',totalAmountPerPerson );

		setTipAmount({
			totalAmount: totalAmount.toFixed(2),
			tipPerPerson: tipAmountPerPerson.toFixed(2),
			totalPerPerson: totalAmountPerPerson.toFixed(2)
		});
		setErrorMsg('')
	
	}

  return (
    <div className="tip-calculator">
      <h1>Tip Calculator</h1>

      <div className="input-container">
        <label>Bill Amount</label>
        <input
          type="number"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label>Tip Percentage</label>
        <input
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label>Number of people</label>
        <input
          type="number"
          value={splitCount}
          onChange={(e) => setSplitCount(e.target.value)}
        />
      </div>

      <button onClick={handleCalculateTip}>Calculate Tip</button>

      {errorMsg ? <p className="error-message">{errorMsg}</p> : null}

      {/* calculated amount is stored in tipAmount state */}

      {tipAmount ? (
        <div>
          <p>Total Amount: {tipAmount.totalAmount}</p>
          <p>Tip per person: {tipAmount.tipPerPerson}</p>
          <p>Total Amount per person: {tipAmount.totalPerPerson}</p>
        </div>
      ) : null}
    </div>
  );
};

export default TipCalculator;
