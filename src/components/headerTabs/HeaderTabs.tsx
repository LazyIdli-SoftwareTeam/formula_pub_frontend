import { useState } from 'react';
import ArrowButton from '../../utils/arrow-button/Arrow-button';
import { HexaButton } from '../../utils/hexa-button/Hexa-button';
import './HeaderTabs.css';

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

export default HeaderTabs;
