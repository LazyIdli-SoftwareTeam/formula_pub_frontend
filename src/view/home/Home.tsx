import Header from "../../components/header/Header";
import banner_image from "../../assets/images/banner-image.png";
import CardContainer from "../../components/card-container/CardContainer";
import "./Home.css";

export const BannerImage = () => {
  return (
    <div className="banner-image-container">
      <div
        style={{
          backgroundImage: `url(${banner_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="banner-image"
      >
        <div className="banner-content">
          <h1>DJ Haathi's Exclusive Party</h1>
          <p>20/02/2024</p>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <BannerImage />
      <CardContainer />
    </div>
  );
};

export default Home;
