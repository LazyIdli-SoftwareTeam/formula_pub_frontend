import React, { useEffect, useRef } from 'react';
import './styles.css';

type t_hexButton = {
  content: string;
  onClick: () => void;
  sx?: { [key: string]: string };
  bgColor?: string;
  disabled: boolean;
};

const Button: React.FC<t_hexButton> = ({
  content,
  onClick,
  bgColor,
  sx,
  disabled,
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (divRef.current) {
      const height = divRef.current.clientHeight;
      const oneSide = Math.round(height / 2);
      divRef.current.style.setProperty('--oneSide', oneSide + 'px');
      // divRef.current.style.width = (divRef.current.clientWidth - 20) + 'px';
      if (disabled) {
        divRef.current.style.setProperty('--color',  '#c1c1c1');
        divRef.current.style.setProperty('--border-color', '#c1c1c1');
      } else {
        divRef.current.style.setProperty('--color', bgColor || '#f8990b');
        divRef.current.style.setProperty('--border-color', bgColor || '#ffd25e');

      }
    }
  }, [disabled]);

  return (
    <div
      ref={divRef}
      onClick={onClick}
      style={bgColor ? { backgroundColor: bgColor, ...sx } : sx}
      className={`hex-button global-hex-button-container ${
        disabled ? 'global-hex-btn-disabled' : ''
      }`}
    >
      <div className="--tria"></div>
      {content}
      <div className="--triaafter"></div>
    </div>
  );
};

export default Button;
