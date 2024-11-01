import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <span>©2017-24 Teckanalytics. All rights reserved</span>
      <div style={styles.links}>
        <a href="https://www.teckanalytics.com/terms.php" style={styles.link}>
          Terms and Conditions
        </a>
        <a href="#" style={styles.link}>
          Disclaimer
        </a>
        <a href="#" style={styles.link}>
          FAQs
        </a>
        <a href="#" style={styles.link}>
          Email
        </a>
        <a href="#" style={styles.link2}>
          Delete Account
        </a>
      </div>
      
    </footer>
  );
};

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#0d1753",
    color: "white",
    fontSize: "14px",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  Link2:{
    color: "red",
    textDecoration: "none",
    ':hover': {
      color: "red",
    },
    ':visited': {
      color: "red",
    },
    
  }
};

export default Footer;
