import { useNavigate } from 'react-router-dom';
import banner_image from '../../assets/images/banner-image.png';
import CardContainer from '../../components/card-container/CardContainer';
import './styles/Home.css';
import Button from '../../components/hexaButton/Button';

export const BannerImage = () => {
  return (
    <div className="banner-image-container">
      <div
        style={{
          backgroundImage: `url(${banner_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
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
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <BannerImage />
      <CardContainer />
      <div className="home-container-bottom-btn">
        <Button
          content="Proceed (4)items"
          disabled={false}
          onClick={() => navigate('/host')}
        />
      </div>
    </div>
  );
};

export default Home;
