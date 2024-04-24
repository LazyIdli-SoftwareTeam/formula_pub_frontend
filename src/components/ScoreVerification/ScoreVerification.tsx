import { RxCross1 } from 'react-icons/rx';
import Button from '../hexaButton/Button';
import { FaInfoCircle } from 'react-icons/fa';
import './styles.css';
import React, { useEffect, useRef } from 'react';

const ScoreVerification: React.FC<{ closePopup: () => void }> = ({
  closePopup,
}) => {
  const globalRef = useRef<HTMLDivElement | null>(null); 
  useEffect(() => {
    if (!globalRef || !globalRef.current) return; 
    globalRef.current.style.height =  document.body.scrollHeight + 'px'
  }, [])
  return (
    <div ref={globalRef} className="score-verification-overlay">
      <div className="score-verification-container">
        <div className="score-verification-top-container">
          <span className="--cross --hidden">
            <RxCross1 />
          </span>
          <span className="--text">Verify Your Score</span>
          <span onClick={closePopup} className="--cross">
            <RxCross1 />
          </span>
        </div>
        <div className="score-verification-image"></div>
        <div className="score-verification-score-input">1 : 45 : 911</div>
        <div className="score-verification-submit-button">
          <Button content="Confirm" disabled={false} onClick={() => {}} />
        </div>
        <div className="score-verification-info">
          <FaInfoCircle style={{ color: '#F8990B', fontSize: '14px' }} />
          <span>Scores shall be auto-verified after XX minutes</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreVerification;
