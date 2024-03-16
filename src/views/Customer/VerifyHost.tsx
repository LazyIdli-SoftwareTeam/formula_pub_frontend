import Cart from '../../components/cart/Cart';
import HostInfo from '../../components/hostInfo/HostInfo';
import './styles/verify-host.css'

const VerifyHost = () => {
  return (
    <div className='customer-verify-host-container'>
      <Cart />
      <HostInfo />
    </div>
  );
};
export default VerifyHost;
