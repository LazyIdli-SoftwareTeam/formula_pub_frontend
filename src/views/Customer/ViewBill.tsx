import TextField from '../../components/textField/TextField';
import './styles/view-bill.css';

const ViewBill = () => {
  return (
    <div className='customer-view-bill-container'>
      <div className='customer-view-bill-top'>
        <div className='customer-view-top-heading'>
          <span>Payment</span>
        </div>
        <div className='customer-view-inputs'>
          <TextField
            disabled
            value='Bhakti'
            onChange={() => {}} 
            onClick={() => {}}
            size='small'
            label="Host's Name: "
          />
          <TextField
            disabled
            onChange={() => {}} 
            onClick={() => {}}
            size='small'
            value='Bhakti'
            label="Host's Mobile Number: "
          />
        </div>
      </div>
    </div>
  );
};

export default ViewBill;
