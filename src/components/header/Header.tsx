import './Header.css';
import React, { useState } from 'react';
import ArrowButton from '../../utils/arrow-button/Arrow-button';
import { HexaButton } from '../../utils/hexa-button/Hexa-button';
import GillyIcon from '../../assets/icons/Gilly-icon';
import TehoIcon from '../../assets/icons/Teho-icon';
import { IoChevronBackSharp } from "react-icons/io5";

const Navbar: React.FC<{ backBtnHandler?: () => void }> = ({
  backBtnHandler,
}) => {
  const BackBtn = () => {
    return (
      <div onClick={backBtnHandler} className="global-navbar-back-btn">
        <IoChevronBackSharp />
      </div>
    );
  };

  return (
    <div className="navbar">
      {backBtnHandler ? (
        <BackBtn />
      ) : (
        <HexaButton
          className="retrieve-button"
          onClick={() => console.log('Button clicked')}
        >
          Retrieve
        </HexaButton>
      )}
      <GillyIcon />
      <TehoIcon />
    </div>
  );
};

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('buy' as string);
  return (
    <div className="headertab">
      <HexaButton
        className={
          activeTab === 'buy' ? 'active-button buy-button' : 'buy-button'
        }
        onClick={() => setActiveTab('buy')}
      >
        BUY
      </HexaButton>
      <ArrowButton
        className={
          activeTab === 'race' ? 'active-button arrow-button' : 'arrow-button'
        }
        onClick={() => setActiveTab('race')}
      >
        RACE
      </ArrowButton>
      <ArrowButton
        className={
          activeTab === 'win' ? 'active-button arrow-button' : 'arrow-button'
        }
        onClick={() => setActiveTab('win')}
      >
        WIN
      </ArrowButton>
    </div>
  );
};

const Header: React.FC<{ backBtnHandler?: () => void }> = ({
  backBtnHandler,
}) => {
  return (
    <div className="header">
      <div>
        <Navbar backBtnHandler={backBtnHandler} />
      </div>
      <div>
        <HeaderTabs />
      </div>
    </div>
  );
};

export default Header;
