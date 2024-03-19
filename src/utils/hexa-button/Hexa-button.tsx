import React from 'react';
import './Hexa-button.css';

type HexButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  style?: { [key: string]: string };
};

export const HexaButton: React.FC<HexButtonProps> = ({
  children,
  className,
  onClick,
  style,
}) => {
  console.log(style);
  return (
    <button
      style={style}
      className={`hexagonal-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
