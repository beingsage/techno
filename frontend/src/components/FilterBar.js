import React from 'react';
import { FaHeart, FaFilter, FaTimes } from 'react-icons/fa';

const FilterBar = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', padding: '10px', alignItems: 'center', justifyItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#f0f0f0'}}>
      <select style={{ width: '200px', height: '30px', borderRadius: '5px'}}>
        <option>Signals</option>
        <option>Swing Buy</option>
        <option>Breakout Buy</option>
        <option>LongTerm Buy</option>
        <option>Short</option>
      </select>
      <select style={{ width: '200px', height: '30px', borderRadius: '5px'}}>
        <option>By Market Cap</option>
        <option>Nifty 50</option>
        <option>Mid cap</option>
        <option>Small cap</option> 
      </select>
      <select style={{ width: '200px', height: '30px', borderRadius: '5px'}}>
        <option>By Index</option>
        <option>Realty</option>
        <option>Bank</option>
       <option>PSU Bank</option>
       <option>Private Bank</option>
       <option>Pharma</option>
       <option>Metal</option>
       <option>Media</option>
       <option>IT</option>
       <option>FMCG</option>
       <option>Finance</option>
       <option>Auto</option>
      </select>
      <select style={{ width: '200px', height: '30px', borderRadius: '5px'}}>
        <option>Filter By</option>
        <option>Low Risk</option>
        <option>Moderate Risk</option>
        <option>High Risk</option>
        <option>Target Hit</option>
        <option>Stoploss Hit</option>
      </select>
      <select style={{ width: '125px', height: '30px', borderRadius: '5px'}}>
        <option>Sort By</option>
        <option>Change % High to Low</option>
        <option>Change % Low to High</option>
        <option>Profit High to low</option>
        <option>Profit Low to High</option>
        <option>Date Desc</option>
        <option>Data Asc</option>
      </select>
      <select style={{ width: '125px', height: '30px', borderRadius: '5px'}}>
        <option>By Tech</option>
        <option>PE less then 10</option>
        <option>PE less then 20</option>
        <option>PE more then 50</option>
        <option>Price more then EMA50</option>
        <option>Price less then EMA50</option>
        <option>Price more then EMA200 </option>

      </select>
      <div style={{ display: 'flex', gap: '10px', padding: '10px', alignItems: 'center', justifyItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#f0f0f0'}}>
        <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
        <FaHeart style={{ color: 'red' }} />
      </button>
      <button style={{ backgroundColor: '#1E90FF', border: 'none', cursor: 'pointer' }}>
        <FaFilter style={{ color: 'white' }} />
      </button>
      <button style={{ backgroundColor: '#FF6347', border: 'none', cursor: 'pointer' }}>
        <FaTimes style={{ color: 'white' }} />
      </button>
      </div>

      
    </div>
  );
};

export default FilterBar;
