import Button from '../hexaButton/Button';
import './styles.css';
import { CssTextField } from '../../theme/Textfield';

const HostInfo = () => {
  return (
    <div className='host-info-container'>
      <div className='host-info-container-inputs'>
        <CssTextField
          label='Enter Host’s Name : '
          size='small'
          sx={{ backgroundColor: '#2F2F2F', color: 'white' }}
        />
        <CssTextField
          label='Enter Host’s Mobile Number : '
          color='secondary'
          sx={{ backgroundColor: '#2F2F2F' }}
          size='small'
        />
      </div>
      <div className='host-info-container-bottom'>
        <Button content='Confirm' disabled={true} onClick={() => {}} />
      </div>
    </div>
  );
};

export default HostInfo;
