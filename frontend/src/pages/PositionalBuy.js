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
import React from 'react';
import Navbar from '../components/Navbar.js';
import FilterBar from '../components/FilterBar.js';
import SwingTradeCard from '../components/SwingTradeCard.js';
import Footer from '../components/Footer.js';

// Sample data for the stocks
const stocks = [
    {
        name: "Stock 1",
        publish_price: 1978.15,
        cmp: 1982.55,
        profit: "+0.22%",
        reentry: "Yes",
        limit_price: 1969.66,
        target: 2074,
        sl: 1928.4,
        risk_reward: 0.40,
        risk_level: "Low",
        pe: 30.33,
        rsi: 67
    },
    {
        name: "Stock 2",
        publish_price: 911.20,
        cmp: 930.00,
        profit: "+2.06%",
        reentry: "Yes",
        limit_price: 918.77,
        target: 1048,
        sl: 891.0,
        risk_reward: 0.22,
        risk_level: "Low",
        pe: 18.96,
        rsi: 64.03
    },
];

const Stocks = () => {
    return (
        <div>
            <Navbar />
            <FilterBar />
            <div style={styles.cardsContainer}>
                {stocks.map((stock, index) => (
                    <SwingTradeCard key={index} stock={stock} />
                ))}
            </div>
            <Footer />
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
