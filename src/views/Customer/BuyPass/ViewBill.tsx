import { useDispatch, useSelector } from 'react-redux';
import Bill from '../../../components/bill/Bill';
import Button from '../../../components/hexaButton/Button';
import TextField from '../../../components/textField/TextField';
import { t_order } from '../../../types/order';
import './styles/view-bill.css';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../store';
import { getQueryParams } from '../../../api/query';
import { createOrder } from '../../../api/order';
import { AxiosResponse } from 'axios';
import { PAGE_STATE } from './Home';
import { useState } from 'react'
import { FullScreenLoader } from '../../../components/loader/CustomLoader';
import { setUsers } from '../../../state/order';

const ViewBill = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const order: t_order = useSelector((state: RootState) => state.order);
  const { branchId, eventId } = getQueryParams(() => {});
  const [pageState, setPageState] = useState(PAGE_STATE.UNKNOWN);
  const createOrderAfterPay = () => {
    const onAcceptCreateOrder = (response: AxiosResponse) => {
      if (response.status === 202) {
        setPageState(PAGE_STATE.ACCEPTED);
        localStorage.setItem('order_id', response.data.data.order._id); 
        localStorage.setItem('order', response.data.data.order);
        dispatch(setUsers(response.data.data.players))
        navigate(`/rides?branchId=${branchId}&eventId=${eventId}`);
      } else {
        setPageState(PAGE_STATE.REJECTED);
        alert('Error occurred while creating your order. Try again later');
      }
    };
    const onRejectCreateOrder = () => {
      setPageState(PAGE_STATE.REJECTED);
      alert('Error occurred while creating your order. Try again later');
    };
    const combos = order.cart.combos.map((c) => {
      return { iterations: c.iteration, comboId: c.combo._id };
    });

    createOrder(onAcceptCreateOrder, onRejectCreateOrder, {
      combos: combos,
      hostId: order.host._id,
      couponAppliedId: order.couponApplied ? order.couponApplied._id : '',
    });
  };
  if (pageState === PAGE_STATE.LOADING) return <FullScreenLoader />
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
        {/* <ApplyCoupons /> */}
        <Bill order={order} />
        <div className="--btm-btn">
          <Button
            content="Pay"
            sx={{ width: '85%', margin: 'auto' }}
            disabled={false}
            onClick={createOrderAfterPay}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewBill;
