import ApplyCoupons from '../../components/applyCoupons/ApplyCoupons';
import Bill from '../../components/bill/Bill';
import Button from '../../components/hexaButton/Button';
import TextField from '../../components/textField/TextField';
import { t_cart } from '../../types/cart';
import './styles/view-bill.css';
import { useNavigate } from 'react-router-dom';

const ViewBill = () => {
  const navigate = useNavigate(); 
  const cart: t_cart = {
    combos: [
      {
        combo: {
          comboDescription: 'some huge combo',
          comboName: 'Huge maharaja combo',
          numberOfRides: 2,
          price: 200,
        },
        iteration: 5,
      },
      {
        combo: {
          comboDescription: 'some huge combo',
          comboName: 'Huge maharaja combo',
          numberOfRides: 2,
          price: 200,
        },
        iteration: 4,
      },
    ],
  };

  return (
    <div className="customer-view-bill-container">
      <div className="customer-view-bill-top">
        <div className="customer-view-top-heading">
          <span>Payment</span>
        </div>
        <div className="customer-view-inputs">
          <TextField
            disabled
            value="Bhakti"
            onChange={() => {}}
            onClick={() => {}}
            size="small"
            label="Host's Name: "
          />
          <TextField
            disabled
            onChange={() => {}}
            onClick={() => {}}
            size="small"
            value="Bhakti"
            label="Host's Mobile Number: "
          />
        </div>
      </div>
      <div className="customer-view-bill-bottom">
        <ApplyCoupons />
        <Bill cart={cart} />
        <div className="--btm-btn">
          <Button
            content="Pay"
            sx={{ width: '85%', margin: 'auto' }}
            disabled={false}
            onClick={() => navigate('/rides')}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewBill;
