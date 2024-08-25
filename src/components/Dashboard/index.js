import React from 'react';
import "./index.css"
const Dashboard = (props) => {
  const {holdings} = props
  return (
    <div className="dashboard">
      <h2 className='holdings-heading'>Your Holdings</h2>
      {holdings.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Quantity</th>
              <th>Current Price</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding, index) => (
              <tr key={index}>
                <td>{holding.name}</td>
                <td>{holding.owned}</td>
                <td>${holding.price.toFixed(2)}</td>
                <td>${(holding.owned * holding.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='no-holdings-heading'>No holdings yet. Start trading!</p>
      )}
    </div>
  );
}

export default Dashboard;
