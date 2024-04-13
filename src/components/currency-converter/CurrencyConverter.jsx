import React, { useEffect, useState } from "react";
import "./currency.css";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  const handleAmountChange = (event) => {
    console.log("amount", event.target.value);
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    console.log("from", event.target.value);
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    console.log("to", event.target.value);
    setToCurrency(event.target.value);
  };

  const fetchExchangeRate = async () => {
    const apiResponse = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`,
      {
        method: "GET",
      }
    );
    const result = await apiResponse.json();
    console.log("result", result);

    const calculatedRate = result?.rates[toCurrency];

    console.log("calculatedRate", calculatedRate);

    setExchangeRate(calculatedRate);
    setConvertedAmount((amount * calculatedRate).toFixed(2));
  };
  console.log("convertedAmount", convertedAmount);

  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>
      <div className="input-container">
        <input
          value={amount}
          onChange={handleAmountChange}
          type="number"
          name="amount"
          placeholder="Enter Amount"
        />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value={"USD"}>USD</option>
          <option value={"INR"}>INR</option>
          <option value={"EUR"}>EUR</option>
        </select>
      </div>
      <p>To</p>

      <div className="input-container">
        <input type="text" value={convertedAmount} readOnly />
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value={"EUR"}>EUR</option>
          <option value={"INR"}>INR</option>
          <option value={"USD"}>USD</option>
        </select>
      </div>
      <p>
        Exchange Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}
      </p>
    </div>
  );
};

export default CurrencyConverter;
