import React, { useState, useEffect } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchPrice() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`, 
          { signal }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const fetchedPrice = data.bitcoin[currency.toLowerCase()];
        setPrice(fetchedPrice);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPrice();
    return () => controller.abort();
  }, [currency]);

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>{curr}</option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      {/* Displaying loading, error, or the price */}
      <div style={{ marginTop: '1em' }}>
        {loading && <p>Loading price…</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && price != null && (
          <p>1 BTC = {price} {currency}</p>
        )}
      </div>
    </div>
  );
}

export default BitcoinRates;

