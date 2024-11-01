const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

// Route to get stocks
app.get('/api/stocks', (req, res) => {
    res.json(stocks);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});