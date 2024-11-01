// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from '../components/Navbar.js';
// import FilterBar from '../components/FilterBar.js';
// import SwingTradeCard from '../components/SwingTradeCard.js';
// import Footer from '../components/Footer.js';
// const Stocks = () => {
//     const [stocks, setStocks] = useState([]);

//     useEffect(() => {
//         const fetchStocks = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/stocks');
//                 setStocks(response.data);
//             } catch (error) {
//                 console.error('Error fetching stocks:', error);
//             }
//         };

//         fetchStocks();
//     }, []);

//     return (
//         <div>
//             <Navbar/>
//             <FilterBar/>
//             <SwingTradeCard/>
//             <Footer/>
//         </div> );};

// export default Stocks;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar.js';
import FilterBar from '../components/FilterBar.js';
import SwingTradeCard from '../components/SwingTradeCard.js';
import Footer from '../components/Footer.js'

const Stocks = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/stocks');
                setStocks(response.data);
            } catch (error) {
                console.error('Error fetching stocks:', error);
            }
        };

        fetchStocks();
    }, []);

    return (
        <div>
            <Navbar/>
            <FilterBar/>
            <div style={styles.cardsContainer}>
                {stocks.map((stock, index) => (
                    <SwingTradeCard key={index} stock={stock} />
                ))}
            </div>
            <Footer/>
        </div>
    );
};

const styles = {
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  },
};

export default Stocks;
