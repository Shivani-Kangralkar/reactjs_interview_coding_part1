import React, { useState } from "react";
import "./bmi.css";

const BmiCalculator = () => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const calculateBmi = () => {
    console.log("calculateBmi");
    if (!height || !weight) {
      setErrorMsg("Please enter both height and weight");
      return;
    }

    const numHeight = parseFloat(height);
    const numWeight = parseFloat(weight);

    console.log("numHeight", numHeight);

    if (
      isNaN(numHeight) ||
      isNaN(numWeight) ||
      numHeight <= 0 ||
      numWeight <= 0
    ) {
      setErrorMsg(
        "Please enter valid numeric values for both height and weight"
      );
      return;
    }

    const calculateHeightInMeters = numHeight / 100;
    const calculateBmiValue = (
      numWeight /
      (calculateHeightInMeters * calculateHeightInMeters)
    ).toFixed(2);

    console.log("calculateBmiValue", calculateBmiValue);
    setBmi(calculateBmiValue);
    setErrorMsg("");
  };

  // console.log(bmi);
  // console.log("errorMsg",errorMsg);
  return (
    <div className="bmi-calculator-container">
      <h1>BMI Calculator</h1>

      <div className="input-container">
        <label>Height (cm) :</label>
        <input
          onChange={(event) => setHeight(event.target.value)}
          type="number"
          value={height}
        />
      </div>

      <div className="input-container">
        <label>Weight (kg) :</label>
        <input
          onChange={(event) => setWeight(event.target.value)}
          type="number"
          value={weight}
        />
      </div>

      <button onClick={calculateBmi}>Calculator</button>
      {errorMsg ? <p className="error-msg-text">{errorMsg}</p> : null}

      {/* if error message is present than show null else show output on screen */}
      {console.log("bmi", bmi)}
      {errorMsg !== "" ? null : (
        <p className="bmi-result-text">
          {bmi < 18.5
            ? "Underweight"
            : bmi >= 18.5 && bmi < 24.9
            ? "Normal Weight"
            : bmi >= 25 && bmi < 29.9
            ? "Overweight"
            : "Obese"}
        </p>
      )}
    </div>
  );
};

export default BmiCalculator;
