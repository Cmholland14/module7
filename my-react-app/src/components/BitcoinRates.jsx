import React, { useState, useContext } from "react";
import { useUserContext } from "../contexts/UserContext";
import useBitcoinPrice   from "../hooks/useBitcoinPrice";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { price, loading, error } = useBitcoinPrice(currency);
  const { currentUser } = useContext(UserContext);

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
             {currencies.map(curr => (
            <option key={curr} value={curr}>{curr}</option>
          ))}
        </select>
      </label>

       <div style={{ marginTop: '1em' }}>
        {loading && <p>Loading price…</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && price != null && (
          <p>1 BTC = {price} {currency}</p>
        )}
      </div>

      {/* Display user's emoji */}
      {currentUser?.emoji && (
        <div>
          <h4>Your Emoji:</h4>
          <p>{currentUser.emoji}</p>
        </div>
      )}
    </div>
  );
}

export default BitcoinRates;