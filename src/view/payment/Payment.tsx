import ApplyCoupons from "../../components/applyCoupons/ApplyCoupons";
import Header from "../../components/header/Header";
import PaymentForm from "../../components/paymentFom/PaymentForm";
import "./Payment.css";

const Payment = () => {
  return (
    <div>
      <Header />
      <PaymentForm />
      <ApplyCoupons />
    </div>
  );
};

export default Payment;
