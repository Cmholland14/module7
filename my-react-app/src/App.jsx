import React from "react";
import './App.css';
import BitcoinRates from "./components/BitcoinRates";

function App() {
  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "1rem" }}>Crypto Dashboard</h1>
      <BitcoinRates />
    </div>
  );
}

export default App;


