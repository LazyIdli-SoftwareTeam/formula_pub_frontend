import React from 'react';
import Header from './components/header/Header';

const Outlay: React.FC<{ children: JSX.Element; backBtn?: boolean }> = ({
  children,
  backBtn = true,
}) => {
  const GetHeader = () => {
    if (backBtn) {
      return <Header backBtnHandler={() => window.history.back()} />;
    } else {
      return <Header />;
    }
  };
  return (
    <div className="global-outlay-container">
      <div className="global-top-nav-bar">
        <GetHeader />
      </div>
      <div className="global-bottom-content">{children}</div>
    </div>
  );
};

export default Outlay;
