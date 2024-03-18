import "./Header.css";
import { useState } from "react";
import ArrowButton from "../../utils/arrow-button/Arrow-button";
import { HexaButton } from "../../utils/hexa-button/Hexa-button";
import GillyIcon from "../../assets/icons/Gilly-icon";
import TehoIcon from "../../assets/icons/Teho-icon";

const Navbar = () => {
  return (
    <div className="navbar">
      <HexaButton
        className="retrieve-button"
        onClick={() => console.log("Button clicked")}
      >
        Retrieve
      </HexaButton>
      <GillyIcon />
      <TehoIcon />
    </div>
  );
};

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("buy" as string);
  return (
    <div className="headertab">
      <HexaButton
        className={
          activeTab === "buy" ? "active-button buy-button" : "buy-button"
        }
        onClick={() => setActiveTab("buy")}
      >
        BUY
      </HexaButton>
      <ArrowButton
        className={
          activeTab === "race" ? "active-button arrow-button" : "arrow-button"
        }
        onClick={() => setActiveTab("race")}
      >
        RACE
      </ArrowButton>
      <ArrowButton
        className={
          activeTab === "win" ? "active-button arrow-button" : "arrow-button"
        }
        onClick={() => setActiveTab("win")}
      >
        WIN
      </ArrowButton>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div>
        <Navbar />
      </div>
      <div>
        <HeaderTabs />
      </div>
    </div>
  );
};

export default Header;
