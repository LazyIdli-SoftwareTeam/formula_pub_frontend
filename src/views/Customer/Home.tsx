import { useNavigate } from 'react-router-dom';
import banner_image from '../../assets/images/banner-image.png';
import CardContainer from '../../components/card-container/CardContainer';
import './styles/Home.css';
import Button from '../../components/hexaButton/Button';
import { useEffect } from 'react';
import { t_order } from '../../types/order';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
// import { AxiosResponse } from 'axios';
// import { getCombos } from '../../api/combos';

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
  const order: t_order = useSelector((state: RootState) => state.order);
  const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
  // const eventId = searchParams.get('eventId');
  // const branchId = searchParams.get('branchId')
  useEffect(() => {
    // const getCombosAccepted = (response: AxiosResponse) => {};
    // const getCombosRejected = (error: any) => {};
    // getCombos(getCombosAccepted, getCombosRejected, {
    //   branchId: branchId!,
    //   eventId: eventId!
    // });
  }, []);

  const buttonVisible = () => {
    let total = 0;
    for (const el of order.cart.combos) {
      total += el.iteration;
    }
    return total;
  };
  return (
    <div className="home-container">
      <BannerImage />
      <CardContainer />
      <div className="home-container-bottom-btn">
        {buttonVisible() != 0 ? (
          <Button
            content={`Proceed (${buttonVisible()} Items)`}
            disabled={false}
            onClick={() => navigate('/host')}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
