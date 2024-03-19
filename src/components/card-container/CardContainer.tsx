import { t_combo } from '../../types/combo';
import Card from '../card/Card';
import './CardContainer.css';

const combos: t_combo[] = [
  {
    comboDescription: 'Some description of the combo',
    comboName: 'Huge maharaja combo',
    numberOfRides: 6,
    price: 200,
    id: '1',
    otherItems: '2 beers also',
  },
  {
    comboDescription: 'Some description of the combo',
    comboName: 'King maharaja combo',
    numberOfRides: 61,
    price: 200000,
    id: '2',
    otherItems: '2 beers also',
  },
  {
    comboDescription: 'Some description of the combo',
    comboName: 'Huge2 maharaja combo',
    numberOfRides: 9,
    price: 700,
    id: '3',
    otherItems: '2 beers also',
  },
];

const CardContainer = () => {
  return (
    <div className="main-container-box">
      <div className="main-container-overlay"></div>
      <div className="main-container">
        <div className="card--container">
          <div className="container--details">
            <h1>Combos</h1>
            <p>Choose a combo to start racing</p>
          </div>
          <div className="container-cards">
            {combos.map((combo, i) => (
              <Card combo={combo} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
