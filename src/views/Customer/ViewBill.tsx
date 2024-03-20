import { useSelector } from 'react-redux';
import ApplyCoupons from '../../components/applyCoupons/ApplyCoupons';
import Bill from '../../components/bill/Bill';
import Button from '../../components/hexaButton/Button';
import TextField from '../../components/textField/TextField';
import { t_order } from '../../types/order';
import './styles/view-bill.css';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';

const ViewBill = () => {
  const navigate = useNavigate(); 
  const order: t_order = useSelector((state: RootState) => state.order);

  return (
    <div className="customer-view-bill-container">
      <div className="customer-view-bill-top">
        <div className="customer-view-top-heading">
          <span>Payment</span>
        </div>
        <div className="customer-view-inputs">
          <TextField
            disabled
            value={order.host.name}
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
            value={order.host.phoneNumber}
            label="Host's Mobile Number: "
          />
        </div>
      </div>
      <div className="customer-view-bill-bottom">
        <ApplyCoupons />
        <Bill order={order} />
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
