import HeaderTabs from "../headerTabs/HeaderTabs";
import Navbar from "../navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Navbar />
      </div>
      <div>
        <HeaderTabs />
      </div>
    </div>
  );
};

export default Header;
