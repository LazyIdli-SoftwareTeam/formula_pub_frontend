import { HexaButton } from "../../utils/hexa-button/Hexa-button";
import "./ApplyCoupons.css";

const ApplyCoupons = () => {
  return (
    <div className="coupons--container">
      <div className="coupons">
        <h1>Apply Coupons</h1>
        <div className="coupons--content">
          <input type="text" />
          <button className="apply--btn">Apply</button>
        </div>
        <p className="view-all-coupons">View All Coupons</p>
      </div>
      <div className="total--coupons"></div>
      <HexaButton
        onClick={() => console.log("Button clicked")}
        className="pay--btn"
      >
        Pay
      </HexaButton>
    </div>
  );
};

export default ApplyCoupons;
