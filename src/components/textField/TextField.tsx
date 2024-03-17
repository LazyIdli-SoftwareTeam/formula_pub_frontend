/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { CssTextField } from '../../theme/Textfield';

type t_textField = {
  label: string;
  onClick: (e?: any) => void;
  onChange: (e?: any) => void;
  value: string;
  disabled?: boolean;
  size?: any;
};

const TextField: React.FC<t_textField> = ({
  label,
  onChange,
  onClick,
  size,
  value,
  disabled,
}) => {
  return (
    <CssTextField
      label={label}
      size={size || 'small'}
      onChange={onChange}
      onClick={onClick}
      value={value}
      disabled={disabled}
      sx={{ backgroundColor: '#2F2F2F', color: 'white' }}
    />
  );
};

export default TextField;
