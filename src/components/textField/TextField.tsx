/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { CssTextField } from '../../theme/Textfield';
import './styles.css';

type t_textField = {
  label: string;
  onClick: (e?: any) => void;
  onChange: (e?: any) => void;
  value: string;
  disabled?: boolean;
  size?: any;
  type?: any;
  placeHolder?: string;
  error?: boolean;
  helperText?: string;
  sx?: any; 
};

const TextField: React.FC<t_textField> = ({
  label,
  onChange,
  onClick,
  size,
  value,
  disabled,
  error,
  helperText,
  sx,
  placeHolder,
  type,
}) => {
  return (
    <CssTextField
      label={label}
      size={size || 'small'}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeHolder}
      error={error}
      helperText={helperText}
      value={value}
      type={type}
      disabled={disabled}
      sx={{ color: 'white', ...sx }}
    />
  );
};

export default TextField;
