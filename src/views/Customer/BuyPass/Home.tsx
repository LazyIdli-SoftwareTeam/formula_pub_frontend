/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import banner_image from '../../../assets/images/banner-image.png';
import CardContainer from '../../../components/card-container/CardContainer';
import './styles/Home.css';
import Button from '../../../components/hexaButton/Button';
import { useEffect, useState } from 'react';
import { t_order } from '../../../types/order';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { getCombos } from '../../../api/combos';
import { AxiosResponse } from 'axios';
import { FullScreenLoader } from '../../../components/loader/CustomLoader';
import { getQueryParams } from '../../../api/query';
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

export const AlreadyBooked = () => {
  const navigate = useNavigate();
  return (
    <div className="customer-already-booked-container">
      <div className="--btn">
        <Button
          content="Already booked?"
          disabled={false}
          onClick={() => navigate('/retrieve')}
          bgColor="#1CB1D9"
        />
      </div>
    </div>
  );
};

export enum PAGE_STATE {
  LOADING,
  ACCEPTED,
  REJECTED,
  UNKNOWN,
}

const Home = () => {
  const order: t_order = useSelector((state: RootState) => state.order);
  const navigate = useNavigate();
  const [pageState, setPageState] = useState(PAGE_STATE.UNKNOWN);
  const [combos, setCombos] = useState([]);
  const { branchId, eventId } = getQueryParams(() => {});
  useEffect(() => {
    console.log(combos);
  }, [combos]);
  useEffect(() => {
    const getCombosAccepted = (response: AxiosResponse) => {
      console.log(response);
      if (response.status === 202) {
        setPageState(PAGE_STATE.ACCEPTED);
        setCombos(response.data.data);
      } else {
        setPageState(PAGE_STATE.REJECTED);
      }
    };
    const getCombosRejected = (error: any) => {
      console.log(error);
      setPageState(PAGE_STATE.REJECTED);
    };
    setPageState(PAGE_STATE.LOADING);
    getCombos(getCombosAccepted, getCombosRejected);
  }, []);

  const buttonVisible = () => {
    let total = 0;
    for (const el of order.cart.combos) {
      total += el.iteration;
    }
    return total;
  };
  if (pageState === PAGE_STATE.LOADING) return <FullScreenLoader />;
  if (pageState === PAGE_STATE.REJECTED)
    return <span>Error occurred try again later</span>;
  return (
    <div className="home-container">
      <BannerImage />
      <CardContainer combos={combos} />
      {buttonVisible() != 0 ? (
        <div className="home-container-bottom-btn">
          <div style={{ width: '80%'}}>
          <Button
            content={`Proceed (${buttonVisible()} Items)`}
            disabled={false}
            onClick={() =>
              navigate(`/host?branchId=${branchId}&eventId=${eventId}`)
            }
          />
          </div>
        </div>
      ) : null}
      {/* <AlreadyBooked /> */}
    </div>
  );
};

export default Home;
