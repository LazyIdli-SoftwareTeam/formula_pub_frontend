import GillyIcon from "../../assets/icons/Gilly-icon";
import TehoIcon from "../../assets/icons/Teho-icon";
import { HexaButton } from "../../utils/hexa-button/Hexa-button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <HexaButton
        className="retrieve-button"
        onClick={() => console.log("Button clicked")}
      >
        Retrieve
      </HexaButton>
      <GillyIcon />
      <TehoIcon />
    </div>
  );
};

export default Navbar;
