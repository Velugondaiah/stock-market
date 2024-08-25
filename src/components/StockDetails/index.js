import React, { useState, useEffect } from 'react';
import './index.css';
import Trading from '../Trading';
import Dashboard from '../Dashboard';

const StockDetails = () =>{
  const [stocks, setStocks] = useState([
    { name: 'AAPL', price: 150, owned: 0 },
    { name: 'GOOGL', price: 2800, owned: 0 },
    { name: 'AMZN', price: 3500, owned: 0 }
  ]);
  const [holdings, setHoldings] = useState([]);

  const updateStockPrice = () => {
   
    setStocks(prevStocks =>
      prevStocks.map(stock => ({
        ...stock,
        price: stock.price + (Math.random() * 10 - 5) 
      }))
    );
  };

  useEffect(() => {
    const interval = setInterval(updateStockPrice, 5000);
    return () => clearInterval(interval); 
  }); 

  return (
    <div className="main-stock-bg-container">
      <h1 className='real-time-stock-heading'>Real-Time Stock Market App</h1>
      <Trading stocks={stocks} holdings={holdings} setHoldings={setHoldings} />
      <Dashboard holdings={holdings} />
    </div>
  );
}

export default StockDetails;
