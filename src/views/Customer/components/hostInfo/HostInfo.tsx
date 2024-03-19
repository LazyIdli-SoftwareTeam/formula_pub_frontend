import Button from '../../../../components/hexaButton/Button';
import './styles.css';
import TextField from '../../../../components/textField/TextField';

const HostInfo = () => {
  return (
    <div className='host-info-container'>
      <div className='host-info-container-top-heading'>
        <span>Verify Host</span>
      </div>
      <div className='host-info-container-inputs'>
        <TextField
          label='Enter Host’s Name  '
          size='small'
          onChange={() => {}}
          onClick={() => {}}
          value=''
        />
        <TextField
          label='Enter Host’s Mobile Number  '
          size='small'
          onChange={() => {}}
          onClick={() => {}}
          value=''
        />
      </div>
      <div className='host-info-tos-container'>
        <input type='checkbox' />
        <span className='--tos'>
          I accept whatever happens during the game im totally responsible for
          the causes. lorem ipsum
        </span>
      </div>
      <div className='host-info-container-bottom'>
        <Button content='Confirm' disabled={true} onClick={() => {}} />
      </div>
    </div>
  );
};

export default HostInfo;
