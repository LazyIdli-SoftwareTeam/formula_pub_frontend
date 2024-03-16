import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      border: 'none !important',
    },
  },
});
