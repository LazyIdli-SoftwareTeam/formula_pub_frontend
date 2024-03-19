import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  input: {
    color: '#f4f4f4',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      border: '1px solid #2f2f2f !important',
      fontSize: '10px'
    },
  },
});
