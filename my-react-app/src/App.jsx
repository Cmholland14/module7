import React from "react";
import './App.css';
import BitcoinRates from "./components/BitcoinRates";
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
    <div className="App" style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "1rem" }}>Crypto Dashboard</h1>
      <BitcoinRates />
    </div>
    </UserProvider>
  );
}

export default App;


