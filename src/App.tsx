import Home from './views/Customer/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import VerifyHost from './views/Customer/VerifyHost';
import ViewBill from './views/Customer/ViewBill';
import Rides from './views/Customer/Rides';
import GenerateRacePass from './views/Customer/GenerateRacePass';
import Outlay from './Outlay';

function App() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const eventId = searchParams.get('eventId');
  // const branchId = searchParams.get('branchId');
  // console.log(eventId);
  // console.log(branchId);
  // if (!eventId || !branchId) {
  //   return (
  //     <div>
  //       <span style={{ color: 'white', fontSize: '30px' }}>
  //         Event id or branch id is required
  //       </span>
  //     </div>
  //   );
  // }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Outlay backBtn={false} children={<Home />} />}
          />
          <Route path="/payment" element={<Outlay children={<ViewBill />} />} />

          <Route path="/host" element={<Outlay children={<VerifyHost />} />} />
          <Route path="/rides" element={<Outlay children={<Rides />} />} />
          <Route
            path="/pass"
            element={<Outlay children={<GenerateRacePass />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
