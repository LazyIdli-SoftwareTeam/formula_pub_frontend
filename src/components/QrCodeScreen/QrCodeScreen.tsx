import QrImage from "../../assets/images/QRCode.png";
import "./styles.css";
const QrCodeScreen = () => {
  return (
    <div className="qr-code-screen-container">
      <div className="--qr">
        <img src={QrImage} />
      </div>
      <div className="--text">BE THE FASTEST RACER AND WIN A PRIZE</div>
    </div>
  );
};

export default QrCodeScreen;
