import React from "react";
import "./Hexa-button.css";

type HexButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
};

export const HexaButton = ({
  children,
  className,
  onClick,
}: HexButtonProps) => {
  return (
    <button className={`hexagonal-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
