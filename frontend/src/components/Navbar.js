import React, { useState } from "react";
import styled from "styled-components";
import { FaHome, FaWhatsapp, FaGooglePlay } from "react-icons/fa";
import stockImage from "../assests/stock.png";

const Navbar = () => {
  const [showScanMenu, setShowScanMenu] = useState(false);
  const [showChartMenu, setShowChartMenu] = useState(false);
  const [showCalculatorMenu, setShowCalculatorMenu] = useState(false);

  return (
    <NavBar>
      <LogoContainer>
        <Logo src={stockImage} alt="TeckAnalytics Logo" />
        <Title>TeckAnalytics</Title>
      </LogoContainer>
      <Links>
        <Link href="/"><FaHome /> Home</Link>
        <Link href="/ai-signals">AI Signals</Link>
        
        <Dropdown 
          onMouseEnter={() => setShowScanMenu(true)}
          onMouseLeave={() => setShowScanMenu(false)}
        >
          <Link href="/scan" >Scan</Link>
          {showScanMenu && (
            <DropdownMenu>
              <DropdownItem href="/daily-scan">Daily Scan</DropdownItem>
              <DropdownItem href="/moving-avg">Moving Avg</DropdownItem>
            </DropdownMenu>
          )}
        </Dropdown>

        <Link href="/play">Play</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/stockforum">StockForum</Link>
        
        <Dropdown 
          onMouseEnter={() => setShowChartMenu(true)}
          onMouseLeave={() => setShowChartMenu(false)}
        >
          <Link href="/chart">Chart</Link>
          {showChartMenu && (
            <DropdownMenu>
              <DropdownItem href="/nifty-ratio">Nifty Ratio</DropdownItem>
              <DropdownItem href="/ind-stocks">Ind Stocks</DropdownItem>
              <DropdownItem href="/us-stocks">US Stocks</DropdownItem>
            </DropdownMenu>
          )}
        </Dropdown>

        <Link href="/analytics">Analytics</Link>

        <Dropdown 
          onMouseEnter={() => setShowCalculatorMenu(true)}
          onMouseLeave={() => setShowCalculatorMenu(false)}
        >
          <Link href="/calculator">Calculator</Link>
          {showCalculatorMenu && (
            <DropdownMenu>
              <DropdownItem href="/rent-or-buy">Rent or Buy</DropdownItem>
              <DropdownItem href="/loan-calc">Loan Calc</DropdownItem>
            </DropdownMenu>
          )}
        </Dropdown>
      </Links>

      <Actions>
        <LoginButton>Login</LoginButton>
        <TrialButton>Free Trial</TrialButton>
        <Icon href="https://play.google.com"><FaGooglePlay /></Icon>
        <Icon href="https://wa.me/your_number"><FaWhatsapp /></Icon>
      </Actions>
    </NavBar>
  );
};

export default Navbar;

// Styled-components for each style block

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: linear-gradient(to right, #1e3c72, #2a5298);
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Links = styled.div`
  display: flex;
  gap: 15px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0px 12px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #ffffff33;
  }
`;

const Dropdown = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 150px;
  margin-top: 10px;
  background-color: white;
  color: #2a5298;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5px 0;
  z-index: 1000;
`;

const DropdownItem = styled.a`
  color: #2a5298;
  padding: 8px 20px;
  text-decoration: none;
  display: block;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LoginButton = styled.button`
  background-color: #e0e0e0;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
`;

const TrialButton = styled.button`
  background-color: white;
  color: #2a5298;
  border: none;
  padding: 8px 12px;
  border-radius: 20px;
  cursor: pointer;
`;

const Icon = styled.a`
  color: white;
  font-size: 20px;
  margin-left: 10px;
`;
