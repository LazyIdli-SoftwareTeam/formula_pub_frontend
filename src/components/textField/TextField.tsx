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
  error?: boolean;
  helperText?: string;
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
  type,
}) => {
  return (
    <CssTextField
      label={label}
      size={size || 'small'}
      onChange={onChange}
      onClick={onClick}
      error={error}
      helperText={helperText}
      value={value}
      type={type}
      disabled={disabled}
      sx={{ color: 'white' }}
    />
  );
};

export default TextField;
