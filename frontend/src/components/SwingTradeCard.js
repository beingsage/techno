import React from "react";

const SwingTradeCard = ({ stock }) => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Karur_Vysya_Bank_Logo.jpg" 
          alt={`${stock.name} Logo`}
          style={styles.logo}
        />
        <div>
          <h2 style={styles.title}>{stock.name}</h2>
          <p style={styles.icon}>♡</p>
        </div>
      </div>
      <div style={styles.content}>
        <p><strong>Publish Price:</strong> {stock.publish_price}</p>
        <p><strong>CMP:</strong> {stock.cmp} ({stock.profit})</p>
        <p><strong>ReEntry:</strong> <span style={styles.greenText}>{stock.reentry}</span></p>
        <p><strong>Target:</strong> {stock.target}</p>
        <p><strong>Limit Price:</strong> {stock.limit_price}</p>
        <p><strong>SL:</strong> {stock.sl}</p>
        <p><strong>Risk:Reward:</strong> {stock.risk_reward}</p>
        <p><strong>PE:</strong> {stock.pe}</p>
        <p><strong>Risk Level:</strong> <span style={styles.riskLevel}>{stock.risk_level}</span></p>
        <p><strong>RSI:</strong> {stock.rsi}</p>
      </div>
      <div style={styles.footer}>
        <span>📊</span>
        <span>🔄</span>
        <span>🐦</span>
        <span style={styles.tradeType}>Swing Trade</span>
      </div>
    </div>
  );
};




const styles = {
  cardContainer: {
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "16px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px",
    backgroundColor: "#90CAF9",
    padding: "8px",
    borderRadius: "8px",
  },
  logo: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "8px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "0px",
  },
  icon: {
    fontSize: "24px",
    color: "#666",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4px",
    marginBottom: "16px",
  },
  greenText: {
    color: "green",
    fontWeight: "bold",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
  },
  tradeType: {
    color: "#1E88E5",
    fontWeight: "bold",
  },
};

export default SwingTradeCard;
