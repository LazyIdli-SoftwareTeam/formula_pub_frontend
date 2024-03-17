import { CssTextField } from '../../theme/Textfield';
import './styles/view-bill.css';

const ViewBill = () => {
  return (
    <div className='customer-view-bill-container'>
      <div className='customer-view-bill-top'>
        <div className='customer-view-top-heading'>
          <span>Payment</span>
        </div>
        <div className='customer-view-inputs'>
          <CssTextField
            disabled
            value='Bhakti'
            size='small'
            label="Host's Name: "
            sx={{ backgroundColor: '#2F2F2F', color: 'white' }}
          />
          <CssTextField
            disabled
            size='small'
            value='Bhakti'
            sx={{ backgroundColor: '#2F2F2F', color: 'white' }}
            label="Host's Mobile Number: "
          />
        </div>
      </div>
    </div>
  );
};

export default ViewBill;
