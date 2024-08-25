import React, { useState } from 'react';
import { PiArrowCircleDownRight } from "react-icons/pi";
import { PiArrowCircleUpRight } from "react-icons/pi";
import "./index.css"
const Trading = (props) => {
  const {stocks, holdings, setHoldings} = props
  const [selectedStock, setSelectedStock] = useState(stocks[0].name);
  const [quantity, setQuantity] = useState(1);

  const handleBuy = () => {
    const stock = stocks.find(s => s.name === selectedStock);
   

    const existingHolding = holdings.find(h => h.name === stock.name);
 
    if (existingHolding) {
    
      setHoldings(
        holdings.map(h =>
          h.name === stock.name ? { ...h, owned: h.owned + quantity } : h
        )
      );
    } else {
     
      setHoldings([...holdings, { name: stock.name, owned: quantity, price: stock.price }]);
    }
  };

  const handleSell = () => {
    const holding = holdings.find(h => h.name === selectedStock);
    console.log(holding)
    if (holding && holding.owned >= quantity) {
      setHoldings(
        holdings.map(h =>
          h.name === holding.name ? { ...h, owned: h.owned - quantity } : h
        )
      );
    }
  };

  return (
    <div className="trading">
      <h2 className='trade-heading'>Trade Stocks</h2>
      <div className='label-container'>
      <label className='label'>Choose a stock :</label>
      <select className='select' value={selectedStock} onChange={(e) => setSelectedStock(e.target.value)}>
        {stocks.map(stock => (
          <option key={stock.name} value={stock.name}>
            {stock.name} - ${stock.price.toFixed(2)}
          </option>
        ))}
      </select>
      </div>

       <div className='label-container'>
       <label className='label'>Quantity :</label>
       <br/>
      <input
        className='input'
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
       </div>
      <div className='buttons-container'>
      <button type='button' className='button sell' onClick={handleSell}> <PiArrowCircleDownRight className='arrow' /> Sell</button>
      <button type = "button" className='button buy' onClick={handleBuy}> <PiArrowCircleUpRight className='arrow' /> Buy</button>
      </div>
    </div>
  );
}

export default Trading;
