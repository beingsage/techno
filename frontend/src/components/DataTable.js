// src/components/DataTable.js
import React from 'react';

function DataTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Stock</th>
          <th>Price</th>
          <th>Buy/Sell</th>
          <th>Target</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Example Stock 1</td>
          <td>$150</td>
          <td>Buy</td>
          <td>$180</td>
        </tr>
      
      </tbody>
    </table>
  );
}

export default DataTable;
