// import { useState } from "react";
import ArrowButton from "../../utils/arrow-button/Arrow-button";
import { HexaButton } from "../../utils/hexa-button/Hexa-button";
import "./HeaderTabs.css";

const HeaderTabs = () => {
  // const [activeTab, setActiveTab] = useState("buy" as string);
  return (
    <div className="headertab">
      <HexaButton
        className="buy-button"
        onClick={() => console.log("Button clicked")}
      >
        BUY
      </HexaButton>
      <ArrowButton
        className="arrow-button"
        onClick={() => console.log("Button clicked")}
      >
        RACE
      </ArrowButton>
      <ArrowButton
        className="arrow-button"
        onClick={() => console.log("Button clicked")}
      >
        WIN
      </ArrowButton>
    </div>
  );
};

export default HeaderTabs;
