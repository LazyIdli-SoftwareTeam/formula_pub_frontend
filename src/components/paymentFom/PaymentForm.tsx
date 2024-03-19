import "./PaymentForm.css";

const PaymentForm = () => {
  return (
    <div className="payment--container">
      <form className="payment">
        <h1>Payment</h1>
        <div className="name--input">
          <label
            style={{
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "15px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
            htmlFor=""
          >
            Host's Name
          </label>
          <input type="text" />
        </div>
        <div className="mobile--input">
          <label
            style={{
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "15px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
            htmlFor=""
          >
            Host's Mobile Number
          </label>
          <input type="number" />
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
